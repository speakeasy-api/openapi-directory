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
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackupInput;
import org.openapis.openapi.models.shared.ClusterMetadata;
import org.openapis.openapi.models.shared.EncryptionKey;
import org.openapis.openapi.models.shared.NamespacedName;
import org.openapis.openapi.models.shared.NamespacedNames;
import org.openapis.openapi.models.shared.Namespaces;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsBackupPlansBackupsCreateRequest req = new GkebackupProjectsLocationsBackupPlansBackupsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                backupInput = new BackupInput() {{
                    clusterMetadata = new ClusterMetadata() {{
                        anthosVersion = "distinctio";
                        backupCrdVersions = new java.util.HashMap<String, String>() {{
                            put("unde", "nulla");
                            put("corrupti", "illum");
                            put("vel", "error");
                            put("deserunt", "suscipit");
                        }};
                        cluster = "iure";
                        gkeVersion = "magnam";
                        k8sVersion = "debitis";
                    }};;
                    deleteLockDays = 56713;
                    description = "delectus";
                    encryptionKey = new EncryptionKey() {{
                        gcpKmsEncryptionKey = "tempora";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    retainDays = 479977;
                    selectedApplications = new NamespacedNames() {{
                        namespacedNames = new org.openapis.openapi.models.shared.NamespacedName[]{{
                            add(new NamespacedName() {{
                                name = "Mrs. Sophie Smith MD";
                                namespace = "perferendis";
                            }}),
                            add(new NamespacedName() {{
                                name = "Estelle Will";
                                namespace = "at";
                            }}),
                            add(new NamespacedName() {{
                                name = "Emilio Krajcik";
                                namespace = "esse";
                            }}),
                        }};
                    }};;
                    selectedNamespaces = new Namespaces() {{
                        namespaces = new String[]{{
                            add("porro"),
                            add("dolorum"),
                            add("dicta"),
                        }};
                    }};;
                }};;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                backupId = "occaecati";
                callback = "fugit";
                fields = "deleniti";
                key = "hic";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "beatae";
                uploadProtocol = "commodi";
            }};            

            GkebackupProjectsLocationsBackupPlansBackupsCreateResponse res = sdk.projects.gkebackupProjectsLocationsBackupPlansBackupsCreate(req, new GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity("molestiae", "modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
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

* [gkebackupProjectsLocationsBackupPlansBackupsCreate](docs/projects/README.md#gkebackupprojectslocationsbackupplansbackupscreate) - Creates a Backup for the given BackupPlan.
* [gkebackupProjectsLocationsBackupPlansBackupsList](docs/projects/README.md#gkebackupprojectslocationsbackupplansbackupslist) - Lists the Backups for a given BackupPlan.
* [gkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList](docs/projects/README.md#gkebackupprojectslocationsbackupplansbackupsvolumebackupslist) - Lists the VolumeBackups for a given Backup.
* [gkebackupProjectsLocationsBackupPlansCreate](docs/projects/README.md#gkebackupprojectslocationsbackupplanscreate) - Creates a new BackupPlan in a given location.
* [gkebackupProjectsLocationsBackupPlansList](docs/projects/README.md#gkebackupprojectslocationsbackupplanslist) - Lists BackupPlans in a given location.
* [gkebackupProjectsLocationsDeleteOperations](docs/projects/README.md#gkebackupprojectslocationsdeleteoperations) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [gkebackupProjectsLocationsList](docs/projects/README.md#gkebackupprojectslocationslist) - Lists information about the supported locations for this service.
* [gkebackupProjectsLocationsOperationsCancel](docs/projects/README.md#gkebackupprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gkebackupProjectsLocationsOperationsList](docs/projects/README.md#gkebackupprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [gkebackupProjectsLocationsRestorePlansCreate](docs/projects/README.md#gkebackupprojectslocationsrestoreplanscreate) - Creates a new RestorePlan in a given location.
* [gkebackupProjectsLocationsRestorePlansList](docs/projects/README.md#gkebackupprojectslocationsrestoreplanslist) - Lists RestorePlans in a given location.
* [gkebackupProjectsLocationsRestorePlansRestoresCreate](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestorescreate) - Creates a new Restore for the given RestorePlan.
* [gkebackupProjectsLocationsRestorePlansRestoresDelete](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresdelete) - Deletes an existing Restore.
* [gkebackupProjectsLocationsRestorePlansRestoresList](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoreslist) - Lists the Restores for a given RestorePlan.
* [gkebackupProjectsLocationsRestorePlansRestoresPatch](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestorespatch) - Update a Restore.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresvolumerestoresget) - Retrieve the details of a single VolumeRestore.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresvolumerestoresgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresvolumerestoreslist) - Lists the VolumeRestores for a given Restore.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresvolumerestoressetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresvolumerestorestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
