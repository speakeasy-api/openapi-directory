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
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteResponse;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerCompositeTypesDeleteRequest req = new DeploymentmanagerCompositeTypesDeleteRequest("corrupti", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            DeploymentmanagerCompositeTypesDeleteResponse res = sdk.compositeTypes.deploymentmanagerCompositeTypesDelete(req, new DeploymentmanagerCompositeTypesDeleteSecurity() {{
                option1 = new DeploymentmanagerCompositeTypesDeleteSecurityOption1("iure", "magnam") {{
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


### [compositeTypes](docs/compositetypes/README.md)

* [deploymentmanagerCompositeTypesDelete](docs/compositetypes/README.md#deploymentmanagercompositetypesdelete) - Deletes a composite type.
* [deploymentmanagerCompositeTypesGet](docs/compositetypes/README.md#deploymentmanagercompositetypesget) - Gets information about a specific composite type.
* [deploymentmanagerCompositeTypesInsert](docs/compositetypes/README.md#deploymentmanagercompositetypesinsert) - Creates a composite type.
* [deploymentmanagerCompositeTypesList](docs/compositetypes/README.md#deploymentmanagercompositetypeslist) - Lists all composite types for Deployment Manager.
* [deploymentmanagerCompositeTypesPatch](docs/compositetypes/README.md#deploymentmanagercompositetypespatch) - Patches a composite type.
* [deploymentmanagerCompositeTypesUpdate](docs/compositetypes/README.md#deploymentmanagercompositetypesupdate) - Updates a composite type.

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

### [typeProviders](docs/typeproviders/README.md)

* [deploymentmanagerTypeProvidersDelete](docs/typeproviders/README.md#deploymentmanagertypeprovidersdelete) - Deletes a type provider.
* [deploymentmanagerTypeProvidersGet](docs/typeproviders/README.md#deploymentmanagertypeprovidersget) - Gets information about a specific type provider.
* [deploymentmanagerTypeProvidersGetType](docs/typeproviders/README.md#deploymentmanagertypeprovidersgettype) - Gets a type info for a type provided by a TypeProvider.
* [deploymentmanagerTypeProvidersInsert](docs/typeproviders/README.md#deploymentmanagertypeprovidersinsert) - Creates a type provider.
* [deploymentmanagerTypeProvidersList](docs/typeproviders/README.md#deploymentmanagertypeproviderslist) - Lists all resource type providers for Deployment Manager.
* [deploymentmanagerTypeProvidersListTypes](docs/typeproviders/README.md#deploymentmanagertypeproviderslisttypes) - Lists all the type info for a TypeProvider.
* [deploymentmanagerTypeProvidersPatch](docs/typeproviders/README.md#deploymentmanagertypeproviderspatch) - Patches a type provider.
* [deploymentmanagerTypeProvidersUpdate](docs/typeproviders/README.md#deploymentmanagertypeprovidersupdate) - Updates a type provider.

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
