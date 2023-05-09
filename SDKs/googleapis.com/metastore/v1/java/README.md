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
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackendMetastore;
import org.openapis.openapi.models.shared.BackendMetastoreMetastoreTypeEnum;
import org.openapis.openapi.models.shared.FederationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsFederationsCreateRequest req = new MetastoreProjectsLocationsFederationsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                federationInput = new FederationInput() {{
                    backendMetastores = new java.util.HashMap<String, org.openapis.openapi.models.shared.BackendMetastore>() {{
                        put("quibusdam", new BackendMetastore() {{
                            metastoreType = BackendMetastoreMetastoreTypeEnum.DATAPROC_METASTORE;
                            name = "Johnnie Stamm";
                        }});
                        put("deserunt", new BackendMetastore() {{
                            metastoreType = BackendMetastoreMetastoreTypeEnum.METASTORE_TYPE_UNSPECIFIED;
                            name = "Dr. Valerie Toy";
                        }});
                        put("suscipit", new BackendMetastore() {{
                            metastoreType = BackendMetastoreMetastoreTypeEnum.METASTORE_TYPE_UNSPECIFIED;
                            name = "Irving Lehner";
                        }});
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("recusandae", "temporibus");
                        put("ab", "quis");
                    }};
                    name = "Iris Aufderhar";
                    version = "sapiente";
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "at";
                federationId = "at";
                fields = "maiores";
                key = "molestiae";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "quod";
                requestId = "esse";
                uploadType = "totam";
                uploadProtocol = "porro";
            }};            

            MetastoreProjectsLocationsFederationsCreateResponse res = sdk.projects.metastoreProjectsLocationsFederationsCreate(req, new MetastoreProjectsLocationsFederationsCreateSecurity("dolorum", "dicta") {{
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

* [metastoreProjectsLocationsFederationsCreate](docs/projects/README.md#metastoreprojectslocationsfederationscreate) - Creates a metastore federation in a project and location.
* [metastoreProjectsLocationsFederationsList](docs/projects/README.md#metastoreprojectslocationsfederationslist) - Lists federations in a project and location.
* [metastoreProjectsLocationsList](docs/projects/README.md#metastoreprojectslocationslist) - Lists information about the supported locations for this service.
* [metastoreProjectsLocationsOperationsCancel](docs/projects/README.md#metastoreprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [metastoreProjectsLocationsOperationsList](docs/projects/README.md#metastoreprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
* [metastoreProjectsLocationsServicesAlterLocation](docs/projects/README.md#metastoreprojectslocationsservicesalterlocation) - Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.
* [metastoreProjectsLocationsServicesBackupsCreate](docs/projects/README.md#metastoreprojectslocationsservicesbackupscreate) - Creates a new backup in a given project and location.
* [metastoreProjectsLocationsServicesBackupsDelete](docs/projects/README.md#metastoreprojectslocationsservicesbackupsdelete) - Deletes a single backup.
* [metastoreProjectsLocationsServicesBackupsGetIamPolicy](docs/projects/README.md#metastoreprojectslocationsservicesbackupsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [metastoreProjectsLocationsServicesBackupsList](docs/projects/README.md#metastoreprojectslocationsservicesbackupslist) - Lists backups in a service.
* [metastoreProjectsLocationsServicesBackupsSetIamPolicy](docs/projects/README.md#metastoreprojectslocationsservicesbackupssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [metastoreProjectsLocationsServicesCreate](docs/projects/README.md#metastoreprojectslocationsservicescreate) - Creates a metastore service in a project and location.
* [metastoreProjectsLocationsServicesExportMetadata](docs/projects/README.md#metastoreprojectslocationsservicesexportmetadata) - Exports metadata from a service.
* [metastoreProjectsLocationsServicesList](docs/projects/README.md#metastoreprojectslocationsserviceslist) - Lists services in a project and location.
* [metastoreProjectsLocationsServicesMetadataImportsCreate](docs/projects/README.md#metastoreprojectslocationsservicesmetadataimportscreate) - Creates a new MetadataImport in a given project and location.
* [metastoreProjectsLocationsServicesMetadataImportsGet](docs/projects/README.md#metastoreprojectslocationsservicesmetadataimportsget) - Gets details of a single import.
* [metastoreProjectsLocationsServicesMetadataImportsList](docs/projects/README.md#metastoreprojectslocationsservicesmetadataimportslist) - Lists imports in a service.
* [metastoreProjectsLocationsServicesMetadataImportsPatch](docs/projects/README.md#metastoreprojectslocationsservicesmetadataimportspatch) - Updates a single import. Only the description field of MetadataImport is supported to be updated.
* [metastoreProjectsLocationsServicesMoveTableToDatabase](docs/projects/README.md#metastoreprojectslocationsservicesmovetabletodatabase) - Move a table to another database.
* [metastoreProjectsLocationsServicesQueryMetadata](docs/projects/README.md#metastoreprojectslocationsservicesquerymetadata) - Query DPMS metadata.
* [metastoreProjectsLocationsServicesRestore](docs/projects/README.md#metastoreprojectslocationsservicesrestore) - Restores a service from a backup.
* [metastoreProjectsLocationsServicesTestIamPermissions](docs/projects/README.md#metastoreprojectslocationsservicestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
