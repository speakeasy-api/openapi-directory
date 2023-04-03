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

import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateSecurity;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FederationInput;
import org.openapis.openapi.models.shared.BackendMetastoreMetastoreTypeEnum;
import org.openapis.openapi.models.shared.BackendMetastore;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsFederationsCreateRequest req = new MetastoreProjectsLocationsFederationsCreateRequest() {{
                dollarXgafv = "2";
                federationInput = new FederationInput() {{
                    backendMetastores = new java.util.HashMap<String, org.openapis.openapi.models.shared.BackendMetastore>() {{
                        put("distinctio", new BackendMetastore() {{
                            metastoreType = "DATAPROC_METASTORE";
                            name = "unde";
                        }});
                        put("nulla", new BackendMetastore() {{
                            metastoreType = "DATAPROC_METASTORE";
                            name = "illum";
                        }});
                        put("vel", new BackendMetastore() {{
                            metastoreType = "DATAPROC_METASTORE";
                            name = "deserunt";
                        }});
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    name = "delectus";
                    version = "tempora";
                }};
                accessToken = "suscipit";
                alt = "media";
                callback = "minus";
                federationId = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                parent = "nisi";
                prettyPrint = false;
                quotaUser = "recusandae";
                requestId = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }}            

            MetastoreProjectsLocationsFederationsCreateResponse res = sdk.projects.metastoreProjectsLocationsFederationsCreate(req, new MetastoreProjectsLocationsFederationsCreateSecurity() {{
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

* `metastoreProjectsLocationsFederationsCreate` - Creates a metastore federation in a project and location.
* `metastoreProjectsLocationsFederationsList` - Lists federations in a project and location.
* `metastoreProjectsLocationsList` - Lists information about the supported locations for this service.
* `metastoreProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `metastoreProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
* `metastoreProjectsLocationsServicesBackupsCreate` - Creates a new backup in a given project and location.
* `metastoreProjectsLocationsServicesBackupsDelete` - Deletes a single backup.
* `metastoreProjectsLocationsServicesBackupsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `metastoreProjectsLocationsServicesBackupsList` - Lists backups in a service.
* `metastoreProjectsLocationsServicesBackupsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* `metastoreProjectsLocationsServicesCreate` - Creates a metastore service in a project and location.
* `metastoreProjectsLocationsServicesExportMetadata` - Exports metadata from a service.
* `metastoreProjectsLocationsServicesList` - Lists services in a project and location.
* `metastoreProjectsLocationsServicesMetadataImportsCreate` - Creates a new MetadataImport in a given project and location.
* `metastoreProjectsLocationsServicesMetadataImportsGet` - Gets details of a single import.
* `metastoreProjectsLocationsServicesMetadataImportsList` - Lists imports in a service.
* `metastoreProjectsLocationsServicesMetadataImportsPatch` - Updates a single import. Only the description field of MetadataImport is supported to be updated.
* `metastoreProjectsLocationsServicesRestore` - Restores a service from a backup.
* `metastoreProjectsLocationsServicesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
