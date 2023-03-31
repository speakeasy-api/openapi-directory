<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    filter = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    pageSize = 623564;
                    pageToken = "deserunt";
                    prettyPrint = false;
                    quotaUser = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
                }};
            }};            

            FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse res = sdk.projects.firestoreProjectsDatabasesCollectionGroupsFieldsList(req);

            if (res.googleFirestoreAdminV1ListFieldsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->