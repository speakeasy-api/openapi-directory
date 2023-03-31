<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsListSecurity;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsListPathParams;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsListQueryParams;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsListRequest req = new ServicedirectoryProjectsLocationsListRequest() {{
                security = new ServicedirectoryProjectsLocationsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ServicedirectoryProjectsLocationsListPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new ServicedirectoryProjectsLocationsListQueryParams() {{
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

            ServicedirectoryProjectsLocationsListResponse res = sdk.projects.servicedirectoryProjectsLocationsList(req);

            if (res.listLocationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->