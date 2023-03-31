<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse;
import org.openapis.openapi.models.shared.HubInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest req = new NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest() {{
                security = new NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    hubId = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
                request = new HubInput() {{
                    createTime = "magnam";
                    description = "debitis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("delectus", "tempora");
                    }};
                    name = "suscipit";
                    updateTime = "molestiae";
                }};
            }};            

            NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse res = sdk.projects.networkconnectivityProjectsLocationsGlobalHubsCreate(req);

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->