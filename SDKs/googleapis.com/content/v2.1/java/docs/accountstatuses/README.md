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
                dollarXgafv = XgafvEnum.TWO;
                accountstatusesCustomBatchRequest = new AccountstatusesCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.AccountstatusesCustomBatchRequestEntry[]{{
                        add(new AccountstatusesCustomBatchRequestEntry() {{
                            accountId = "pariatur";
                            batchId = 820767L;
                            destinations = new String[]{{
                                add("eveniet"),
                            }};
                            merchantId = "asperiores";
                            method = "facere";
                        }}),
                        add(new AccountstatusesCustomBatchRequestEntry() {{
                            accountId = "veritatis";
                            batchId = 159414L;
                            destinations = new String[]{{
                                add("similique"),
                            }};
                            merchantId = "culpa";
                            method = "aliquid";
                        }}),
                        add(new AccountstatusesCustomBatchRequestEntry() {{
                            accountId = "tenetur";
                            batchId = 62713L;
                            destinations = new String[]{{
                                add("vel"),
                                add("in"),
                                add("eius"),
                                add("libero"),
                            }};
                            merchantId = "illum";
                            method = "soluta";
                        }}),
                    }};
                }};;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "sapiente";
                fields = "dicta";
                key = "ullam";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "nisi";
                uploadProtocol = "aut";
            }};            

            ContentAccountstatusesCustombatchResponse res = sdk.accountstatuses.contentAccountstatusesCustombatch(req, new ContentAccountstatusesCustombatchSecurity("voluptatum", "qui") {{
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

            ContentAccountstatusesGetRequest req = new ContentAccountstatusesGetRequest("quibusdam", "ex") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "itaque";
                alt = AltEnum.PROTO;
                callback = "architecto";
                destinations = new String[]{{
                    add("tenetur"),
                    add("quasi"),
                    add("at"),
                }};
                fields = "et";
                key = "voluptate";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "veritatis";
                uploadProtocol = "consectetur";
            }};            

            ContentAccountstatusesGetResponse res = sdk.accountstatuses.contentAccountstatusesGet(req, new ContentAccountstatusesGetSecurity("adipisci", "iste") {{
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

            ContentAccountstatusesListRequest req = new ContentAccountstatusesListRequest("temporibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "rem";
                alt = AltEnum.JSON;
                callback = "laudantium";
                destinations = new String[]{{
                    add("mollitia"),
                    add("ab"),
                }};
                fields = "corrupti";
                key = "non";
                maxResults = 32465L;
                name = "Toni Fritsch";
                oauthToken = "voluptas";
                pageToken = "aut";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "dicta";
                uploadProtocol = "maiores";
            }};            

            ContentAccountstatusesListResponse res = sdk.accountstatuses.contentAccountstatusesList(req, new ContentAccountstatusesListSecurity("natus", "velit") {{
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
