# guaranteedOrders

### Available Operations

* [displayvideoGuaranteedOrdersCreate](#displayvideoguaranteedorderscreate) - Creates a new guaranteed order. Returns the newly created guaranteed order if successful.
* [displayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors](#displayvideoguaranteedorderseditguaranteedorderreadaccessors) - Edits read advertisers of a guaranteed order.
* [displayvideoGuaranteedOrdersGet](#displayvideoguaranteedordersget) - Gets a guaranteed order.
* [displayvideoGuaranteedOrdersList](#displayvideoguaranteedorderslist) - Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoGuaranteedOrdersPatch](#displayvideoguaranteedorderspatch) - Updates an existing guaranteed order. Returns the updated guaranteed order if successful.

## displayvideoGuaranteedOrdersCreate

Creates a new guaranteed order. Returns the newly created guaranteed order if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoGuaranteedOrdersCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoGuaranteedOrdersCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoGuaranteedOrdersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GuaranteedOrderExchangeEnum;
import org.openapis.openapi.models.shared.GuaranteedOrderInput;
import org.openapis.openapi.models.shared.GuaranteedOrderStatusEntityStatusEnum;
import org.openapis.openapi.models.shared.GuaranteedOrderStatusInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoGuaranteedOrdersCreateRequest req = new DisplayvideoGuaranteedOrdersCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                guaranteedOrderInput = new GuaranteedOrderInput() {{
                    defaultCampaignId = "nemo";
                    displayName = "nobis";
                    exchange = GuaranteedOrderExchangeEnum.EXCHANGE_TAPJOY;
                    publisherName = "labore";
                    readAccessInherited = false;
                    readAdvertiserIds = new String[]{{
                        add("minima"),
                    }};
                    readWriteAdvertiserId = "magni";
                    readWritePartnerId = "itaque";
                    status = new GuaranteedOrderStatusInput() {{
                        entityPauseReason = "error";
                        entityStatus = GuaranteedOrderStatusEntityStatusEnum.ENTITY_STATUS_PAUSED;
                    }};;
                }};;
                accessToken = "error";
                advertiserId = "placeat";
                alt = AltEnum.PROTO;
                callback = "voluptate";
                fields = "earum";
                key = "minima";
                oauthToken = "odit";
                partnerId = "odit";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "error";
                uploadProtocol = "vel";
            }};            

            DisplayvideoGuaranteedOrdersCreateResponse res = sdk.guaranteedOrders.displayvideoGuaranteedOrdersCreate(req, new DisplayvideoGuaranteedOrdersCreateSecurity("dolorum", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.guaranteedOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors

Edits read advertisers of a guaranteed order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest;
import org.openapis.openapi.models.operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse;
import org.openapis.openapi.models.operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EditGuaranteedOrderReadAccessorsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest req = new DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest("itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                editGuaranteedOrderReadAccessorsRequest = new EditGuaranteedOrderReadAccessorsRequest() {{
                    addedAdvertisers = new String[]{{
                        add("amet"),
                    }};
                    partnerId = "cum";
                    readAccessInherited = false;
                    removedAdvertisers = new String[]{{
                        add("corrupti"),
                        add("non"),
                    }};
                }};;
                accessToken = "esse";
                alt = AltEnum.PROTO;
                callback = "eligendi";
                fields = "minima";
                key = "omnis";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "voluptatibus";
                uploadProtocol = "autem";
            }};            

            DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse res = sdk.guaranteedOrders.displayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors(req, new DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity("in", "repellat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.editGuaranteedOrderReadAccessorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoGuaranteedOrdersGet

Gets a guaranteed order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoGuaranteedOrdersGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoGuaranteedOrdersGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoGuaranteedOrdersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoGuaranteedOrdersGetRequest req = new DisplayvideoGuaranteedOrdersGetRequest("amet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolore";
                advertiserId = "optio";
                alt = AltEnum.PROTO;
                callback = "repudiandae";
                fields = "tempora";
                key = "libero";
                oauthToken = "suscipit";
                partnerId = "illum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "aliquid";
                uploadProtocol = "sint";
            }};            

            DisplayvideoGuaranteedOrdersGetResponse res = sdk.guaranteedOrders.displayvideoGuaranteedOrdersGet(req, new DisplayvideoGuaranteedOrdersGetSecurity("aliquid", "repellat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.guaranteedOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoGuaranteedOrdersList

Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoGuaranteedOrdersListRequest;
import org.openapis.openapi.models.operations.DisplayvideoGuaranteedOrdersListResponse;
import org.openapis.openapi.models.operations.DisplayvideoGuaranteedOrdersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoGuaranteedOrdersListRequest req = new DisplayvideoGuaranteedOrdersListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consectetur";
                advertiserId = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "nihil";
                fields = "eius";
                filter = "dignissimos";
                key = "corporis";
                oauthToken = "perferendis";
                orderBy = "architecto";
                pageSize = 229733L;
                pageToken = "corporis";
                partnerId = "nihil";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "dolore";
                uploadProtocol = "magnam";
            }};            

            DisplayvideoGuaranteedOrdersListResponse res = sdk.guaranteedOrders.displayvideoGuaranteedOrdersList(req, new DisplayvideoGuaranteedOrdersListSecurity("maiores", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listGuaranteedOrdersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoGuaranteedOrdersPatch

Updates an existing guaranteed order. Returns the updated guaranteed order if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoGuaranteedOrdersPatchRequest;
import org.openapis.openapi.models.operations.DisplayvideoGuaranteedOrdersPatchResponse;
import org.openapis.openapi.models.operations.DisplayvideoGuaranteedOrdersPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GuaranteedOrderExchangeEnum;
import org.openapis.openapi.models.shared.GuaranteedOrderInput;
import org.openapis.openapi.models.shared.GuaranteedOrderStatusEntityStatusEnum;
import org.openapis.openapi.models.shared.GuaranteedOrderStatusInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoGuaranteedOrdersPatchRequest req = new DisplayvideoGuaranteedOrdersPatchRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                guaranteedOrderInput = new GuaranteedOrderInput() {{
                    defaultCampaignId = "praesentium";
                    displayName = "libero";
                    exchange = GuaranteedOrderExchangeEnum.EXCHANGE_UNSPECIFIED;
                    publisherName = "totam";
                    readAccessInherited = false;
                    readAdvertiserIds = new String[]{{
                        add("quo"),
                        add("dolor"),
                    }};
                    readWriteAdvertiserId = "sunt";
                    readWritePartnerId = "omnis";
                    status = new GuaranteedOrderStatusInput() {{
                        entityPauseReason = "quam";
                        entityStatus = GuaranteedOrderStatusEntityStatusEnum.ENTITY_STATUS_SCHEDULED_FOR_DELETION;
                    }};;
                }};;
                accessToken = "dicta";
                advertiserId = "excepturi";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "odit";
                key = "incidunt";
                oauthToken = "corporis";
                partnerId = "quaerat";
                prettyPrint = false;
                quotaUser = "suscipit";
                updateMask = "ducimus";
                uploadType = "tenetur";
                uploadProtocol = "excepturi";
            }};            

            DisplayvideoGuaranteedOrdersPatchResponse res = sdk.guaranteedOrders.displayvideoGuaranteedOrdersPatch(req, new DisplayvideoGuaranteedOrdersPatchSecurity("modi", "corrupti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.guaranteedOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
