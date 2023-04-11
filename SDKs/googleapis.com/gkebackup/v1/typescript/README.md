# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/gkebackup/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/gkebackup/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GkebackupProjectsLocationsBackupPlansBackupsCreateRequest,
  GkebackupProjectsLocationsBackupPlansBackupsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GkebackupProjectsLocationsBackupPlansBackupsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  backupInput: {
    clusterMetadata: {
      anthosVersion: "provident",
      backupCrdVersions: {
        "quibusdam": "unde",
        "nulla": "corrupti",
        "illum": "vel",
      },
      cluster: "error",
      gkeVersion: "deserunt",
      k8sVersion: "suscipit",
    },
    deleteLockDays: 437587,
    description: "magnam",
    encryptionKey: {
      gcpKmsEncryptionKey: "debitis",
    },
    labels: {
      "delectus": "tempora",
    },
    retainDays: 383441,
    selectedApplications: {
      namespacedNames: [
        {
          name: "minus",
          namespace: "placeat",
        },
        {
          name: "voluptatum",
          namespace: "iusto",
        },
      ],
    },
    selectedNamespaces: {
      namespaces: [
        "nisi",
        "recusandae",
        "temporibus",
      ],
    },
  },
  accessToken: "ab",
  alt: AltEnum.Media,
  backupId: "veritatis",
  callback: "deserunt",
  fields: "perferendis",
  key: "ipsam",
  oauthToken: "repellendus",
  parent: "sapiente",
  prettyPrint: false,
  quotaUser: "quo",
  uploadType: "odit",
  uploadProtocol: "at",
};

sdk.projects.gkebackupProjectsLocationsBackupPlansBackupsCreate(req).then((res: GkebackupProjectsLocationsBackupPlansBackupsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

