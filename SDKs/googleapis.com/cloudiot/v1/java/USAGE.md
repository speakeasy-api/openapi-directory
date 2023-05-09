<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BindDeviceToGatewayRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest req = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                bindDeviceToGatewayRequest = new BindDeviceToGatewayRequest() {{
                    deviceId = "distinctio";
                    gatewayId = "quibusdam";
                }};;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                fields = "illum";
                key = "vel";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesBindDeviceToGateway(req, new CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1("magnam", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.bindDeviceToGatewayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->