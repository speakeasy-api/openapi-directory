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

import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerCompositeTypesDeleteRequest req = new DeploymentmanagerCompositeTypesDeleteRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                compositeType = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                project = "vel";
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }}            

            DeploymentmanagerCompositeTypesDeleteResponse res = sdk.compositeTypes.deploymentmanagerCompositeTypesDelete(req, new DeploymentmanagerCompositeTypesDeleteSecurity() {{
                option1 = new DeploymentmanagerCompositeTypesDeleteSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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


### compositeTypes

* `deploymentmanagerCompositeTypesDelete` - Deletes a composite type.
* `deploymentmanagerCompositeTypesGet` - Gets information about a specific composite type.
* `deploymentmanagerCompositeTypesInsert` - Creates a composite type.
* `deploymentmanagerCompositeTypesList` - Lists all composite types for Deployment Manager.
* `deploymentmanagerCompositeTypesPatch` - Patches a composite type.
* `deploymentmanagerCompositeTypesUpdate` - Updates a composite type.

### deployments

* `deploymentmanagerDeploymentsCancelPreview` - Cancels and removes the preview currently associated with the deployment.
* `deploymentmanagerDeploymentsDelete` - Deletes a deployment and all of the resources in the deployment.
* `deploymentmanagerDeploymentsGet` - Gets information about a specific deployment.
* `deploymentmanagerDeploymentsGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `deploymentmanagerDeploymentsInsert` - Creates a deployment and all of the resources described by the deployment manifest.
* `deploymentmanagerDeploymentsList` - Lists all deployments for a given project.
* `deploymentmanagerDeploymentsPatch` - Patches a deployment and all of the resources described by the deployment manifest.
* `deploymentmanagerDeploymentsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `deploymentmanagerDeploymentsStop` - Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
* `deploymentmanagerDeploymentsTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `deploymentmanagerDeploymentsUpdate` - Updates a deployment and all of the resources described by the deployment manifest.

### manifests

* `deploymentmanagerManifestsGet` - Gets information about a specific manifest.
* `deploymentmanagerManifestsList` - Lists all manifests for a given deployment.

### operations

* `deploymentmanagerOperationsGet` - Gets information about a specific operation.
* `deploymentmanagerOperationsList` - Lists all operations for a project.

### resources

* `deploymentmanagerResourcesGet` - Gets information about a single resource.
* `deploymentmanagerResourcesList` - Lists all resources in a given deployment.

### typeProviders

* `deploymentmanagerTypeProvidersDelete` - Deletes a type provider.
* `deploymentmanagerTypeProvidersGet` - Gets information about a specific type provider.
* `deploymentmanagerTypeProvidersGetType` - Gets a type info for a type provided by a TypeProvider.
* `deploymentmanagerTypeProvidersInsert` - Creates a type provider.
* `deploymentmanagerTypeProvidersList` - Lists all resource type providers for Deployment Manager.
* `deploymentmanagerTypeProvidersListTypes` - Lists all the type info for a TypeProvider.
* `deploymentmanagerTypeProvidersPatch` - Patches a type provider.
* `deploymentmanagerTypeProvidersUpdate` - Updates a type provider.

### types

* `deploymentmanagerTypesList` - Lists all resource types for Deployment Manager.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
