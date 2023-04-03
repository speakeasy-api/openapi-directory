<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurity;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetRequest;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesDocumentsBatchGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchGetDocumentsRequest;
import org.openapis.openapi.models.shared.TransactionOptions;
import org.openapis.openapi.models.shared.ReadWrite;
import org.openapis.openapi.models.shared.ReadOnly;
import org.openapis.openapi.models.shared.DocumentMask;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirestoreProjectsDatabasesDocumentsBatchGetRequest req = new FirestoreProjectsDatabasesDocumentsBatchGetRequest() {{
                dollarXgafv = "2";
                batchGetDocumentsRequest = new BatchGetDocumentsRequest() {{
                    documents = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                    mask = new DocumentMask() {{
                        fieldPaths = new String[]{{
                            add("corrupti"),
                            add("illum"),
                            add("vel"),
                            add("error"),
                        }};
                    }};
                    newTransaction = new TransactionOptions() {{
                        readOnly = new ReadOnly() {{
                            readTime = "deserunt";
                        }};
                        readWrite = new ReadWrite() {{
                            retryTransaction = "suscipit";
                        }};
                    }};
                    readTime = "iure";
                    transaction = "magnam";
                }};
                accessToken = "debitis";
                alt = "json";
                callback = "delectus";
                database = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }}            

            FirestoreProjectsDatabasesDocumentsBatchGetResponse res = sdk.projects.firestoreProjectsDatabasesDocumentsBatchGet(req, new FirestoreProjectsDatabasesDocumentsBatchGetSecurity() {{
                option1 = new FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.batchGetDocumentsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->