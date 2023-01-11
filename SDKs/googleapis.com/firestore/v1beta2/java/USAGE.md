<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest req = new FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest() {{
                security = new FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity() {{
                    option1 = new FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams() {{
                    parent = "sit";
                }};
                queryParams = new FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    filter = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    pageSize = 1543572285742637646;
                    pageToken = "nihil";
                    prettyPrint = true;
                    quotaUser = "dicta";
                    uploadType = "debitis";
                    uploadProtocol = "voluptatum";
                }};
            }};

            FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse res = sdk.projects.firestoreProjectsDatabasesCollectionGroupsFieldsList(req);

            if (res.googleFirestoreAdminV1beta2ListFieldsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->