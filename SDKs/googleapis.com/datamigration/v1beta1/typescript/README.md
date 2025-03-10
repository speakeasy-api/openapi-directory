# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/datamigration/v1beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/datamigration/v1beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DatamigrationProjectsLocationsConnectionProfilesCreateRequest,
  DatamigrationProjectsLocationsConnectionProfilesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  ConnectionProfileProviderEnum,
  ConnectionProfileStateEnum,
  CloudSqlSettingsActivationPolicyEnum,
  CloudSqlSettingsDataDiskTypeEnum,
  CloudSqlSettingsDatabaseVersionEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DatamigrationProjectsLocationsConnectionProfilesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  connectionProfileInput: {
    cloudsql: {
      settings: {
        activationPolicy: CloudSqlSettingsActivationPolicyEnum.Always,
        autoStorageIncrease: false,
        dataDiskSizeGb: "distinctio",
        dataDiskType: CloudSqlSettingsDataDiskTypeEnum.PdHdd,
        databaseFlags: {
          "nulla": "corrupti",
          "illum": "vel",
          "error": "deserunt",
        },
        databaseVersion: CloudSqlSettingsDatabaseVersionEnum.Mysql56,
        ipConfig: {
          authorizedNetworks: [
            {
              expireTime: "magnam",
              label: "debitis",
              ttl: "ipsa",
              value: "delectus",
            },
            {
              expireTime: "tempora",
              label: "suscipit",
              ttl: "molestiae",
              value: "minus",
            },
          ],
          enableIpv4: false,
          privateNetwork: "placeat",
          requireSsl: false,
        },
        rootPassword: "voluptatum",
        sourceId: "iusto",
        storageAutoResizeLimit: "excepturi",
        tier: "nisi",
        userLabels: {
          "temporibus": "ab",
          "quis": "veritatis",
          "deserunt": "perferendis",
          "ipsam": "repellendus",
        },
        zone: "sapiente",
      },
    },
    displayName: "quo",
    error: {
      code: 140350,
      details: [
        {
          "maiores": "molestiae",
          "quod": "quod",
          "esse": "totam",
          "porro": "dolorum",
        },
        {
          "nam": "officia",
        },
        {
          "fugit": "deleniti",
          "hic": "optio",
          "totam": "beatae",
        },
        {
          "molestiae": "modi",
          "qui": "impedit",
        },
      ],
      message: "cum",
    },
    labels: {
      "ipsum": "excepturi",
      "aspernatur": "perferendis",
    },
    mysql: {
      cloudSqlId: "ad",
      host: "natus",
      password: "sed",
      port: 612096,
      ssl: {
        caCertificate: "dolor",
        clientCertificate: "natus",
        clientKey: "laboriosam",
      },
      username: "Tyra.Turcotte35",
    },
    name: "iste",
    provider: ConnectionProfileProviderEnum.Cloudsql,
    state: ConnectionProfileStateEnum.Failed,
  },
  accessToken: "quidem",
  alt: AltEnum.Json,
  callback: "ipsa",
  connectionProfileId: "reiciendis",
  fields: "est",
  key: "mollitia",
  oauthToken: "laborum",
  parent: "dolores",
  prettyPrint: false,
  quotaUser: "dolorem",
  requestId: "corporis",
  uploadType: "explicabo",
  uploadProtocol: "nobis",
};

sdk.projects.datamigrationProjectsLocationsConnectionProfilesCreate(req).then((res: DatamigrationProjectsLocationsConnectionProfilesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `datamigrationProjectsLocationsConnectionProfilesCreate` - Creates a new connection profile in a given project and location.
* `datamigrationProjectsLocationsConnectionProfilesList` - Retrieve a list of all connection profiles in a given project and location.
* `datamigrationProjectsLocationsList` - Lists information about the supported locations for this service.
* `datamigrationProjectsLocationsMigrationJobsCreate` - Creates a new migration job in a given project and location.
* `datamigrationProjectsLocationsMigrationJobsGenerateSshScript` - Generate a SSH configuration script to configure the reverse SSH connectivity.
* `datamigrationProjectsLocationsMigrationJobsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `datamigrationProjectsLocationsMigrationJobsList` - Lists migration jobs in a given project and location.
* `datamigrationProjectsLocationsMigrationJobsPatch` - Updates the parameters of a single migration job.
* `datamigrationProjectsLocationsMigrationJobsPromote` - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* `datamigrationProjectsLocationsMigrationJobsRestart` - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* `datamigrationProjectsLocationsMigrationJobsResume` - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* `datamigrationProjectsLocationsMigrationJobsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `datamigrationProjectsLocationsMigrationJobsStart` - Start an already created migration job.
* `datamigrationProjectsLocationsMigrationJobsStop` - Stops a running migration job.
* `datamigrationProjectsLocationsMigrationJobsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `datamigrationProjectsLocationsMigrationJobsVerify` - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* `datamigrationProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datamigrationProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `datamigrationProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `datamigrationProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

