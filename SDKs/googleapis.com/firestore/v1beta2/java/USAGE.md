<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest req = new FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse res = sdk.projects.firestoreProjectsDatabasesCollectionGroupsFieldsList(req, new FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity() {{
                option1 = new FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1("debitis", "ipsa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirestoreAdminV1beta2ListFieldsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->