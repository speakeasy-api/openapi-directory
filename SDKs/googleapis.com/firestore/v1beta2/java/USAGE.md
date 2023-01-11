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
                    parent = "consequatur";
                }};
                queryParams = new FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "vel";
                    alt = "media";
                    callback = "repellendus";
                    fields = "non";
                    filter = "cum";
                    key = "saepe";
                    oauthToken = "earum";
                    pageSize = 1751757109654639412;
                    pageToken = "vero";
                    prettyPrint = true;
                    quotaUser = "officiis";
                    uploadType = "facilis";
                    uploadProtocol = "id";
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