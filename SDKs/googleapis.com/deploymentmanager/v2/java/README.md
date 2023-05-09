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
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeploymentsCancelPreviewRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerDeploymentsCancelPreviewRequest req = new DeploymentmanagerDeploymentsCancelPreviewRequest("corrupti", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                deploymentsCancelPreviewRequest = new DeploymentsCancelPreviewRequest() {{
                    fingerprint = "quibusdam";
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

            DeploymentmanagerDeploymentsCancelPreviewResponse res = sdk.deployments.deploymentmanagerDeploymentsCancelPreview(req, new DeploymentmanagerDeploymentsCancelPreviewSecurity() {{
                option1 = new DeploymentmanagerDeploymentsCancelPreviewSecurityOption1("magnam", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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


### [deployments](docs/deployments/README.md)

* [deploymentmanagerDeploymentsCancelPreview](docs/deployments/README.md#deploymentmanagerdeploymentscancelpreview) - Cancels and removes the preview currently associated with the deployment.
* [deploymentmanagerDeploymentsDelete](docs/deployments/README.md#deploymentmanagerdeploymentsdelete) - Deletes a deployment and all of the resources in the deployment.
* [deploymentmanagerDeploymentsGet](docs/deployments/README.md#deploymentmanagerdeploymentsget) - Gets information about a specific deployment.
* [deploymentmanagerDeploymentsGetIamPolicy](docs/deployments/README.md#deploymentmanagerdeploymentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [deploymentmanagerDeploymentsInsert](docs/deployments/README.md#deploymentmanagerdeploymentsinsert) - Creates a deployment and all of the resources described by the deployment manifest.
* [deploymentmanagerDeploymentsList](docs/deployments/README.md#deploymentmanagerdeploymentslist) - Lists all deployments for a given project.
* [deploymentmanagerDeploymentsPatch](docs/deployments/README.md#deploymentmanagerdeploymentspatch) - Patches a deployment and all of the resources described by the deployment manifest.
* [deploymentmanagerDeploymentsSetIamPolicy](docs/deployments/README.md#deploymentmanagerdeploymentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [deploymentmanagerDeploymentsStop](docs/deployments/README.md#deploymentmanagerdeploymentsstop) - Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
* [deploymentmanagerDeploymentsTestIamPermissions](docs/deployments/README.md#deploymentmanagerdeploymentstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [deploymentmanagerDeploymentsUpdate](docs/deployments/README.md#deploymentmanagerdeploymentsupdate) - Updates a deployment and all of the resources described by the deployment manifest.

### [manifests](docs/manifests/README.md)

* [deploymentmanagerManifestsGet](docs/manifests/README.md#deploymentmanagermanifestsget) - Gets information about a specific manifest.
* [deploymentmanagerManifestsList](docs/manifests/README.md#deploymentmanagermanifestslist) - Lists all manifests for a given deployment.

### [operations](docs/operations/README.md)

* [deploymentmanagerOperationsGet](docs/operations/README.md#deploymentmanageroperationsget) - Gets information about a specific operation.
* [deploymentmanagerOperationsList](docs/operations/README.md#deploymentmanageroperationslist) - Lists all operations for a project.

### [resources](docs/resources/README.md)

* [deploymentmanagerResourcesGet](docs/resources/README.md#deploymentmanagerresourcesget) - Gets information about a single resource.
* [deploymentmanagerResourcesList](docs/resources/README.md#deploymentmanagerresourceslist) - Lists all resources in a given deployment.

### [types](docs/types/README.md)

* [deploymentmanagerTypesList](docs/types/README.md#deploymentmanagertypeslist) - Lists all resource types for Deployment Manager.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
