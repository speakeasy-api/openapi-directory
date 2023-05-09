<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HubInput;
import org.openapis.openapi.models.shared.RoutingVPCInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest req = new NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                hubInput = new HubInput() {{
                    description = "distinctio";
                    labels = new java.util.HashMap<String, String>() {{
                        put("unde", "nulla");
                        put("corrupti", "illum");
                        put("vel", "error");
                        put("deserunt", "suscipit");
                    }};
                    name = "Dr. Valerie Toy";
                    routingVpcs = new org.openapis.openapi.models.shared.RoutingVPCInput[]{{
                        add(new RoutingVPCInput() {{
                            uri = "http://spotted-skyline.name";
                        }}),
                        add(new RoutingVPCInput() {{
                            uri = "http://nice-gorilla.org";
                        }}),
                    }};
                }};;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "veritatis";
                hubId = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                requestId = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse res = sdk.projects.networkconnectivityProjectsLocationsGlobalHubsCreate(req, new NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity("at", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->