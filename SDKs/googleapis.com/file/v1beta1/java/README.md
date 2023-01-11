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

            FileProjectsLocationsBackupsCreateRequest req = new FileProjectsLocationsBackupsCreateRequest() {{
                security = new FileProjectsLocationsBackupsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new FileProjectsLocationsBackupsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new FileProjectsLocationsBackupsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    backupId = "consequuntur";
                    callback = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new BackupInput() {{
                    description = "debitis";
                    kmsKeyName = "voluptatum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ut", "dolorem");
                    }};
                    sourceFileShare = "et";
                    sourceInstance = "voluptate";
                }};
            }};

            FileProjectsLocationsBackupsCreateResponse res = sdk.projects.fileProjectsLocationsBackupsCreate(req);

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

* `fileProjectsLocationsBackupsCreate` - Creates a backup.
* `fileProjectsLocationsBackupsList` - Lists all backups in a project for either a specified location or for all locations.
* `fileProjectsLocationsInstancesCreate` - Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* `fileProjectsLocationsInstancesList` - Lists all instances in a project for either a specified location or for all locations.
* `fileProjectsLocationsInstancesRestore` - Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* `fileProjectsLocationsInstancesRevert` - Revert an existing instance's file system to a specified snapshot.
* `fileProjectsLocationsInstancesSharesCreate` - Creates a share.
* `fileProjectsLocationsInstancesSharesList` - Lists all shares for a specified instance.
* `fileProjectsLocationsInstancesSnapshotsCreate` - Creates a snapshot.
* `fileProjectsLocationsInstancesSnapshotsList` - Lists all snapshots in a project for either a specified location or for all locations.
* `fileProjectsLocationsInstancesSnapshotsPatch` - Updates the settings of a specific snapshot.
* `fileProjectsLocationsList` - Lists information about the supported locations for this service.
* `fileProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `fileProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `fileProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `fileProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
