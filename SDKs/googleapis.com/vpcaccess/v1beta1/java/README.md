# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [vpcaccessProjectsLocationsConnectorsCreate](docs/projects/README.md#vpcaccessprojectslocationsconnectorscreate) - Creates a Serverless VPC Access connector, returns an operation.
* [vpcaccessProjectsLocationsConnectorsDelete](docs/projects/README.md#vpcaccessprojectslocationsconnectorsdelete) - Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.
* [vpcaccessProjectsLocationsConnectorsList](docs/projects/README.md#vpcaccessprojectslocationsconnectorslist) - Lists Serverless VPC Access connectors.
* [vpcaccessProjectsLocationsConnectorsPatch](docs/projects/README.md#vpcaccessprojectslocationsconnectorspatch) - Updates a Serverless VPC Access connector, returns an operation.
* [vpcaccessProjectsLocationsList](docs/projects/README.md#vpcaccessprojectslocationslist) - Lists information about the supported locations for this service.
* [vpcaccessProjectsLocationsOperationsGet](docs/projects/README.md#vpcaccessprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [vpcaccessProjectsLocationsOperationsList](docs/projects/README.md#vpcaccessprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
