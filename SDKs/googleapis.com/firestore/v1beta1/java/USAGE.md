<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurity;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetPathParams;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetQueryParams;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetRequest;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetResponse;
import org.openapis.openapi.models.shared.BatchGetDocumentsRequest;
import org.openapis.openapi.models.shared.TransactionOptions;
import org.openapis.openapi.models.shared.ReadWrite;
import org.openapis.openapi.models.shared.ReadOnly;
import org.openapis.openapi.models.shared.DocumentMask;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirestoreProjectsDatabasesDocumentsBatchGetRequest req = new FirestoreProjectsDatabasesDocumentsBatchGetRequest() {{
                security = new FirestoreProjectsDatabasesDocumentsBatchGetSecurity() {{
                    option1 = new FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirestoreProjectsDatabasesDocumentsBatchGetPathParams() {{
                    database = "corrupti";
                }};
                queryParams = new FirestoreProjectsDatabasesDocumentsBatchGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new BatchGetDocumentsRequest() {{
                    documents = new String[]{{
                        add("iure"),
                        add("magnam"),
                    }};
                    mask = new DocumentMask() {{
                        fieldPaths = new String[]{{
                            add("ipsa"),
                            add("delectus"),
                            add("tempora"),
                            add("suscipit"),
                        }};
                    }};
                    newTransaction = new TransactionOptions() {{
                        readOnly = new ReadOnly() {{
                            readTime = "molestiae";
                        }};
                        readWrite = new ReadWrite() {{
                            retryTransaction = "minus";
                        }};
                    }};
                    readTime = "placeat";
                    transaction = "voluptatum";
                }};
            }};            

            FirestoreProjectsDatabasesDocumentsBatchGetResponse res = sdk.projects.firestoreProjectsDatabasesDocumentsBatchGet(req);

            if (res.batchGetDocumentsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->