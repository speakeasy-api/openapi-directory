# productstatuses

### Available Operations

* [contentProductstatusesCustombatch](#contentproductstatusescustombatch) - Gets the statuses of multiple products in a single request.
* [contentProductstatusesGet](#contentproductstatusesget) - Gets the status of a product from your Merchant Center account.
* [contentProductstatusesList](#contentproductstatuseslist) - Lists the statuses of the products in your Merchant Center account.
* [contentProductstatusesRepricingreportsList](#contentproductstatusesrepricingreportslist) - Lists the metrics report for a given Repricing product.

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
                            batchId = 5938L;
                            destinations = new String[]{{
                                add("iure"),
                            }};
                            includeAttributes = false;
                            merchantId = "earum";
                            method = "quis";
                            productId = "dolorem";
                        }}),
                        add(new ProductstatusesCustomBatchRequestEntry() {{
                            batchId = 609164L;
                            destinations = new String[]{{
                                add("quo"),
                            }};
                            includeAttributes = false;
                            merchantId = "et";
                            method = "illo";
                            productId = "est";
                        }}),
                        add(new ProductstatusesCustomBatchRequestEntry() {{
                            batchId = 158059L;
                            destinations = new String[]{{
                                add("est"),
                                add("rem"),
                            }};
                            includeAttributes = false;
                            merchantId = "cum";
                            method = "maiores";
                            productId = "provident";
                        }}),
                    }};
                }};;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "excepturi";
                fields = "ducimus";
                key = "dolore";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "fuga";
                uploadProtocol = "at";
            }};            

            ContentProductstatusesCustombatchResponse res = sdk.productstatuses.contentProductstatusesCustombatch(req, new ContentProductstatusesCustombatchSecurity("unde", "laborum") {{
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

            ContentProductstatusesGetRequest req = new ContentProductstatusesGetRequest("provident", "hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "praesentium";
                destinations = new String[]{{
                    add("odit"),
                }};
                fields = "illo";
                key = "architecto";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "velit";
                uploadProtocol = "ullam";
            }};            

            ContentProductstatusesGetResponse res = sdk.productstatuses.contentProductstatusesGet(req, new ContentProductstatusesGetSecurity("provident", "possimus") {{
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

            ContentProductstatusesListRequest req = new ContentProductstatusesListRequest("iste") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consectetur";
                alt = AltEnum.MEDIA;
                callback = "dignissimos";
                destinations = new String[]{{
                    add("iusto"),
                    add("culpa"),
                    add("voluptate"),
                    add("cupiditate"),
                }};
                fields = "maxime";
                key = "assumenda";
                maxResults = 471693L;
                oauthToken = "sed";
                pageToken = "optio";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "magni";
                uploadProtocol = "modi";
            }};            

            ContentProductstatusesListResponse res = sdk.productstatuses.contentProductstatusesList(req, new ContentProductstatusesListSecurity("voluptatum", "dolore") {{
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

## contentProductstatusesRepricingreportsList

Lists the metrics report for a given Repricing product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentProductstatusesRepricingreportsListRequest;
import org.openapis.openapi.models.operations.ContentProductstatusesRepricingreportsListResponse;
import org.openapis.openapi.models.operations.ContentProductstatusesRepricingreportsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentProductstatusesRepricingreportsListRequest req = new ContentProductstatusesRepricingreportsListRequest("possimus", "dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                callback = "eos";
                endDate = "omnis";
                fields = "reiciendis";
                key = "qui";
                oauthToken = "similique";
                pageSize = 756766L;
                pageToken = "numquam";
                prettyPrint = false;
                quotaUser = "inventore";
                ruleId = "necessitatibus";
                startDate = "tenetur";
                uploadType = "exercitationem";
                uploadProtocol = "nihil";
            }};            

            ContentProductstatusesRepricingreportsListResponse res = sdk.productstatuses.contentProductstatusesRepricingreportsList(req, new ContentProductstatusesRepricingreportsListSecurity("quia", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRepricingProductReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
