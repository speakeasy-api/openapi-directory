<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse;
import org.openapis.openapi.models.shared.BindDeviceToGatewayRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new BindDeviceToGatewayRequest() {{
                    deviceId = "suscipit";
                    gatewayId = "iure";
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