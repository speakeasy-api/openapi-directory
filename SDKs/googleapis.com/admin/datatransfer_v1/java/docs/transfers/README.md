# transfers

### Available Operations

* [datatransferTransfersGet](#datatransfertransfersget) - Retrieves a data transfer request by its resource ID.
* [datatransferTransfersInsert](#datatransfertransfersinsert) - Inserts a data transfer request. See the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference for specific application requirements.
* [datatransferTransfersList](#datatransfertransferslist) - Lists the transfers for a customer by source user, destination user, or status.

## datatransferTransfersGet

Retrieves a data transfer request by its resource ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatatransferTransfersGetRequest;
import org.openapis.openapi.models.operations.DatatransferTransfersGetResponse;
import org.openapis.openapi.models.operations.DatatransferTransfersGetSecurity;
import org.openapis.openapi.models.operations.DatatransferTransfersGetSecurityOption1;
import org.openapis.openapi.models.operations.DatatransferTransfersGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatatransferTransfersGetRequest req = new DatatransferTransfersGetRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "officia";
                uploadProtocol = "occaecati";
            }};            

            DatatransferTransfersGetResponse res = sdk.transfers.datatransferTransfersGet(req, new DatatransferTransfersGetSecurity() {{
                option1 = new DatatransferTransfersGetSecurityOption1("fugit", "deleniti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.dataTransfer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datatransferTransfersInsert

Inserts a data transfer request. See the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference for specific application requirements.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatatransferTransfersInsertRequest;
import org.openapis.openapi.models.operations.DatatransferTransfersInsertResponse;
import org.openapis.openapi.models.operations.DatatransferTransfersInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplicationDataTransfer;
import org.openapis.openapi.models.shared.ApplicationTransferParam;
import org.openapis.openapi.models.shared.DataTransfer;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatatransferTransfersInsertRequest req = new DatatransferTransfersInsertRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                dataTransfer = new DataTransfer() {{
                    applicationDataTransfers = new org.openapis.openapi.models.shared.ApplicationDataTransfer[]{{
                        add(new ApplicationDataTransfer() {{
                            applicationId = "totam";
                            applicationTransferParams = new org.openapis.openapi.models.shared.ApplicationTransferParam[]{{
                                add(new ApplicationTransferParam() {{
                                    key = "commodi";
                                    value = new String[]{{
                                        add("modi"),
                                        add("qui"),
                                    }};
                                }}),
                            }};
                            applicationTransferStatus = "impedit";
                        }}),
                        add(new ApplicationDataTransfer() {{
                            applicationId = "cum";
                            applicationTransferParams = new org.openapis.openapi.models.shared.ApplicationTransferParam[]{{
                                add(new ApplicationTransferParam() {{
                                    key = "ipsum";
                                    value = new String[]{{
                                        add("aspernatur"),
                                        add("perferendis"),
                                        add("ad"),
                                    }};
                                }}),
                                add(new ApplicationTransferParam() {{
                                    key = "natus";
                                    value = new String[]{{
                                        add("iste"),
                                    }};
                                }}),
                            }};
                            applicationTransferStatus = "dolor";
                        }}),
                        add(new ApplicationDataTransfer() {{
                            applicationId = "natus";
                            applicationTransferParams = new org.openapis.openapi.models.shared.ApplicationTransferParam[]{{
                                add(new ApplicationTransferParam() {{
                                    key = "hic";
                                    value = new String[]{{
                                        add("fuga"),
                                        add("in"),
                                        add("corporis"),
                                        add("iste"),
                                    }};
                                }}),
                                add(new ApplicationTransferParam() {{
                                    key = "iure";
                                    value = new String[]{{
                                        add("quidem"),
                                        add("architecto"),
                                        add("ipsa"),
                                        add("reiciendis"),
                                    }};
                                }}),
                            }};
                            applicationTransferStatus = "est";
                        }}),
                        add(new ApplicationDataTransfer() {{
                            applicationId = "mollitia";
                            applicationTransferParams = new org.openapis.openapi.models.shared.ApplicationTransferParam[]{{
                                add(new ApplicationTransferParam() {{
                                    key = "dolores";
                                    value = new String[]{{
                                        add("corporis"),
                                    }};
                                }}),
                                add(new ApplicationTransferParam() {{
                                    key = "explicabo";
                                    value = new String[]{{
                                        add("enim"),
                                        add("omnis"),
                                        add("nemo"),
                                        add("minima"),
                                    }};
                                }}),
                                add(new ApplicationTransferParam() {{
                                    key = "excepturi";
                                    value = new String[]{{
                                        add("iure"),
                                    }};
                                }}),
                            }};
                            applicationTransferStatus = "culpa";
                        }}),
                    }};
                    etag = "doloribus";
                    id = "f1a3a2fa-9467-4739-a51a-a52c3f5ad019";
                    kind = "temporibus";
                    newOwnerUserId = "laborum";
                    oldOwnerUserId = "quasi";
                    overallTransferStatusCode = "reiciendis";
                    requestTime = OffsetDateTime.parse("2020-05-14T09:04:32.205Z");
                }};;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "ipsa";
                key = "omnis";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "perferendis";
                uploadProtocol = "doloremque";
            }};            

            DatatransferTransfersInsertResponse res = sdk.transfers.datatransferTransfersInsert(req, new DatatransferTransfersInsertSecurity("reprehenderit", "ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.dataTransfer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datatransferTransfersList

Lists the transfers for a customer by source user, destination user, or status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatatransferTransfersListRequest;
import org.openapis.openapi.models.operations.DatatransferTransfersListResponse;
import org.openapis.openapi.models.operations.DatatransferTransfersListSecurity;
import org.openapis.openapi.models.operations.DatatransferTransfersListSecurityOption1;
import org.openapis.openapi.models.operations.DatatransferTransfersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatatransferTransfersListRequest req = new DatatransferTransfersListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                customerId = "iusto";
                fields = "dicta";
                key = "harum";
                maxResults = 317983L;
                newOwnerUserId = "accusamus";
                oauthToken = "commodi";
                oldOwnerUserId = "repudiandae";
                pageToken = "quae";
                prettyPrint = false;
                quotaUser = "ipsum";
                status = "quidem";
                uploadType = "molestias";
                uploadProtocol = "excepturi";
            }};            

            DatatransferTransfersListResponse res = sdk.transfers.datatransferTransfersList(req, new DatatransferTransfersListSecurity() {{
                option1 = new DatatransferTransfersListSecurityOption1("pariatur", "modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.dataTransfersListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
