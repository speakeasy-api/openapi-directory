# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/composer/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/composer/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ComposerProjectsLocationsEnvironmentsCreateRequest,
  ComposerProjectsLocationsEnvironmentsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  EnvironmentStateEnum,
  EnvironmentConfigEnvironmentSizeEnum,
  NetworkingConfigConnectionTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ComposerProjectsLocationsEnvironmentsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  environmentInput: {
    config: {
      airflowUri: "provident",
      dagGcsPrefix: "distinctio",
      databaseConfig: {
        machineType: "quibusdam",
      },
      encryptionConfig: {
        kmsKeyName: "unde",
      },
      environmentSize: EnvironmentConfigEnvironmentSizeEnum.EnvironmentSizeLarge,
      gkeCluster: "corrupti",
      maintenanceWindow: {
        endTime: "illum",
        recurrence: "vel",
        startTime: "error",
      },
      masterAuthorizedNetworksConfig: {
        cidrBlocks: [
          {
            cidrBlock: "suscipit",
            displayName: "iure",
          },
          {
            cidrBlock: "magnam",
            displayName: "debitis",
          },
          {
            cidrBlock: "ipsa",
            displayName: "delectus",
          },
        ],
        enabled: false,
      },
      nodeConfig: {
        diskSizeGb: 272656,
        enableIpMasqAgent: false,
        ipAllocationPolicy: {
          clusterIpv4CidrBlock: "suscipit",
          clusterSecondaryRangeName: "molestiae",
          servicesIpv4CidrBlock: "minus",
          servicesSecondaryRangeName: "placeat",
          useIpAliases: false,
        },
        location: "voluptatum",
        machineType: "iusto",
        network: "excepturi",
        oauthScopes: [
          "recusandae",
          "temporibus",
        ],
        serviceAccount: "ab",
        subnetwork: "quis",
        tags: [
          "deserunt",
        ],
      },
      nodeCount: 20218,
      privateEnvironmentConfig: {
        cloudComposerConnectionSubnetwork: "ipsam",
        cloudComposerNetworkIpv4CidrBlock: "repellendus",
        cloudSqlIpv4CidrBlock: "sapiente",
        enablePrivateEnvironment: false,
        enablePrivatelyUsedPublicIps: false,
        networkingConfig: {
          connectionType: NetworkingConfigConnectionTypeEnum.PrivateServiceConnect,
        },
        privateClusterConfig: {
          enablePrivateEndpoint: false,
          masterIpv4CidrBlock: "odit",
        },
        webServerIpv4CidrBlock: "at",
      },
      recoveryConfig: {
        scheduledSnapshotsConfig: {
          enabled: false,
          snapshotCreationSchedule: "at",
          snapshotLocation: "maiores",
          timeZone: "molestiae",
        },
      },
      softwareConfig: {
        airflowConfigOverrides: {
          "quod": "esse",
          "totam": "porro",
          "dolorum": "dicta",
          "nam": "officia",
        },
        envVariables: {
          "fugit": "deleniti",
          "hic": "optio",
          "totam": "beatae",
        },
        imageVersion: "commodi",
        pypiPackages: {
          "modi": "qui",
          "impedit": "cum",
        },
        pythonVersion: "esse",
        schedulerCount: 216550,
      },
      webServerConfig: {
        machineType: "excepturi",
      },
      webServerNetworkAccessControl: {
        allowedIpRanges: [
          {
            description: "perferendis",
            value: "ad",
          },
        ],
      },
      workloadsConfig: {
        scheduler: {
          count: 617636,
          cpu: 1496.75,
          memoryGb: 6120.96,
          storageGb: 2223.21,
        },
        webServer: {
          cpu: 6169.34,
          memoryGb: 3864.89,
          storageGb: 9437.49,
        },
        worker: {
          cpu: 9025.99,
          maxCount: 681820,
          memoryGb: 4499.5,
          minCount: 359508,
          storageGb: 6130.64,
        },
      },
    },
    createTime: "iure",
    labels: {
      "quidem": "architecto",
      "ipsa": "reiciendis",
      "est": "mollitia",
      "laborum": "dolores",
    },
    name: "dolorem",
    state: EnvironmentStateEnum.Running,
    updateTime: "explicabo",
    uuid: "c5955907-aff1-4a3a-afa9-467739251aa5",
  },
  accessToken: "odit",
  alt: AltEnum.Proto,
  callback: "sequi",
  fields: "tenetur",
  key: "ipsam",
  oauthToken: "id",
  parent: "possimus",
  prettyPrint: false,
  quotaUser: "aut",
  uploadType: "quasi",
  uploadProtocol: "error",
};

sdk.projects.composerProjectsLocationsEnvironmentsCreate(req).then((res: ComposerProjectsLocationsEnvironmentsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `composerProjectsLocationsEnvironmentsCreate` - Create a new environment.
* `composerProjectsLocationsEnvironmentsList` - List environments.
* `composerProjectsLocationsEnvironmentsLoadSnapshot` - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* `composerProjectsLocationsEnvironmentsPatch` - Update an environment.
* `composerProjectsLocationsEnvironmentsSaveSnapshot` - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* `composerProjectsLocationsImageVersionsList` - List ImageVersions for provided location.
* `composerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `composerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `composerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

