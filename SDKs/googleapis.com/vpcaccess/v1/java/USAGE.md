<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsCreateSecurity;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsCreatePathParams;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsCreateQueryParams;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsCreateRequest;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsCreateResponse;
import org.openapis.openapi.models.shared.ConnectorInput;
import org.openapis.openapi.models.shared.Subnet;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VpcaccessProjectsLocationsConnectorsCreateRequest req = new VpcaccessProjectsLocationsConnectorsCreateRequest() {{
                security = new VpcaccessProjectsLocationsConnectorsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new VpcaccessProjectsLocationsConnectorsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new VpcaccessProjectsLocationsConnectorsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    connectorId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new ConnectorInput() {{
                    ipCidrRange = "iure";
                    machineType = "magnam";
                    maxInstances = 891773;
                    maxThroughput = 56713;
                    minInstances = 963663;
                    minThroughput = 272656;
                    name = "suscipit";
                    network = "molestiae";
                    subnet = new Subnet() {{
                        name = "minus";
                        projectId = "placeat";
                    }};
                }};
            }};            

            VpcaccessProjectsLocationsConnectorsCreateResponse res = sdk.projects.vpcaccessProjectsLocationsConnectorsCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->