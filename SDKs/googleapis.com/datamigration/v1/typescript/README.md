# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/datamigration/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/datamigration/v1/typescript
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
  CloudSqlSettingsAvailabilityTypeEnum,
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
    alloydb: {
      clusterId: "provident",
      settings: {
        initialUser: {
          password: "distinctio",
          user: "quibusdam",
        },
        labels: {
          "nulla": "corrupti",
          "illum": "vel",
          "error": "deserunt",
        },
        primaryInstanceSettings: {
          databaseFlags: {
            "iure": "magnam",
            "debitis": "ipsa",
          },
          id: "delectus",
          labels: {
            "suscipit": "molestiae",
            "minus": "placeat",
          },
          machineConfig: {
            cpuCount: 528895,
          },
        },
        vpcNetwork: "iusto",
      },
    },
    cloudsql: {
      settings: {
        activationPolicy: CloudSqlSettingsActivationPolicyEnum.Always,
        autoStorageIncrease: false,
        availabilityType: CloudSqlSettingsAvailabilityTypeEnum.Zonal,
        cmekKeyName: "recusandae",
        collation: "temporibus",
        dataDiskSizeGb: "ab",
        dataDiskType: CloudSqlSettingsDataDiskTypeEnum.PdSsd,
        databaseFlags: {
          "deserunt": "perferendis",
        },
        databaseVersion: CloudSqlSettingsDatabaseVersionEnum.Postgres96,
        ipConfig: {
          authorizedNetworks: [
            {
              expireTime: "sapiente",
              label: "quo",
              ttl: "odit",
              value: "at",
            },
            {
              expireTime: "at",
              label: "maiores",
              ttl: "molestiae",
              value: "quod",
            },
            {
              expireTime: "quod",
              label: "esse",
              ttl: "totam",
              value: "porro",
            },
            {
              expireTime: "dolorum",
              label: "dicta",
              ttl: "nam",
              value: "officia",
            },
          ],
          enableIpv4: false,
          privateNetwork: "occaecati",
          requireSsl: false,
        },
        rootPassword: "fugit",
        secondaryZone: "deleniti",
        sourceId: "hic",
        storageAutoResizeLimit: "optio",
        tier: "totam",
        userLabels: {
          "commodi": "molestiae",
        },
        zone: "modi",
      },
    },
    displayName: "qui",
    error: {
      code: 774234,
      details: [
        {
          "ipsum": "excepturi",
          "aspernatur": "perferendis",
        },
        {
          "natus": "sed",
          "iste": "dolor",
        },
        {
          "laboriosam": "hic",
          "saepe": "fuga",
          "in": "corporis",
        },
      ],
      message: "iste",
    },
    labels: {
      "saepe": "quidem",
      "architecto": "ipsa",
    },
    mysql: {
      cloudSqlId: "reiciendis",
      host: "est",
      password: "mollitia",
      port: 670638,
      ssl: {
        caCertificate: "dolores",
        clientCertificate: "dolorem",
        clientKey: "corporis",
      },
      username: "Braulio60",
    },
    name: "nemo",
    oracle: {
      databaseService: "minima",
      forwardSshConnectivity: {
        hostname: "nippy-apse.info",
        password: "culpa",
        port: 988374,
        privateKey: "sapiente",
        username: "Bart63",
      },
      host: "consequuntur",
      password: "repellat",
      port: 653108,
      privateConnectivity: {
        privateConnection: "occaecati",
      },
      staticServiceIpConnectivity: {
        "commodi": "quam",
        "molestiae": "velit",
      },
      username: "Linda.Cronin",
    },
    postgresql: {
      cloudSqlId: "laborum",
      host: "animi",
      password: "enim",
      port: 138183,
      privateServiceConnectConnectivity: {
        serviceAttachment: "quo",
      },
      ssl: {
        caCertificate: "sequi",
        clientCertificate: "tenetur",
        clientKey: "ipsam",
      },
      staticIpConnectivity: {
        "possimus": "aut",
        "quasi": "error",
        "temporibus": "laborum",
      },
      username: "Austyn_Witting46",
    },
    provider: ConnectionProfileProviderEnum.Rds,
    state: ConnectionProfileStateEnum.Failed,
  },
  accessToken: "ipsa",
  alt: AltEnum.Media,
  callback: "voluptate",
  connectionProfileId: "cum",
  fields: "perferendis",
  key: "doloremque",
  oauthToken: "reprehenderit",
  parent: "ut",
  prettyPrint: false,
  quotaUser: "maiores",
  requestId: "dicta",
  skipValidation: false,
  uploadType: "corporis",
  uploadProtocol: "dolore",
  validateOnly: false,
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
* `datamigrationProjectsLocationsConnectionProfilesList` - Retrieves a list of all connection profiles in a given project and location.
* `datamigrationProjectsLocationsConversionWorkspacesApply` - Applies draft tree onto a specific destination database.
* `datamigrationProjectsLocationsConversionWorkspacesCommit` - Marks all the data in the conversion workspace as committed.
* `datamigrationProjectsLocationsConversionWorkspacesConvert` - Creates a draft tree schema for the destination database.
* `datamigrationProjectsLocationsConversionWorkspacesCreate` - Creates a new conversion workspace in a given project and location.
* `datamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions` - Retrieves a list of committed revisions of a specific conversion workspace.
* `datamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities` - Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.
* `datamigrationProjectsLocationsConversionWorkspacesList` - Lists conversion workspaces in a given project and location.
* `datamigrationProjectsLocationsConversionWorkspacesMappingRulesImport` - Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.
* `datamigrationProjectsLocationsConversionWorkspacesRollback` - Rolls back a conversion workspace to the last committed snapshot.
* `datamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs` - Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.
* `datamigrationProjectsLocationsConversionWorkspacesSeed` - Imports a snapshot of the source database into the conversion workspace.
* `datamigrationProjectsLocationsFetchStaticIps` - Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.
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
* `datamigrationProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `datamigrationProjectsLocationsPrivateConnectionsCreate` - Creates a new private connection in a given project and location.
* `datamigrationProjectsLocationsPrivateConnectionsDelete` - Deletes a single Database Migration Service private connection.
* `datamigrationProjectsLocationsPrivateConnectionsGet` - Gets details of a single private connection.
* `datamigrationProjectsLocationsPrivateConnectionsList` - Retrieves a list of private connections in a given project and location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

