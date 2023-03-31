<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesInventoriesListSecurity;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesInventoriesListPathParams;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesInventoriesListViewEnum;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesInventoriesListQueryParams;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesInventoriesListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesInventoriesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsInstancesInventoriesListRequest req = new OsconfigProjectsLocationsInstancesInventoriesListRequest() {{
                security = new OsconfigProjectsLocationsInstancesInventoriesListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new OsconfigProjectsLocationsInstancesInventoriesListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new OsconfigProjectsLocationsInstancesInventoriesListQueryParams() {{
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
                    view = "FULL";
                }};
            }};            

            OsconfigProjectsLocationsInstancesInventoriesListResponse res = sdk.projects.osconfigProjectsLocationsInstancesInventoriesList(req);

            if (res.listInventoriesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->