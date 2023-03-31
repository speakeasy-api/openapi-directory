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

import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsCreateSecurity;
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsCreatePathParams;
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsCreateQueryParams;
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsCreateRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsCreateResponse;
import org.openapis.openapi.models.shared.BackupInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new FileProjectsLocationsBackupsCreateQueryParams() {{
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
                    description = "iure";
                    kmsKey = "magnam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsa", "delectus");
                        put("tempora", "suscipit");
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    sourceFileShare = "iusto";
                    sourceInstance = "excepturi";
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
* `fileProjectsLocationsInstancesSnapshotsCreate` - Creates a snapshot.
* `fileProjectsLocationsInstancesSnapshotsList` - Lists all snapshots in a project for either a specified location or for all locations.
* `fileProjectsLocationsInstancesSnapshotsPatch` - Updates the settings of a specific snapshot.
* `fileProjectsLocationsList` - Lists information about the supported locations for this service.
* `fileProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `fileProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `fileProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `fileProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
