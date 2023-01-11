<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest req = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest() {{
                security = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity() {{
                    option1 = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams() {{
                    parent = "reprehenderit";
                }};
                queryParams = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "sit";
                    alt = "media";
                    callback = "iure";
                    fields = "ad";
                    key = "nam";
                    oauthToken = "dolores";
                    prettyPrint = true;
                    quotaUser = "corrupti";
                    uploadType = "quod";
                    uploadProtocol = "voluptas";
                }};
                request = new BindDeviceToGatewayRequest() {{
                    deviceId = "dolorem";
                    gatewayId = "molestias";
                }};
            }};

            CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesBindDeviceToGateway(req);

            if (res.bindDeviceToGatewayResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->