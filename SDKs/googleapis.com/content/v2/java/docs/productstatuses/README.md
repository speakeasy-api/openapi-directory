# productstatuses

### Available Operations

* [contentProductstatusesCustombatch](#contentproductstatusescustombatch) - Gets the statuses of multiple products in a single request.
* [contentProductstatusesGet](#contentproductstatusesget) - Gets the status of a product from your Merchant Center account.
* [contentProductstatusesList](#contentproductstatuseslist) - Lists the statuses of the products in your Merchant Center account.

## contentProductstatusesCustombatch

Gets the statuses of multiple products in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentProductstatusesCustombatchRequest;
import org.openapis.openapi.models.operations.ContentProductstatusesCustombatchResponse;
import org.openapis.openapi.models.operations.ContentProductstatusesCustombatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ProductstatusesCustomBatchRequest;
import org.openapis.openapi.models.shared.ProductstatusesCustomBatchRequestEntry;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentProductstatusesCustombatchRequest req = new ContentProductstatusesCustombatchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                productstatusesCustomBatchRequest = new ProductstatusesCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.ProductstatusesCustomBatchRequestEntry[]{{
                        add(new ProductstatusesCustomBatchRequestEntry() {{
                            batchId = 152302L;
                            destinations = new String[]{{
                                add("natus"),
                            }};
                            includeAttributes = false;
                            merchantId = "ratione";
                            method = "nihil";
                            productId = "unde";
                        }}),
                        add(new ProductstatusesCustomBatchRequestEntry() {{
                            batchId = 646321L;
                            destinations = new String[]{{
                                add("ex"),
                                add("occaecati"),
                                add("optio"),
                            }};
                            includeAttributes = false;
                            merchantId = "at";
                            method = "ad";
                            productId = "asperiores";
                        }}),
                        add(new ProductstatusesCustomBatchRequestEntry() {{
                            batchId = 722168L;
                            destinations = new String[]{{
                                add("sapiente"),
                                add("quam"),
                                add("occaecati"),
                                add("repellendus"),
                            }};
                            includeAttributes = false;
                            merchantId = "culpa";
                            method = "dicta";
                            productId = "rem";
                        }}),
                    }};
                }};;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "magni";
                includeAttributes = false;
                key = "eos";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "omnis";
                uploadProtocol = "quis";
            }};            

            ContentProductstatusesCustombatchResponse res = sdk.productstatuses.contentProductstatusesCustombatch(req, new ContentProductstatusesCustombatchSecurity("quos", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productstatusesCustomBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentProductstatusesGet

Gets the status of a product from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentProductstatusesGetRequest;
import org.openapis.openapi.models.operations.ContentProductstatusesGetResponse;
import org.openapis.openapi.models.operations.ContentProductstatusesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentProductstatusesGetRequest req = new ContentProductstatusesGetRequest("aliquam", "vero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "praesentium";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                destinations = new String[]{{
                    add("possimus"),
                    add("libero"),
                    add("ullam"),
                }};
                fields = "quaerat";
                includeAttributes = false;
                key = "maiores";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "ipsam";
                uploadProtocol = "fugiat";
            }};            

            ContentProductstatusesGetResponse res = sdk.productstatuses.contentProductstatusesGet(req, new ContentProductstatusesGetSecurity("odio", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentProductstatusesList

Lists the statuses of the products in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentProductstatusesListRequest;
import org.openapis.openapi.models.operations.ContentProductstatusesListResponse;
import org.openapis.openapi.models.operations.ContentProductstatusesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentProductstatusesListRequest req = new ContentProductstatusesListRequest("inventore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "necessitatibus";
                destinations = new String[]{{
                    add("a"),
                    add("nihil"),
                    add("veniam"),
                }};
                fields = "aut";
                includeAttributes = false;
                includeInvalidInsertedItems = false;
                key = "magni";
                maxResults = 700204L;
                oauthToken = "voluptatibus";
                pageToken = "nulla";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "non";
                uploadProtocol = "dolore";
            }};            

            ContentProductstatusesListResponse res = sdk.productstatuses.contentProductstatusesList(req, new ContentProductstatusesListSecurity("enim", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productstatusesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
