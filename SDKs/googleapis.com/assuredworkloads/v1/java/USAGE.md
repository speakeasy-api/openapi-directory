<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsOperationsListSecurity;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsOperationsListPathParams;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsOperationsListQueryParams;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.AssuredworkloadsOrganizationsLocationsOperationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AssuredworkloadsOrganizationsLocationsOperationsListRequest req = new AssuredworkloadsOrganizationsLocationsOperationsListRequest() {{
                security = new AssuredworkloadsOrganizationsLocationsOperationsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AssuredworkloadsOrganizationsLocationsOperationsListPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new AssuredworkloadsOrganizationsLocationsOperationsListQueryParams() {{
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

            AssuredworkloadsOrganizationsLocationsOperationsListResponse res = sdk.organizations.assuredworkloadsOrganizationsLocationsOperationsList(req);

            if (res.googleLongrunningListOperationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->