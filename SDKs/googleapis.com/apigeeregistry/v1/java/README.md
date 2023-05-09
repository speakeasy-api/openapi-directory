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
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisCreateRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisCreateResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApiInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsApisCreateRequest req = new ApigeeregistryProjectsLocationsApisCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                apiInput = new ApiInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                        put("illum", "vel");
                    }};
                    availability = "error";
                    description = "deserunt";
                    displayName = "suscipit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    name = "Laurie Kreiger";
                    recommendedDeployment = "voluptatum";
                    recommendedVersion = "iusto";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                apiId = "recusandae";
                callback = "temporibus";
                fields = "ab";
                key = "quis";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "perferendis";
                uploadProtocol = "ipsam";
            }};            

            ApigeeregistryProjectsLocationsApisCreateResponse res = sdk.projects.apigeeregistryProjectsLocationsApisCreate(req, new ApigeeregistryProjectsLocationsApisCreateSecurity("repellendus", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.api != null) {
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

* [apigeeregistryProjectsLocationsApisCreate](docs/projects/README.md#apigeeregistryprojectslocationsapiscreate) - Creates a specified API.
* [apigeeregistryProjectsLocationsApisDeploymentsCreate](docs/projects/README.md#apigeeregistryprojectslocationsapisdeploymentscreate) - Creates a specified deployment.
* [apigeeregistryProjectsLocationsApisDeploymentsList](docs/projects/README.md#apigeeregistryprojectslocationsapisdeploymentslist) - Returns matching deployments.
* [apigeeregistryProjectsLocationsApisList](docs/projects/README.md#apigeeregistryprojectslocationsapislist) - Returns matching APIs.
* [apigeeregistryProjectsLocationsApisVersionsCreate](docs/projects/README.md#apigeeregistryprojectslocationsapisversionscreate) - Creates a specified version.
* [apigeeregistryProjectsLocationsApisVersionsList](docs/projects/README.md#apigeeregistryprojectslocationsapisversionslist) - Returns matching versions.
* [apigeeregistryProjectsLocationsApisVersionsSpecsCreate](docs/projects/README.md#apigeeregistryprojectslocationsapisversionsspecscreate) - Creates a specified spec.
* [apigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevision](docs/projects/README.md#apigeeregistryprojectslocationsapisversionsspecsdeleterevision) - Deletes a revision of a spec.
* [apigeeregistryProjectsLocationsApisVersionsSpecsList](docs/projects/README.md#apigeeregistryprojectslocationsapisversionsspecslist) - Returns matching specs.
* [apigeeregistryProjectsLocationsApisVersionsSpecsListRevisions](docs/projects/README.md#apigeeregistryprojectslocationsapisversionsspecslistrevisions) - Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.
* [apigeeregistryProjectsLocationsApisVersionsSpecsPatch](docs/projects/README.md#apigeeregistryprojectslocationsapisversionsspecspatch) - Used to modify a specified spec.
* [apigeeregistryProjectsLocationsApisVersionsSpecsRollback](docs/projects/README.md#apigeeregistryprojectslocationsapisversionsspecsrollback) - Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
* [apigeeregistryProjectsLocationsApisVersionsSpecsTagRevision](docs/projects/README.md#apigeeregistryprojectslocationsapisversionsspecstagrevision) - Adds a tag to a specified revision of a spec.
* [apigeeregistryProjectsLocationsArtifactsCreate](docs/projects/README.md#apigeeregistryprojectslocationsartifactscreate) - Creates a specified artifact.
* [apigeeregistryProjectsLocationsArtifactsGetContents](docs/projects/README.md#apigeeregistryprojectslocationsartifactsgetcontents) - Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
* [apigeeregistryProjectsLocationsArtifactsList](docs/projects/README.md#apigeeregistryprojectslocationsartifactslist) - Returns matching artifacts.
* [apigeeregistryProjectsLocationsArtifactsReplaceArtifact](docs/projects/README.md#apigeeregistryprojectslocationsartifactsreplaceartifact) - Used to replace a specified artifact.
* [apigeeregistryProjectsLocationsInstancesCreate](docs/projects/README.md#apigeeregistryprojectslocationsinstancescreate) - Provisions instance resources for the Registry.
* [apigeeregistryProjectsLocationsList](docs/projects/README.md#apigeeregistryprojectslocationslist) - Lists information about the supported locations for this service.
* [apigeeregistryProjectsLocationsOperationsCancel](docs/projects/README.md#apigeeregistryprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [apigeeregistryProjectsLocationsOperationsDelete](docs/projects/README.md#apigeeregistryprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [apigeeregistryProjectsLocationsOperationsGet](docs/projects/README.md#apigeeregistryprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [apigeeregistryProjectsLocationsOperationsList](docs/projects/README.md#apigeeregistryprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* [apigeeregistryProjectsLocationsRuntimeGetIamPolicy](docs/projects/README.md#apigeeregistryprojectslocationsruntimegetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [apigeeregistryProjectsLocationsRuntimeSetIamPolicy](docs/projects/README.md#apigeeregistryprojectslocationsruntimesetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [apigeeregistryProjectsLocationsRuntimeTestIamPermissions](docs/projects/README.md#apigeeregistryprojectslocationsruntimetestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
