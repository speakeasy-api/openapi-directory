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

import org.openapis.openapi.models.operations.CreateAssetSecurity;
import org.openapis.openapi.models.operations.CreateAssetPathParams;
import org.openapis.openapi.models.operations.CreateAssetCreateAssetRequest;
import org.openapis.openapi.models.operations.CreateAssetRequest;
import org.openapis.openapi.models.operations.CreateAssetResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAssetRequest req = new CreateAssetRequest() {{
                security = new CreateAssetSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateAssetPathParams() {{
                    serviceSid = "corrupti";
                }};
                request = new CreateAssetCreateAssetRequest() {{
                    friendlyName = "provident";
                }};
            }};            

            CreateAssetResponse res = sdk.createAsset(req);

            if (res.serverlessV1ServiceAsset.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createAsset` - Create a new Asset resource.
* `createBuild` - Create a new Build resource. At least one function version or asset version is required.
* `createDeployment` - Create a new Deployment.
* `createEnvironment` - Create a new environment.
* `createFunction` - Create a new Function resource.
* `createService` - Create a new Service resource.
* `createVariable` - Create a new Variable.
* `deleteAsset` - Delete an Asset resource.
* `deleteBuild` - Delete a Build resource.
* `deleteEnvironment` - Delete a specific environment.
* `deleteFunction` - Delete a Function resource.
* `deleteService` - Delete a Service resource.
* `deleteVariable` - Delete a specific Variable.
* `fetchAsset` - Retrieve a specific Asset resource.
* `fetchAssetVersion` - Retrieve a specific Asset Version.
* `fetchBuild` - Retrieve a specific Build resource.
* `fetchBuildStatus` - Retrieve a specific Build resource.
* `fetchDeployment` - Retrieve a specific Deployment.
* `fetchEnvironment` - Retrieve a specific environment.
* `fetchFunction` - Retrieve a specific Function resource.
* `fetchFunctionVersion` - Retrieve a specific Function Version resource.
* `fetchFunctionVersionContent` - Retrieve a the content of a specific Function Version resource.
* `fetchLog` - Retrieve a specific log.
* `fetchService` - Retrieve a specific Service resource.
* `fetchVariable` - Retrieve a specific Variable.
* `listAsset` - Retrieve a list of all Assets.
* `listAssetVersion` - Retrieve a list of all Asset Versions.
* `listBuild` - Retrieve a list of all Builds.
* `listDeployment` - Retrieve a list of all Deployments.
* `listEnvironment` - Retrieve a list of all environments.
* `listFunction` - Retrieve a list of all Functions.
* `listFunctionVersion` - Retrieve a list of all Function Version resources.
* `listLog` - Retrieve a list of all logs.
* `listService` - Retrieve a list of all Services.
* `listVariable` - Retrieve a list of all Variables.
* `updateAsset` - Update a specific Asset resource.
* `updateFunction` - Update a specific Function resource.
* `updateService` - Update a specific Service resource.
* `updateVariable` - Update a specific Variable.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
