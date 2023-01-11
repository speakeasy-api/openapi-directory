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

            MetastoreProjectsLocationsFederationsCreateRequest req = new MetastoreProjectsLocationsFederationsCreateRequest() {{
                security = new MetastoreProjectsLocationsFederationsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new MetastoreProjectsLocationsFederationsCreatePathParams() {{
                    parent = "ipsa";
                }};
                queryParams = new MetastoreProjectsLocationsFederationsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "error";
                    alt = "media";
                    callback = "iste";
                    federationId = "aliquid";
                    fields = "consequatur";
                    key = "aut";
                    oauthToken = "minima";
                    prettyPrint = false;
                    quotaUser = "dolor";
                    requestId = "ut";
                    uploadType = "aliquam";
                    uploadProtocol = "unde";
                }};
                request = new FederationInput() {{
                    backendMetastores = new java.util.HashMap<String, openapisdk.models.shared.BackendMetastore>() {{
                        put("unde", new BackendMetastore() {{
                            metastoreType = "METASTORE_TYPE_UNSPECIFIED";
                            name = "dolorum";
                        }});
                        put("reiciendis", new BackendMetastore() {{
                            metastoreType = "METASTORE_TYPE_UNSPECIFIED";
                            name = "debitis";
                        }});
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("illo", "qui");
                        put("vel", "aliquam");
                    }};
                    name = "quia";
                    version = "necessitatibus";
                }};
            }};

            MetastoreProjectsLocationsFederationsCreateResponse res = sdk.projects.metastoreProjectsLocationsFederationsCreate(req);

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

### projects

* `metastoreProjectsLocationsFederationsCreate` - Creates a metastore federation in a project and location.
* `metastoreProjectsLocationsFederationsList` - Lists federations in a project and location.
* `metastoreProjectsLocationsList` - Lists information about the supported locations for this service.
* `metastoreProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `metastoreProjectsLocationsServicesAlterLocation` - Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.
* `metastoreProjectsLocationsServicesBackupsCreate` - Creates a new backup in a given project and location.
* `metastoreProjectsLocationsServicesBackupsDelete` - Deletes a single backup.
* `metastoreProjectsLocationsServicesBackupsList` - Lists backups in a service.
* `metastoreProjectsLocationsServicesCreate` - Creates a metastore service in a project and location.
* `metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* `metastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `metastoreProjectsLocationsServicesExportMetadata` - Exports metadata from a service.
* `metastoreProjectsLocationsServicesList` - Lists services in a project and location.
* `metastoreProjectsLocationsServicesMetadataImportsCreate` - Creates a new MetadataImport in a given project and location.
* `metastoreProjectsLocationsServicesMetadataImportsGet` - Gets details of a single import.
* `metastoreProjectsLocationsServicesMetadataImportsList` - Lists imports in a service.
* `metastoreProjectsLocationsServicesMetadataImportsPatch` - Updates a single import. Only the description field of MetadataImport is supported to be updated.
* `metastoreProjectsLocationsServicesMoveTableToDatabase` - Move a table to another database.
* `metastoreProjectsLocationsServicesQueryMetadata` - Query DPMS metadata.
* `metastoreProjectsLocationsServicesRemoveIamPolicy` - Removes the attached IAM policies for a resource
* `metastoreProjectsLocationsServicesRestore` - Restores a service from a backup.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
