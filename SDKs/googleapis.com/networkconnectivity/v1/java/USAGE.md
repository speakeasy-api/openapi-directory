<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HubInput;
import org.openapis.openapi.models.shared.RoutingVPCInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest req = new NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest() {{
                dollarXgafv = "2";
                hubInput = new HubInput() {{
                    description = "provident";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                        put("illum", "vel");
                    }};
                    name = "error";
                    routingVpcs = new org.openapis.openapi.models.shared.RoutingVPCInput[]{{
                        add(new RoutingVPCInput() {{
                            uri = "http://innocent-effect.org";
                        }}),
                        add(new RoutingVPCInput() {{
                            uri = "http://whirlwind-diver.info";
                        }}),
                        add(new RoutingVPCInput() {{
                            uri = "http://spotted-skyline.name";
                        }}),
                    }};
                }};
                accessToken = "iusto";
                alt = "media";
                callback = "nisi";
                fields = "recusandae";
                hubId = "temporibus";
                key = "ab";
                oauthToken = "quis";
                parent = "veritatis";
                prettyPrint = false;
                quotaUser = "deserunt";
                requestId = "perferendis";
                uploadType = "ipsam";
                uploadProtocol = "repellendus";
            }}            

            NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse res = sdk.projects.networkconnectivityProjectsLocationsGlobalHubsCreate(req, new NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->