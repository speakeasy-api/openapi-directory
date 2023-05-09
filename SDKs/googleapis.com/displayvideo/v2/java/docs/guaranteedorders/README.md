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
                    defaultCampaignId = "atque";
                    displayName = "maiores";
                    exchange = GuaranteedOrderExchangeEnum.EXCHANGE_TRIPLELIFT;
                    publisherName = "rerum";
                    readAccessInherited = false;
                    readAdvertiserIds = new String[]{{
                        add("quod"),
                        add("aspernatur"),
                        add("eaque"),
                    }};
                    readWriteAdvertiserId = "impedit";
                    readWritePartnerId = "nam";
                    status = new GuaranteedOrderStatusInput() {{
                        entityPauseReason = "ex";
                        entityStatus = GuaranteedOrderStatusEntityStatusEnum.ENTITY_STATUS_ARCHIVED;
                    }};;
                }};;
                accessToken = "delectus";
                advertiserId = "minus";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "eius";
                key = "eos";
                oauthToken = "veniam";
                partnerId = "repudiandae";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "occaecati";
                uploadProtocol = "debitis";
            }};            

            DisplayvideoGuaranteedOrdersCreateResponse res = sdk.guaranteedOrders.displayvideoGuaranteedOrdersCreate(req, new DisplayvideoGuaranteedOrdersCreateSecurity("laboriosam", "eos") {{
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

            DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest req = new DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest("amet") {{
                dollarXgafv = XgafvEnum.ONE;
                editGuaranteedOrderReadAccessorsRequest = new EditGuaranteedOrderReadAccessorsRequest() {{
                    addedAdvertisers = new String[]{{
                        add("occaecati"),
                        add("reiciendis"),
                        add("voluptate"),
                        add("tempore"),
                    }};
                    partnerId = "in";
                    readAccessInherited = false;
                    removedAdvertisers = new String[]{{
                        add("possimus"),
                        add("tenetur"),
                        add("recusandae"),
                    }};
                }};;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "harum";
                key = "ad";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "totam";
                uploadProtocol = "vero";
            }};            

            DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse res = sdk.guaranteedOrders.displayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors(req, new DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity("dolore", "nam") {{
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

            DisplayvideoGuaranteedOrdersGetRequest req = new DisplayvideoGuaranteedOrdersGetRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cupiditate";
                advertiserId = "illo";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "eaque";
                key = "ex";
                oauthToken = "eveniet";
                partnerId = "delectus";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "provident";
                uploadProtocol = "aut";
            }};            

            DisplayvideoGuaranteedOrdersGetResponse res = sdk.guaranteedOrders.displayvideoGuaranteedOrdersGet(req, new DisplayvideoGuaranteedOrdersGetSecurity("dolorum", "nostrum") {{
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
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nam";
                advertiserId = "numquam";
                alt = AltEnum.MEDIA;
                callback = "nostrum";
                fields = "maiores";
                filter = "veritatis";
                key = "autem";
                oauthToken = "earum";
                orderBy = "minima";
                pageSize = 405161L;
                pageToken = "possimus";
                partnerId = "nesciunt";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "nostrum";
                uploadProtocol = "fuga";
            }};            

            DisplayvideoGuaranteedOrdersListResponse res = sdk.guaranteedOrders.displayvideoGuaranteedOrdersList(req, new DisplayvideoGuaranteedOrdersListSecurity("sequi", "maxime") {{
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

            DisplayvideoGuaranteedOrdersPatchRequest req = new DisplayvideoGuaranteedOrdersPatchRequest("numquam") {{
                dollarXgafv = XgafvEnum.TWO;
                guaranteedOrderInput = new GuaranteedOrderInput() {{
                    defaultCampaignId = "eligendi";
                    displayName = "autem";
                    exchange = GuaranteedOrderExchangeEnum.EXCHANGE_GUMGUM;
                    publisherName = "sunt";
                    readAccessInherited = false;
                    readAdvertiserIds = new String[]{{
                        add("occaecati"),
                        add("provident"),
                        add("necessitatibus"),
                    }};
                    readWriteAdvertiserId = "fugit";
                    readWritePartnerId = "autem";
                    status = new GuaranteedOrderStatusInput() {{
                        entityPauseReason = "optio";
                        entityStatus = GuaranteedOrderStatusEntityStatusEnum.ENTITY_STATUS_SCHEDULED_FOR_DELETION;
                    }};;
                }};;
                accessToken = "fugiat";
                advertiserId = "blanditiis";
                alt = AltEnum.PROTO;
                callback = "natus";
                fields = "sapiente";
                key = "repellendus";
                oauthToken = "facilis";
                partnerId = "molestias";
                prettyPrint = false;
                quotaUser = "dolore";
                updateMask = "et";
                uploadType = "accusantium";
                uploadProtocol = "maiores";
            }};            

            DisplayvideoGuaranteedOrdersPatchResponse res = sdk.guaranteedOrders.displayvideoGuaranteedOrdersPatch(req, new DisplayvideoGuaranteedOrdersPatchSecurity("nisi", "velit") {{
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
