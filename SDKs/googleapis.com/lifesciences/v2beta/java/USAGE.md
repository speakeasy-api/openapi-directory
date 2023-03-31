<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsListSecurity;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsListPathParams;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsListQueryParams;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LifesciencesProjectsLocationsListRequest req = new LifesciencesProjectsLocationsListRequest() {{
                security = new LifesciencesProjectsLocationsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new LifesciencesProjectsLocationsListPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new LifesciencesProjectsLocationsListQueryParams() {{
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

            LifesciencesProjectsLocationsListResponse res = sdk.projects.lifesciencesProjectsLocationsList(req);

            if (res.listLocationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->