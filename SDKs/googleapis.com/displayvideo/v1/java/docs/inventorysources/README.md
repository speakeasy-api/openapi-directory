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
                dollarXgafv = XgafvEnum.TWO;
                inventorySourceInput = new InventorySourceInput() {{
                    commitment = InventorySourceCommitmentEnum.INVENTORY_SOURCE_COMMITMENT_GUARANTEED;
                    creativeConfigs = new org.openapis.openapi.models.shared.CreativeConfig[]{{
                        add(new CreativeConfig() {{
                            creativeType = CreativeConfigCreativeTypeEnum.CREATIVE_TYPE_EXPANDABLE;
                            displayCreativeConfig = new InventorySourceDisplayCreativeConfig() {{
                                creativeSize = new Dimensions() {{
                                    heightPixels = 78802;
                                    widthPixels = 761773;
                                }};
                            }};
                            videoCreativeConfig = new InventorySourceVideoCreativeConfig() {{
                                duration = "nobis";
                            }};
                        }}),
                        add(new CreativeConfig() {{
                            creativeType = CreativeConfigCreativeTypeEnum.CREATIVE_TYPE_NATIVE_VIDEO;
                            displayCreativeConfig = new InventorySourceDisplayCreativeConfig() {{
                                creativeSize = new Dimensions() {{
                                    heightPixels = 412897;
                                    widthPixels = 820322;
                                }};
                            }};
                            videoCreativeConfig = new InventorySourceVideoCreativeConfig() {{
                                duration = "provident";
                            }};
                        }}),
                    }};
                    dealId = "veniam";
                    deliveryMethod = InventorySourceDeliveryMethodEnum.INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED;
                    displayName = "fugit";
                    exchange = InventorySourceExchangeEnum.EXCHANGE_APPLOVIN;
                    guaranteedOrderId = "consequatur";
                    inventorySourceType = InventorySourceInventorySourceTypeEnum.INVENTORY_SOURCE_TYPE_AUCTION_PACKAGE;
                    publisherName = "id";
                    rateDetails = new RateDetails() {{
                        inventorySourceRateType = RateDetailsInventorySourceRateTypeEnum.INVENTORY_SOURCE_RATE_TYPE_CPD;
                        minimumSpend = new Money() {{
                            currencyCode = "ratione";
                            nanos = 17029;
                            units = "distinctio";
                        }};;
                        rate = new Money() {{
                            currencyCode = "voluptas";
                            nanos = 575433;
                            units = "maiores";
                        }};;
                        unitsPurchased = "nihil";
                    }};;
                    readWriteAccessors = new InventorySourceAccessors() {{
                        advertisers = new InventorySourceAccessorsAdvertiserAccessors() {{
                            advertiserIds = new String[]{{
                                add("cumque"),
                                add("consequuntur"),
                                add("maiores"),
                            }};
                        }};;
                        partner = new InventorySourceAccessorsPartnerAccessor() {{
                            partnerId = "esse";
                        }};;
                    }};;
                    status = new InventorySourceStatusInput() {{
                        entityPauseReason = "explicabo";
                        entityStatus = InventorySourceStatusEntityStatusEnum.ENTITY_STATUS_SCHEDULED_FOR_DELETION;
                    }};;
                    subSitePropertyId = "quos";
                    timeRange = new TimeRange() {{
                        endTime = "deleniti";
                        startTime = "enim";
                    }};;
                }};;
                accessToken = "sit";
                advertiserId = "voluptatem";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                fields = "tempora";
                key = "occaecati";
                oauthToken = "quasi";
                partnerId = "veritatis";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "doloremque";
                uploadProtocol = "quas";
            }};            

            DisplayvideoInventorySourcesCreateResponse res = sdk.inventorySources.displayvideoInventorySourcesCreate(req, new DisplayvideoInventorySourcesCreateSecurity("dolores", "perferendis") {{
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

            DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest req = new DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                editInventorySourceReadWriteAccessorsRequest = new EditInventorySourceReadWriteAccessorsRequest() {{
                    advertisersUpdate = new EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate() {{
                        addedAdvertisers = new String[]{{
                            add("laudantium"),
                            add("voluptates"),
                            add("minus"),
                        }};
                        removedAdvertisers = new String[]{{
                            add("vel"),
                            add("beatae"),
                        }};
                    }};;
                    assignPartner = false;
                    partnerId = "quos";
                }};;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "necessitatibus";
                key = "perspiciatis";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "unde";
                uploadProtocol = "debitis";
            }};            

            DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse res = sdk.inventorySources.displayvideoInventorySourcesEditInventorySourceReadWriteAccessors(req, new DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsSecurity("quidem", "magnam") {{
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

            DisplayvideoInventorySourcesGetRequest req = new DisplayvideoInventorySourcesGetRequest("doloremque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.JSON;
                callback = "voluptas";
                fields = "earum";
                key = "est";
                oauthToken = "earum";
                partnerId = "nihil";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "rerum";
                uploadProtocol = "perferendis";
            }};            

            DisplayvideoInventorySourcesGetResponse res = sdk.inventorySources.displayvideoInventorySourcesGet(req, new DisplayvideoInventorySourcesGetSecurity("nam", "ullam") {{
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
                accessToken = "eos";
                advertiserId = "id";
                alt = AltEnum.JSON;
                callback = "illum";
                fields = "error";
                filter = "consectetur";
                key = "reprehenderit";
                oauthToken = "eligendi";
                orderBy = "cum";
                pageSize = 633825L;
                pageToken = "culpa";
                partnerId = "a";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "eius";
                uploadProtocol = "ad";
            }};            

            DisplayvideoInventorySourcesListResponse res = sdk.inventorySources.displayvideoInventorySourcesList(req, new DisplayvideoInventorySourcesListSecurity("quia", "quod") {{
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

            DisplayvideoInventorySourcesPatchRequest req = new DisplayvideoInventorySourcesPatchRequest("quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                inventorySourceInput = new InventorySourceInput() {{
                    commitment = InventorySourceCommitmentEnum.INVENTORY_SOURCE_COMMITMENT_UNSPECIFIED;
                    creativeConfigs = new org.openapis.openapi.models.shared.CreativeConfig[]{{
                        add(new CreativeConfig() {{
                            creativeType = CreativeConfigCreativeTypeEnum.CREATIVE_TYPE_AUDIO;
                            displayCreativeConfig = new InventorySourceDisplayCreativeConfig() {{
                                creativeSize = new Dimensions() {{
                                    heightPixels = 586723;
                                    widthPixels = 733110;
                                }};
                            }};
                            videoCreativeConfig = new InventorySourceVideoCreativeConfig() {{
                                duration = "odit";
                            }};
                        }}),
                    }};
                    dealId = "est";
                    deliveryMethod = InventorySourceDeliveryMethodEnum.INVENTORY_SOURCE_DELIVERY_METHOD_TAG;
                    displayName = "ipsum";
                    exchange = InventorySourceExchangeEnum.EXCHANGE_BIDSWITCH;
                    guaranteedOrderId = "nulla";
                    inventorySourceType = InventorySourceInventorySourceTypeEnum.INVENTORY_SOURCE_TYPE_AUCTION_PACKAGE;
                    publisherName = "sapiente";
                    rateDetails = new RateDetails() {{
                        inventorySourceRateType = RateDetailsInventorySourceRateTypeEnum.INVENTORY_SOURCE_RATE_TYPE_FLAT;
                        minimumSpend = new Money() {{
                            currencyCode = "voluptatum";
                            nanos = 98123;
                            units = "mollitia";
                        }};;
                        rate = new Money() {{
                            currencyCode = "voluptatum";
                            nanos = 500692;
                            units = "sapiente";
                        }};;
                        unitsPurchased = "ut";
                    }};;
                    readWriteAccessors = new InventorySourceAccessors() {{
                        advertisers = new InventorySourceAccessorsAdvertiserAccessors() {{
                            advertiserIds = new String[]{{
                                add("labore"),
                                add("ut"),
                            }};
                        }};;
                        partner = new InventorySourceAccessorsPartnerAccessor() {{
                            partnerId = "enim";
                        }};;
                    }};;
                    status = new InventorySourceStatusInput() {{
                        entityPauseReason = "nihil";
                        entityStatus = InventorySourceStatusEntityStatusEnum.ENTITY_STATUS_ACTIVE;
                    }};;
                    subSitePropertyId = "tenetur";
                    timeRange = new TimeRange() {{
                        endTime = "saepe";
                        startTime = "quod";
                    }};;
                }};;
                accessToken = "nulla";
                advertiserId = "tempora";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                fields = "nemo";
                key = "nesciunt";
                oauthToken = "earum";
                partnerId = "eum";
                prettyPrint = false;
                quotaUser = "dolor";
                updateMask = "placeat";
                uploadType = "quos";
                uploadProtocol = "sed";
            }};            

            DisplayvideoInventorySourcesPatchResponse res = sdk.inventorySources.displayvideoInventorySourcesPatch(req, new DisplayvideoInventorySourcesPatchSecurity("eaque", "natus") {{
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
