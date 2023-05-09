<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsCreateRequest;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsCreateResponse;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConnectorInput;
import org.openapis.openapi.models.shared.Subnet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VpcaccessProjectsLocationsConnectorsCreateRequest req = new VpcaccessProjectsLocationsConnectorsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                connectorInput = new ConnectorInput() {{
                    ipCidrRange = "distinctio";
                    machineType = "quibusdam";
                    maxInstances = 602763;
                    maxThroughput = 857946;
                    minInstances = 544883;
                    minThroughput = 847252;
                    name = "Sabrina Oberbrunner";
                    network = "magnam";
                    subnet = new Subnet() {{
                        name = "Larry Windler";
                        projectId = "molestiae";
                    }};;
                }};;
                accessToken = "minus";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                connectorId = "iusto";
                fields = "excepturi";
                key = "nisi";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            VpcaccessProjectsLocationsConnectorsCreateResponse res = sdk.projects.vpcaccessProjectsLocationsConnectorsCreate(req, new VpcaccessProjectsLocationsConnectorsCreateSecurity("veritatis", "deserunt") {{
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