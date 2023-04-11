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