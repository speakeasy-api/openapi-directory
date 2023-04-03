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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `vpcaccessProjectsLocationsConnectorsCreate` - Creates a Serverless VPC Access connector, returns an operation.
* `vpcaccessProjectsLocationsConnectorsDelete` - Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.
* `vpcaccessProjectsLocationsConnectorsList` - Lists Serverless VPC Access connectors.
* `vpcaccessProjectsLocationsConnectorsPatch` - Updates a Serverless VPC Access connector, returns an operation.
* `vpcaccessProjectsLocationsList` - Lists information about the supported locations for this service.
* `vpcaccessProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `vpcaccessProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
