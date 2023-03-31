<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsCreateSecurity;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsCreatePathParams;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsCreateQueryParams;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsCreateRequest;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsCreateResponse;
import org.openapis.openapi.models.shared.EndpointSeverityEnum;
import org.openapis.openapi.models.shared.EndpointInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdsProjectsLocationsEndpointsCreateRequest req = new IdsProjectsLocationsEndpointsCreateRequest() {{
                security = new IdsProjectsLocationsEndpointsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new IdsProjectsLocationsEndpointsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new IdsProjectsLocationsEndpointsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    endpointId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
                request = new EndpointInput() {{
                    description = "magnam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsa", "delectus");
                        put("tempora", "suscipit");
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    network = "iusto";
                    severity = "MEDIUM";
                    threatExceptions = new String[]{{
                        add("recusandae"),
                        add("temporibus"),
                    }};
                    trafficLogs = false;
                }};
            }};            

            IdsProjectsLocationsEndpointsCreateResponse res = sdk.projects.idsProjectsLocationsEndpointsCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->