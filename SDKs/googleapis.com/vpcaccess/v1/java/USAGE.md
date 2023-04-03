<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsCreateSecurity;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsCreateRequest;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConnectorInput;
import org.openapis.openapi.models.shared.Subnet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VpcaccessProjectsLocationsConnectorsCreateRequest req = new VpcaccessProjectsLocationsConnectorsCreateRequest() {{
                dollarXgafv = "2";
                connectorInput = new ConnectorInput() {{
                    ipCidrRange = "provident";
                    machineType = "distinctio";
                    maxInstances = 844266;
                    maxThroughput = 602763;
                    minInstances = 857946;
                    minThroughput = 544883;
                    name = "illum";
                    network = "vel";
                    subnet = new Subnet() {{
                        name = "error";
                        projectId = "deserunt";
                    }};
                }};
                accessToken = "suscipit";
                alt = "media";
                callback = "magnam";
                connectorId = "debitis";
                fields = "ipsa";
                key = "delectus";
                oauthToken = "tempora";
                parent = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
            }}            

            VpcaccessProjectsLocationsConnectorsCreateResponse res = sdk.projects.vpcaccessProjectsLocationsConnectorsCreate(req, new VpcaccessProjectsLocationsConnectorsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->