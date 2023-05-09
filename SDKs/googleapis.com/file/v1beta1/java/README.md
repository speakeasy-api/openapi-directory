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
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsCreateRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsCreateResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackupInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsBackupsCreateRequest req = new FileProjectsLocationsBackupsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                backupInput = new BackupInput() {{
                    description = "distinctio";
                    kmsKeyName = "quibusdam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nulla", "corrupti");
                        put("illum", "vel");
                        put("error", "deserunt");
                    }};
                    sourceFileShare = "suscipit";
                    sourceInstance = "iure";
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                backupId = "ipsa";
                callback = "delectus";
                fields = "tempora";
                key = "suscipit";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "placeat";
                uploadProtocol = "voluptatum";
            }};            

            FileProjectsLocationsBackupsCreateResponse res = sdk.projects.fileProjectsLocationsBackupsCreate(req, new FileProjectsLocationsBackupsCreateSecurity("iusto", "excepturi") {{
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

* [fileProjectsLocationsBackupsCreate](docs/projects/README.md#fileprojectslocationsbackupscreate) - Creates a backup.
* [fileProjectsLocationsBackupsList](docs/projects/README.md#fileprojectslocationsbackupslist) - Lists all backups in a project for either a specified location or for all locations.
* [fileProjectsLocationsInstancesCreate](docs/projects/README.md#fileprojectslocationsinstancescreate) - Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* [fileProjectsLocationsInstancesList](docs/projects/README.md#fileprojectslocationsinstanceslist) - Lists all instances in a project for either a specified location or for all locations.
* [fileProjectsLocationsInstancesRestore](docs/projects/README.md#fileprojectslocationsinstancesrestore) - Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* [fileProjectsLocationsInstancesRevert](docs/projects/README.md#fileprojectslocationsinstancesrevert) - Revert an existing instance's file system to a specified snapshot.
* [fileProjectsLocationsInstancesSharesCreate](docs/projects/README.md#fileprojectslocationsinstancessharescreate) - Creates a share.
* [fileProjectsLocationsInstancesSharesList](docs/projects/README.md#fileprojectslocationsinstancesshareslist) - Lists all shares for a specified instance.
* [fileProjectsLocationsInstancesSnapshotsCreate](docs/projects/README.md#fileprojectslocationsinstancessnapshotscreate) - Creates a snapshot.
* [fileProjectsLocationsInstancesSnapshotsList](docs/projects/README.md#fileprojectslocationsinstancessnapshotslist) - Lists all snapshots in a project for either a specified location or for all locations.
* [fileProjectsLocationsInstancesSnapshotsPatch](docs/projects/README.md#fileprojectslocationsinstancessnapshotspatch) - Updates the settings of a specific snapshot.
* [fileProjectsLocationsList](docs/projects/README.md#fileprojectslocationslist) - Lists information about the supported locations for this service.
* [fileProjectsLocationsOperationsCancel](docs/projects/README.md#fileprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [fileProjectsLocationsOperationsDelete](docs/projects/README.md#fileprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [fileProjectsLocationsOperationsGet](docs/projects/README.md#fileprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [fileProjectsLocationsOperationsList](docs/projects/README.md#fileprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
