<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsListSecurity;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsListPathParams;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsListQueryParams;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsListRequest req = new CloudtasksProjectsLocationsListRequest() {{
                security = new CloudtasksProjectsLocationsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudtasksProjectsLocationsListPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new CloudtasksProjectsLocationsListQueryParams() {{
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

            CloudtasksProjectsLocationsListResponse res = sdk.projects.cloudtasksProjectsLocationsList(req);

            if (res.listLocationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->