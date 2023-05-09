# inventorySources

### Available Operations

* [displayvideoInventorySourcesCreate](#displayvideoinventorysourcescreate) - Creates a new inventory source. Returns the newly created inventory source if successful.
* [displayvideoInventorySourcesEditInventorySourceReadWriteAccessors](#displayvideoinventorysourceseditinventorysourcereadwriteaccessors) - Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.
* [displayvideoInventorySourcesGet](#displayvideoinventorysourcesget) - Gets an inventory source.
* [displayvideoInventorySourcesList](#displayvideoinventorysourceslist) - Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoInventorySourcesPatch](#displayvideoinventorysourcespatch) - Updates an existing inventory source. Returns the updated inventory source if successful.

## displayvideoInventorySourcesCreate

Creates a new inventory source. Returns the newly created inventory source if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourcesCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourcesCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourcesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeConfig;
import org.openapis.openapi.models.shared.CreativeConfigCreativeTypeEnum;
import org.openapis.openapi.models.shared.Dimensions;
import org.openapis.openapi.models.shared.InventorySourceAccessors;
import org.openapis.openapi.models.shared.InventorySourceAccessorsAdvertiserAccessors;
import org.openapis.openapi.models.shared.InventorySourceAccessorsPartnerAccessor;
import org.openapis.openapi.models.shared.InventorySourceCommitmentEnum;
import org.openapis.openapi.models.shared.InventorySourceDeliveryMethodEnum;
import org.openapis.openapi.models.shared.InventorySourceDisplayCreativeConfig;
import org.openapis.openapi.models.shared.InventorySourceExchangeEnum;
import org.openapis.openapi.models.shared.InventorySourceInput;
import org.openapis.openapi.models.shared.InventorySourceInventorySourceTypeEnum;
import org.openapis.openapi.models.shared.InventorySourceStatusEntityStatusEnum;
import org.openapis.openapi.models.shared.InventorySourceStatusInput;
import org.openapis.openapi.models.shared.InventorySourceVideoCreativeConfig;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.RateDetails;
import org.openapis.openapi.models.shared.RateDetailsInventorySourceRateTypeEnum;
import org.openapis.openapi.models.shared.TimeRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoInventorySourcesCreateRequest req = new DisplayvideoInventorySourcesCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                inventorySourceInput = new InventorySourceInput() {{
                    commitment = InventorySourceCommitmentEnum.INVENTORY_SOURCE_COMMITMENT_GUARANTEED;
                    creativeConfigs = new org.openapis.openapi.models.shared.CreativeConfig[]{{
                        add(new CreativeConfig() {{
                            creativeType = CreativeConfigCreativeTypeEnum.CREATIVE_TYPE_NATIVE;
                            displayCreativeConfig = new InventorySourceDisplayCreativeConfig() {{
                                creativeSize = new Dimensions() {{
                                    heightPixels = 361801;
                                    widthPixels = 308866;
                                }};
                            }};
                            videoCreativeConfig = new InventorySourceVideoCreativeConfig() {{
                                duration = "suscipit";
                            }};
                        }}),
                    }};
                    dealId = "ducimus";
                    deliveryMethod = InventorySourceDeliveryMethodEnum.INVENTORY_SOURCE_DELIVERY_METHOD_TAG;
                    displayName = "excepturi";
                    exchange = InventorySourceExchangeEnum.EXCHANGE_IBILLBOARD;
                    guaranteedOrderId = "corrupti";
                    inventorySourceType = InventorySourceInventorySourceTypeEnum.INVENTORY_SOURCE_TYPE_PRIVATE;
                    publisherName = "eius";
                    rateDetails = new RateDetails() {{
                        inventorySourceRateType = RateDetailsInventorySourceRateTypeEnum.INVENTORY_SOURCE_RATE_TYPE_FLAT;
                        minimumSpend = new Money() {{
                            currencyCode = "fugit";
                            nanos = 815618;
                            units = "ipsam";
                        }};;
                        rate = new Money() {{
                            currencyCode = "nobis";
                            nanos = 784120;
                            units = "labore";
                        }};;
                        unitsPurchased = "perspiciatis";
                    }};;
                    readWriteAccessors = new InventorySourceAccessors() {{
                        advertisers = new InventorySourceAccessorsAdvertiserAccessors() {{
                            advertiserIds = new String[]{{
                                add("qui"),
                                add("qui"),
                            }};
                        }};;
                        partner = new InventorySourceAccessorsPartnerAccessor() {{
                            partnerId = "consectetur";
                        }};;
                    }};;
                    status = new InventorySourceStatusInput() {{
                        entityPauseReason = "ratione";
                        entityStatus = InventorySourceStatusEntityStatusEnum.ENTITY_STATUS_SCHEDULED_FOR_DELETION;
                    }};;
                    subSitePropertyId = "iure";
                    timeRange = new TimeRange() {{
                        endTime = "aliquid";
                        startTime = "cum";
                    }};;
                }};;
                accessToken = "fugiat";
                advertiserId = "rem";
                alt = AltEnum.PROTO;
                callback = "officiis";
                fields = "corporis";
                key = "repellendus";
                oauthToken = "aut";
                partnerId = "voluptatem";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "excepturi";
                uploadProtocol = "odio";
            }};            

            DisplayvideoInventorySourcesCreateResponse res = sdk.inventorySources.displayvideoInventorySourcesCreate(req, new DisplayvideoInventorySourcesCreateSecurity("omnis", "officiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inventorySource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoInventorySourcesEditInventorySourceReadWriteAccessors

Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EditInventorySourceReadWriteAccessorsRequest;
import org.openapis.openapi.models.shared.EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest req = new DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                editInventorySourceReadWriteAccessorsRequest = new EditInventorySourceReadWriteAccessorsRequest() {{
                    advertisersUpdate = new EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate() {{
                        addedAdvertisers = new String[]{{
                            add("velit"),
                        }};
                        removedAdvertisers = new String[]{{
                            add("nihil"),
                            add("neque"),
                            add("aspernatur"),
                        }};
                    }};;
                    assignPartner = false;
                    partnerId = "eaque";
                }};;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "aut";
                fields = "impedit";
                key = "quod";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "voluptatem";
                uploadProtocol = "perspiciatis";
            }};            

            DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse res = sdk.inventorySources.displayvideoInventorySourcesEditInventorySourceReadWriteAccessors(req, new DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsSecurity("ea", "eius") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inventorySourceAccessors != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoInventorySourcesGet

Gets an inventory source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourcesGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourcesGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourcesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoInventorySourcesGetRequest req = new DisplayvideoInventorySourcesGetRequest("aperiam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "sequi";
                fields = "rerum";
                key = "ipsum";
                oauthToken = "debitis";
                partnerId = "quis";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "incidunt";
                uploadProtocol = "ut";
            }};            

            DisplayvideoInventorySourcesGetResponse res = sdk.inventorySources.displayvideoInventorySourcesGet(req, new DisplayvideoInventorySourcesGetSecurity("delectus", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inventorySource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoInventorySourcesList

Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourcesListRequest;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourcesListResponse;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourcesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoInventorySourcesListRequest req = new DisplayvideoInventorySourcesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maiores";
                advertiserId = "debitis";
                alt = AltEnum.MEDIA;
                callback = "eos";
                fields = "assumenda";
                filter = "cumque";
                key = "ut";
                oauthToken = "quae";
                orderBy = "nihil";
                pageSize = 462761L;
                pageToken = "assumenda";
                partnerId = "consequatur";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "placeat";
                uploadProtocol = "adipisci";
            }};            

            DisplayvideoInventorySourcesListResponse res = sdk.inventorySources.displayvideoInventorySourcesList(req, new DisplayvideoInventorySourcesListSecurity("tenetur", "non") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInventorySourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoInventorySourcesPatch

Updates an existing inventory source. Returns the updated inventory source if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourcesPatchRequest;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourcesPatchResponse;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourcesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeConfig;
import org.openapis.openapi.models.shared.CreativeConfigCreativeTypeEnum;
import org.openapis.openapi.models.shared.Dimensions;
import org.openapis.openapi.models.shared.InventorySourceAccessors;
import org.openapis.openapi.models.shared.InventorySourceAccessorsAdvertiserAccessors;
import org.openapis.openapi.models.shared.InventorySourceAccessorsPartnerAccessor;
import org.openapis.openapi.models.shared.InventorySourceCommitmentEnum;
import org.openapis.openapi.models.shared.InventorySourceDeliveryMethodEnum;
import org.openapis.openapi.models.shared.InventorySourceDisplayCreativeConfig;
import org.openapis.openapi.models.shared.InventorySourceExchangeEnum;
import org.openapis.openapi.models.shared.InventorySourceInput;
import org.openapis.openapi.models.shared.InventorySourceInventorySourceTypeEnum;
import org.openapis.openapi.models.shared.InventorySourceStatusEntityStatusEnum;
import org.openapis.openapi.models.shared.InventorySourceStatusInput;
import org.openapis.openapi.models.shared.InventorySourceVideoCreativeConfig;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.RateDetails;
import org.openapis.openapi.models.shared.RateDetailsInventorySourceRateTypeEnum;
import org.openapis.openapi.models.shared.TimeRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoInventorySourcesPatchRequest req = new DisplayvideoInventorySourcesPatchRequest("accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                inventorySourceInput = new InventorySourceInput() {{
                    commitment = InventorySourceCommitmentEnum.INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED;
                    creativeConfigs = new org.openapis.openapi.models.shared.CreativeConfig[]{{
                        add(new CreativeConfig() {{
                            creativeType = CreativeConfigCreativeTypeEnum.CREATIVE_TYPE_AUDIO;
                            displayCreativeConfig = new InventorySourceDisplayCreativeConfig() {{
                                creativeSize = new Dimensions() {{
                                    heightPixels = 119928;
                                    widthPixels = 358861;
                                }};
                            }};
                            videoCreativeConfig = new InventorySourceVideoCreativeConfig() {{
                                duration = "impedit";
                            }};
                        }}),
                        add(new CreativeConfig() {{
                            creativeType = CreativeConfigCreativeTypeEnum.CREATIVE_TYPE_NATIVE_VIDEO;
                            displayCreativeConfig = new InventorySourceDisplayCreativeConfig() {{
                                creativeSize = new Dimensions() {{
                                    heightPixels = 737601;
                                    widthPixels = 296257;
                                }};
                            }};
                            videoCreativeConfig = new InventorySourceVideoCreativeConfig() {{
                                duration = "illum";
                            }};
                        }}),
                        add(new CreativeConfig() {{
                            creativeType = CreativeConfigCreativeTypeEnum.CREATIVE_TYPE_NATIVE_SITE_SQUARE;
                            displayCreativeConfig = new InventorySourceDisplayCreativeConfig() {{
                                creativeSize = new Dimensions() {{
                                    heightPixels = 889201;
                                    widthPixels = 96711;
                                }};
                            }};
                            videoCreativeConfig = new InventorySourceVideoCreativeConfig() {{
                                duration = "accusamus";
                            }};
                        }}),
                        add(new CreativeConfig() {{
                            creativeType = CreativeConfigCreativeTypeEnum.CREATIVE_TYPE_NATIVE_APP_INSTALL;
                            displayCreativeConfig = new InventorySourceDisplayCreativeConfig() {{
                                creativeSize = new Dimensions() {{
                                    heightPixels = 900916;
                                    widthPixels = 29600;
                                }};
                            }};
                            videoCreativeConfig = new InventorySourceVideoCreativeConfig() {{
                                duration = "maiores";
                            }};
                        }}),
                    }};
                    dealId = "odio";
                    deliveryMethod = InventorySourceDeliveryMethodEnum.INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED;
                    displayName = "fuga";
                    exchange = InventorySourceExchangeEnum.EXCHANGE_JCD;
                    guaranteedOrderId = "possimus";
                    inventorySourceType = InventorySourceInventorySourceTypeEnum.INVENTORY_SOURCE_TYPE_AUCTION_PACKAGE;
                    publisherName = "sed";
                    rateDetails = new RateDetails() {{
                        inventorySourceRateType = RateDetailsInventorySourceRateTypeEnum.INVENTORY_SOURCE_RATE_TYPE_CPD;
                        minimumSpend = new Money() {{
                            currencyCode = "eligendi";
                            nanos = 664591;
                            units = "distinctio";
                        }};;
                        rate = new Money() {{
                            currencyCode = "corporis";
                            nanos = 559571;
                            units = "soluta";
                        }};;
                        unitsPurchased = "cupiditate";
                    }};;
                    readWriteAccessors = new InventorySourceAccessors() {{
                        advertisers = new InventorySourceAccessorsAdvertiserAccessors() {{
                            advertiserIds = new String[]{{
                                add("et"),
                                add("quisquam"),
                                add("unde"),
                            }};
                        }};;
                        partner = new InventorySourceAccessorsPartnerAccessor() {{
                            partnerId = "sed";
                        }};;
                    }};;
                    status = new InventorySourceStatusInput() {{
                        entityPauseReason = "suscipit";
                        entityStatus = InventorySourceStatusEntityStatusEnum.ENTITY_STATUS_PAUSED;
                    }};;
                    subSitePropertyId = "pariatur";
                    timeRange = new TimeRange() {{
                        endTime = "nam";
                        startTime = "quaerat";
                    }};;
                }};;
                accessToken = "corrupti";
                advertiserId = "sint";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "quasi";
                key = "vero";
                oauthToken = "odio";
                partnerId = "numquam";
                prettyPrint = false;
                quotaUser = "fugit";
                updateMask = "inventore";
                uploadType = "optio";
                uploadProtocol = "nobis";
            }};            

            DisplayvideoInventorySourcesPatchResponse res = sdk.inventorySources.displayvideoInventorySourcesPatch(req, new DisplayvideoInventorySourcesPatchSecurity("recusandae", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inventorySource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
