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

import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateResponse;
import org.openapis.openapi.models.shared.BackupInput;
import org.openapis.openapi.models.shared.Namespaces;
import org.openapis.openapi.models.shared.NamespacedNames;
import org.openapis.openapi.models.shared.NamespacedName;
import org.openapis.openapi.models.shared.EncryptionKey;
import org.openapis.openapi.models.shared.ClusterMetadata;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsBackupPlansBackupsCreateRequest req = new GkebackupProjectsLocationsBackupPlansBackupsCreateRequest() {{
                security = new GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    backupId = "unde";
                    callback = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new BackupInput() {{
                    clusterMetadata = new ClusterMetadata() {{
                        anthosVersion = "iure";
                        backupCrdVersions = new java.util.HashMap<String, String>() {{
                            put("debitis", "ipsa");
                            put("delectus", "tempora");
                        }};
                        cluster = "suscipit";
                        gkeVersion = "molestiae";
                        k8sVersion = "minus";
                    }};
                    deleteLockDays = 812169;
                    description = "voluptatum";
                    encryptionKey = new EncryptionKey() {{
                        gcpKmsEncryptionKey = "iusto";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                    }};
                    retainDays = 648172;
                    selectedApplications = new NamespacedNames() {{
                        namespacedNames = new org.openapis.openapi.models.shared.NamespacedName[]{{
                            add(new NamespacedName() {{
                                name = "ipsam";
                                namespace = "repellendus";
                            }}),
                        }};
                    }};
                    selectedNamespaces = new Namespaces() {{
                        namespaces = new String[]{{
                            add("quo"),
                            add("odit"),
                            add("at"),
                            add("at"),
                        }};
                    }};
                }};
            }};            

            GkebackupProjectsLocationsBackupPlansBackupsCreateResponse res = sdk.projects.gkebackupProjectsLocationsBackupPlansBackupsCreate(req);

            if (res.googleLongrunningOperation.isPresent()) {
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

* `gkebackupProjectsLocationsBackupPlansBackupsCreate` - Creates a Backup for the given BackupPlan.
* `gkebackupProjectsLocationsBackupPlansBackupsList` - Lists the Backups for a given BackupPlan.
* `gkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList` - Lists the VolumeBackups for a given Backup.
* `gkebackupProjectsLocationsBackupPlansCreate` - Creates a new BackupPlan in a given location.
* `gkebackupProjectsLocationsBackupPlansList` - Lists BackupPlans in a given location.
* `gkebackupProjectsLocationsDeleteOperations` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkebackupProjectsLocationsList` - Lists information about the supported locations for this service.
* `gkebackupProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkebackupProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `gkebackupProjectsLocationsRestorePlansCreate` - Creates a new RestorePlan in a given location.
* `gkebackupProjectsLocationsRestorePlansList` - Lists RestorePlans in a given location.
* `gkebackupProjectsLocationsRestorePlansRestoresCreate` - Creates a new Restore for the given RestorePlan.
* `gkebackupProjectsLocationsRestorePlansRestoresDelete` - Deletes an existing Restore.
* `gkebackupProjectsLocationsRestorePlansRestoresList` - Lists the Restores for a given RestorePlan.
* `gkebackupProjectsLocationsRestorePlansRestoresPatch` - Update a Restore.
* `gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet` - Retrieve the details of a single VolumeRestore.
* `gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList` - Lists the VolumeRestores for a given Restore.
* `gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
