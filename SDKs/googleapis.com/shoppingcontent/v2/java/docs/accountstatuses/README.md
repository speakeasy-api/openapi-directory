# accountstatuses

### Available Operations

* [contentAccountstatusesCustombatch](#contentaccountstatusescustombatch) - Retrieves multiple Merchant Center account statuses in a single request.
* [contentAccountstatusesGet](#contentaccountstatusesget) - Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
* [contentAccountstatusesList](#contentaccountstatuseslist) - Lists the statuses of the sub-accounts in your Merchant Center account.

## contentAccountstatusesCustombatch

Retrieves multiple Merchant Center account statuses in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountstatusesCustombatchRequest;
import org.openapis.openapi.models.operations.ContentAccountstatusesCustombatchResponse;
import org.openapis.openapi.models.operations.ContentAccountstatusesCustombatchSecurity;
import org.openapis.openapi.models.shared.AccountstatusesCustomBatchRequest;
import org.openapis.openapi.models.shared.AccountstatusesCustomBatchRequestEntry;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountstatusesCustombatchRequest req = new ContentAccountstatusesCustombatchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accountstatusesCustomBatchRequest = new AccountstatusesCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.AccountstatusesCustomBatchRequestEntry[]{{
                        add(new AccountstatusesCustomBatchRequestEntry() {{
                            accountId = "cupiditate";
                            batchId = 807581L;
                            destinations = new String[]{{
                                add("soluta"),
                                add("dicta"),
                                add("laborum"),
                                add("totam"),
                            }};
                            merchantId = "incidunt";
                            method = "aspernatur";
                        }}),
                    }};
                }};;
                accessToken = "dolores";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "aliquid";
                key = "quam";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "qui";
                uploadProtocol = "neque";
            }};            

            ContentAccountstatusesCustombatchResponse res = sdk.accountstatuses.contentAccountstatusesCustombatch(req, new ContentAccountstatusesCustombatchSecurity("fugit", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountstatusesCustomBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountstatusesGet

Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountstatusesGetRequest;
import org.openapis.openapi.models.operations.ContentAccountstatusesGetResponse;
import org.openapis.openapi.models.operations.ContentAccountstatusesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountstatusesGetRequest req = new ContentAccountstatusesGetRequest("odio", "sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nam";
                alt = AltEnum.PROTO;
                callback = "voluptatem";
                destinations = new String[]{{
                    add("soluta"),
                    add("nobis"),
                    add("et"),
                    add("saepe"),
                }};
                fields = "ipsum";
                key = "veritatis";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "tempore";
                uploadProtocol = "cupiditate";
            }};            

            ContentAccountstatusesGetResponse res = sdk.accountstatuses.contentAccountstatusesGet(req, new ContentAccountstatusesGetSecurity("aperiam", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountstatusesList

Lists the statuses of the sub-accounts in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountstatusesListRequest;
import org.openapis.openapi.models.operations.ContentAccountstatusesListResponse;
import org.openapis.openapi.models.operations.ContentAccountstatusesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountstatusesListRequest req = new ContentAccountstatusesListRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "dolorum";
                destinations = new String[]{{
                    add("quae"),
                }};
                fields = "aut";
                key = "quas";
                maxResults = 929530L;
                oauthToken = "consequatur";
                pageToken = "est";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "porro";
                uploadProtocol = "doloribus";
            }};            

            ContentAccountstatusesListResponse res = sdk.accountstatuses.contentAccountstatusesList(req, new ContentAccountstatusesListSecurity("ut", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountstatusesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
