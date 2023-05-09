# catalog

### Available Operations

* [batchDeleteCatalogObjects](#batchdeletecatalogobjects) - BatchDeleteCatalogObjects
* [batchRetrieveCatalogObjects](#batchretrievecatalogobjects) - BatchRetrieveCatalogObjects
* [batchUpsertCatalogObjects](#batchupsertcatalogobjects) - BatchUpsertCatalogObjects
* [catalogInfo](#cataloginfo) - CatalogInfo
* [deleteCatalogObject](#deletecatalogobject) - DeleteCatalogObject
* [listCatalog](#listcatalog) - ListCatalog
* [retrieveCatalogObject](#retrievecatalogobject) - RetrieveCatalogObject
* [searchCatalogItems](#searchcatalogitems) - SearchCatalogItems
* [searchCatalogObjects](#searchcatalogobjects) - SearchCatalogObjects
* [updateItemModifierLists](#updateitemmodifierlists) - UpdateItemModifierLists
* [updateItemTaxes](#updateitemtaxes) - UpdateItemTaxes
* [upsertCatalogObject](#upsertcatalogobject) - UpsertCatalogObject

## batchDeleteCatalogObjects

Deletes a set of [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)s based on the
provided list of target IDs and returns a set of successfully deleted IDs in
the response. Deletion is a cascading event such that all children of the
targeted object are also deleted. For example, deleting a CatalogItem will
also delete all of its [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation)
children.

`BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted
IDs can be deleted. The response will only include IDs that were
actually deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteCatalogObjectsResponse;
import org.openapis.openapi.models.operations.BatchDeleteCatalogObjectsSecurity;
import org.openapis.openapi.models.shared.BatchDeleteCatalogObjectsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchDeleteCatalogObjectsRequest req = new BatchDeleteCatalogObjectsRequest() {{
                objectIds = new String[]{{
                    add("magni"),
                    add("sunt"),
                    add("quo"),
                }};
            }};            

            BatchDeleteCatalogObjectsResponse res = sdk.catalog.batchDeleteCatalogObjects(req, new BatchDeleteCatalogObjectsSecurity("illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchDeleteCatalogObjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchRetrieveCatalogObjects

Returns a set of objects based on the provided ID.
Each [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) returned in the set includes all of its
child information including: all of its
[CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation) objects, references to
its [CatalogModifierList](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifierList) objects, and the ids of
any [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects that apply to it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchRetrieveCatalogObjectsResponse;
import org.openapis.openapi.models.operations.BatchRetrieveCatalogObjectsSecurity;
import org.openapis.openapi.models.shared.BatchRetrieveCatalogObjectsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchRetrieveCatalogObjectsRequest req = new BatchRetrieveCatalogObjectsRequest(                new String[]{{
                                add("maxime"),
                                add("ea"),
                                add("excepturi"),
                                add("odit"),
                            }}) {{
                catalogVersion = 407183L;
                includeRelatedObjects = false;
            }};            

            BatchRetrieveCatalogObjectsResponse res = sdk.catalog.batchRetrieveCatalogObjects(req, new BatchRetrieveCatalogObjectsSecurity("accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchRetrieveCatalogObjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchUpsertCatalogObjects

Creates or updates up to 10,000 target objects based on the provided
list of objects. The target objects are grouped into batches and each batch is
inserted/updated in an all-or-nothing manner. If an object within a batch is
malformed in some way, or violates a database constraint, the entire batch
containing that item will be disregarded. However, other batches in the same
request may still succeed. Each batch may contain up to 1,000 objects, and
batches will be processed in order as long as the total object count for the
request (items, variations, modifier lists, discounts, and taxes) is no more
than 10,000.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchUpsertCatalogObjectsResponse;
import org.openapis.openapi.models.operations.BatchUpsertCatalogObjectsSecurity;
import org.openapis.openapi.models.shared.BatchUpsertCatalogObjectsRequest;
import org.openapis.openapi.models.shared.CatalogCategory;
import org.openapis.openapi.models.shared.CatalogCustomAttributeDefinition;
import org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionNumberConfig;
import org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionSelectionConfig;
import org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection;
import org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionStringConfig;
import org.openapis.openapi.models.shared.CatalogCustomAttributeValue;
import org.openapis.openapi.models.shared.CatalogDiscount;
import org.openapis.openapi.models.shared.CatalogImage;
import org.openapis.openapi.models.shared.CatalogItem;
import org.openapis.openapi.models.shared.CatalogItemModifierListInfo;
import org.openapis.openapi.models.shared.CatalogItemOption;
import org.openapis.openapi.models.shared.CatalogItemOptionForItem;
import org.openapis.openapi.models.shared.CatalogItemOptionValue;
import org.openapis.openapi.models.shared.CatalogItemOptionValueForItemVariation;
import org.openapis.openapi.models.shared.CatalogItemVariation;
import org.openapis.openapi.models.shared.CatalogMeasurementUnit;
import org.openapis.openapi.models.shared.CatalogModifier;
import org.openapis.openapi.models.shared.CatalogModifierList;
import org.openapis.openapi.models.shared.CatalogModifierOverride;
import org.openapis.openapi.models.shared.CatalogObject;
import org.openapis.openapi.models.shared.CatalogObjectBatch;
import org.openapis.openapi.models.shared.CatalogPricingRule;
import org.openapis.openapi.models.shared.CatalogProductSet;
import org.openapis.openapi.models.shared.CatalogQuickAmount;
import org.openapis.openapi.models.shared.CatalogQuickAmountsSettings;
import org.openapis.openapi.models.shared.CatalogStockConversion;
import org.openapis.openapi.models.shared.CatalogSubscriptionPlan;
import org.openapis.openapi.models.shared.CatalogTax;
import org.openapis.openapi.models.shared.CatalogTimePeriod;
import org.openapis.openapi.models.shared.CatalogV1Id;
import org.openapis.openapi.models.shared.ItemVariationLocationOverrides;
import org.openapis.openapi.models.shared.MeasurementUnit;
import org.openapis.openapi.models.shared.MeasurementUnitCustom;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.SourceApplication;
import org.openapis.openapi.models.shared.SubscriptionPhase;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchUpsertCatalogObjectsRequest req = new BatchUpsertCatalogObjectsRequest(                new org.openapis.openapi.models.shared.CatalogObjectBatch[]{{
                                add(new CatalogObjectBatch(                new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                    add(new CatalogObject("accusantium", "dicta") {{
                                                        absentAtLocationIds = new String[]{{
                                                            add("consectetur"),
                                                            add("nesciunt"),
                                                        }};
                                                        catalogV1Ids = new org.openapis.openapi.models.shared.CatalogV1Id[]{{
                                                            add(new CatalogV1Id() {{
                                                                catalogV1Id = "itaque";
                                                                locationId = "minus";
                                                            }}),
                                                            add(new CatalogV1Id() {{
                                                                catalogV1Id = "sunt";
                                                                locationId = "distinctio";
                                                            }}),
                                                        }};
                                                        categoryData = new CatalogCategory() {{
                                                            name = "Tracey Bosco";
                                                        }};
                                                        customAttributeDefinitionData = new CatalogCustomAttributeDefinition(                new String[]{{
                                                                            add("rem"),
                                                                            add("quia"),
                                                                        }}, "ullam", "quisquam") {{
                                                            allowedObjectTypes = new String[]{{
                                                                add("fuga"),
                                                                add("alias"),
                                                            }};
                                                            appVisibility = "rem";
                                                            customAttributeUsageCount = 11355L;
                                                            description = "quos";
                                                            key = "laudantium";
                                                            name = "Dr. Patrick Beier";
                                                            numberConfig = new CatalogCustomAttributeDefinitionNumberConfig() {{
                                                                precision = 651228L;
                                                            }};
                                                            selectionConfig = new CatalogCustomAttributeDefinitionSelectionConfig() {{
                                                                allowedSelections = new org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[]{{
                                                                    add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("incidunt") {{
                                                                        name = "Dr. Aaron Bartell";
                                                                        uid = "voluptatem";
                                                                    }}),
                                                                    add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("modi") {{
                                                                        name = "Phyllis Tremblay Sr.";
                                                                        uid = "aliquid";
                                                                    }}),
                                                                    add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("sequi") {{
                                                                        name = "Courtney Maggio";
                                                                        uid = "totam";
                                                                    }}),
                                                                    add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("reiciendis") {{
                                                                        name = "Gertrude Ryan";
                                                                        uid = "velit";
                                                                    }}),
                                                                }};
                                                                maxAllowedSelections = 997918L;
                                                            }};
                                                            sellerVisibility = "nulla";
                                                            sourceApplication = new SourceApplication() {{
                                                                applicationId = "laborum";
                                                                name = "Sheldon Baumbach";
                                                                product = "recusandae";
                                                            }};
                                                            stringConfig = new CatalogCustomAttributeDefinitionStringConfig() {{
                                                                enforceUniqueness = false;
                                                            }};
                                                            type = "voluptates";
                                                        }};
                                                        customAttributeValues = new java.util.HashMap<String, org.openapis.openapi.models.shared.CatalogCustomAttributeValue>() {{
                                                            put("voluptatibus", new CatalogCustomAttributeValue() {{
                                                                booleanValue = false;
                                                                customAttributeDefinitionId = "eligendi";
                                                                key = "quae";
                                                                name = "Joe Bradtke";
                                                                numberValue = "rem";
                                                                selectionUidValues = new String[]{{
                                                                    add("facilis"),
                                                                }};
                                                                stringValue = "reiciendis";
                                                                type = "a";
                                                            }});
                                                        }};
                                                        discountData = new CatalogDiscount() {{
                                                            amountMoney = new Money() {{
                                                                amount = 615058L;
                                                                currency = "dicta";
                                                            }};
                                                            discountType = "quos";
                                                            labelColor = "ullam";
                                                            modifyTaxBasis = "dolore";
                                                            name = "Patti Schoen";
                                                            percentage = "assumenda";
                                                            pinRequired = false;
                                                        }};
                                                        id = "efcce8f1-9777-473e-a356-2a7b408f05e3";
                                                        imageData = new CatalogImage() {{
                                                            caption = "facere";
                                                            name = "Olga Wyman";
                                                            url = "delectus";
                                                        }};
                                                        imageId = "velit";
                                                        isDeleted = false;
                                                        itemData = new CatalogItem() {{
                                                            abbreviation = "vitae";
                                                            availableElectronically = false;
                                                            availableForPickup = false;
                                                            availableOnline = false;
                                                            categoryId = "nesciunt";
                                                            description = "similique";
                                                            itemOptions = new org.openapis.openapi.models.shared.CatalogItemOptionForItem[]{{
                                                                add(new CatalogItemOptionForItem() {{
                                                                    itemOptionId = "repellat";
                                                                }}),
                                                            }};
                                                            labelColor = "nemo";
                                                            modifierListInfo = new org.openapis.openapi.models.shared.CatalogItemModifierListInfo[]{{
                                                                add(new CatalogItemModifierListInfo("optio") {{
                                                                    enabled = false;
                                                                    maxSelectedModifiers = 823753L;
                                                                    minSelectedModifiers = 603323L;
                                                                    modifierListId = "incidunt";
                                                                    modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                                        add(new CatalogModifierOverride("cupiditate") {{
                                                                            modifierId = "ipsam";
                                                                            onByDefault = false;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                                add(new CatalogItemModifierListInfo("officia") {{
                                                                    enabled = false;
                                                                    maxSelectedModifiers = 2064L;
                                                                    minSelectedModifiers = 695947L;
                                                                    modifierListId = "nesciunt";
                                                                    modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                                        add(new CatalogModifierOverride("consequuntur") {{
                                                                            modifierId = "sapiente";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("debitis") {{
                                                                            modifierId = "veniam";
                                                                            onByDefault = false;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                                add(new CatalogItemModifierListInfo("hic") {{
                                                                    enabled = false;
                                                                    maxSelectedModifiers = 575062L;
                                                                    minSelectedModifiers = 280859L;
                                                                    modifierListId = "numquam";
                                                                    modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                                        add(new CatalogModifierOverride("libero") {{
                                                                            modifierId = "adipisci";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("minima") {{
                                                                            modifierId = "in";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("minus") {{
                                                                            modifierId = "ex";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("beatae") {{
                                                                            modifierId = "ab";
                                                                            onByDefault = false;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                                add(new CatalogItemModifierListInfo("aliquid") {{
                                                                    enabled = false;
                                                                    maxSelectedModifiers = 392319L;
                                                                    minSelectedModifiers = 786954L;
                                                                    modifierListId = "dolor";
                                                                    modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                                        add(new CatalogModifierOverride("minima") {{
                                                                            modifierId = "fuga";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("qui") {{
                                                                            modifierId = "architecto";
                                                                            onByDefault = false;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                            }};
                                                            name = "Amber Fisher";
                                                            productType = "exercitationem";
                                                            skipModifierScreen = false;
                                                            sortName = "expedita";
                                                            taxIds = new String[]{{
                                                                add("impedit"),
                                                                add("sit"),
                                                                add("nemo"),
                                                            }};
                                                            variations = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                            }};
                                                        }};
                                                        itemOptionData = new CatalogItemOption() {{
                                                            description = "consequuntur";
                                                            displayName = "amet";
                                                            name = "Don Hartmann";
                                                            showColors = false;
                                                            values = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                            }};
                                                        }};
                                                        itemOptionValueData = new CatalogItemOptionValue() {{
                                                            color = "quisquam";
                                                            description = "enim";
                                                            itemOptionId = "doloribus";
                                                            name = "Miss Frankie Braun DDS";
                                                            ordinal = 898193L;
                                                        }};
                                                        itemVariationData = new CatalogItemVariation() {{
                                                            availableForBooking = false;
                                                            inventoryAlertThreshold = 155978L;
                                                            inventoryAlertType = "dicta";
                                                            itemId = "vel";
                                                            itemOptionValues = new org.openapis.openapi.models.shared.CatalogItemOptionValueForItemVariation[]{{
                                                                add(new CatalogItemOptionValueForItemVariation() {{
                                                                    itemOptionId = "debitis";
                                                                    itemOptionValueId = "ullam";
                                                                }}),
                                                                add(new CatalogItemOptionValueForItemVariation() {{
                                                                    itemOptionId = "architecto";
                                                                    itemOptionValueId = "accusantium";
                                                                }}),
                                                                add(new CatalogItemOptionValueForItemVariation() {{
                                                                    itemOptionId = "perferendis";
                                                                    itemOptionValueId = "veritatis";
                                                                }}),
                                                            }};
                                                            locationOverrides = new org.openapis.openapi.models.shared.ItemVariationLocationOverrides[]{{
                                                                add(new ItemVariationLocationOverrides() {{
                                                                    inventoryAlertThreshold = 765833L;
                                                                    inventoryAlertType = "iure";
                                                                    locationId = "quibusdam";
                                                                    priceMoney = new Money() {{
                                                                        amount = 798690L;
                                                                        currency = "nemo";
                                                                    }};
                                                                    pricingType = "recusandae";
                                                                    trackInventory = false;
                                                                }}),
                                                                add(new ItemVariationLocationOverrides() {{
                                                                    inventoryAlertThreshold = 246772L;
                                                                    inventoryAlertType = "magnam";
                                                                    locationId = "dignissimos";
                                                                    priceMoney = new Money() {{
                                                                        amount = 388404L;
                                                                        currency = "sed";
                                                                    }};
                                                                    pricingType = "odio";
                                                                    trackInventory = false;
                                                                }}),
                                                                add(new ItemVariationLocationOverrides() {{
                                                                    inventoryAlertThreshold = 616941L;
                                                                    inventoryAlertType = "provident";
                                                                    locationId = "cum";
                                                                    priceMoney = new Money() {{
                                                                        amount = 983854L;
                                                                        currency = "facilis";
                                                                    }};
                                                                    pricingType = "quidem";
                                                                    trackInventory = false;
                                                                }}),
                                                            }};
                                                            measurementUnitId = "itaque";
                                                            name = "Lindsey Gislason";
                                                            ordinal = 736985L;
                                                            priceMoney = new Money() {{
                                                                amount = 135548L;
                                                                currency = "libero";
                                                            }};
                                                            pricingType = "nam";
                                                            serviceDuration = 279172L;
                                                            sku = "recusandae";
                                                            stockable = false;
                                                            stockableConversion = new CatalogStockConversion("autem", "quo", "nesciunt") {{
                                                                nonstockableQuantity = "quod";
                                                                stockableItemVariationId = "id";
                                                                stockableQuantity = "saepe";
                                                            }};
                                                            teamMemberIds = new String[]{{
                                                                add("nemo"),
                                                                add("illum"),
                                                                add("facilis"),
                                                                add("non"),
                                                            }};
                                                            trackInventory = false;
                                                            upc = "mollitia";
                                                            userData = "assumenda";
                                                        }};
                                                        measurementUnitData = new CatalogMeasurementUnit() {{
                                                            measurementUnit = new MeasurementUnit() {{
                                                                areaUnit = "recusandae";
                                                                customUnit = new MeasurementUnitCustom("laborum", "incidunt") {{
                                                                    abbreviation = "distinctio";
                                                                    name = "Leon Schumm";
                                                                }};
                                                                genericUnit = "maxime";
                                                                lengthUnit = "ipsam";
                                                                timeUnit = "alias";
                                                                type = "suscipit";
                                                                volumeUnit = "deserunt";
                                                                weightUnit = "molestias";
                                                            }};
                                                            precision = 672889L;
                                                        }};
                                                        modifierData = new CatalogModifier() {{
                                                            modifierListId = "est";
                                                            name = "Mr. Leroy Sanford";
                                                            ordinal = 301309L;
                                                            priceMoney = new Money() {{
                                                                amount = 308528L;
                                                                currency = "eligendi";
                                                            }};
                                                        }};
                                                        modifierListData = new CatalogModifierList() {{
                                                            modifiers = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                            }};
                                                            name = "Cecelia Mitchell";
                                                            ordinal = 653000L;
                                                            selectionType = "magnam";
                                                        }};
                                                        presentAtAllLocations = false;
                                                        presentAtLocationIds = new String[]{{
                                                            add("esse"),
                                                            add("corrupti"),
                                                        }};
                                                        pricingRuleData = new CatalogPricingRule() {{
                                                            applyProductsId = "fuga";
                                                            customerGroupIdsAny = new String[]{{
                                                                add("impedit"),
                                                                add("quasi"),
                                                                add("deserunt"),
                                                                add("quod"),
                                                            }};
                                                            discountId = "laboriosam";
                                                            excludeProductsId = "doloremque";
                                                            excludeStrategy = "voluptatem";
                                                            matchProductsId = "facere";
                                                            name = "Mr. Simon Altenwerth";
                                                            timePeriodIds = new String[]{{
                                                                add("blanditiis"),
                                                                add("quae"),
                                                                add("magni"),
                                                                add("officiis"),
                                                            }};
                                                            validFromDate = "sed";
                                                            validFromLocalTime = "necessitatibus";
                                                            validUntilDate = "impedit";
                                                            validUntilLocalTime = "ipsa";
                                                        }};
                                                        productSetData = new CatalogProductSet() {{
                                                            allProducts = false;
                                                            name = "Darnell Wunsch";
                                                            productIdsAll = new String[]{{
                                                                add("asperiores"),
                                                            }};
                                                            productIdsAny = new String[]{{
                                                                add("dicta"),
                                                                add("suscipit"),
                                                                add("earum"),
                                                            }};
                                                            quantityExact = 985360L;
                                                            quantityMax = 244569L;
                                                            quantityMin = 260588L;
                                                        }};
                                                        quickAmountsSettingsData = new CatalogQuickAmountsSettings("vel") {{
                                                            amounts = new org.openapis.openapi.models.shared.CatalogQuickAmount[]{{
                                                                add(new CatalogQuickAmount(                new Money() {{
                                                                                    amount = 566312L;
                                                                                    currency = "accusantium";
                                                                                }};, "qui") {{
                                                                    amount = new Money() {{
                                                                        amount = 446547L;
                                                                        currency = "eligendi";
                                                                    }};
                                                                    ordinal = 94697L;
                                                                    score = 203621L;
                                                                    type = "vero";
                                                                }}),
                                                                add(new CatalogQuickAmount(                new Money() {{
                                                                                    amount = 357639L;
                                                                                    currency = "rerum";
                                                                                }};, "alias") {{
                                                                    amount = new Money() {{
                                                                        amount = 771241L;
                                                                        currency = "beatae";
                                                                    }};
                                                                    ordinal = 278329L;
                                                                    score = 116558L;
                                                                    type = "odit";
                                                                }}),
                                                            }};
                                                            eligibleForAutoAmounts = false;
                                                            option = "error";
                                                        }};
                                                        subscriptionPlanData = new CatalogSubscriptionPlan("sed",                 new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                                            add(new SubscriptionPhase("laudantium",                 new Money() {{
                                                                                                amount = 243904L;
                                                                                                currency = "reiciendis";
                                                                                            }};) {{
                                                                                cadence = "maxime";
                                                                                ordinal = 337841L;
                                                                                periods = 586108L;
                                                                                recurringPriceMoney = new Money() {{
                                                                                    amount = 303253L;
                                                                                    currency = "excepturi";
                                                                                }};
                                                                                uid = "maiores";
                                                                            }}),
                                                                        }}) {{
                                                            name = "Genevieve Howell";
                                                            phases = new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                                add(new SubscriptionPhase("deserunt",                 new Money() {{
                                                                                    amount = 965095L;
                                                                                    currency = "omnis";
                                                                                }};) {{
                                                                    cadence = "ullam";
                                                                    ordinal = 62688L;
                                                                    periods = 631719L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 278116L;
                                                                        currency = "quam";
                                                                    }};
                                                                    uid = "magni";
                                                                }}),
                                                            }};
                                                        }};
                                                        taxData = new CatalogTax() {{
                                                            appliesToCustomAmounts = false;
                                                            calculationPhase = "amet";
                                                            enabled = false;
                                                            inclusionType = "nemo";
                                                            name = "Adrienne White";
                                                            percentage = "aliquid";
                                                        }};
                                                        timePeriodData = new CatalogTimePeriod() {{
                                                            event = "asperiores";
                                                        }};
                                                        type = "a";
                                                        updatedAt = "nobis";
                                                        version = 598316L;
                                                    }}),
                                                    add(new CatalogObject("laborum", "nobis") {{
                                                        absentAtLocationIds = new String[]{{
                                                            add("commodi"),
                                                            add("eveniet"),
                                                            add("porro"),
                                                            add("tempore"),
                                                        }};
                                                        catalogV1Ids = new org.openapis.openapi.models.shared.CatalogV1Id[]{{
                                                            add(new CatalogV1Id() {{
                                                                catalogV1Id = "modi";
                                                                locationId = "voluptates";
                                                            }}),
                                                            add(new CatalogV1Id() {{
                                                                catalogV1Id = "fugit";
                                                                locationId = "eius";
                                                            }}),
                                                            add(new CatalogV1Id() {{
                                                                catalogV1Id = "sequi";
                                                                locationId = "eligendi";
                                                            }}),
                                                        }};
                                                        categoryData = new CatalogCategory() {{
                                                            name = "Claude Kutch";
                                                        }};
                                                        customAttributeDefinitionData = new CatalogCustomAttributeDefinition(                new String[]{{
                                                                            add("eaque"),
                                                                            add("exercitationem"),
                                                                        }}, "veniam", "nihil") {{
                                                            allowedObjectTypes = new String[]{{
                                                                add("animi"),
                                                                add("maiores"),
                                                                add("itaque"),
                                                                add("nulla"),
                                                            }};
                                                            appVisibility = "deserunt";
                                                            customAttributeUsageCount = 359097L;
                                                            description = "velit";
                                                            key = "officiis";
                                                            name = "Brandi Turner";
                                                            numberConfig = new CatalogCustomAttributeDefinitionNumberConfig() {{
                                                                precision = 35742L;
                                                            }};
                                                            selectionConfig = new CatalogCustomAttributeDefinitionSelectionConfig() {{
                                                                allowedSelections = new org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[]{{
                                                                    add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("nobis") {{
                                                                        name = "Ryan Kuvalis";
                                                                        uid = "eos";
                                                                    }}),
                                                                    add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("quos") {{
                                                                        name = "Kim Crist";
                                                                        uid = "quod";
                                                                    }}),
                                                                    add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("perferendis") {{
                                                                        name = "Allen Kozey";
                                                                        uid = "modi";
                                                                    }}),
                                                                }};
                                                                maxAllowedSelections = 897058L;
                                                            }};
                                                            sellerVisibility = "architecto";
                                                            sourceApplication = new SourceApplication() {{
                                                                applicationId = "molestias";
                                                                name = "Ashley Wunsch";
                                                                product = "earum";
                                                            }};
                                                            stringConfig = new CatalogCustomAttributeDefinitionStringConfig() {{
                                                                enforceUniqueness = false;
                                                            }};
                                                            type = "veniam";
                                                        }};
                                                        customAttributeValues = new java.util.HashMap<String, org.openapis.openapi.models.shared.CatalogCustomAttributeValue>() {{
                                                            put("nisi", new CatalogCustomAttributeValue() {{
                                                                booleanValue = false;
                                                                customAttributeDefinitionId = "tenetur";
                                                                key = "quis";
                                                                name = "Maurice Hoppe MD";
                                                                numberValue = "repellendus";
                                                                selectionUidValues = new String[]{{
                                                                    add("id"),
                                                                }};
                                                                stringValue = "sapiente";
                                                                type = "sed";
                                                            }});
                                                            put("possimus", new CatalogCustomAttributeValue() {{
                                                                booleanValue = false;
                                                                customAttributeDefinitionId = "repellat";
                                                                key = "repudiandae";
                                                                name = "Josephine Stroman";
                                                                numberValue = "voluptatibus";
                                                                selectionUidValues = new String[]{{
                                                                    add("explicabo"),
                                                                    add("minus"),
                                                                }};
                                                                stringValue = "soluta";
                                                                type = "dolorum";
                                                            }});
                                                        }};
                                                        discountData = new CatalogDiscount() {{
                                                            amountMoney = new Money() {{
                                                                amount = 242531L;
                                                                currency = "earum";
                                                            }};
                                                            discountType = "praesentium";
                                                            labelColor = "error";
                                                            modifyTaxBasis = "non";
                                                            name = "Iris Torp";
                                                            percentage = "doloremque";
                                                            pinRequired = false;
                                                        }};
                                                        id = "b80a6924-d3b2-4ecf-8c8f-895010f5dd3d";
                                                        imageData = new CatalogImage() {{
                                                            caption = "vel";
                                                            name = "Shaun Bergnaum I";
                                                            url = "voluptates";
                                                        }};
                                                        imageId = "ad";
                                                        isDeleted = false;
                                                        itemData = new CatalogItem() {{
                                                            abbreviation = "aliquam";
                                                            availableElectronically = false;
                                                            availableForPickup = false;
                                                            availableOnline = false;
                                                            categoryId = "quisquam";
                                                            description = "quas";
                                                            itemOptions = new org.openapis.openapi.models.shared.CatalogItemOptionForItem[]{{
                                                                add(new CatalogItemOptionForItem() {{
                                                                    itemOptionId = "maiores";
                                                                }}),
                                                            }};
                                                            labelColor = "inventore";
                                                            modifierListInfo = new org.openapis.openapi.models.shared.CatalogItemModifierListInfo[]{{
                                                                add(new CatalogItemModifierListInfo("ducimus") {{
                                                                    enabled = false;
                                                                    maxSelectedModifiers = 513185L;
                                                                    minSelectedModifiers = 665872L;
                                                                    modifierListId = "dolor";
                                                                    modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                                        add(new CatalogModifierOverride("cumque") {{
                                                                            modifierId = "consectetur";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("voluptatum") {{
                                                                            modifierId = "rem";
                                                                            onByDefault = false;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                                add(new CatalogItemModifierListInfo("tenetur") {{
                                                                    enabled = false;
                                                                    maxSelectedModifiers = 237523L;
                                                                    minSelectedModifiers = 927959L;
                                                                    modifierListId = "tempora";
                                                                    modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                                        add(new CatalogModifierOverride("sequi") {{
                                                                            modifierId = "numquam";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("sit") {{
                                                                            modifierId = "voluptatum";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("veritatis") {{
                                                                            modifierId = "rerum";
                                                                            onByDefault = false;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                            }};
                                                            name = "Yvette Larson";
                                                            productType = "magni";
                                                            skipModifierScreen = false;
                                                            sortName = "nihil";
                                                            taxIds = new String[]{{
                                                                add("animi"),
                                                                add("commodi"),
                                                            }};
                                                            variations = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                                add(new CatalogObject() {{}}),
                                                            }};
                                                        }};
                                                        itemOptionData = new CatalogItemOption() {{
                                                            description = "fuga";
                                                            displayName = "aut";
                                                            name = "Jody Gutmann";
                                                            showColors = false;
                                                            values = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                            }};
                                                        }};
                                                        itemOptionValueData = new CatalogItemOptionValue() {{
                                                            color = "placeat";
                                                            description = "voluptas";
                                                            itemOptionId = "occaecati";
                                                            name = "Miss Joshua Koss";
                                                            ordinal = 97659L;
                                                        }};
                                                        itemVariationData = new CatalogItemVariation() {{
                                                            availableForBooking = false;
                                                            inventoryAlertThreshold = 766591L;
                                                            inventoryAlertType = "dicta";
                                                            itemId = "harum";
                                                            itemOptionValues = new org.openapis.openapi.models.shared.CatalogItemOptionValueForItemVariation[]{{
                                                                add(new CatalogItemOptionValueForItemVariation() {{
                                                                    itemOptionId = "facilis";
                                                                    itemOptionValueId = "beatae";
                                                                }}),
                                                                add(new CatalogItemOptionValueForItemVariation() {{
                                                                    itemOptionId = "cumque";
                                                                    itemOptionValueId = "delectus";
                                                                }}),
                                                                add(new CatalogItemOptionValueForItemVariation() {{
                                                                    itemOptionId = "labore";
                                                                    itemOptionValueId = "expedita";
                                                                }}),
                                                                add(new CatalogItemOptionValueForItemVariation() {{
                                                                    itemOptionId = "corrupti";
                                                                    itemOptionValueId = "rem";
                                                                }}),
                                                            }};
                                                            locationOverrides = new org.openapis.openapi.models.shared.ItemVariationLocationOverrides[]{{
                                                                add(new ItemVariationLocationOverrides() {{
                                                                    inventoryAlertThreshold = 886118L;
                                                                    inventoryAlertType = "cum";
                                                                    locationId = "pariatur";
                                                                    priceMoney = new Money() {{
                                                                        amount = 956871L;
                                                                        currency = "quo";
                                                                    }};
                                                                    pricingType = "incidunt";
                                                                    trackInventory = false;
                                                                }}),
                                                                add(new ItemVariationLocationOverrides() {{
                                                                    inventoryAlertThreshold = 797293L;
                                                                    inventoryAlertType = "minus";
                                                                    locationId = "porro";
                                                                    priceMoney = new Money() {{
                                                                        amount = 659971L;
                                                                        currency = "excepturi";
                                                                    }};
                                                                    pricingType = "occaecati";
                                                                    trackInventory = false;
                                                                }}),
                                                                add(new ItemVariationLocationOverrides() {{
                                                                    inventoryAlertThreshold = 726851L;
                                                                    inventoryAlertType = "quo";
                                                                    locationId = "esse";
                                                                    priceMoney = new Money() {{
                                                                        amount = 944033L;
                                                                        currency = "maxime";
                                                                    }};
                                                                    pricingType = "accusantium";
                                                                    trackInventory = false;
                                                                }}),
                                                            }};
                                                            measurementUnitId = "soluta";
                                                            name = "Meredith Roob Jr.";
                                                            ordinal = 516124L;
                                                            priceMoney = new Money() {{
                                                                amount = 480421L;
                                                                currency = "dolor";
                                                            }};
                                                            pricingType = "voluptates";
                                                            serviceDuration = 274295L;
                                                            sku = "magni";
                                                            stockable = false;
                                                            stockableConversion = new CatalogStockConversion("eum", "at", "eum") {{
                                                                nonstockableQuantity = "rerum";
                                                                stockableItemVariationId = "doloremque";
                                                                stockableQuantity = "voluptatem";
                                                            }};
                                                            teamMemberIds = new String[]{{
                                                                add("voluptatum"),
                                                                add("blanditiis"),
                                                            }};
                                                            trackInventory = false;
                                                            upc = "nihil";
                                                            userData = "atque";
                                                        }};
                                                        measurementUnitData = new CatalogMeasurementUnit() {{
                                                            measurementUnit = new MeasurementUnit() {{
                                                                areaUnit = "rerum";
                                                                customUnit = new MeasurementUnitCustom("rem", "magni") {{
                                                                    abbreviation = "deserunt";
                                                                    name = "Miss Dean Littel";
                                                                }};
                                                                genericUnit = "quae";
                                                                lengthUnit = "quas";
                                                                timeUnit = "placeat";
                                                                type = "enim";
                                                                volumeUnit = "labore";
                                                                weightUnit = "sapiente";
                                                            }};
                                                            precision = 901651L;
                                                        }};
                                                        modifierData = new CatalogModifier() {{
                                                            modifierListId = "delectus";
                                                            name = "Jeremiah Runolfsdottir";
                                                            ordinal = 985379L;
                                                            priceMoney = new Money() {{
                                                                amount = 156098L;
                                                                currency = "officiis";
                                                            }};
                                                        }};
                                                        modifierListData = new CatalogModifierList() {{
                                                            modifiers = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                            }};
                                                            name = "Alvin Haley";
                                                            ordinal = 849337L;
                                                            selectionType = "nesciunt";
                                                        }};
                                                        presentAtAllLocations = false;
                                                        presentAtLocationIds = new String[]{{
                                                            add("odio"),
                                                        }};
                                                        pricingRuleData = new CatalogPricingRule() {{
                                                            applyProductsId = "minus";
                                                            customerGroupIdsAny = new String[]{{
                                                                add("recusandae"),
                                                                add("voluptates"),
                                                                add("praesentium"),
                                                                add("dicta"),
                                                            }};
                                                            discountId = "fugit";
                                                            excludeProductsId = "sit";
                                                            excludeStrategy = "aliquid";
                                                            matchProductsId = "necessitatibus";
                                                            name = "Cassandra Casper";
                                                            timePeriodIds = new String[]{{
                                                                add("aliquam"),
                                                                add("deserunt"),
                                                                add("modi"),
                                                            }};
                                                            validFromDate = "sunt";
                                                            validFromLocalTime = "impedit";
                                                            validUntilDate = "eius";
                                                            validUntilLocalTime = "voluptatum";
                                                        }};
                                                        productSetData = new CatalogProductSet() {{
                                                            allProducts = false;
                                                            name = "Cristina Ebert";
                                                            productIdsAll = new String[]{{
                                                                add("sequi"),
                                                            }};
                                                            productIdsAny = new String[]{{
                                                                add("fuga"),
                                                            }};
                                                            quantityExact = 943103L;
                                                            quantityMax = 49499L;
                                                            quantityMin = 211301L;
                                                        }};
                                                        quickAmountsSettingsData = new CatalogQuickAmountsSettings("nobis") {{
                                                            amounts = new org.openapis.openapi.models.shared.CatalogQuickAmount[]{{
                                                                add(new CatalogQuickAmount(                new Money() {{
                                                                                    amount = 298750L;
                                                                                    currency = "delectus";
                                                                                }};, "numquam") {{
                                                                    amount = new Money() {{
                                                                        amount = 44929L;
                                                                        currency = "aspernatur";
                                                                    }};
                                                                    ordinal = 860362L;
                                                                    score = 316541L;
                                                                    type = "illo";
                                                                }}),
                                                            }};
                                                            eligibleForAutoAmounts = false;
                                                            option = "optio";
                                                        }};
                                                        subscriptionPlanData = new CatalogSubscriptionPlan("libero",                 new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                                            add(new SubscriptionPhase("enim",                 new Money() {{
                                                                                                amount = 881189L;
                                                                                                currency = "aperiam";
                                                                                            }};) {{
                                                                                cadence = "illo";
                                                                                ordinal = 792499L;
                                                                                periods = 553315L;
                                                                                recurringPriceMoney = new Money() {{
                                                                                    amount = 835646L;
                                                                                    currency = "sint";
                                                                                }};
                                                                                uid = "iusto";
                                                                            }}),
                                                                            add(new SubscriptionPhase("rem",                 new Money() {{
                                                                                                amount = 949370L;
                                                                                                currency = "deleniti";
                                                                                            }};) {{
                                                                                cadence = "voluptates";
                                                                                ordinal = 512310L;
                                                                                periods = 271551L;
                                                                                recurringPriceMoney = new Money() {{
                                                                                    amount = 63825L;
                                                                                    currency = "omnis";
                                                                                }};
                                                                                uid = "illum";
                                                                            }}),
                                                                            add(new SubscriptionPhase("sequi",                 new Money() {{
                                                                                                amount = 902132L;
                                                                                                currency = "consequatur";
                                                                                            }};) {{
                                                                                cadence = "modi";
                                                                                ordinal = 937664L;
                                                                                periods = 101374L;
                                                                                recurringPriceMoney = new Money() {{
                                                                                    amount = 305189L;
                                                                                    currency = "labore";
                                                                                }};
                                                                                uid = "maiores";
                                                                            }}),
                                                                        }}) {{
                                                            name = "Kristie Bergnaum";
                                                            phases = new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                                add(new SubscriptionPhase("animi",                 new Money() {{
                                                                                    amount = 296128L;
                                                                                    currency = "tenetur";
                                                                                }};) {{
                                                                    cadence = "excepturi";
                                                                    ordinal = 396610L;
                                                                    periods = 151385L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 106682L;
                                                                        currency = "similique";
                                                                    }};
                                                                    uid = "ea";
                                                                }}),
                                                                add(new SubscriptionPhase("earum",                 new Money() {{
                                                                                    amount = 246402L;
                                                                                    currency = "officiis";
                                                                                }};) {{
                                                                    cadence = "dignissimos";
                                                                    ordinal = 457835L;
                                                                    periods = 657044L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 512488L;
                                                                        currency = "esse";
                                                                    }};
                                                                    uid = "eveniet";
                                                                }}),
                                                                add(new SubscriptionPhase("impedit",                 new Money() {{
                                                                                    amount = 397014L;
                                                                                    currency = "quis";
                                                                                }};) {{
                                                                    cadence = "eius";
                                                                    ordinal = 701978L;
                                                                    periods = 930111L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 489685L;
                                                                        currency = "ipsam";
                                                                    }};
                                                                    uid = "explicabo";
                                                                }}),
                                                                add(new SubscriptionPhase("eveniet",                 new Money() {{
                                                                                    amount = 221781L;
                                                                                    currency = "expedita";
                                                                                }};) {{
                                                                    cadence = "facilis";
                                                                    ordinal = 218128L;
                                                                    periods = 284885L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 308819L;
                                                                        currency = "architecto";
                                                                    }};
                                                                    uid = "praesentium";
                                                                }}),
                                                            }};
                                                        }};
                                                        taxData = new CatalogTax() {{
                                                            appliesToCustomAmounts = false;
                                                            calculationPhase = "esse";
                                                            enabled = false;
                                                            inclusionType = "debitis";
                                                            name = "Devin Runte";
                                                            percentage = "deserunt";
                                                        }};
                                                        timePeriodData = new CatalogTimePeriod() {{
                                                            event = "ad";
                                                        }};
                                                        type = "reiciendis";
                                                        updatedAt = "sequi";
                                                        version = 785555L;
                                                    }}),
                                                    add(new CatalogObject("laudantium", "repellendus") {{
                                                        absentAtLocationIds = new String[]{{
                                                            add("omnis"),
                                                            add("aut"),
                                                            add("ipsam"),
                                                            add("officia"),
                                                        }};
                                                        catalogV1Ids = new org.openapis.openapi.models.shared.CatalogV1Id[]{{
                                                            add(new CatalogV1Id() {{
                                                                catalogV1Id = "reprehenderit";
                                                                locationId = "quia";
                                                            }}),
                                                            add(new CatalogV1Id() {{
                                                                catalogV1Id = "necessitatibus";
                                                                locationId = "accusantium";
                                                            }}),
                                                            add(new CatalogV1Id() {{
                                                                catalogV1Id = "ad";
                                                                locationId = "nisi";
                                                            }}),
                                                        }};
                                                        categoryData = new CatalogCategory() {{
                                                            name = "Lori Larkin";
                                                        }};
                                                        customAttributeDefinitionData = new CatalogCustomAttributeDefinition(                new String[]{{
                                                                            add("temporibus"),
                                                                            add("ratione"),
                                                                        }}, "dolor", "nisi") {{
                                                            allowedObjectTypes = new String[]{{
                                                                add("expedita"),
                                                                add("eos"),
                                                            }};
                                                            appVisibility = "repellendus";
                                                            customAttributeUsageCount = 199879L;
                                                            description = "ipsa";
                                                            key = "sint";
                                                            name = "Tamara Bashirian";
                                                            numberConfig = new CatalogCustomAttributeDefinitionNumberConfig() {{
                                                                precision = 463050L;
                                                            }};
                                                            selectionConfig = new CatalogCustomAttributeDefinitionSelectionConfig() {{
                                                                allowedSelections = new org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[]{{
                                                                    add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("voluptatibus") {{
                                                                        name = "Marta Nicolas";
                                                                        uid = "quod";
                                                                    }}),
                                                                    add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("animi") {{
                                                                        name = "Sheila Hermann";
                                                                        uid = "doloribus";
                                                                    }}),
                                                                    add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("laboriosam") {{
                                                                        name = "Lewis Fritsch";
                                                                        uid = "maiores";
                                                                    }}),
                                                                }};
                                                                maxAllowedSelections = 30426L;
                                                            }};
                                                            sellerVisibility = "optio";
                                                            sourceApplication = new SourceApplication() {{
                                                                applicationId = "sequi";
                                                                name = "Mr. Evelyn Wiza";
                                                                product = "rerum";
                                                            }};
                                                            stringConfig = new CatalogCustomAttributeDefinitionStringConfig() {{
                                                                enforceUniqueness = false;
                                                            }};
                                                            type = "in";
                                                        }};
                                                        customAttributeValues = new java.util.HashMap<String, org.openapis.openapi.models.shared.CatalogCustomAttributeValue>() {{
                                                            put("reiciendis", new CatalogCustomAttributeValue() {{
                                                                booleanValue = false;
                                                                customAttributeDefinitionId = "itaque";
                                                                key = "vitae";
                                                                name = "Kenneth Schmeler";
                                                                numberValue = "possimus";
                                                                selectionUidValues = new String[]{{
                                                                    add("odio"),
                                                                    add("provident"),
                                                                    add("sapiente"),
                                                                    add("aperiam"),
                                                                }};
                                                                stringValue = "similique";
                                                                type = "nesciunt";
                                                            }});
                                                            put("provident", new CatalogCustomAttributeValue() {{
                                                                booleanValue = false;
                                                                customAttributeDefinitionId = "ex";
                                                                key = "repellendus";
                                                                name = "James Rutherford";
                                                                numberValue = "labore";
                                                                selectionUidValues = new String[]{{
                                                                    add("in"),
                                                                    add("quisquam"),
                                                                    add("sunt"),
                                                                }};
                                                                stringValue = "enim";
                                                                type = "nulla";
                                                            }});
                                                        }};
                                                        discountData = new CatalogDiscount() {{
                                                            amountMoney = new Money() {{
                                                                amount = 979271L;
                                                                currency = "distinctio";
                                                            }};
                                                            discountType = "mollitia";
                                                            labelColor = "impedit";
                                                            modifyTaxBasis = "accusamus";
                                                            name = "Billie Kuvalis DDS";
                                                            percentage = "tempora";
                                                            pinRequired = false;
                                                        }};
                                                        id = "ee2c8c6c-e611-4fee-b1c7-cbdb6eec7437";
                                                        imageData = new CatalogImage() {{
                                                            caption = "laudantium";
                                                            name = "Gerard Conn";
                                                            url = "beatae";
                                                        }};
                                                        imageId = "iusto";
                                                        isDeleted = false;
                                                        itemData = new CatalogItem() {{
                                                            abbreviation = "esse";
                                                            availableElectronically = false;
                                                            availableForPickup = false;
                                                            availableOnline = false;
                                                            categoryId = "magnam";
                                                            description = "odio";
                                                            itemOptions = new org.openapis.openapi.models.shared.CatalogItemOptionForItem[]{{
                                                                add(new CatalogItemOptionForItem() {{
                                                                    itemOptionId = "impedit";
                                                                }}),
                                                                add(new CatalogItemOptionForItem() {{
                                                                    itemOptionId = "cupiditate";
                                                                }}),
                                                                add(new CatalogItemOptionForItem() {{
                                                                    itemOptionId = "illo";
                                                                }}),
                                                                add(new CatalogItemOptionForItem() {{
                                                                    itemOptionId = "exercitationem";
                                                                }}),
                                                            }};
                                                            labelColor = "laborum";
                                                            modifierListInfo = new org.openapis.openapi.models.shared.CatalogItemModifierListInfo[]{{
                                                                add(new CatalogItemModifierListInfo("optio") {{
                                                                    enabled = false;
                                                                    maxSelectedModifiers = 147989L;
                                                                    minSelectedModifiers = 804879L;
                                                                    modifierListId = "dolorum";
                                                                    modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                                        add(new CatalogModifierOverride("illum") {{
                                                                            modifierId = "nostrum";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("commodi") {{
                                                                            modifierId = "quibusdam";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("explicabo") {{
                                                                            modifierId = "esse";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("temporibus") {{
                                                                            modifierId = "consectetur";
                                                                            onByDefault = false;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                                add(new CatalogItemModifierListInfo("harum") {{
                                                                    enabled = false;
                                                                    maxSelectedModifiers = 59757L;
                                                                    minSelectedModifiers = 978655L;
                                                                    modifierListId = "exercitationem";
                                                                    modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                                        add(new CatalogModifierOverride("aspernatur") {{
                                                                            modifierId = "repudiandae";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("neque") {{
                                                                            modifierId = "sapiente";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("suscipit") {{
                                                                            modifierId = "officia";
                                                                            onByDefault = false;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                                add(new CatalogItemModifierListInfo("quaerat") {{
                                                                    enabled = false;
                                                                    maxSelectedModifiers = 496578L;
                                                                    minSelectedModifiers = 42454L;
                                                                    modifierListId = "perferendis";
                                                                    modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                                        add(new CatalogModifierOverride("corrupti") {{
                                                                            modifierId = "iusto";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("quis") {{
                                                                            modifierId = "molestiae";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("ab") {{
                                                                            modifierId = "iure";
                                                                            onByDefault = false;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                                add(new CatalogItemModifierListInfo("enim") {{
                                                                    enabled = false;
                                                                    maxSelectedModifiers = 228907L;
                                                                    minSelectedModifiers = 956942L;
                                                                    modifierListId = "corporis";
                                                                    modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                                        add(new CatalogModifierOverride("quisquam") {{
                                                                            modifierId = "iure";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("laudantium") {{
                                                                            modifierId = "provident";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("nemo") {{
                                                                            modifierId = "nam";
                                                                            onByDefault = false;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                            }};
                                                            name = "Ms. Lorraine Goodwin PhD";
                                                            productType = "numquam";
                                                            skipModifierScreen = false;
                                                            sortName = "doloremque";
                                                            taxIds = new String[]{{
                                                                add("nobis"),
                                                                add("similique"),
                                                                add("porro"),
                                                            }};
                                                            variations = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                            }};
                                                        }};
                                                        itemOptionData = new CatalogItemOption() {{
                                                            description = "nisi";
                                                            displayName = "cumque";
                                                            name = "Ismael Hudson";
                                                            showColors = false;
                                                            values = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                            }};
                                                        }};
                                                        itemOptionValueData = new CatalogItemOptionValue() {{
                                                            color = "consectetur";
                                                            description = "necessitatibus";
                                                            itemOptionId = "maxime";
                                                            name = "Donald McKenzie II";
                                                            ordinal = 998527L;
                                                        }};
                                                        itemVariationData = new CatalogItemVariation() {{
                                                            availableForBooking = false;
                                                            inventoryAlertThreshold = 607631L;
                                                            inventoryAlertType = "explicabo";
                                                            itemId = "vel";
                                                            itemOptionValues = new org.openapis.openapi.models.shared.CatalogItemOptionValueForItemVariation[]{{
                                                                add(new CatalogItemOptionValueForItemVariation() {{
                                                                    itemOptionId = "id";
                                                                    itemOptionValueId = "possimus";
                                                                }}),
                                                                add(new CatalogItemOptionValueForItemVariation() {{
                                                                    itemOptionId = "fugit";
                                                                    itemOptionValueId = "ipsam";
                                                                }}),
                                                                add(new CatalogItemOptionValueForItemVariation() {{
                                                                    itemOptionId = "nostrum";
                                                                    itemOptionValueId = "sequi";
                                                                }}),
                                                            }};
                                                            locationOverrides = new org.openapis.openapi.models.shared.ItemVariationLocationOverrides[]{{
                                                                add(new ItemVariationLocationOverrides() {{
                                                                    inventoryAlertThreshold = 98759L;
                                                                    inventoryAlertType = "error";
                                                                    locationId = "nobis";
                                                                    priceMoney = new Money() {{
                                                                        amount = 269600L;
                                                                        currency = "voluptate";
                                                                    }};
                                                                    pricingType = "eius";
                                                                    trackInventory = false;
                                                                }}),
                                                                add(new ItemVariationLocationOverrides() {{
                                                                    inventoryAlertThreshold = 713718L;
                                                                    inventoryAlertType = "aperiam";
                                                                    locationId = "voluptates";
                                                                    priceMoney = new Money() {{
                                                                        amount = 822711L;
                                                                        currency = "fugit";
                                                                    }};
                                                                    pricingType = "voluptatem";
                                                                    trackInventory = false;
                                                                }}),
                                                                add(new ItemVariationLocationOverrides() {{
                                                                    inventoryAlertThreshold = 919171L;
                                                                    inventoryAlertType = "corporis";
                                                                    locationId = "ea";
                                                                    priceMoney = new Money() {{
                                                                        amount = 179906L;
                                                                        currency = "aliquam";
                                                                    }};
                                                                    pricingType = "blanditiis";
                                                                    trackInventory = false;
                                                                }}),
                                                            }};
                                                            measurementUnitId = "hic";
                                                            name = "Emmett Jones";
                                                            ordinal = 656839L;
                                                            priceMoney = new Money() {{
                                                                amount = 591171L;
                                                                currency = "beatae";
                                                            }};
                                                            pricingType = "ipsa";
                                                            serviceDuration = 650914L;
                                                            sku = "nam";
                                                            stockable = false;
                                                            stockableConversion = new CatalogStockConversion("tempore", "commodi", "fugit") {{
                                                                nonstockableQuantity = "assumenda";
                                                                stockableItemVariationId = "quo";
                                                                stockableQuantity = "fuga";
                                                            }};
                                                            teamMemberIds = new String[]{{
                                                                add("voluptate"),
                                                                add("nisi"),
                                                            }};
                                                            trackInventory = false;
                                                            upc = "aliquid";
                                                            userData = "provident";
                                                        }};
                                                        measurementUnitData = new CatalogMeasurementUnit() {{
                                                            measurementUnit = new MeasurementUnit() {{
                                                                areaUnit = "laboriosam";
                                                                customUnit = new MeasurementUnitCustom("consequuntur", "vitae") {{
                                                                    abbreviation = "accusamus";
                                                                    name = "Mr. Patti Schamberger";
                                                                }};
                                                                genericUnit = "quidem";
                                                                lengthUnit = "sequi";
                                                                timeUnit = "amet";
                                                                type = "exercitationem";
                                                                volumeUnit = "illum";
                                                                weightUnit = "praesentium";
                                                            }};
                                                            precision = 601626L;
                                                        }};
                                                        modifierData = new CatalogModifier() {{
                                                            modifierListId = "similique";
                                                            name = "Garry Fahey";
                                                            ordinal = 989089L;
                                                            priceMoney = new Money() {{
                                                                amount = 836053L;
                                                                currency = "id";
                                                            }};
                                                        }};
                                                        modifierListData = new CatalogModifierList() {{
                                                            modifiers = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                            }};
                                                            name = "Mark Satterfield";
                                                            ordinal = 591143L;
                                                            selectionType = "vero";
                                                        }};
                                                        presentAtAllLocations = false;
                                                        presentAtLocationIds = new String[]{{
                                                            add("doloremque"),
                                                            add("ipsum"),
                                                            add("alias"),
                                                            add("doloremque"),
                                                        }};
                                                        pricingRuleData = new CatalogPricingRule() {{
                                                            applyProductsId = "tempora";
                                                            customerGroupIdsAny = new String[]{{
                                                                add("quam"),
                                                                add("atque"),
                                                                add("officia"),
                                                            }};
                                                            discountId = "ex";
                                                            excludeProductsId = "architecto";
                                                            excludeStrategy = "a";
                                                            matchProductsId = "laborum";
                                                            name = "Traci Wiegand III";
                                                            timePeriodIds = new String[]{{
                                                                add("totam"),
                                                                add("tenetur"),
                                                                add("voluptate"),
                                                            }};
                                                            validFromDate = "quam";
                                                            validFromLocalTime = "quod";
                                                            validUntilDate = "vitae";
                                                            validUntilLocalTime = "sapiente";
                                                        }};
                                                        productSetData = new CatalogProductSet() {{
                                                            allProducts = false;
                                                            name = "Dr. Jermaine Klein";
                                                            productIdsAll = new String[]{{
                                                                add("ab"),
                                                                add("ex"),
                                                                add("consectetur"),
                                                            }};
                                                            productIdsAny = new String[]{{
                                                                add("sed"),
                                                                add("animi"),
                                                                add("sequi"),
                                                                add("eligendi"),
                                                            }};
                                                            quantityExact = 528315L;
                                                            quantityMax = 21668L;
                                                            quantityMin = 671690L;
                                                        }};
                                                        quickAmountsSettingsData = new CatalogQuickAmountsSettings("explicabo") {{
                                                            amounts = new org.openapis.openapi.models.shared.CatalogQuickAmount[]{{
                                                                add(new CatalogQuickAmount(                new Money() {{
                                                                                    amount = 250298L;
                                                                                    currency = "optio";
                                                                                }};, "illum") {{
                                                                    amount = new Money() {{
                                                                        amount = 470321L;
                                                                        currency = "tenetur";
                                                                    }};
                                                                    ordinal = 959696L;
                                                                    score = 242013L;
                                                                    type = "adipisci";
                                                                }}),
                                                                add(new CatalogQuickAmount(                new Money() {{
                                                                                    amount = 675755L;
                                                                                    currency = "perspiciatis";
                                                                                }};, "voluptates") {{
                                                                    amount = new Money() {{
                                                                        amount = 870183L;
                                                                        currency = "tenetur";
                                                                    }};
                                                                    ordinal = 562066L;
                                                                    score = 371295L;
                                                                    type = "esse";
                                                                }}),
                                                                add(new CatalogQuickAmount(                new Money() {{
                                                                                    amount = 780789L;
                                                                                    currency = "aliquid";
                                                                                }};, "mollitia") {{
                                                                    amount = new Money() {{
                                                                        amount = 428810L;
                                                                        currency = "quasi";
                                                                    }};
                                                                    ordinal = 555194L;
                                                                    score = 484942L;
                                                                    type = "commodi";
                                                                }}),
                                                            }};
                                                            eligibleForAutoAmounts = false;
                                                            option = "quidem";
                                                        }};
                                                        subscriptionPlanData = new CatalogSubscriptionPlan("totam",                 new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                                            add(new SubscriptionPhase("dicta",                 new Money() {{
                                                                                                amount = 369099L;
                                                                                                currency = "consequuntur";
                                                                                            }};) {{
                                                                                cadence = "maiores";
                                                                                ordinal = 667646L;
                                                                                periods = 144058L;
                                                                                recurringPriceMoney = new Money() {{
                                                                                    amount = 84207L;
                                                                                    currency = "necessitatibus";
                                                                                }};
                                                                                uid = "iste";
                                                                            }}),
                                                                            add(new SubscriptionPhase("beatae",                 new Money() {{
                                                                                                amount = 420233L;
                                                                                                currency = "ducimus";
                                                                                            }};) {{
                                                                                cadence = "cumque";
                                                                                ordinal = 696219L;
                                                                                periods = 247615L;
                                                                                recurringPriceMoney = new Money() {{
                                                                                    amount = 109569L;
                                                                                    currency = "sunt";
                                                                                }};
                                                                                uid = "molestias";
                                                                            }}),
                                                                        }}) {{
                                                            name = "Christie Cummerata";
                                                            phases = new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                                add(new SubscriptionPhase("recusandae",                 new Money() {{
                                                                                    amount = 787452L;
                                                                                    currency = "facere";
                                                                                }};) {{
                                                                    cadence = "impedit";
                                                                    ordinal = 601803L;
                                                                    periods = 281454L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 814585L;
                                                                        currency = "voluptas";
                                                                    }};
                                                                    uid = "doloribus";
                                                                }}),
                                                                add(new SubscriptionPhase("eaque",                 new Money() {{
                                                                                    amount = 431258L;
                                                                                    currency = "laboriosam";
                                                                                }};) {{
                                                                    cadence = "dignissimos";
                                                                    ordinal = 614346L;
                                                                    periods = 588473L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 221490L;
                                                                        currency = "sint";
                                                                    }};
                                                                    uid = "aperiam";
                                                                }}),
                                                                add(new SubscriptionPhase("voluptatem",                 new Money() {{
                                                                                    amount = 4747L;
                                                                                    currency = "velit";
                                                                                }};) {{
                                                                    cadence = "laborum";
                                                                    ordinal = 422276L;
                                                                    periods = 828481L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 129631L;
                                                                        currency = "fugiat";
                                                                    }};
                                                                    uid = "doloremque";
                                                                }}),
                                                                add(new SubscriptionPhase("recusandae",                 new Money() {{
                                                                                    amount = 767466L;
                                                                                    currency = "doloremque";
                                                                                }};) {{
                                                                    cadence = "ullam";
                                                                    ordinal = 339094L;
                                                                    periods = 242532L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 188732L;
                                                                        currency = "quas";
                                                                    }};
                                                                    uid = "maxime";
                                                                }}),
                                                            }};
                                                        }};
                                                        taxData = new CatalogTax() {{
                                                            appliesToCustomAmounts = false;
                                                            calculationPhase = "libero";
                                                            enabled = false;
                                                            inclusionType = "molestias";
                                                            name = "Manuel Russel";
                                                            percentage = "distinctio";
                                                        }};
                                                        timePeriodData = new CatalogTimePeriod() {{
                                                            event = "voluptatem";
                                                        }};
                                                        type = "non";
                                                        updatedAt = "quaerat";
                                                        version = 10164L;
                                                    }}),
                                                    add(new CatalogObject("doloremque", "fuga") {{
                                                        absentAtLocationIds = new String[]{{
                                                            add("quibusdam"),
                                                            add("consectetur"),
                                                        }};
                                                        catalogV1Ids = new org.openapis.openapi.models.shared.CatalogV1Id[]{{
                                                            add(new CatalogV1Id() {{
                                                                catalogV1Id = "quaerat";
                                                                locationId = "earum";
                                                            }}),
                                                            add(new CatalogV1Id() {{
                                                                catalogV1Id = "tenetur";
                                                                locationId = "assumenda";
                                                            }}),
                                                        }};
                                                        categoryData = new CatalogCategory() {{
                                                            name = "Jill Hermann III";
                                                        }};
                                                        customAttributeDefinitionData = new CatalogCustomAttributeDefinition(                new String[]{{
                                                                            add("facere"),
                                                                            add("sed"),
                                                                            add("inventore"),
                                                                        }}, "voluptatibus", "unde") {{
                                                            allowedObjectTypes = new String[]{{
                                                                add("dicta"),
                                                                add("quia"),
                                                                add("commodi"),
                                                                add("neque"),
                                                            }};
                                                            appVisibility = "quibusdam";
                                                            customAttributeUsageCount = 255264L;
                                                            description = "rem";
                                                            key = "officiis";
                                                            name = "Luis Hessel";
                                                            numberConfig = new CatalogCustomAttributeDefinitionNumberConfig() {{
                                                                precision = 808050L;
                                                            }};
                                                            selectionConfig = new CatalogCustomAttributeDefinitionSelectionConfig() {{
                                                                allowedSelections = new org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[]{{
                                                                    add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("soluta") {{
                                                                        name = "Julian Buckridge";
                                                                        uid = "consequatur";
                                                                    }}),
                                                                    add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("aperiam") {{
                                                                        name = "Jimmy Walsh";
                                                                        uid = "magni";
                                                                    }}),
                                                                    add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("voluptate") {{
                                                                        name = "Desiree Kshlerin III";
                                                                        uid = "ad";
                                                                    }}),
                                                                }};
                                                                maxAllowedSelections = 426594L;
                                                            }};
                                                            sellerVisibility = "minima";
                                                            sourceApplication = new SourceApplication() {{
                                                                applicationId = "sit";
                                                                name = "Ms. Vanessa Hahn";
                                                                product = "doloremque";
                                                            }};
                                                            stringConfig = new CatalogCustomAttributeDefinitionStringConfig() {{
                                                                enforceUniqueness = false;
                                                            }};
                                                            type = "assumenda";
                                                        }};
                                                        customAttributeValues = new java.util.HashMap<String, org.openapis.openapi.models.shared.CatalogCustomAttributeValue>() {{
                                                            put("repellendus", new CatalogCustomAttributeValue() {{
                                                                booleanValue = false;
                                                                customAttributeDefinitionId = "consequatur";
                                                                key = "adipisci";
                                                                name = "Kara Glover";
                                                                numberValue = "maxime";
                                                                selectionUidValues = new String[]{{
                                                                    add("beatae"),
                                                                }};
                                                                stringValue = "id";
                                                                type = "consequatur";
                                                            }});
                                                            put("quos", new CatalogCustomAttributeValue() {{
                                                                booleanValue = false;
                                                                customAttributeDefinitionId = "ratione";
                                                                key = "iure";
                                                                name = "Mrs. Julia Morissette";
                                                                numberValue = "facilis";
                                                                selectionUidValues = new String[]{{
                                                                    add("ullam"),
                                                                    add("aut"),
                                                                    add("quia"),
                                                                }};
                                                                stringValue = "officia";
                                                                type = "quaerat";
                                                            }});
                                                            put("corporis", new CatalogCustomAttributeValue() {{
                                                                booleanValue = false;
                                                                customAttributeDefinitionId = "accusamus";
                                                                key = "iusto";
                                                                name = "Claude Durgan";
                                                                numberValue = "praesentium";
                                                                selectionUidValues = new String[]{{
                                                                    add("ipsam"),
                                                                    add("officiis"),
                                                                }};
                                                                stringValue = "sequi";
                                                                type = "magni";
                                                            }});
                                                        }};
                                                        discountData = new CatalogDiscount() {{
                                                            amountMoney = new Money() {{
                                                                amount = 29881L;
                                                                currency = "est";
                                                            }};
                                                            discountType = "amet";
                                                            labelColor = "veritatis";
                                                            modifyTaxBasis = "error";
                                                            name = "Herbert Prohaska";
                                                            percentage = "earum";
                                                            pinRequired = false;
                                                        }};
                                                        id = "947c9a86-7bc4-4242-a665-816ddca8ef51";
                                                        imageData = new CatalogImage() {{
                                                            caption = "doloribus";
                                                            name = "Rudolph Gleason";
                                                            url = "occaecati";
                                                        }};
                                                        imageId = "ipsum";
                                                        isDeleted = false;
                                                        itemData = new CatalogItem() {{
                                                            abbreviation = "accusamus";
                                                            availableElectronically = false;
                                                            availableForPickup = false;
                                                            availableOnline = false;
                                                            categoryId = "quisquam";
                                                            description = "quasi";
                                                            itemOptions = new org.openapis.openapi.models.shared.CatalogItemOptionForItem[]{{
                                                                add(new CatalogItemOptionForItem() {{
                                                                    itemOptionId = "quo";
                                                                }}),
                                                            }};
                                                            labelColor = "temporibus";
                                                            modifierListInfo = new org.openapis.openapi.models.shared.CatalogItemModifierListInfo[]{{
                                                                add(new CatalogItemModifierListInfo("molestias") {{
                                                                    enabled = false;
                                                                    maxSelectedModifiers = 661578L;
                                                                    minSelectedModifiers = 840992L;
                                                                    modifierListId = "ipsa";
                                                                    modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                                        add(new CatalogModifierOverride("quam") {{
                                                                            modifierId = "placeat";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("delectus") {{
                                                                            modifierId = "similique";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("facere") {{
                                                                            modifierId = "saepe";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("at") {{
                                                                            modifierId = "nobis";
                                                                            onByDefault = false;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                                add(new CatalogItemModifierListInfo("esse") {{
                                                                    enabled = false;
                                                                    maxSelectedModifiers = 12877L;
                                                                    minSelectedModifiers = 836548L;
                                                                    modifierListId = "tenetur";
                                                                    modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                                        add(new CatalogModifierOverride("corrupti") {{
                                                                            modifierId = "numquam";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("dolore") {{
                                                                            modifierId = "similique";
                                                                            onByDefault = false;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                                add(new CatalogItemModifierListInfo("voluptatem") {{
                                                                    enabled = false;
                                                                    maxSelectedModifiers = 968205L;
                                                                    minSelectedModifiers = 611792L;
                                                                    modifierListId = "amet";
                                                                    modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                                        add(new CatalogModifierOverride("impedit") {{
                                                                            modifierId = "aut";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("quos") {{
                                                                            modifierId = "minima";
                                                                            onByDefault = false;
                                                                        }}),
                                                                        add(new CatalogModifierOverride("quas") {{
                                                                            modifierId = "blanditiis";
                                                                            onByDefault = false;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                            }};
                                                            name = "Willard Erdman";
                                                            productType = "facilis";
                                                            skipModifierScreen = false;
                                                            sortName = "maiores";
                                                            taxIds = new String[]{{
                                                                add("recusandae"),
                                                                add("a"),
                                                                add("consectetur"),
                                                            }};
                                                            variations = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                            }};
                                                        }};
                                                        itemOptionData = new CatalogItemOption() {{
                                                            description = "voluptatibus";
                                                            displayName = "assumenda";
                                                            name = "Arturo Wisoky";
                                                            showColors = false;
                                                            values = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                                add(new CatalogObject() {{}}),
                                                            }};
                                                        }};
                                                        itemOptionValueData = new CatalogItemOptionValue() {{
                                                            color = "quam";
                                                            description = "omnis";
                                                            itemOptionId = "similique";
                                                            name = "Edwin Schumm";
                                                            ordinal = 448407L;
                                                        }};
                                                        itemVariationData = new CatalogItemVariation() {{
                                                            availableForBooking = false;
                                                            inventoryAlertThreshold = 152047L;
                                                            inventoryAlertType = "non";
                                                            itemId = "porro";
                                                            itemOptionValues = new org.openapis.openapi.models.shared.CatalogItemOptionValueForItemVariation[]{{
                                                                add(new CatalogItemOptionValueForItemVariation() {{
                                                                    itemOptionId = "soluta";
                                                                    itemOptionValueId = "ipsa";
                                                                }}),
                                                                add(new CatalogItemOptionValueForItemVariation() {{
                                                                    itemOptionId = "reiciendis";
                                                                    itemOptionValueId = "labore";
                                                                }}),
                                                                add(new CatalogItemOptionValueForItemVariation() {{
                                                                    itemOptionId = "vero";
                                                                    itemOptionValueId = "eos";
                                                                }}),
                                                                add(new CatalogItemOptionValueForItemVariation() {{
                                                                    itemOptionId = "quas";
                                                                    itemOptionValueId = "quasi";
                                                                }}),
                                                            }};
                                                            locationOverrides = new org.openapis.openapi.models.shared.ItemVariationLocationOverrides[]{{
                                                                add(new ItemVariationLocationOverrides() {{
                                                                    inventoryAlertThreshold = 509799L;
                                                                    inventoryAlertType = "iusto";
                                                                    locationId = "fugiat";
                                                                    priceMoney = new Money() {{
                                                                        amount = 313695L;
                                                                        currency = "iure";
                                                                    }};
                                                                    pricingType = "laudantium";
                                                                    trackInventory = false;
                                                                }}),
                                                            }};
                                                            measurementUnitId = "modi";
                                                            name = "Eloise Stoltenberg";
                                                            ordinal = 505799L;
                                                            priceMoney = new Money() {{
                                                                amount = 315465L;
                                                                currency = "animi";
                                                            }};
                                                            pricingType = "unde";
                                                            serviceDuration = 61498L;
                                                            sku = "eum";
                                                            stockable = false;
                                                            stockableConversion = new CatalogStockConversion("ratione", "blanditiis", "quidem") {{
                                                                nonstockableQuantity = "nostrum";
                                                                stockableItemVariationId = "eveniet";
                                                                stockableQuantity = "laboriosam";
                                                            }};
                                                            teamMemberIds = new String[]{{
                                                                add("reiciendis"),
                                                                add("placeat"),
                                                                add("dolores"),
                                                                add("consequatur"),
                                                            }};
                                                            trackInventory = false;
                                                            upc = "nesciunt";
                                                            userData = "quia";
                                                        }};
                                                        measurementUnitData = new CatalogMeasurementUnit() {{
                                                            measurementUnit = new MeasurementUnit() {{
                                                                areaUnit = "quidem";
                                                                customUnit = new MeasurementUnitCustom("fugit", "dolorem") {{
                                                                    abbreviation = "voluptas";
                                                                    name = "Dwight Kulas";
                                                                }};
                                                                genericUnit = "quidem";
                                                                lengthUnit = "molestiae";
                                                                timeUnit = "debitis";
                                                                type = "vitae";
                                                                volumeUnit = "dolor";
                                                                weightUnit = "ad";
                                                            }};
                                                            precision = 539886L;
                                                        }};
                                                        modifierData = new CatalogModifier() {{
                                                            modifierListId = "ut";
                                                            name = "Roland Nolan Sr.";
                                                            ordinal = 773355L;
                                                            priceMoney = new Money() {{
                                                                amount = 401388L;
                                                                currency = "praesentium";
                                                            }};
                                                        }};
                                                        modifierListData = new CatalogModifierList() {{
                                                            modifiers = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                                add(new CatalogObject() {{}}),
                                                            }};
                                                            name = "Essie Larkin";
                                                            ordinal = 917877L;
                                                            selectionType = "dicta";
                                                        }};
                                                        presentAtAllLocations = false;
                                                        presentAtLocationIds = new String[]{{
                                                            add("ullam"),
                                                        }};
                                                        pricingRuleData = new CatalogPricingRule() {{
                                                            applyProductsId = "iusto";
                                                            customerGroupIdsAny = new String[]{{
                                                                add("voluptate"),
                                                            }};
                                                            discountId = "sed";
                                                            excludeProductsId = "dolorem";
                                                            excludeStrategy = "eaque";
                                                            matchProductsId = "exercitationem";
                                                            name = "Allison Kling";
                                                            timePeriodIds = new String[]{{
                                                                add("fuga"),
                                                                add("totam"),
                                                                add("cupiditate"),
                                                                add("at"),
                                                            }};
                                                            validFromDate = "doloribus";
                                                            validFromLocalTime = "omnis";
                                                            validUntilDate = "quam";
                                                            validUntilLocalTime = "exercitationem";
                                                        }};
                                                        productSetData = new CatalogProductSet() {{
                                                            allProducts = false;
                                                            name = "Earl Hauck";
                                                            productIdsAll = new String[]{{
                                                                add("aliquid"),
                                                                add("aperiam"),
                                                                add("perspiciatis"),
                                                            }};
                                                            productIdsAny = new String[]{{
                                                                add("itaque"),
                                                            }};
                                                            quantityExact = 600185L;
                                                            quantityMax = 767778L;
                                                            quantityMin = 225001L;
                                                        }};
                                                        quickAmountsSettingsData = new CatalogQuickAmountsSettings("placeat") {{
                                                            amounts = new org.openapis.openapi.models.shared.CatalogQuickAmount[]{{
                                                                add(new CatalogQuickAmount(                new Money() {{
                                                                                    amount = 114212L;
                                                                                    currency = "veritatis";
                                                                                }};, "facere") {{
                                                                    amount = new Money() {{
                                                                        amount = 837327L;
                                                                        currency = "minus";
                                                                    }};
                                                                    ordinal = 326942L;
                                                                    score = 951901L;
                                                                    type = "beatae";
                                                                }}),
                                                                add(new CatalogQuickAmount(                new Money() {{
                                                                                    amount = 398847L;
                                                                                    currency = "pariatur";
                                                                                }};, "enim") {{
                                                                    amount = new Money() {{
                                                                        amount = 937123L;
                                                                        currency = "laborum";
                                                                    }};
                                                                    ordinal = 118020L;
                                                                    score = 32737L;
                                                                    type = "odit";
                                                                }}),
                                                                add(new CatalogQuickAmount(                new Money() {{
                                                                                    amount = 112391L;
                                                                                    currency = "omnis";
                                                                                }};, "alias") {{
                                                                    amount = new Money() {{
                                                                        amount = 254288L;
                                                                        currency = "architecto";
                                                                    }};
                                                                    ordinal = 665952L;
                                                                    score = 309852L;
                                                                    type = "facere";
                                                                }}),
                                                                add(new CatalogQuickAmount(                new Money() {{
                                                                                    amount = 487839L;
                                                                                    currency = "quas";
                                                                                }};, "ipsa") {{
                                                                    amount = new Money() {{
                                                                        amount = 957489L;
                                                                        currency = "officiis";
                                                                    }};
                                                                    ordinal = 708883L;
                                                                    score = 156843L;
                                                                    type = "vitae";
                                                                }}),
                                                            }};
                                                            eligibleForAutoAmounts = false;
                                                            option = "distinctio";
                                                        }};
                                                        subscriptionPlanData = new CatalogSubscriptionPlan("earum",                 new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                                            add(new SubscriptionPhase("consectetur",                 new Money() {{
                                                                                                amount = 268749L;
                                                                                                currency = "aspernatur";
                                                                                            }};) {{
                                                                                cadence = "numquam";
                                                                                ordinal = 314733L;
                                                                                periods = 585046L;
                                                                                recurringPriceMoney = new Money() {{
                                                                                    amount = 578610L;
                                                                                    currency = "itaque";
                                                                                }};
                                                                                uid = "fuga";
                                                                            }}),
                                                                            add(new SubscriptionPhase("qui",                 new Money() {{
                                                                                                amount = 37477L;
                                                                                                currency = "consequatur";
                                                                                            }};) {{
                                                                                cadence = "explicabo";
                                                                                ordinal = 380450L;
                                                                                periods = 58808L;
                                                                                recurringPriceMoney = new Money() {{
                                                                                    amount = 910410L;
                                                                                    currency = "sint";
                                                                                }};
                                                                                uid = "nobis";
                                                                            }}),
                                                                        }}) {{
                                                            name = "Guillermo Balistreri";
                                                            phases = new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                                add(new SubscriptionPhase("esse",                 new Money() {{
                                                                                    amount = 42151L;
                                                                                    currency = "corrupti";
                                                                                }};) {{
                                                                    cadence = "assumenda";
                                                                    ordinal = 850406L;
                                                                    periods = 746834L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 297325L;
                                                                        currency = "laudantium";
                                                                    }};
                                                                    uid = "tempora";
                                                                }}),
                                                                add(new SubscriptionPhase("ab",                 new Money() {{
                                                                                    amount = 887835L;
                                                                                    currency = "eum";
                                                                                }};) {{
                                                                    cadence = "reiciendis";
                                                                    ordinal = 704644L;
                                                                    periods = 306023L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 922915L;
                                                                        currency = "amet";
                                                                    }};
                                                                    uid = "natus";
                                                                }}),
                                                                add(new SubscriptionPhase("labore",                 new Money() {{
                                                                                    amount = 773889L;
                                                                                    currency = "ut";
                                                                                }};) {{
                                                                    cadence = "rerum";
                                                                    ordinal = 808608L;
                                                                    periods = 68336L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 319592L;
                                                                        currency = "blanditiis";
                                                                    }};
                                                                    uid = "porro";
                                                                }}),
                                                            }};
                                                        }};
                                                        taxData = new CatalogTax() {{
                                                            appliesToCustomAmounts = false;
                                                            calculationPhase = "impedit";
                                                            enabled = false;
                                                            inclusionType = "recusandae";
                                                            name = "Miss Cassandra Orn";
                                                            percentage = "quos";
                                                        }};
                                                        timePeriodData = new CatalogTimePeriod() {{
                                                            event = "maiores";
                                                        }};
                                                        type = "quidem";
                                                        updatedAt = "in";
                                                        version = 635314L;
                                                    }}),
                                                }}) {{
                                    objects = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                        add(new CatalogObject("tempore", "adipisci") {{
                                            absentAtLocationIds = new String[]{{
                                                add("ipsam"),
                                                add("voluptate"),
                                                add("autem"),
                                            }};
                                            catalogV1Ids = new org.openapis.openapi.models.shared.CatalogV1Id[]{{
                                                add(new CatalogV1Id() {{
                                                    catalogV1Id = "eaque";
                                                    locationId = "pariatur";
                                                }}),
                                                add(new CatalogV1Id() {{
                                                    catalogV1Id = "nemo";
                                                    locationId = "voluptatibus";
                                                }}),
                                                add(new CatalogV1Id() {{
                                                    catalogV1Id = "perferendis";
                                                    locationId = "fugiat";
                                                }}),
                                            }};
                                            categoryData = new CatalogCategory() {{
                                                name = "Jennifer Runolfsdottir";
                                            }};
                                            customAttributeDefinitionData = new CatalogCustomAttributeDefinition(                new String[]{{
                                                                add("modi"),
                                                                add("iste"),
                                                                add("dolorum"),
                                                                add("deleniti"),
                                                            }}, "pariatur", "provident") {{
                                                allowedObjectTypes = new String[]{{
                                                    add("nobis"),
                                                    add("dolores"),
                                                    add("quis"),
                                                }};
                                                appVisibility = "totam";
                                                customAttributeUsageCount = 489549L;
                                                description = "eaque";
                                                key = "quis";
                                                name = "Ruby Auer";
                                                numberConfig = new CatalogCustomAttributeDefinitionNumberConfig() {{
                                                    precision = 463451L;
                                                }};
                                                selectionConfig = new CatalogCustomAttributeDefinitionSelectionConfig() {{
                                                    allowedSelections = new org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[]{{
                                                        add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("perspiciatis") {{
                                                            name = "Dean Welch";
                                                            uid = "facilis";
                                                        }}),
                                                    }};
                                                    maxAllowedSelections = 31838L;
                                                }};
                                                sellerVisibility = "porro";
                                                sourceApplication = new SourceApplication() {{
                                                    applicationId = "consequuntur";
                                                    name = "Jeremiah Beatty";
                                                    product = "adipisci";
                                                }};
                                                stringConfig = new CatalogCustomAttributeDefinitionStringConfig() {{
                                                    enforceUniqueness = false;
                                                }};
                                                type = "asperiores";
                                            }};
                                            customAttributeValues = new java.util.HashMap<String, org.openapis.openapi.models.shared.CatalogCustomAttributeValue>() {{
                                                put("libero", new CatalogCustomAttributeValue() {{
                                                    booleanValue = false;
                                                    customAttributeDefinitionId = "delectus";
                                                    key = "quaerat";
                                                    name = "Gene Effertz";
                                                    numberValue = "qui";
                                                    selectionUidValues = new String[]{{
                                                        add("hic"),
                                                    }};
                                                    stringValue = "excepturi";
                                                    type = "cum";
                                                }});
                                                put("voluptate", new CatalogCustomAttributeValue() {{
                                                    booleanValue = false;
                                                    customAttributeDefinitionId = "dignissimos";
                                                    key = "reiciendis";
                                                    name = "Mr. Lee Funk III";
                                                    numberValue = "odio";
                                                    selectionUidValues = new String[]{{
                                                        add("accusamus"),
                                                        add("quidem"),
                                                    }};
                                                    stringValue = "voluptatibus";
                                                    type = "voluptas";
                                                }});
                                                put("natus", new CatalogCustomAttributeValue() {{
                                                    booleanValue = false;
                                                    customAttributeDefinitionId = "eos";
                                                    key = "atque";
                                                    name = "Ginger Bergstrom";
                                                    numberValue = "iusto";
                                                    selectionUidValues = new String[]{{
                                                        add("dolorum"),
                                                        add("deleniti"),
                                                    }};
                                                    stringValue = "omnis";
                                                    type = "necessitatibus";
                                                }});
                                                put("distinctio", new CatalogCustomAttributeValue() {{
                                                    booleanValue = false;
                                                    customAttributeDefinitionId = "asperiores";
                                                    key = "nihil";
                                                    name = "Tamara Ondricka";
                                                    numberValue = "aspernatur";
                                                    selectionUidValues = new String[]{{
                                                        add("amet"),
                                                    }};
                                                    stringValue = "optio";
                                                    type = "accusamus";
                                                }});
                                            }};
                                            discountData = new CatalogDiscount() {{
                                                amountMoney = new Money() {{
                                                    amount = 320017L;
                                                    currency = "saepe";
                                                }};
                                                discountType = "suscipit";
                                                labelColor = "deserunt";
                                                modifyTaxBasis = "provident";
                                                name = "Kari Leannon PhD";
                                                percentage = "quaerat";
                                                pinRequired = false;
                                            }};
                                            id = "46ce2af7-a73c-4f3b-a453-f870b326b5a7";
                                            imageData = new CatalogImage() {{
                                                caption = "ipsum";
                                                name = "Norma McGlynn";
                                                url = "soluta";
                                            }};
                                            imageId = "dicta";
                                            isDeleted = false;
                                            itemData = new CatalogItem() {{
                                                abbreviation = "laborum";
                                                availableElectronically = false;
                                                availableForPickup = false;
                                                availableOnline = false;
                                                categoryId = "totam";
                                                description = "incidunt";
                                                itemOptions = new org.openapis.openapi.models.shared.CatalogItemOptionForItem[]{{
                                                    add(new CatalogItemOptionForItem() {{
                                                        itemOptionId = "dolores";
                                                    }}),
                                                }};
                                                labelColor = "distinctio";
                                                modifierListInfo = new org.openapis.openapi.models.shared.CatalogItemModifierListInfo[]{{
                                                    add(new CatalogItemModifierListInfo("hic") {{
                                                        enabled = false;
                                                        maxSelectedModifiers = 396060L;
                                                        minSelectedModifiers = 463150L;
                                                        modifierListId = "molestias";
                                                        modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                            add(new CatalogModifierOverride("neque") {{
                                                                modifierId = "qui";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("magni") {{
                                                                modifierId = "fugit";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("sunt") {{
                                                                modifierId = "odio";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("nam") {{
                                                                modifierId = "ullam";
                                                                onByDefault = false;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new CatalogItemModifierListInfo("tempore") {{
                                                        enabled = false;
                                                        maxSelectedModifiers = 30452L;
                                                        minSelectedModifiers = 765326L;
                                                        modifierListId = "soluta";
                                                        modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                            add(new CatalogModifierOverride("saepe") {{
                                                                modifierId = "et";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("veritatis") {{
                                                                modifierId = "ipsum";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("quos") {{
                                                                modifierId = "nobis";
                                                                onByDefault = false;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new CatalogItemModifierListInfo("adipisci") {{
                                                        enabled = false;
                                                        maxSelectedModifiers = 584476L;
                                                        minSelectedModifiers = 45614L;
                                                        modifierListId = "delectus";
                                                        modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                            add(new CatalogModifierOverride("labore") {{
                                                                modifierId = "dolore";
                                                                onByDefault = false;
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                name = "Ms. Joe Berge";
                                                productType = "consequatur";
                                                skipModifierScreen = false;
                                                sortName = "est";
                                                taxIds = new String[]{{
                                                    add("porro"),
                                                    add("doloribus"),
                                                    add("ut"),
                                                    add("facilis"),
                                                }};
                                                variations = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                }};
                                            }};
                                            itemOptionData = new CatalogItemOption() {{
                                                description = "qui";
                                                displayName = "quae";
                                                name = "Darren McClure";
                                                showColors = false;
                                                values = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                }};
                                            }};
                                            itemOptionValueData = new CatalogItemOptionValue() {{
                                                color = "omnis";
                                                description = "quis";
                                                itemOptionId = "ipsum";
                                                name = "Karl Feeney";
                                                ordinal = 492268L;
                                            }};
                                            itemVariationData = new CatalogItemVariation() {{
                                                availableForBooking = false;
                                                inventoryAlertThreshold = 941378L;
                                                inventoryAlertType = "distinctio";
                                                itemId = "quod";
                                                itemOptionValues = new org.openapis.openapi.models.shared.CatalogItemOptionValueForItemVariation[]{{
                                                    add(new CatalogItemOptionValueForItemVariation() {{
                                                        itemOptionId = "similique";
                                                        itemOptionValueId = "facilis";
                                                    }}),
                                                    add(new CatalogItemOptionValueForItemVariation() {{
                                                        itemOptionId = "vero";
                                                        itemOptionValueId = "ducimus";
                                                    }}),
                                                }};
                                                locationOverrides = new org.openapis.openapi.models.shared.ItemVariationLocationOverrides[]{{
                                                    add(new ItemVariationLocationOverrides() {{
                                                        inventoryAlertThreshold = 844550L;
                                                        inventoryAlertType = "illum";
                                                        locationId = "sequi";
                                                        priceMoney = new Money() {{
                                                            amount = 617877L;
                                                            currency = "impedit";
                                                        }};
                                                        pricingType = "aut";
                                                        trackInventory = false;
                                                    }}),
                                                    add(new ItemVariationLocationOverrides() {{
                                                        inventoryAlertThreshold = 974259L;
                                                        inventoryAlertType = "exercitationem";
                                                        locationId = "nulla";
                                                        priceMoney = new Money() {{
                                                            amount = 148141L;
                                                            currency = "porro";
                                                        }};
                                                        pricingType = "maiores";
                                                        trackInventory = false;
                                                    }}),
                                                }};
                                                measurementUnitId = "doloribus";
                                                name = "Miss Vicky Kuphal";
                                                ordinal = 368584L;
                                                priceMoney = new Money() {{
                                                    amount = 410492L;
                                                    currency = "aspernatur";
                                                }};
                                                pricingType = "vel";
                                                serviceDuration = 822118L;
                                                sku = "magnam";
                                                stockable = false;
                                                stockableConversion = new CatalogStockConversion("dicta", "dolor", "maiores") {{
                                                    nonstockableQuantity = "ratione";
                                                    stockableItemVariationId = "ex";
                                                    stockableQuantity = "laudantium";
                                                }};
                                                teamMemberIds = new String[]{{
                                                    add("ex"),
                                                }};
                                                trackInventory = false;
                                                upc = "nulla";
                                                userData = "excepturi";
                                            }};
                                            measurementUnitData = new CatalogMeasurementUnit() {{
                                                measurementUnit = new MeasurementUnit() {{
                                                    areaUnit = "voluptatibus";
                                                    customUnit = new MeasurementUnitCustom("corporis", "veniam") {{
                                                        abbreviation = "nostrum";
                                                        name = "Devin Ullrich";
                                                    }};
                                                    genericUnit = "aliquid";
                                                    lengthUnit = "inventore";
                                                    timeUnit = "magnam";
                                                    type = "ea";
                                                    volumeUnit = "quo";
                                                    weightUnit = "consectetur";
                                                }};
                                                precision = 926213L;
                                            }};
                                            modifierData = new CatalogModifier() {{
                                                modifierListId = "aspernatur";
                                                name = "Shirley Wilderman Jr.";
                                                ordinal = 533466L;
                                                priceMoney = new Money() {{
                                                    amount = 770581L;
                                                    currency = "aliquam";
                                                }};
                                            }};
                                            modifierListData = new CatalogModifierList() {{
                                                modifiers = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                    add(new CatalogObject() {{}}),
                                                }};
                                                name = "Miss Dennis Friesen";
                                                ordinal = 810424L;
                                                selectionType = "velit";
                                            }};
                                            presentAtAllLocations = false;
                                            presentAtLocationIds = new String[]{{
                                                add("autem"),
                                                add("nobis"),
                                            }};
                                            pricingRuleData = new CatalogPricingRule() {{
                                                applyProductsId = "quas";
                                                customerGroupIdsAny = new String[]{{
                                                    add("nulla"),
                                                    add("voluptas"),
                                                    add("libero"),
                                                    add("quasi"),
                                                }};
                                                discountId = "tempora";
                                                excludeProductsId = "numquam";
                                                excludeStrategy = "explicabo";
                                                matchProductsId = "provident";
                                                name = "Minnie Gutkowski";
                                                timePeriodIds = new String[]{{
                                                    add("esse"),
                                                    add("rem"),
                                                }};
                                                validFromDate = "fuga";
                                                validFromLocalTime = "reprehenderit";
                                                validUntilDate = "quidem";
                                                validUntilLocalTime = "fugiat";
                                            }};
                                            productSetData = new CatalogProductSet() {{
                                                allProducts = false;
                                                name = "Agnes Hoeger";
                                                productIdsAll = new String[]{{
                                                    add("quisquam"),
                                                    add("veritatis"),
                                                    add("ipsa"),
                                                }};
                                                productIdsAny = new String[]{{
                                                    add("quidem"),
                                                    add("neque"),
                                                    add("quo"),
                                                }};
                                                quantityExact = 847276L;
                                                quantityMax = 777408L;
                                                quantityMin = 681359L;
                                            }};
                                            quickAmountsSettingsData = new CatalogQuickAmountsSettings("inventore") {{
                                                amounts = new org.openapis.openapi.models.shared.CatalogQuickAmount[]{{
                                                    add(new CatalogQuickAmount(                new Money() {{
                                                                        amount = 272822L;
                                                                        currency = "debitis";
                                                                    }};, "ipsam") {{
                                                        amount = new Money() {{
                                                            amount = 178367L;
                                                            currency = "voluptas";
                                                        }};
                                                        ordinal = 69859L;
                                                        score = 587600L;
                                                        type = "consequatur";
                                                    }}),
                                                    add(new CatalogQuickAmount(                new Money() {{
                                                                        amount = 44612L;
                                                                        currency = "distinctio";
                                                                    }};, "quod") {{
                                                        amount = new Money() {{
                                                            amount = 133465L;
                                                            currency = "sequi";
                                                        }};
                                                        ordinal = 779192L;
                                                        score = 459856L;
                                                        type = "recusandae";
                                                    }}),
                                                }};
                                                eligibleForAutoAmounts = false;
                                                option = "dignissimos";
                                            }};
                                            subscriptionPlanData = new CatalogSubscriptionPlan("atque",                 new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                                add(new SubscriptionPhase("nam",                 new Money() {{
                                                                                    amount = 877131L;
                                                                                    currency = "aliquid";
                                                                                }};) {{
                                                                    cadence = "esse";
                                                                    ordinal = 910545L;
                                                                    periods = 882042L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 82971L;
                                                                        currency = "esse";
                                                                    }};
                                                                    uid = "quod";
                                                                }}),
                                                            }}) {{
                                                name = "Christy Tillman";
                                                phases = new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                    add(new SubscriptionPhase("porro",                 new Money() {{
                                                                        amount = 430402L;
                                                                        currency = "quas";
                                                                    }};) {{
                                                        cadence = "commodi";
                                                        ordinal = 959434L;
                                                        periods = 174112L;
                                                        recurringPriceMoney = new Money() {{
                                                            amount = 645570L;
                                                            currency = "molestiae";
                                                        }};
                                                        uid = "accusantium";
                                                    }}),
                                                    add(new SubscriptionPhase("incidunt",                 new Money() {{
                                                                        amount = 539224L;
                                                                        currency = "explicabo";
                                                                    }};) {{
                                                        cadence = "praesentium";
                                                        ordinal = 159867L;
                                                        periods = 536178L;
                                                        recurringPriceMoney = new Money() {{
                                                            amount = 143829L;
                                                            currency = "fuga";
                                                        }};
                                                        uid = "mollitia";
                                                    }}),
                                                    add(new SubscriptionPhase("explicabo",                 new Money() {{
                                                                        amount = 903984L;
                                                                        currency = "occaecati";
                                                                    }};) {{
                                                        cadence = "minima";
                                                        ordinal = 392676L;
                                                        periods = 147014L;
                                                        recurringPriceMoney = new Money() {{
                                                            amount = 956406L;
                                                            currency = "consequuntur";
                                                        }};
                                                        uid = "ratione";
                                                    }}),
                                                }};
                                            }};
                                            taxData = new CatalogTax() {{
                                                appliesToCustomAmounts = false;
                                                calculationPhase = "quasi";
                                                enabled = false;
                                                inclusionType = "saepe";
                                                name = "Opal Kozey";
                                                percentage = "minima";
                                            }};
                                            timePeriodData = new CatalogTimePeriod() {{
                                                event = "distinctio";
                                            }};
                                            type = "eligendi";
                                            updatedAt = "sit";
                                            version = 636061L;
                                        }}),
                                        add(new CatalogObject("ullam", "quasi") {{
                                            absentAtLocationIds = new String[]{{
                                                add("consequuntur"),
                                                add("consequatur"),
                                                add("minus"),
                                                add("quaerat"),
                                            }};
                                            catalogV1Ids = new org.openapis.openapi.models.shared.CatalogV1Id[]{{
                                                add(new CatalogV1Id() {{
                                                    catalogV1Id = "consectetur";
                                                    locationId = "esse";
                                                }}),
                                                add(new CatalogV1Id() {{
                                                    catalogV1Id = "blanditiis";
                                                    locationId = "provident";
                                                }}),
                                                add(new CatalogV1Id() {{
                                                    catalogV1Id = "a";
                                                    locationId = "nulla";
                                                }}),
                                                add(new CatalogV1Id() {{
                                                    catalogV1Id = "quas";
                                                    locationId = "esse";
                                                }}),
                                            }};
                                            categoryData = new CatalogCategory() {{
                                                name = "Lorene Mueller";
                                            }};
                                            customAttributeDefinitionData = new CatalogCustomAttributeDefinition(                new String[]{{
                                                                add("consectetur"),
                                                            }}, "adipisci", "iste") {{
                                                allowedObjectTypes = new String[]{{
                                                    add("quia"),
                                                    add("eveniet"),
                                                    add("asperiores"),
                                                    add("facere"),
                                                }};
                                                appVisibility = "veritatis";
                                                customAttributeUsageCount = 159414L;
                                                description = "quasi";
                                                key = "similique";
                                                name = "Dr. Gene Wiegand";
                                                numberConfig = new CatalogCustomAttributeDefinitionNumberConfig() {{
                                                    precision = 447378L;
                                                }};
                                                selectionConfig = new CatalogCustomAttributeDefinitionSelectionConfig() {{
                                                    allowedSelections = new org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[]{{
                                                        add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("ullam") {{
                                                            name = "Mrs. Gilberto Roberts";
                                                            uid = "dicta";
                                                        }}),
                                                        add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("ex") {{
                                                            name = "Ms. Dana Huel";
                                                            uid = "quibusdam";
                                                        }}),
                                                    }};
                                                    maxAllowedSelections = 536275L;
                                                }};
                                                sellerVisibility = "itaque";
                                                sourceApplication = new SourceApplication() {{
                                                    applicationId = "dolorum";
                                                    name = "Dr. Belinda West III";
                                                    product = "ipsa";
                                                }};
                                                stringConfig = new CatalogCustomAttributeDefinitionStringConfig() {{
                                                    enforceUniqueness = false;
                                                }};
                                                type = "minima";
                                            }};
                                            customAttributeValues = new java.util.HashMap<String, org.openapis.openapi.models.shared.CatalogCustomAttributeValue>() {{
                                                put("accusantium", new CatalogCustomAttributeValue() {{
                                                    booleanValue = false;
                                                    customAttributeDefinitionId = "rem";
                                                    key = "aut";
                                                    name = "Ms. Duane O'Conner";
                                                    numberValue = "voluptatem";
                                                    selectionUidValues = new String[]{{
                                                        add("occaecati"),
                                                    }};
                                                    stringValue = "numquam";
                                                    type = "impedit";
                                                }});
                                                put("explicabo", new CatalogCustomAttributeValue() {{
                                                    booleanValue = false;
                                                    customAttributeDefinitionId = "voluptas";
                                                    key = "aut";
                                                    name = "Jean Wunsch";
                                                    numberValue = "voluptatibus";
                                                    selectionUidValues = new String[]{{
                                                        add("asperiores"),
                                                        add("aperiam"),
                                                    }};
                                                    stringValue = "ea";
                                                    type = "quaerat";
                                                }});
                                                put("consequuntur", new CatalogCustomAttributeValue() {{
                                                    booleanValue = false;
                                                    customAttributeDefinitionId = "repellendus";
                                                    key = "officia";
                                                    name = "Cody Nikolaus";
                                                    numberValue = "quae";
                                                    selectionUidValues = new String[]{{
                                                        add("porro"),
                                                        add("quod"),
                                                    }};
                                                    stringValue = "labore";
                                                    type = "ab";
                                                }});
                                                put("adipisci", new CatalogCustomAttributeValue() {{
                                                    booleanValue = false;
                                                    customAttributeDefinitionId = "fuga";
                                                    key = "id";
                                                    name = "Sheila Nader";
                                                    numberValue = "totam";
                                                    selectionUidValues = new String[]{{
                                                        add("vel"),
                                                        add("ducimus"),
                                                        add("quos"),
                                                        add("vel"),
                                                    }};
                                                    stringValue = "labore";
                                                    type = "possimus";
                                                }});
                                            }};
                                            discountData = new CatalogDiscount() {{
                                                amountMoney = new Money() {{
                                                    amount = 706575L;
                                                    currency = "cum";
                                                }};
                                                discountType = "commodi";
                                                labelColor = "in";
                                                modifyTaxBasis = "corporis";
                                                name = "Mack Hettinger";
                                                percentage = "aperiam";
                                                pinRequired = false;
                                            }};
                                            id = "b375ed4f-6fbe-4e41-b333-17fe35b60eb1";
                                            imageData = new CatalogImage() {{
                                                caption = "accusamus";
                                                name = "Ricky Cole";
                                                url = "voluptas";
                                            }};
                                            imageId = "minima";
                                            isDeleted = false;
                                            itemData = new CatalogItem() {{
                                                abbreviation = "nobis";
                                                availableElectronically = false;
                                                availableForPickup = false;
                                                availableOnline = false;
                                                categoryId = "dolorum";
                                                description = "adipisci";
                                                itemOptions = new org.openapis.openapi.models.shared.CatalogItemOptionForItem[]{{
                                                    add(new CatalogItemOptionForItem() {{
                                                        itemOptionId = "dolores";
                                                    }}),
                                                    add(new CatalogItemOptionForItem() {{
                                                        itemOptionId = "blanditiis";
                                                    }}),
                                                    add(new CatalogItemOptionForItem() {{
                                                        itemOptionId = "in";
                                                    }}),
                                                    add(new CatalogItemOptionForItem() {{
                                                        itemOptionId = "dolore";
                                                    }}),
                                                }};
                                                labelColor = "aliquam";
                                                modifierListInfo = new org.openapis.openapi.models.shared.CatalogItemModifierListInfo[]{{
                                                    add(new CatalogItemModifierListInfo("pariatur") {{
                                                        enabled = false;
                                                        maxSelectedModifiers = 839189L;
                                                        minSelectedModifiers = 351870L;
                                                        modifierListId = "adipisci";
                                                        modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                            add(new CatalogModifierOverride("quas") {{
                                                                modifierId = "blanditiis";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("nesciunt") {{
                                                                modifierId = "hic";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("corrupti") {{
                                                                modifierId = "culpa";
                                                                onByDefault = false;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new CatalogItemModifierListInfo("expedita") {{
                                                        enabled = false;
                                                        maxSelectedModifiers = 519643L;
                                                        minSelectedModifiers = 940210L;
                                                        modifierListId = "exercitationem";
                                                        modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                            add(new CatalogModifierOverride("rerum") {{
                                                                modifierId = "sit";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("reiciendis") {{
                                                                modifierId = "sed";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("asperiores") {{
                                                                modifierId = "explicabo";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("voluptate") {{
                                                                modifierId = "facilis";
                                                                onByDefault = false;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new CatalogItemModifierListInfo("unde") {{
                                                        enabled = false;
                                                        maxSelectedModifiers = 70869L;
                                                        minSelectedModifiers = 611749L;
                                                        modifierListId = "dolore";
                                                        modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                            add(new CatalogModifierOverride("in") {{
                                                                modifierId = "sed";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("quidem") {{
                                                                modifierId = "commodi";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("voluptas") {{
                                                                modifierId = "explicabo";
                                                                onByDefault = false;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new CatalogItemModifierListInfo("eius") {{
                                                        enabled = false;
                                                        maxSelectedModifiers = 100032L;
                                                        minSelectedModifiers = 382808L;
                                                        modifierListId = "sapiente";
                                                        modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                            add(new CatalogModifierOverride("reiciendis") {{
                                                                modifierId = "illo";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("corrupti") {{
                                                                modifierId = "perferendis";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("incidunt") {{
                                                                modifierId = "maiores";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("provident") {{
                                                                modifierId = "sed";
                                                                onByDefault = false;
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                name = "Nathan Jaskolski";
                                                productType = "voluptatibus";
                                                skipModifierScreen = false;
                                                sortName = "tempora";
                                                taxIds = new String[]{{
                                                    add("voluptate"),
                                                    add("reiciendis"),
                                                }};
                                                variations = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                }};
                                            }};
                                            itemOptionData = new CatalogItemOption() {{
                                                description = "sit";
                                                displayName = "non";
                                                name = "Clayton Quitzon";
                                                showColors = false;
                                                values = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                }};
                                            }};
                                            itemOptionValueData = new CatalogItemOptionValue() {{
                                                color = "debitis";
                                                description = "rem";
                                                itemOptionId = "sit";
                                                name = "Julius Hartmann";
                                                ordinal = 967122L;
                                            }};
                                            itemVariationData = new CatalogItemVariation() {{
                                                availableForBooking = false;
                                                inventoryAlertThreshold = 862319L;
                                                inventoryAlertType = "magni";
                                                itemId = "aperiam";
                                                itemOptionValues = new org.openapis.openapi.models.shared.CatalogItemOptionValueForItemVariation[]{{
                                                    add(new CatalogItemOptionValueForItemVariation() {{
                                                        itemOptionId = "numquam";
                                                        itemOptionValueId = "veniam";
                                                    }}),
                                                    add(new CatalogItemOptionValueForItemVariation() {{
                                                        itemOptionId = "in";
                                                        itemOptionValueId = "officiis";
                                                    }}),
                                                    add(new CatalogItemOptionValueForItemVariation() {{
                                                        itemOptionId = "beatae";
                                                        itemOptionValueId = "laudantium";
                                                    }}),
                                                    add(new CatalogItemOptionValueForItemVariation() {{
                                                        itemOptionId = "exercitationem";
                                                        itemOptionValueId = "praesentium";
                                                    }}),
                                                }};
                                                locationOverrides = new org.openapis.openapi.models.shared.ItemVariationLocationOverrides[]{{
                                                    add(new ItemVariationLocationOverrides() {{
                                                        inventoryAlertThreshold = 386827L;
                                                        inventoryAlertType = "dolorum";
                                                        locationId = "voluptatum";
                                                        priceMoney = new Money() {{
                                                            amount = 622385L;
                                                            currency = "hic";
                                                        }};
                                                        pricingType = "expedita";
                                                        trackInventory = false;
                                                    }}),
                                                    add(new ItemVariationLocationOverrides() {{
                                                        inventoryAlertThreshold = 892863L;
                                                        inventoryAlertType = "neque";
                                                        locationId = "dolorum";
                                                        priceMoney = new Money() {{
                                                            amount = 341698L;
                                                            currency = "officia";
                                                        }};
                                                        pricingType = "dolorum";
                                                        trackInventory = false;
                                                    }}),
                                                    add(new ItemVariationLocationOverrides() {{
                                                        inventoryAlertThreshold = 548361L;
                                                        inventoryAlertType = "accusamus";
                                                        locationId = "tempora";
                                                        priceMoney = new Money() {{
                                                            amount = 543678L;
                                                            currency = "fugit";
                                                        }};
                                                        pricingType = "ut";
                                                        trackInventory = false;
                                                    }}),
                                                }};
                                                measurementUnitId = "fugiat";
                                                name = "Cecilia Quitzon IV";
                                                ordinal = 372679L;
                                                priceMoney = new Money() {{
                                                    amount = 24527L;
                                                    currency = "voluptatum";
                                                }};
                                                pricingType = "quas";
                                                serviceDuration = 922112L;
                                                sku = "corporis";
                                                stockable = false;
                                                stockableConversion = new CatalogStockConversion("sed", "sit", "vel") {{
                                                    nonstockableQuantity = "et";
                                                    stockableItemVariationId = "blanditiis";
                                                    stockableQuantity = "ex";
                                                }};
                                                teamMemberIds = new String[]{{
                                                    add("saepe"),
                                                    add("error"),
                                                }};
                                                trackInventory = false;
                                                upc = "consequatur";
                                                userData = "incidunt";
                                            }};
                                            measurementUnitData = new CatalogMeasurementUnit() {{
                                                measurementUnit = new MeasurementUnit() {{
                                                    areaUnit = "reiciendis";
                                                    customUnit = new MeasurementUnitCustom("quidem", "atque") {{
                                                        abbreviation = "dolorem";
                                                        name = "Gerald Bradtke";
                                                    }};
                                                    genericUnit = "laborum";
                                                    lengthUnit = "nam";
                                                    timeUnit = "tenetur";
                                                    type = "laboriosam";
                                                    volumeUnit = "alias";
                                                    weightUnit = "amet";
                                                }};
                                                precision = 647197L;
                                            }};
                                            modifierData = new CatalogModifier() {{
                                                modifierListId = "voluptate";
                                                name = "Boyd McKenzie";
                                                ordinal = 914791L;
                                                priceMoney = new Money() {{
                                                    amount = 16871L;
                                                    currency = "est";
                                                }};
                                            }};
                                            modifierListData = new CatalogModifierList() {{
                                                modifiers = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                }};
                                                name = "Chelsea Pfannerstill";
                                                ordinal = 333965L;
                                                selectionType = "voluptatem";
                                            }};
                                            presentAtAllLocations = false;
                                            presentAtLocationIds = new String[]{{
                                                add("repudiandae"),
                                                add("quasi"),
                                                add("atque"),
                                                add("reprehenderit"),
                                            }};
                                            pricingRuleData = new CatalogPricingRule() {{
                                                applyProductsId = "asperiores";
                                                customerGroupIdsAny = new String[]{{
                                                    add("suscipit"),
                                                    add("quidem"),
                                                    add("maxime"),
                                                }};
                                                discountId = "et";
                                                excludeProductsId = "esse";
                                                excludeStrategy = "amet";
                                                matchProductsId = "assumenda";
                                                name = "Leah Mueller";
                                                timePeriodIds = new String[]{{
                                                    add("natus"),
                                                    add("minima"),
                                                    add("aspernatur"),
                                                    add("ex"),
                                                }};
                                                validFromDate = "maiores";
                                                validFromLocalTime = "corrupti";
                                                validUntilDate = "at";
                                                validUntilLocalTime = "error";
                                            }};
                                            productSetData = new CatalogProductSet() {{
                                                allProducts = false;
                                                name = "Shane Walker";
                                                productIdsAll = new String[]{{
                                                    add("recusandae"),
                                                }};
                                                productIdsAny = new String[]{{
                                                    add("repellendus"),
                                                    add("labore"),
                                                    add("reiciendis"),
                                                }};
                                                quantityExact = 42976L;
                                                quantityMax = 919783L;
                                                quantityMin = 116098L;
                                            }};
                                            quickAmountsSettingsData = new CatalogQuickAmountsSettings("consequuntur") {{
                                                amounts = new org.openapis.openapi.models.shared.CatalogQuickAmount[]{{
                                                    add(new CatalogQuickAmount(                new Money() {{
                                                                        amount = 952143L;
                                                                        currency = "molestias";
                                                                    }};, "magnam") {{
                                                        amount = new Money() {{
                                                            amount = 106429L;
                                                            currency = "dolores";
                                                        }};
                                                        ordinal = 316488L;
                                                        score = 389135L;
                                                        type = "velit";
                                                    }}),
                                                }};
                                                eligibleForAutoAmounts = false;
                                                option = "saepe";
                                            }};
                                            subscriptionPlanData = new CatalogSubscriptionPlan("mollitia",                 new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                                add(new SubscriptionPhase("dolore",                 new Money() {{
                                                                                    amount = 680349L;
                                                                                    currency = "nesciunt";
                                                                                }};) {{
                                                                    cadence = "alias";
                                                                    ordinal = 979527L;
                                                                    periods = 970222L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 174658L;
                                                                        currency = "id";
                                                                    }};
                                                                    uid = "minima";
                                                                }}),
                                                                add(new SubscriptionPhase("ut",                 new Money() {{
                                                                                    amount = 633062L;
                                                                                    currency = "adipisci";
                                                                                }};) {{
                                                                    cadence = "quae";
                                                                    ordinal = 925703L;
                                                                    periods = 607249L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 309251L;
                                                                        currency = "molestiae";
                                                                    }};
                                                                    uid = "ex";
                                                                }}),
                                                            }}) {{
                                                name = "Frankie Metz";
                                                phases = new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                    add(new SubscriptionPhase("error",                 new Money() {{
                                                                        amount = 76486L;
                                                                        currency = "corporis";
                                                                    }};) {{
                                                        cadence = "occaecati";
                                                        ordinal = 160230L;
                                                        periods = 145870L;
                                                        recurringPriceMoney = new Money() {{
                                                            amount = 661118L;
                                                            currency = "quis";
                                                        }};
                                                        uid = "reprehenderit";
                                                    }}),
                                                    add(new SubscriptionPhase("ipsa",                 new Money() {{
                                                                        amount = 517612L;
                                                                        currency = "quae";
                                                                    }};) {{
                                                        cadence = "quidem";
                                                        ordinal = 910994L;
                                                        periods = 247399L;
                                                        recurringPriceMoney = new Money() {{
                                                            amount = 878493L;
                                                            currency = "doloremque";
                                                        }};
                                                        uid = "iure";
                                                    }}),
                                                    add(new SubscriptionPhase("ratione",                 new Money() {{
                                                                        amount = 672582L;
                                                                        currency = "distinctio";
                                                                    }};) {{
                                                        cadence = "molestiae";
                                                        ordinal = 907733L;
                                                        periods = 184362L;
                                                        recurringPriceMoney = new Money() {{
                                                            amount = 739884L;
                                                            currency = "iure";
                                                        }};
                                                        uid = "necessitatibus";
                                                    }}),
                                                    add(new SubscriptionPhase("corporis",                 new Money() {{
                                                                        amount = 597303L;
                                                                        currency = "nihil";
                                                                    }};) {{
                                                        cadence = "voluptatum";
                                                        ordinal = 523006L;
                                                        periods = 304446L;
                                                        recurringPriceMoney = new Money() {{
                                                            amount = 320565L;
                                                            currency = "repellat";
                                                        }};
                                                        uid = "alias";
                                                    }}),
                                                }};
                                            }};
                                            taxData = new CatalogTax() {{
                                                appliesToCustomAmounts = false;
                                                calculationPhase = "debitis";
                                                enabled = false;
                                                inclusionType = "laudantium";
                                                name = "Vivian Ward";
                                                percentage = "quis";
                                            }};
                                            timePeriodData = new CatalogTimePeriod() {{
                                                event = "eum";
                                            }};
                                            type = "reiciendis";
                                            updatedAt = "provident";
                                            version = 133439L;
                                        }}),
                                        add(new CatalogObject("autem", "esse") {{
                                            absentAtLocationIds = new String[]{{
                                                add("nostrum"),
                                                add("mollitia"),
                                                add("provident"),
                                            }};
                                            catalogV1Ids = new org.openapis.openapi.models.shared.CatalogV1Id[]{{
                                                add(new CatalogV1Id() {{
                                                    catalogV1Id = "animi";
                                                    locationId = "ex";
                                                }}),
                                                add(new CatalogV1Id() {{
                                                    catalogV1Id = "aliquid";
                                                    locationId = "accusantium";
                                                }}),
                                                add(new CatalogV1Id() {{
                                                    catalogV1Id = "repellat";
                                                    locationId = "doloribus";
                                                }}),
                                                add(new CatalogV1Id() {{
                                                    catalogV1Id = "ullam";
                                                    locationId = "in";
                                                }}),
                                            }};
                                            categoryData = new CatalogCategory() {{
                                                name = "Darin Nienow";
                                            }};
                                            customAttributeDefinitionData = new CatalogCustomAttributeDefinition(                new String[]{{
                                                                add("illum"),
                                                                add("eaque"),
                                                                add("earum"),
                                                                add("perspiciatis"),
                                                            }}, "maiores", "debitis") {{
                                                allowedObjectTypes = new String[]{{
                                                    add("voluptatibus"),
                                                    add("molestias"),
                                                }};
                                                appVisibility = "officiis";
                                                customAttributeUsageCount = 956933L;
                                                description = "cumque";
                                                key = "vitae";
                                                name = "Mr. Ricky Harvey";
                                                numberConfig = new CatalogCustomAttributeDefinitionNumberConfig() {{
                                                    precision = 62636L;
                                                }};
                                                selectionConfig = new CatalogCustomAttributeDefinitionSelectionConfig() {{
                                                    allowedSelections = new org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[]{{
                                                        add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("impedit") {{
                                                            name = "Judy Kemmer";
                                                            uid = "at";
                                                        }}),
                                                    }};
                                                    maxAllowedSelections = 179410L;
                                                }};
                                                sellerVisibility = "sapiente";
                                                sourceApplication = new SourceApplication() {{
                                                    applicationId = "eum";
                                                    name = "Cathy Breitenberg";
                                                    product = "earum";
                                                }};
                                                stringConfig = new CatalogCustomAttributeDefinitionStringConfig() {{
                                                    enforceUniqueness = false;
                                                }};
                                                type = "soluta";
                                            }};
                                            customAttributeValues = new java.util.HashMap<String, org.openapis.openapi.models.shared.CatalogCustomAttributeValue>() {{
                                                put("porro", new CatalogCustomAttributeValue() {{
                                                    booleanValue = false;
                                                    customAttributeDefinitionId = "suscipit";
                                                    key = "dolorem";
                                                    name = "Erma Paucek";
                                                    numberValue = "necessitatibus";
                                                    selectionUidValues = new String[]{{
                                                        add("consequatur"),
                                                        add("quasi"),
                                                        add("et"),
                                                        add("ducimus"),
                                                    }};
                                                    stringValue = "natus";
                                                    type = "occaecati";
                                                }});
                                                put("suscipit", new CatalogCustomAttributeValue() {{
                                                    booleanValue = false;
                                                    customAttributeDefinitionId = "adipisci";
                                                    key = "quasi";
                                                    name = "Melba Stokes I";
                                                    numberValue = "nihil";
                                                    selectionUidValues = new String[]{{
                                                        add("dicta"),
                                                        add("iusto"),
                                                    }};
                                                    stringValue = "esse";
                                                    type = "praesentium";
                                                }});
                                            }};
                                            discountData = new CatalogDiscount() {{
                                                amountMoney = new Money() {{
                                                    amount = 979963L;
                                                    currency = "reiciendis";
                                                }};
                                                discountType = "vel";
                                                labelColor = "architecto";
                                                modifyTaxBasis = "fugiat";
                                                name = "Cheryl Kub";
                                                percentage = "ex";
                                                pinRequired = false;
                                            }};
                                            id = "360a15db-6a66-4065-9a1a-deaab5851d6c";
                                            imageData = new CatalogImage() {{
                                                caption = "ex";
                                                name = "Ms. Geraldine Ratke";
                                                url = "aliquid";
                                            }};
                                            imageId = "beatae";
                                            isDeleted = false;
                                            itemData = new CatalogItem() {{
                                                abbreviation = "voluptatum";
                                                availableElectronically = false;
                                                availableForPickup = false;
                                                availableOnline = false;
                                                categoryId = "omnis";
                                                description = "veritatis";
                                                itemOptions = new org.openapis.openapi.models.shared.CatalogItemOptionForItem[]{{
                                                    add(new CatalogItemOptionForItem() {{
                                                        itemOptionId = "est";
                                                    }}),
                                                    add(new CatalogItemOptionForItem() {{
                                                        itemOptionId = "culpa";
                                                    }}),
                                                    add(new CatalogItemOptionForItem() {{
                                                        itemOptionId = "voluptatem";
                                                    }}),
                                                }};
                                                labelColor = "sapiente";
                                                modifierListInfo = new org.openapis.openapi.models.shared.CatalogItemModifierListInfo[]{{
                                                    add(new CatalogItemModifierListInfo("nemo") {{
                                                        enabled = false;
                                                        maxSelectedModifiers = 103298L;
                                                        minSelectedModifiers = 682119L;
                                                        modifierListId = "pariatur";
                                                        modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                            add(new CatalogModifierOverride("alias") {{
                                                                modifierId = "voluptatem";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("earum") {{
                                                                modifierId = "deleniti";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("sapiente") {{
                                                                modifierId = "ex";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("minus") {{
                                                                modifierId = "rem";
                                                                onByDefault = false;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new CatalogItemModifierListInfo("impedit") {{
                                                        enabled = false;
                                                        maxSelectedModifiers = 992074L;
                                                        minSelectedModifiers = 190567L;
                                                        modifierListId = "ullam";
                                                        modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                            add(new CatalogModifierOverride("totam") {{
                                                                modifierId = "illum";
                                                                onByDefault = false;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new CatalogItemModifierListInfo("dolor") {{
                                                        enabled = false;
                                                        maxSelectedModifiers = 842777L;
                                                        minSelectedModifiers = 720528L;
                                                        modifierListId = "ipsam";
                                                        modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                            add(new CatalogModifierOverride("aliquam") {{
                                                                modifierId = "dolor";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("deleniti") {{
                                                                modifierId = "inventore";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("tempora") {{
                                                                modifierId = "veritatis";
                                                                onByDefault = false;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new CatalogItemModifierListInfo("dolor") {{
                                                        enabled = false;
                                                        maxSelectedModifiers = 8689L;
                                                        minSelectedModifiers = 100014L;
                                                        modifierListId = "sit";
                                                        modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                            add(new CatalogModifierOverride("ab") {{
                                                                modifierId = "fugit";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("quae") {{
                                                                modifierId = "laudantium";
                                                                onByDefault = false;
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                name = "Ms. Vernon Crooks";
                                                productType = "impedit";
                                                skipModifierScreen = false;
                                                sortName = "officiis";
                                                taxIds = new String[]{{
                                                    add("necessitatibus"),
                                                    add("sed"),
                                                }};
                                                variations = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                }};
                                            }};
                                            itemOptionData = new CatalogItemOption() {{
                                                description = "nesciunt";
                                                displayName = "expedita";
                                                name = "Kristin Legros";
                                                showColors = false;
                                                values = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                    add(new CatalogObject() {{}}),
                                                }};
                                            }};
                                            itemOptionValueData = new CatalogItemOptionValue() {{
                                                color = "porro";
                                                description = "autem";
                                                itemOptionId = "nobis";
                                                name = "Mrs. Kate Cronin";
                                                ordinal = 95619L;
                                            }};
                                            itemVariationData = new CatalogItemVariation() {{
                                                availableForBooking = false;
                                                inventoryAlertThreshold = 392569L;
                                                inventoryAlertType = "at";
                                                itemId = "vero";
                                                itemOptionValues = new org.openapis.openapi.models.shared.CatalogItemOptionValueForItemVariation[]{{
                                                    add(new CatalogItemOptionValueForItemVariation() {{
                                                        itemOptionId = "harum";
                                                        itemOptionValueId = "sequi";
                                                    }}),
                                                    add(new CatalogItemOptionValueForItemVariation() {{
                                                        itemOptionId = "doloribus";
                                                        itemOptionValueId = "repudiandae";
                                                    }}),
                                                    add(new CatalogItemOptionValueForItemVariation() {{
                                                        itemOptionId = "optio";
                                                        itemOptionValueId = "occaecati";
                                                    }}),
                                                }};
                                                locationOverrides = new org.openapis.openapi.models.shared.ItemVariationLocationOverrides[]{{
                                                    add(new ItemVariationLocationOverrides() {{
                                                        inventoryAlertThreshold = 455898L;
                                                        inventoryAlertType = "blanditiis";
                                                        locationId = "officia";
                                                        priceMoney = new Money() {{
                                                            amount = 376389L;
                                                            currency = "numquam";
                                                        }};
                                                        pricingType = "nemo";
                                                        trackInventory = false;
                                                    }}),
                                                    add(new ItemVariationLocationOverrides() {{
                                                        inventoryAlertThreshold = 551079L;
                                                        inventoryAlertType = "eius";
                                                        locationId = "aspernatur";
                                                        priceMoney = new Money() {{
                                                            amount = 495970L;
                                                            currency = "nesciunt";
                                                        }};
                                                        pricingType = "fuga";
                                                        trackInventory = false;
                                                    }}),
                                                }};
                                                measurementUnitId = "laudantium";
                                                name = "Joyce Leffler III";
                                                ordinal = 159845L;
                                                priceMoney = new Money() {{
                                                    amount = 233078L;
                                                    currency = "aperiam";
                                                }};
                                                pricingType = "cupiditate";
                                                serviceDuration = 970732L;
                                                sku = "soluta";
                                                stockable = false;
                                                stockableConversion = new CatalogStockConversion("occaecati", "iste", "magni") {{
                                                    nonstockableQuantity = "alias";
                                                    stockableItemVariationId = "omnis";
                                                    stockableQuantity = "eos";
                                                }};
                                                teamMemberIds = new String[]{{
                                                    add("fuga"),
                                                }};
                                                trackInventory = false;
                                                upc = "accusamus";
                                                userData = "voluptatibus";
                                            }};
                                            measurementUnitData = new CatalogMeasurementUnit() {{
                                                measurementUnit = new MeasurementUnit() {{
                                                    areaUnit = "distinctio";
                                                    customUnit = new MeasurementUnitCustom("temporibus", "quos") {{
                                                        abbreviation = "omnis";
                                                        name = "Darrell Lang";
                                                    }};
                                                    genericUnit = "commodi";
                                                    lengthUnit = "itaque";
                                                    timeUnit = "commodi";
                                                    type = "totam";
                                                    volumeUnit = "earum";
                                                    weightUnit = "modi";
                                                }};
                                                precision = 722184L;
                                            }};
                                            modifierData = new CatalogModifier() {{
                                                modifierListId = "vero";
                                                name = "Mr. Holly Kautzer";
                                                ordinal = 978548L;
                                                priceMoney = new Money() {{
                                                    amount = 318233L;
                                                    currency = "sint";
                                                }};
                                            }};
                                            modifierListData = new CatalogModifierList() {{
                                                modifiers = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                }};
                                                name = "Claude Hickle";
                                                ordinal = 336102L;
                                                selectionType = "sint";
                                            }};
                                            presentAtAllLocations = false;
                                            presentAtLocationIds = new String[]{{
                                                add("impedit"),
                                                add("hic"),
                                                add("necessitatibus"),
                                                add("asperiores"),
                                            }};
                                            pricingRuleData = new CatalogPricingRule() {{
                                                applyProductsId = "ex";
                                                customerGroupIdsAny = new String[]{{
                                                    add("debitis"),
                                                    add("delectus"),
                                                }};
                                                discountId = "quae";
                                                excludeProductsId = "minus";
                                                excludeStrategy = "fuga";
                                                matchProductsId = "laborum";
                                                name = "Shannon Lind";
                                                timePeriodIds = new String[]{{
                                                    add("soluta"),
                                                }};
                                                validFromDate = "repudiandae";
                                                validFromLocalTime = "nam";
                                                validUntilDate = "dolore";
                                                validUntilLocalTime = "iusto";
                                            }};
                                            productSetData = new CatalogProductSet() {{
                                                allProducts = false;
                                                name = "Lillian Kunde";
                                                productIdsAll = new String[]{{
                                                    add("quibusdam"),
                                                    add("iure"),
                                                    add("odit"),
                                                }};
                                                productIdsAny = new String[]{{
                                                    add("vel"),
                                                    add("magnam"),
                                                    add("quibusdam"),
                                                    add("inventore"),
                                                }};
                                                quantityExact = 818034L;
                                                quantityMax = 726878L;
                                                quantityMin = 102413L;
                                            }};
                                            quickAmountsSettingsData = new CatalogQuickAmountsSettings("recusandae") {{
                                                amounts = new org.openapis.openapi.models.shared.CatalogQuickAmount[]{{
                                                    add(new CatalogQuickAmount(                new Money() {{
                                                                        amount = 36561L;
                                                                        currency = "vel";
                                                                    }};, "ea") {{
                                                        amount = new Money() {{
                                                            amount = 156383L;
                                                            currency = "porro";
                                                        }};
                                                        ordinal = 304198L;
                                                        score = 247045L;
                                                        type = "illo";
                                                    }}),
                                                    add(new CatalogQuickAmount(                new Money() {{
                                                                        amount = 284086L;
                                                                        currency = "perspiciatis";
                                                                    }};, "earum") {{
                                                        amount = new Money() {{
                                                            amount = 107617L;
                                                            currency = "vero";
                                                        }};
                                                        ordinal = 568218L;
                                                        score = 431994L;
                                                        type = "velit";
                                                    }}),
                                                    add(new CatalogQuickAmount(                new Money() {{
                                                                        amount = 2677L;
                                                                        currency = "nisi";
                                                                    }};, "itaque") {{
                                                        amount = new Money() {{
                                                            amount = 117525L;
                                                            currency = "impedit";
                                                        }};
                                                        ordinal = 975884L;
                                                        score = 610987L;
                                                        type = "itaque";
                                                    }}),
                                                    add(new CatalogQuickAmount(                new Money() {{
                                                                        amount = 24753L;
                                                                        currency = "doloremque";
                                                                    }};, "consequatur") {{
                                                        amount = new Money() {{
                                                            amount = 242178L;
                                                            currency = "laborum";
                                                        }};
                                                        ordinal = 250398L;
                                                        score = 224467L;
                                                        type = "iusto";
                                                    }}),
                                                }};
                                                eligibleForAutoAmounts = false;
                                                option = "officia";
                                            }};
                                            subscriptionPlanData = new CatalogSubscriptionPlan("libero",                 new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                                add(new SubscriptionPhase("quae",                 new Money() {{
                                                                                    amount = 63553L;
                                                                                    currency = "modi";
                                                                                }};) {{
                                                                    cadence = "dolorum";
                                                                    ordinal = 487676L;
                                                                    periods = 144691L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 545L;
                                                                        currency = "magni";
                                                                    }};
                                                                    uid = "vel";
                                                                }}),
                                                                add(new SubscriptionPhase("nulla",                 new Money() {{
                                                                                    amount = 714376L;
                                                                                    currency = "maxime";
                                                                                }};) {{
                                                                    cadence = "neque";
                                                                    ordinal = 348357L;
                                                                    periods = 932394L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 88248L;
                                                                        currency = "ipsum";
                                                                    }};
                                                                    uid = "unde";
                                                                }}),
                                                                add(new SubscriptionPhase("id",                 new Money() {{
                                                                                    amount = 727888L;
                                                                                    currency = "fugiat";
                                                                                }};) {{
                                                                    cadence = "quia";
                                                                    ordinal = 159146L;
                                                                    periods = 342137L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 605712L;
                                                                        currency = "libero";
                                                                    }};
                                                                    uid = "dicta";
                                                                }}),
                                                            }}) {{
                                                name = "Alison Hodkiewicz";
                                                phases = new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                    add(new SubscriptionPhase("necessitatibus",                 new Money() {{
                                                                        amount = 654082L;
                                                                        currency = "impedit";
                                                                    }};) {{
                                                        cadence = "expedita";
                                                        ordinal = 537236L;
                                                        periods = 954334L;
                                                        recurringPriceMoney = new Money() {{
                                                            amount = 455579L;
                                                            currency = "ullam";
                                                        }};
                                                        uid = "unde";
                                                    }}),
                                                    add(new SubscriptionPhase("veritatis",                 new Money() {{
                                                                        amount = 874400L;
                                                                        currency = "consectetur";
                                                                    }};) {{
                                                        cadence = "ipsam";
                                                        ordinal = 357425L;
                                                        periods = 668234L;
                                                        recurringPriceMoney = new Money() {{
                                                            amount = 621666L;
                                                            currency = "esse";
                                                        }};
                                                        uid = "labore";
                                                    }}),
                                                    add(new SubscriptionPhase("ex",                 new Money() {{
                                                                        amount = 367626L;
                                                                        currency = "soluta";
                                                                    }};) {{
                                                        cadence = "vitae";
                                                        ordinal = 81371L;
                                                        periods = 212434L;
                                                        recurringPriceMoney = new Money() {{
                                                            amount = 322017L;
                                                            currency = "qui";
                                                        }};
                                                        uid = "iste";
                                                    }}),
                                                }};
                                            }};
                                            taxData = new CatalogTax() {{
                                                appliesToCustomAmounts = false;
                                                calculationPhase = "officia";
                                                enabled = false;
                                                inclusionType = "quos";
                                                name = "Dr. Paul Kris Jr.";
                                                percentage = "totam";
                                            }};
                                            timePeriodData = new CatalogTimePeriod() {{
                                                event = "dolore";
                                            }};
                                            type = "eligendi";
                                            updatedAt = "distinctio";
                                            version = 32273L;
                                        }}),
                                        add(new CatalogObject("numquam", "dolorum") {{
                                            absentAtLocationIds = new String[]{{
                                                add("assumenda"),
                                            }};
                                            catalogV1Ids = new org.openapis.openapi.models.shared.CatalogV1Id[]{{
                                                add(new CatalogV1Id() {{
                                                    catalogV1Id = "est";
                                                    locationId = "facere";
                                                }}),
                                            }};
                                            categoryData = new CatalogCategory() {{
                                                name = "Javier McKenzie";
                                            }};
                                            customAttributeDefinitionData = new CatalogCustomAttributeDefinition(                new String[]{{
                                                                add("necessitatibus"),
                                                                add("corporis"),
                                                                add("qui"),
                                                                add("expedita"),
                                                            }}, "voluptatum", "cupiditate") {{
                                                allowedObjectTypes = new String[]{{
                                                    add("sint"),
                                                    add("ea"),
                                                    add("autem"),
                                                }};
                                                appVisibility = "ipsam";
                                                customAttributeUsageCount = 702952L;
                                                description = "laudantium";
                                                key = "corporis";
                                                name = "Boyd Rippin Sr.";
                                                numberConfig = new CatalogCustomAttributeDefinitionNumberConfig() {{
                                                    precision = 694158L;
                                                }};
                                                selectionConfig = new CatalogCustomAttributeDefinitionSelectionConfig() {{
                                                    allowedSelections = new org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[]{{
                                                        add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("odio") {{
                                                            name = "Steven Rath";
                                                            uid = "quibusdam";
                                                        }}),
                                                        add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("adipisci") {{
                                                            name = "Fred Champlin";
                                                            uid = "earum";
                                                        }}),
                                                        add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("unde") {{
                                                            name = "Otis Grady";
                                                            uid = "beatae";
                                                        }}),
                                                    }};
                                                    maxAllowedSelections = 476946L;
                                                }};
                                                sellerVisibility = "delectus";
                                                sourceApplication = new SourceApplication() {{
                                                    applicationId = "cupiditate";
                                                    name = "Elaine Gerhold";
                                                    product = "officia";
                                                }};
                                                stringConfig = new CatalogCustomAttributeDefinitionStringConfig() {{
                                                    enforceUniqueness = false;
                                                }};
                                                type = "dignissimos";
                                            }};
                                            customAttributeValues = new java.util.HashMap<String, org.openapis.openapi.models.shared.CatalogCustomAttributeValue>() {{
                                                put("placeat", new CatalogCustomAttributeValue() {{
                                                    booleanValue = false;
                                                    customAttributeDefinitionId = "enim";
                                                    key = "neque";
                                                    name = "Sadie Kemmer";
                                                    numberValue = "magnam";
                                                    selectionUidValues = new String[]{{
                                                        add("maiores"),
                                                        add("tempore"),
                                                        add("aperiam"),
                                                        add("libero"),
                                                    }};
                                                    stringValue = "ratione";
                                                    type = "labore";
                                                }});
                                                put("totam", new CatalogCustomAttributeValue() {{
                                                    booleanValue = false;
                                                    customAttributeDefinitionId = "occaecati";
                                                    key = "voluptas";
                                                    name = "Jacob Schinner";
                                                    numberValue = "est";
                                                    selectionUidValues = new String[]{{
                                                        add("delectus"),
                                                        add("tempore"),
                                                        add("vero"),
                                                        add("odit"),
                                                    }};
                                                    stringValue = "repellat";
                                                    type = "pariatur";
                                                }});
                                            }};
                                            discountData = new CatalogDiscount() {{
                                                amountMoney = new Money() {{
                                                    amount = 362888L;
                                                    currency = "reprehenderit";
                                                }};
                                                discountType = "aperiam";
                                                labelColor = "odio";
                                                modifyTaxBasis = "minima";
                                                name = "Dora Mante";
                                                percentage = "veritatis";
                                                pinRequired = false;
                                            }};
                                            id = "77deac64-6ecb-4573-809e-3eb1e5a2b12e";
                                            imageData = new CatalogImage() {{
                                                caption = "nobis";
                                                name = "Mr. Dora Wuckert";
                                                url = "pariatur";
                                            }};
                                            imageId = "libero";
                                            isDeleted = false;
                                            itemData = new CatalogItem() {{
                                                abbreviation = "excepturi";
                                                availableElectronically = false;
                                                availableForPickup = false;
                                                availableOnline = false;
                                                categoryId = "occaecati";
                                                description = "nemo";
                                                itemOptions = new org.openapis.openapi.models.shared.CatalogItemOptionForItem[]{{
                                                    add(new CatalogItemOptionForItem() {{
                                                        itemOptionId = "nostrum";
                                                    }}),
                                                    add(new CatalogItemOptionForItem() {{
                                                        itemOptionId = "doloribus";
                                                    }}),
                                                }};
                                                labelColor = "eligendi";
                                                modifierListInfo = new org.openapis.openapi.models.shared.CatalogItemModifierListInfo[]{{
                                                    add(new CatalogItemModifierListInfo("quos") {{
                                                        enabled = false;
                                                        maxSelectedModifiers = 314573L;
                                                        minSelectedModifiers = 944950L;
                                                        modifierListId = "animi";
                                                        modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                            add(new CatalogModifierOverride("molestias") {{
                                                                modifierId = "totam";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("eaque") {{
                                                                modifierId = "odio";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("architecto") {{
                                                                modifierId = "saepe";
                                                                onByDefault = false;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new CatalogItemModifierListInfo("adipisci") {{
                                                        enabled = false;
                                                        maxSelectedModifiers = 614438L;
                                                        minSelectedModifiers = 826862L;
                                                        modifierListId = "tempore";
                                                        modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                            add(new CatalogModifierOverride("doloremque") {{
                                                                modifierId = "velit";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("impedit") {{
                                                                modifierId = "delectus";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("ipsum") {{
                                                                modifierId = "cum";
                                                                onByDefault = false;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new CatalogItemModifierListInfo("molestiae") {{
                                                        enabled = false;
                                                        maxSelectedModifiers = 903150L;
                                                        minSelectedModifiers = 644420L;
                                                        modifierListId = "doloremque";
                                                        modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                            add(new CatalogModifierOverride("libero") {{
                                                                modifierId = "veniam";
                                                                onByDefault = false;
                                                            }}),
                                                            add(new CatalogModifierOverride("cupiditate") {{
                                                                modifierId = "architecto";
                                                                onByDefault = false;
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                name = "Rufus Friesen";
                                                productType = "sed";
                                                skipModifierScreen = false;
                                                sortName = "asperiores";
                                                taxIds = new String[]{{
                                                    add("consequuntur"),
                                                    add("facere"),
                                                }};
                                                variations = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                }};
                                            }};
                                            itemOptionData = new CatalogItemOption() {{
                                                description = "odit";
                                                displayName = "pariatur";
                                                name = "Yvonne Bernhard";
                                                showColors = false;
                                                values = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                }};
                                            }};
                                            itemOptionValueData = new CatalogItemOptionValue() {{
                                                color = "nisi";
                                                description = "voluptatibus";
                                                itemOptionId = "quaerat";
                                                name = "Preston Huel";
                                                ordinal = 727771L;
                                            }};
                                            itemVariationData = new CatalogItemVariation() {{
                                                availableForBooking = false;
                                                inventoryAlertThreshold = 794507L;
                                                inventoryAlertType = "facere";
                                                itemId = "facilis";
                                                itemOptionValues = new org.openapis.openapi.models.shared.CatalogItemOptionValueForItemVariation[]{{
                                                    add(new CatalogItemOptionValueForItemVariation() {{
                                                        itemOptionId = "ad";
                                                        itemOptionValueId = "voluptatibus";
                                                    }}),
                                                }};
                                                locationOverrides = new org.openapis.openapi.models.shared.ItemVariationLocationOverrides[]{{
                                                    add(new ItemVariationLocationOverrides() {{
                                                        inventoryAlertThreshold = 162358L;
                                                        inventoryAlertType = "debitis";
                                                        locationId = "labore";
                                                        priceMoney = new Money() {{
                                                            amount = 700928L;
                                                            currency = "eos";
                                                        }};
                                                        pricingType = "reprehenderit";
                                                        trackInventory = false;
                                                    }}),
                                                    add(new ItemVariationLocationOverrides() {{
                                                        inventoryAlertThreshold = 345506L;
                                                        inventoryAlertType = "neque";
                                                        locationId = "iusto";
                                                        priceMoney = new Money() {{
                                                            amount = 664965L;
                                                            currency = "rem";
                                                        }};
                                                        pricingType = "eligendi";
                                                        trackInventory = false;
                                                    }}),
                                                    add(new ItemVariationLocationOverrides() {{
                                                        inventoryAlertThreshold = 853606L;
                                                        inventoryAlertType = "unde";
                                                        locationId = "officiis";
                                                        priceMoney = new Money() {{
                                                            amount = 495617L;
                                                            currency = "dolor";
                                                        }};
                                                        pricingType = "dicta";
                                                        trackInventory = false;
                                                    }}),
                                                    add(new ItemVariationLocationOverrides() {{
                                                        inventoryAlertThreshold = 622894L;
                                                        inventoryAlertType = "porro";
                                                        locationId = "vitae";
                                                        priceMoney = new Money() {{
                                                            amount = 491591L;
                                                            currency = "esse";
                                                        }};
                                                        pricingType = "fugiat";
                                                        trackInventory = false;
                                                    }}),
                                                }};
                                                measurementUnitId = "ad";
                                                name = "Jill Wintheiser";
                                                ordinal = 729828L;
                                                priceMoney = new Money() {{
                                                    amount = 72350L;
                                                    currency = "ab";
                                                }};
                                                pricingType = "incidunt";
                                                serviceDuration = 879174L;
                                                sku = "saepe";
                                                stockable = false;
                                                stockableConversion = new CatalogStockConversion("reiciendis", "earum", "reprehenderit") {{
                                                    nonstockableQuantity = "tempore";
                                                    stockableItemVariationId = "veniam";
                                                    stockableQuantity = "eos";
                                                }};
                                                teamMemberIds = new String[]{{
                                                    add("nemo"),
                                                    add("repellat"),
                                                    add("quisquam"),
                                                }};
                                                trackInventory = false;
                                                upc = "sequi";
                                                userData = "nihil";
                                            }};
                                            measurementUnitData = new CatalogMeasurementUnit() {{
                                                measurementUnit = new MeasurementUnit() {{
                                                    areaUnit = "deleniti";
                                                    customUnit = new MeasurementUnitCustom("laudantium", "repudiandae") {{
                                                        abbreviation = "illo";
                                                        name = "Nadine Gutmann";
                                                    }};
                                                    genericUnit = "consequatur";
                                                    lengthUnit = "maxime";
                                                    timeUnit = "aspernatur";
                                                    type = "nam";
                                                    volumeUnit = "expedita";
                                                    weightUnit = "quas";
                                                }};
                                                precision = 590858L;
                                            }};
                                            modifierData = new CatalogModifier() {{
                                                modifierListId = "repudiandae";
                                                name = "Julio Hessel";
                                                ordinal = 833982L;
                                                priceMoney = new Money() {{
                                                    amount = 434827L;
                                                    currency = "dolorem";
                                                }};
                                            }};
                                            modifierListData = new CatalogModifierList() {{
                                                modifiers = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                                    add(new CatalogObject() {{}}),
                                                    add(new CatalogObject() {{}}),
                                                }};
                                                name = "Mrs. Leslie Anderson I";
                                                ordinal = 849320L;
                                                selectionType = "praesentium";
                                            }};
                                            presentAtAllLocations = false;
                                            presentAtLocationIds = new String[]{{
                                                add("cum"),
                                                add("amet"),
                                                add("quasi"),
                                            }};
                                            pricingRuleData = new CatalogPricingRule() {{
                                                applyProductsId = "dicta";
                                                customerGroupIdsAny = new String[]{{
                                                    add("doloremque"),
                                                    add("earum"),
                                                    add("iusto"),
                                                }};
                                                discountId = "amet";
                                                excludeProductsId = "provident";
                                                excludeStrategy = "dolorum";
                                                matchProductsId = "necessitatibus";
                                                name = "Cornelius Altenwerth";
                                                timePeriodIds = new String[]{{
                                                    add("facilis"),
                                                    add("corrupti"),
                                                    add("aperiam"),
                                                    add("sint"),
                                                }};
                                                validFromDate = "accusamus";
                                                validFromLocalTime = "eos";
                                                validUntilDate = "totam";
                                                validUntilLocalTime = "dicta";
                                            }};
                                            productSetData = new CatalogProductSet() {{
                                                allProducts = false;
                                                name = "Dr. Shannon Fahey";
                                                productIdsAll = new String[]{{
                                                    add("atque"),
                                                    add("beatae"),
                                                    add("at"),
                                                }};
                                                productIdsAny = new String[]{{
                                                    add("minus"),
                                                    add("esse"),
                                                }};
                                                quantityExact = 32356L;
                                                quantityMax = 20950L;
                                                quantityMin = 698558L;
                                            }};
                                            quickAmountsSettingsData = new CatalogQuickAmountsSettings("quo") {{
                                                amounts = new org.openapis.openapi.models.shared.CatalogQuickAmount[]{{
                                                    add(new CatalogQuickAmount(                new Money() {{
                                                                        amount = 588639L;
                                                                        currency = "consectetur";
                                                                    }};, "eligendi") {{
                                                        amount = new Money() {{
                                                            amount = 46791L;
                                                            currency = "dignissimos";
                                                        }};
                                                        ordinal = 998026L;
                                                        score = 243678L;
                                                        type = "porro";
                                                    }}),
                                                    add(new CatalogQuickAmount(                new Money() {{
                                                                        amount = 639622L;
                                                                        currency = "amet";
                                                                    }};, "tenetur") {{
                                                        amount = new Money() {{
                                                            amount = 490110L;
                                                            currency = "consectetur";
                                                        }};
                                                        ordinal = 744101L;
                                                        score = 620500L;
                                                        type = "temporibus";
                                                    }}),
                                                }};
                                                eligibleForAutoAmounts = false;
                                                option = "aspernatur";
                                            }};
                                            subscriptionPlanData = new CatalogSubscriptionPlan("hic",                 new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                                add(new SubscriptionPhase("numquam",                 new Money() {{
                                                                                    amount = 921193L;
                                                                                    currency = "modi";
                                                                                }};) {{
                                                                    cadence = "delectus";
                                                                    ordinal = 251212L;
                                                                    periods = 719389L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 450224L;
                                                                        currency = "exercitationem";
                                                                    }};
                                                                    uid = "labore";
                                                                }}),
                                                                add(new SubscriptionPhase("deleniti",                 new Money() {{
                                                                                    amount = 316730L;
                                                                                    currency = "voluptate";
                                                                                }};) {{
                                                                    cadence = "in";
                                                                    ordinal = 127294L;
                                                                    periods = 879857L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 525809L;
                                                                        currency = "aperiam";
                                                                    }};
                                                                    uid = "odit";
                                                                }}),
                                                                add(new SubscriptionPhase("eum",                 new Money() {{
                                                                                    amount = 199529L;
                                                                                    currency = "mollitia";
                                                                                }};) {{
                                                                    cadence = "similique";
                                                                    ordinal = 326118L;
                                                                    periods = 727544L;
                                                                    recurringPriceMoney = new Money() {{
                                                                        amount = 300189L;
                                                                        currency = "sit";
                                                                    }};
                                                                    uid = "modi";
                                                                }}),
                                                            }}) {{
                                                name = "Gilberto Osinski";
                                                phases = new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                    add(new SubscriptionPhase("non",                 new Money() {{
                                                                        amount = 68093L;
                                                                        currency = "illo";
                                                                    }};) {{
                                                        cadence = "consectetur";
                                                        ordinal = 995816L;
                                                        periods = 128696L;
                                                        recurringPriceMoney = new Money() {{
                                                            amount = 129355L;
                                                            currency = "exercitationem";
                                                        }};
                                                        uid = "nihil";
                                                    }}),
                                                }};
                                            }};
                                            taxData = new CatalogTax() {{
                                                appliesToCustomAmounts = false;
                                                calculationPhase = "dignissimos";
                                                enabled = false;
                                                inclusionType = "fugiat";
                                                name = "Nellie Harris I";
                                                percentage = "aut";
                                            }};
                                            timePeriodData = new CatalogTimePeriod() {{
                                                event = "aut";
                                            }};
                                            type = "eveniet";
                                            updatedAt = "odio";
                                            version = 413758L;
                                        }}),
                                    }};
                                }}),
                            }}, "dicta");            

            BatchUpsertCatalogObjectsResponse res = sdk.catalog.batchUpsertCatalogObjects(req, new BatchUpsertCatalogObjectsSecurity("architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchUpsertCatalogObjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## catalogInfo

Retrieves information about the Square Catalog API, such as batch size
limits that can be used by the `BatchUpsertCatalogObjects` endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CatalogInfoResponse;
import org.openapis.openapi.models.operations.CatalogInfoSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CatalogInfoResponse res = sdk.catalog.catalogInfo(new CatalogInfoSecurity("suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.catalogInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCatalogObject

Deletes a single [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) based on the
provided ID and returns the set of successfully deleted IDs in the response.
Deletion is a cascading event such that all children of the targeted object
are also deleted. For example, deleting a [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)
will also delete all of its
[CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation) children.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCatalogObjectRequest;
import org.openapis.openapi.models.operations.DeleteCatalogObjectResponse;
import org.openapis.openapi.models.operations.DeleteCatalogObjectSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCatalogObjectRequest req = new DeleteCatalogObjectRequest("eligendi");            

            DeleteCatalogObjectResponse res = sdk.catalog.deleteCatalogObject(req, new DeleteCatalogObjectSecurity("officiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deleteCatalogObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCatalog

Returns a list of [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject)s that includes
all objects of a set of desired types (for example, all [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)
and [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects) in the catalog. The `types` parameter
is specified as a comma-separated list of valid [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) types:
`ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`, `IMAGE`.

__Important:__ ListCatalog does not return deleted catalog items. To retrieve
deleted catalog items, use [SearchCatalogObjects](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-objects)
and set the `include_deleted_objects` attribute value to `true`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCatalogRequest;
import org.openapis.openapi.models.operations.ListCatalogResponse;
import org.openapis.openapi.models.operations.ListCatalogSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCatalogRequest req = new ListCatalogRequest() {{
                catalogVersion = 490956L;
                cursor = "fugit";
                types = "ratione";
            }};            

            ListCatalogResponse res = sdk.catalog.listCatalog(req, new ListCatalogSecurity("possimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCatalogResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveCatalogObject

Returns a single [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) as a
[CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) based on the provided ID. The returned
object includes all of the relevant [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)
information including: [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation)
children, references to its
[CatalogModifierList](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifierList) objects, and the ids of
any [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects that apply to it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveCatalogObjectRequest;
import org.openapis.openapi.models.operations.RetrieveCatalogObjectResponse;
import org.openapis.openapi.models.operations.RetrieveCatalogObjectSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveCatalogObjectRequest req = new RetrieveCatalogObjectRequest("quaerat") {{
                catalogVersion = 14976L;
                includeRelatedObjects = false;
            }};            

            RetrieveCatalogObjectResponse res = sdk.catalog.retrieveCatalogObject(req, new RetrieveCatalogObjectSecurity("natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveCatalogObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchCatalogItems

Searches for catalog items or item variations by matching supported search attribute values, including
custom attribute values, against one or more of the specified query expressions.

This (`SearchCatalogItems`) endpoint differs from the [SearchCatalogObjects](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-objects)
endpoint in the following aspects:

- `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
- `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
- `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
- The both endpoints use different call conventions, including the query filter formats.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchCatalogItemsResponse;
import org.openapis.openapi.models.operations.SearchCatalogItemsSecurity;
import org.openapis.openapi.models.shared.CustomAttributeFilter;
import org.openapis.openapi.models.shared.Range;
import org.openapis.openapi.models.shared.SearchCatalogItemsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchCatalogItemsRequest req = new SearchCatalogItemsRequest() {{
                categoryIds = new String[]{{
                    add("delectus"),
                    add("deserunt"),
                }};
                cursor = "ratione";
                customAttributeFilters = new org.openapis.openapi.models.shared.CustomAttributeFilter[]{{
                    add(new CustomAttributeFilter() {{
                        boolFilter = false;
                        customAttributeDefinitionId = "debitis";
                        key = "iste";
                        numberFilter = new Range() {{
                            max = "deserunt";
                            min = "hic";
                        }};
                        selectionUidsFilter = new String[]{{
                            add("consequuntur"),
                            add("ipsam"),
                        }};
                        stringFilter = "libero";
                    }}),
                }};
                enabledLocationIds = new String[]{{
                    add("omnis"),
                }};
                limit = 120646L;
                productTypes = new String[]{{
                    add("explicabo"),
                }};
                sortOrder = "consequatur";
                stockLevels = new String[]{{
                    add("consequatur"),
                }};
                textFilter = "fugiat";
            }};            

            SearchCatalogItemsResponse res = sdk.catalog.searchCatalogItems(req, new SearchCatalogItemsSecurity("voluptatum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchCatalogItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchCatalogObjects

Searches for [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) of any type by matching supported search attribute values,
excluding custom attribute values on items or item variations, against one or more of the specified query expressions.

This (`SearchCatalogObjects`) endpoint differs from the [SearchCatalogItems](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-items)
endpoint in the following aspects:

- `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
- `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
- `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
- The both endpoints have different call conventions, including the query filter formats.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchCatalogObjectsResponse;
import org.openapis.openapi.models.operations.SearchCatalogObjectsSecurity;
import org.openapis.openapi.models.shared.CatalogQuery;
import org.openapis.openapi.models.shared.CatalogQueryExact;
import org.openapis.openapi.models.shared.CatalogQueryItemVariationsForItemOptionValues;
import org.openapis.openapi.models.shared.CatalogQueryItemsForItemOptions;
import org.openapis.openapi.models.shared.CatalogQueryItemsForModifierList;
import org.openapis.openapi.models.shared.CatalogQueryItemsForTax;
import org.openapis.openapi.models.shared.CatalogQueryPrefix;
import org.openapis.openapi.models.shared.CatalogQueryRange;
import org.openapis.openapi.models.shared.CatalogQuerySet;
import org.openapis.openapi.models.shared.CatalogQuerySortedAttribute;
import org.openapis.openapi.models.shared.CatalogQueryText;
import org.openapis.openapi.models.shared.SearchCatalogObjectsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchCatalogObjectsRequest req = new SearchCatalogObjectsRequest() {{
                beginTime = "velit";
                cursor = "hic";
                includeDeletedObjects = false;
                includeRelatedObjects = false;
                limit = 356485L;
                objectTypes = new String[]{{
                    add("itaque"),
                    add("distinctio"),
                    add("iusto"),
                }};
                query = new CatalogQuery() {{
                    exactQuery = new CatalogQueryExact("dignissimos", "provident");;
                    itemVariationsForItemOptionValuesQuery = new CatalogQueryItemVariationsForItemOptionValues() {{
                        itemOptionValueIds = new String[]{{
                            add("assumenda"),
                            add("sunt"),
                            add("odit"),
                        }};
                    }};;
                    itemsForItemOptionsQuery = new CatalogQueryItemsForItemOptions() {{
                        itemOptionIds = new String[]{{
                            add("deleniti"),
                            add("optio"),
                            add("quasi"),
                            add("repellat"),
                        }};
                    }};;
                    itemsForModifierListQuery = new CatalogQueryItemsForModifierList(                new String[]{{
                                        add("magnam"),
                                        add("perspiciatis"),
                                        add("amet"),
                                    }});;
                    itemsForTaxQuery = new CatalogQueryItemsForTax(                new String[]{{
                                        add("sunt"),
                                        add("nemo"),
                                        add("delectus"),
                                    }});;
                    prefixQuery = new CatalogQueryPrefix("illum", "porro");;
                    rangeQuery = new CatalogQueryRange("quaerat") {{
                        attributeMaxValue = 166324L;
                        attributeMinValue = 763928L;
                    }};;
                    setQuery = new CatalogQuerySet("quos",                 new String[]{{
                                        add("commodi"),
                                        add("maxime"),
                                    }});;
                    sortedAttributeQuery = new CatalogQuerySortedAttribute("sed") {{
                        initialAttributeValue = "minus";
                        sortOrder = "consequuntur";
                    }};;
                    textQuery = new CatalogQueryText(                new String[]{{
                                        add("delectus"),
                                        add("harum"),
                                        add("aliquam"),
                                        add("eligendi"),
                                    }});;
                }};;
            }};            

            SearchCatalogObjectsResponse res = sdk.catalog.searchCatalogObjects(req, new SearchCatalogObjectsSecurity("hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchCatalogObjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateItemModifierLists

Updates the [CatalogModifierList](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifierList) objects
that apply to the targeted [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) without having
to perform an upsert on the entire item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateItemModifierListsResponse;
import org.openapis.openapi.models.operations.UpdateItemModifierListsSecurity;
import org.openapis.openapi.models.shared.UpdateItemModifierListsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.UpdateItemModifierListsRequest req = new UpdateItemModifierListsRequest(                new String[]{{
                                add("illo"),
                                add("nobis"),
                                add("esse"),
                                add("nisi"),
                            }}) {{
                modifierListsToDisable = new String[]{{
                    add("sequi"),
                }};
                modifierListsToEnable = new String[]{{
                    add("reiciendis"),
                }};
            }};            

            UpdateItemModifierListsResponse res = sdk.catalog.updateItemModifierLists(req, new UpdateItemModifierListsSecurity("quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateItemModifierListsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateItemTaxes

Updates the [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects that apply to the
targeted [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) without having to perform an
upsert on the entire item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateItemTaxesResponse;
import org.openapis.openapi.models.operations.UpdateItemTaxesSecurity;
import org.openapis.openapi.models.shared.UpdateItemTaxesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.UpdateItemTaxesRequest req = new UpdateItemTaxesRequest(                new String[]{{
                                add("vitae"),
                                add("maiores"),
                            }}) {{
                taxesToDisable = new String[]{{
                    add("architecto"),
                    add("rerum"),
                    add("assumenda"),
                }};
                taxesToEnable = new String[]{{
                    add("dolorem"),
                }};
            }};            

            UpdateItemTaxesResponse res = sdk.catalog.updateItemTaxes(req, new UpdateItemTaxesSecurity("hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateItemTaxesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upsertCatalogObject

Creates or updates the target [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpsertCatalogObjectResponse;
import org.openapis.openapi.models.operations.UpsertCatalogObjectSecurity;
import org.openapis.openapi.models.shared.CatalogCategory;
import org.openapis.openapi.models.shared.CatalogCustomAttributeDefinition;
import org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionNumberConfig;
import org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionSelectionConfig;
import org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection;
import org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionStringConfig;
import org.openapis.openapi.models.shared.CatalogCustomAttributeValue;
import org.openapis.openapi.models.shared.CatalogDiscount;
import org.openapis.openapi.models.shared.CatalogImage;
import org.openapis.openapi.models.shared.CatalogItem;
import org.openapis.openapi.models.shared.CatalogItemModifierListInfo;
import org.openapis.openapi.models.shared.CatalogItemOption;
import org.openapis.openapi.models.shared.CatalogItemOptionForItem;
import org.openapis.openapi.models.shared.CatalogItemOptionValue;
import org.openapis.openapi.models.shared.CatalogItemOptionValueForItemVariation;
import org.openapis.openapi.models.shared.CatalogItemVariation;
import org.openapis.openapi.models.shared.CatalogMeasurementUnit;
import org.openapis.openapi.models.shared.CatalogModifier;
import org.openapis.openapi.models.shared.CatalogModifierList;
import org.openapis.openapi.models.shared.CatalogModifierOverride;
import org.openapis.openapi.models.shared.CatalogObject;
import org.openapis.openapi.models.shared.CatalogPricingRule;
import org.openapis.openapi.models.shared.CatalogProductSet;
import org.openapis.openapi.models.shared.CatalogQuickAmount;
import org.openapis.openapi.models.shared.CatalogQuickAmountsSettings;
import org.openapis.openapi.models.shared.CatalogStockConversion;
import org.openapis.openapi.models.shared.CatalogSubscriptionPlan;
import org.openapis.openapi.models.shared.CatalogTax;
import org.openapis.openapi.models.shared.CatalogTimePeriod;
import org.openapis.openapi.models.shared.CatalogV1Id;
import org.openapis.openapi.models.shared.ItemVariationLocationOverrides;
import org.openapis.openapi.models.shared.MeasurementUnit;
import org.openapis.openapi.models.shared.MeasurementUnitCustom;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.SourceApplication;
import org.openapis.openapi.models.shared.SubscriptionPhase;
import org.openapis.openapi.models.shared.UpsertCatalogObjectRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.UpsertCatalogObjectRequest req = new UpsertCatalogObjectRequest("repellendus",                 new CatalogObject("nam", "ab") {{
                                absentAtLocationIds = new String[]{{
                                    add("pariatur"),
                                    add("expedita"),
                                }};
                                catalogV1Ids = new org.openapis.openapi.models.shared.CatalogV1Id[]{{
                                    add(new CatalogV1Id() {{
                                        catalogV1Id = "tempore";
                                        locationId = "recusandae";
                                    }}),
                                    add(new CatalogV1Id() {{
                                        catalogV1Id = "nostrum";
                                        locationId = "officia";
                                    }}),
                                }};
                                categoryData = new CatalogCategory() {{
                                    name = "Lena Herzog";
                                }};;
                                customAttributeDefinitionData = new CatalogCustomAttributeDefinition(                new String[]{{
                                                    add("necessitatibus"),
                                                    add("aspernatur"),
                                                    add("dolores"),
                                                }}, "laborum", "vero") {{
                                    appVisibility = "eos";
                                    customAttributeUsageCount = 27653L;
                                    description = "temporibus";
                                    key = "id";
                                    numberConfig = new CatalogCustomAttributeDefinitionNumberConfig() {{
                                        precision = 62907L;
                                    }};;
                                    selectionConfig = new CatalogCustomAttributeDefinitionSelectionConfig() {{
                                        allowedSelections = new org.openapis.openapi.models.shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[]{{
                                            add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("ab") {{
                                                name = "Sylvester Cormier";
                                                uid = "iusto";
                                            }}),
                                            add(new CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection("molestiae") {{
                                                name = "Louis Kuvalis";
                                                uid = "ullam";
                                            }}),
                                        }};
                                        maxAllowedSelections = 933840L;
                                    }};;
                                    sellerVisibility = "rem";
                                    sourceApplication = new SourceApplication() {{
                                        applicationId = "nemo";
                                        name = "Mrs. Kate Moen";
                                        product = "occaecati";
                                    }};;
                                    stringConfig = new CatalogCustomAttributeDefinitionStringConfig() {{
                                        enforceUniqueness = false;
                                    }};;
                                }};;
                                customAttributeValues = new java.util.HashMap<String, org.openapis.openapi.models.shared.CatalogCustomAttributeValue>() {{
                                    put("magni", new CatalogCustomAttributeValue() {{
                                        booleanValue = false;
                                        customAttributeDefinitionId = "consequuntur";
                                        key = "consequuntur";
                                        name = "Tonya Hilpert";
                                        numberValue = "modi";
                                        selectionUidValues = new String[]{{
                                            add("explicabo"),
                                            add("modi"),
                                        }};
                                        stringValue = "doloremque";
                                        type = "odio";
                                    }});
                                    put("sit", new CatalogCustomAttributeValue() {{
                                        booleanValue = false;
                                        customAttributeDefinitionId = "voluptatum";
                                        key = "tempora";
                                        name = "Erik Padberg";
                                        numberValue = "molestiae";
                                        selectionUidValues = new String[]{{
                                            add("saepe"),
                                            add("maiores"),
                                            add("accusantium"),
                                            add("sed"),
                                        }};
                                        stringValue = "eos";
                                        type = "consequuntur";
                                    }});
                                    put("quis", new CatalogCustomAttributeValue() {{
                                        booleanValue = false;
                                        customAttributeDefinitionId = "vitae";
                                        key = "occaecati";
                                        name = "Hope Predovic";
                                        numberValue = "modi";
                                        selectionUidValues = new String[]{{
                                            add("quae"),
                                        }};
                                        stringValue = "similique";
                                        type = "possimus";
                                    }});
                                    put("quo", new CatalogCustomAttributeValue() {{
                                        booleanValue = false;
                                        customAttributeDefinitionId = "suscipit";
                                        key = "ex";
                                        name = "Carlton Wyman MD";
                                        numberValue = "fugit";
                                        selectionUidValues = new String[]{{
                                            add("quo"),
                                            add("molestiae"),
                                        }};
                                        stringValue = "maxime";
                                        type = "facere";
                                    }});
                                }};
                                discountData = new CatalogDiscount() {{
                                    amountMoney = new Money() {{
                                        amount = 769247L;
                                        currency = "cupiditate";
                                    }};;
                                    discountType = "deleniti";
                                    labelColor = "quasi";
                                    modifyTaxBasis = "maiores";
                                    name = "Beth Langosh";
                                    percentage = "quae";
                                    pinRequired = false;
                                }};;
                                imageData = new CatalogImage() {{
                                    caption = "facere";
                                    name = "Kelli Reichert";
                                    url = "minus";
                                }};;
                                imageId = "hic";
                                isDeleted = false;
                                itemData = new CatalogItem() {{
                                    abbreviation = "similique";
                                    availableElectronically = false;
                                    availableForPickup = false;
                                    availableOnline = false;
                                    categoryId = "fuga";
                                    description = "consectetur";
                                    itemOptions = new org.openapis.openapi.models.shared.CatalogItemOptionForItem[]{{
                                        add(new CatalogItemOptionForItem() {{
                                            itemOptionId = "laudantium";
                                        }}),
                                        add(new CatalogItemOptionForItem() {{
                                            itemOptionId = "cumque";
                                        }}),
                                    }};
                                    labelColor = "adipisci";
                                    modifierListInfo = new org.openapis.openapi.models.shared.CatalogItemModifierListInfo[]{{
                                        add(new CatalogItemModifierListInfo("necessitatibus") {{
                                            enabled = false;
                                            maxSelectedModifiers = 721723L;
                                            minSelectedModifiers = 974775L;
                                            modifierListId = "magnam";
                                            modifierOverrides = new org.openapis.openapi.models.shared.CatalogModifierOverride[]{{
                                                add(new CatalogModifierOverride("itaque") {{
                                                    modifierId = "ducimus";
                                                    onByDefault = false;
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    name = "Ora Rosenbaum DDS";
                                    productType = "numquam";
                                    skipModifierScreen = false;
                                    sortName = "aspernatur";
                                    taxIds = new String[]{{
                                        add("nihil"),
                                        add("voluptatum"),
                                        add("reiciendis"),
                                    }};
                                    variations = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                        add(new CatalogObject() {{}}),
                                    }};
                                }};;
                                itemOptionData = new CatalogItemOption() {{
                                    description = "ullam";
                                    displayName = "nisi";
                                    name = "Melanie Dicki";
                                    showColors = false;
                                    values = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                        add(new CatalogObject() {{}}),
                                        add(new CatalogObject() {{}}),
                                        add(new CatalogObject() {{}}),
                                    }};
                                }};;
                                itemOptionValueData = new CatalogItemOptionValue() {{
                                    color = "perferendis";
                                    description = "quibusdam";
                                    itemOptionId = "impedit";
                                    name = "Sue Huel";
                                    ordinal = 291596L;
                                }};;
                                itemVariationData = new CatalogItemVariation() {{
                                    availableForBooking = false;
                                    inventoryAlertThreshold = 804823L;
                                    inventoryAlertType = "maxime";
                                    itemId = "expedita";
                                    itemOptionValues = new org.openapis.openapi.models.shared.CatalogItemOptionValueForItemVariation[]{{
                                        add(new CatalogItemOptionValueForItemVariation() {{
                                            itemOptionId = "ea";
                                            itemOptionValueId = "impedit";
                                        }}),
                                    }};
                                    locationOverrides = new org.openapis.openapi.models.shared.ItemVariationLocationOverrides[]{{
                                        add(new ItemVariationLocationOverrides() {{
                                            inventoryAlertThreshold = 762297L;
                                            inventoryAlertType = "est";
                                            locationId = "inventore";
                                            priceMoney = new Money() {{
                                                amount = 164805L;
                                                currency = "repellendus";
                                            }};
                                            pricingType = "sit";
                                            trackInventory = false;
                                        }}),
                                        add(new ItemVariationLocationOverrides() {{
                                            inventoryAlertThreshold = 172042L;
                                            inventoryAlertType = "enim";
                                            locationId = "aspernatur";
                                            priceMoney = new Money() {{
                                                amount = 595585L;
                                                currency = "magni";
                                            }};
                                            pricingType = "odio";
                                            trackInventory = false;
                                        }}),
                                        add(new ItemVariationLocationOverrides() {{
                                            inventoryAlertThreshold = 2758L;
                                            inventoryAlertType = "quidem";
                                            locationId = "deleniti";
                                            priceMoney = new Money() {{
                                                amount = 819690L;
                                                currency = "ipsam";
                                            }};
                                            pricingType = "odio";
                                            trackInventory = false;
                                        }}),
                                    }};
                                    measurementUnitId = "fugit";
                                    name = "Lynette Stark";
                                    ordinal = 348708L;
                                    priceMoney = new Money() {{
                                        amount = 739938L;
                                        currency = "voluptatum";
                                    }};;
                                    pricingType = "facilis";
                                    serviceDuration = 809212L;
                                    sku = "reiciendis";
                                    stockable = false;
                                    stockableConversion = new CatalogStockConversion("dolores", "dolore", "pariatur");;
                                    teamMemberIds = new String[]{{
                                        add("cupiditate"),
                                        add("nemo"),
                                        add("natus"),
                                    }};
                                    trackInventory = false;
                                    upc = "nisi";
                                    userData = "provident";
                                }};;
                                measurementUnitData = new CatalogMeasurementUnit() {{
                                    measurementUnit = new MeasurementUnit() {{
                                        areaUnit = "amet";
                                        customUnit = new MeasurementUnitCustom("dolor", "nostrum");;
                                        genericUnit = "qui";
                                        lengthUnit = "tenetur";
                                        timeUnit = "molestiae";
                                        type = "dolore";
                                        volumeUnit = "ullam";
                                        weightUnit = "velit";
                                    }};;
                                    precision = 240836L;
                                }};;
                                modifierData = new CatalogModifier() {{
                                    modifierListId = "cupiditate";
                                    name = "Herbert Steuber";
                                    ordinal = 834177L;
                                    priceMoney = new Money() {{
                                        amount = 906524L;
                                        currency = "amet";
                                    }};;
                                }};;
                                modifierListData = new CatalogModifierList() {{
                                    modifiers = new org.openapis.openapi.models.shared.CatalogObject[]{{
                                        add(new CatalogObject() {{}}),
                                        add(new CatalogObject() {{}}),
                                        add(new CatalogObject() {{}}),
                                    }};
                                    name = "Gwen Monahan";
                                    ordinal = 587337L;
                                    selectionType = "voluptatibus";
                                }};;
                                presentAtAllLocations = false;
                                presentAtLocationIds = new String[]{{
                                    add("dolorum"),
                                    add("soluta"),
                                }};
                                pricingRuleData = new CatalogPricingRule() {{
                                    applyProductsId = "cum";
                                    customerGroupIdsAny = new String[]{{
                                        add("delectus"),
                                        add("commodi"),
                                    }};
                                    discountId = "commodi";
                                    excludeProductsId = "fugit";
                                    excludeStrategy = "ullam";
                                    matchProductsId = "ullam";
                                    name = "Monique Denesik";
                                    timePeriodIds = new String[]{{
                                        add("qui"),
                                        add("deserunt"),
                                        add("eligendi"),
                                    }};
                                    validFromDate = "incidunt";
                                    validFromLocalTime = "deleniti";
                                    validUntilDate = "dolor";
                                    validUntilLocalTime = "est";
                                }};;
                                productSetData = new CatalogProductSet() {{
                                    allProducts = false;
                                    name = "Rufus Conn II";
                                    productIdsAll = new String[]{{
                                        add("facilis"),
                                        add("deserunt"),
                                        add("nisi"),
                                    }};
                                    productIdsAny = new String[]{{
                                        add("voluptatem"),
                                        add("illo"),
                                    }};
                                    quantityExact = 434955L;
                                    quantityMax = 279530L;
                                    quantityMin = 908274L;
                                }};;
                                quickAmountsSettingsData = new CatalogQuickAmountsSettings("quae") {{
                                    amounts = new org.openapis.openapi.models.shared.CatalogQuickAmount[]{{
                                        add(new CatalogQuickAmount(                new Money() {{
                                                            amount = 644416L;
                                                            currency = "repudiandae";
                                                        }};, "nemo") {{
                                            amount = new Money() {{
                                                amount = 989122L;
                                                currency = "veniam";
                                            }};
                                            ordinal = 695408L;
                                            score = 989526L;
                                            type = "eum";
                                        }}),
                                        add(new CatalogQuickAmount(                new Money() {{
                                                            amount = 708075L;
                                                            currency = "assumenda";
                                                        }};, "repudiandae") {{
                                            amount = new Money() {{
                                                amount = 565446L;
                                                currency = "architecto";
                                            }};
                                            ordinal = 711275L;
                                            score = 787850L;
                                            type = "praesentium";
                                        }}),
                                    }};
                                    eligibleForAutoAmounts = false;
                                }};;
                                subscriptionPlanData = new CatalogSubscriptionPlan("maiores",                 new org.openapis.openapi.models.shared.SubscriptionPhase[]{{
                                                    add(new SubscriptionPhase("quod",                 new Money() {{
                                                                        amount = 176104L;
                                                                        currency = "alias";
                                                                    }};) {{
                                                        cadence = "commodi";
                                                        ordinal = 114924L;
                                                        periods = 147297L;
                                                        recurringPriceMoney = new Money() {{
                                                            amount = 724073L;
                                                            currency = "ex";
                                                        }};
                                                        uid = "neque";
                                                    }}),
                                                }});;
                                taxData = new CatalogTax() {{
                                    appliesToCustomAmounts = false;
                                    calculationPhase = "ad";
                                    enabled = false;
                                    inclusionType = "a";
                                    name = "Orlando Lindgren IV";
                                    percentage = "quam";
                                }};;
                                timePeriodData = new CatalogTimePeriod() {{
                                    event = "modi";
                                }};;
                                updatedAt = "fuga";
                                version = 435931L;
                            }};);            

            UpsertCatalogObjectResponse res = sdk.catalog.upsertCatalogObject(req, new UpsertCatalogObjectSecurity("deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.upsertCatalogObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
