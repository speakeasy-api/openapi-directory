<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsCreateRequest;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsCreateResponse;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EndpointInput;
import org.openapis.openapi.models.shared.EndpointSeverityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdsProjectsLocationsEndpointsCreateRequest req = new IdsProjectsLocationsEndpointsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                endpointInput = new EndpointInput() {{
                    description = "distinctio";
                    labels = new java.util.HashMap<String, String>() {{
                        put("unde", "nulla");
                        put("corrupti", "illum");
                        put("vel", "error");
                        put("deserunt", "suscipit");
                    }};
                    network = "iure";
                    severity = EndpointSeverityEnum.INFORMATIONAL;
                    threatExceptions = new String[]{{
                        add("ipsa"),
                        add("delectus"),
                        add("tempora"),
                        add("suscipit"),
                    }};
                    trafficLogs = false;
                }};;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                endpointId = "voluptatum";
                fields = "iusto";
                key = "excepturi";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "recusandae";
                requestId = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            IdsProjectsLocationsEndpointsCreateResponse res = sdk.projects.idsProjectsLocationsEndpointsCreate(req, new IdsProjectsLocationsEndpointsCreateSecurity("veritatis", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->