# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            DeploymentmanagerCompositeTypesDeleteRequest req = new DeploymentmanagerCompositeTypesDeleteRequest() {{
                security = new DeploymentmanagerCompositeTypesDeleteSecurity() {{
                    option1 = new DeploymentmanagerCompositeTypesDeleteSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new DeploymentmanagerCompositeTypesDeletePathParams() {{
                    compositeType = "sit";
                    project = "voluptas";
                }};
                queryParams = new DeploymentmanagerCompositeTypesDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "expedita";
                    alt = "proto";
                    callback = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
            }};

            DeploymentmanagerCompositeTypesDeleteResponse res = sdk.compositeTypes.deploymentmanagerCompositeTypesDelete(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

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

* `deploymentmanagerTypesGet` - Gets information about a specific type.
* `deploymentmanagerTypesList` - Lists all resource types for Deployment Manager.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
