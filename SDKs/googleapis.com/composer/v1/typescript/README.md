# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ComposerProjectsLocationsEnvironmentsCreateRequest, ComposerProjectsLocationsEnvironmentsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ComposerProjectsLocationsEnvironmentsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    config: {
      airflowUri: "dicta",
      dagGcsPrefix: "debitis",
      databaseConfig: {
        machineType: "voluptatum",
      },
      encryptionConfig: {
        kmsKeyName: "et",
      },
      environmentSize: "ENVIRONMENT_SIZE_LARGE",
      gkeCluster: "dolorem",
      maintenanceWindow: {
        endTime: "et",
        recurrence: "voluptate",
        startTime: "iste",
      },
      masterAuthorizedNetworksConfig: {
        cidrBlocks: [
          {
            cidrBlock: "totam",
            displayName: "dolores",
          },
        ],
        enabled: false,
      },
      nodeConfig: {
        diskSizeGb: 6392442863481646880,
        enableIpMasqAgent: false,
        ipAllocationPolicy: {
          clusterIpv4CidrBlock: "odio",
          clusterSecondaryRangeName: "dolore",
          servicesIpv4CidrBlock: "id",
          servicesSecondaryRangeName: "aspernatur",
          useIpAliases: true,
        },
        location: "totam",
        machineType: "commodi",
        network: "quis",
        oauthScopes: [
          "aut",
          "odit",
        ],
        serviceAccount: "non",
        subnetwork: "voluptas",
        tags: [
          "aut",
          "illo",
        ],
      },
      nodeCount: 5558237345453186302,
      privateEnvironmentConfig: {
        cloudComposerConnectionSubnetwork: "officiis",
        cloudComposerNetworkIpv4CidrBlock: "autem",
        cloudSqlIpv4CidrBlock: "consectetur",
        enablePrivateEnvironment: false,
        enablePrivatelyUsedPublicIps: false,
        networkingConfig: {
          connectionType: "CONNECTION_TYPE_UNSPECIFIED",
        },
        privateClusterConfig: {
          enablePrivateEndpoint: true,
          masterIpv4CidrBlock: "at",
        },
        webServerIpv4CidrBlock: "ipsum",
      },
      recoveryConfig: {
        scheduledSnapshotsConfig: {
          enabled: true,
          snapshotCreationSchedule: "modi",
          snapshotLocation: "sint",
          timeZone: "inventore",
        },
      },
      softwareConfig: {
        airflowConfigOverrides: {
          "exercitationem": "aut",
          "reprehenderit": "tempore",
          "maiores": "incidunt",
        },
        envVariables: {
          "beatae": "veritatis",
          "in": "et",
        },
        imageVersion: "omnis",
        pypiPackages: {
          "ex": "dolores",
        },
        pythonVersion: "placeat",
        schedulerCount: 2118716725206170867,
      },
      webServerConfig: {
        machineType: "rerum",
      },
      webServerNetworkAccessControl: {
        allowedIpRanges: [
          {
            description: "voluptas",
            value: "quam",
          },
          {
            description: "reprehenderit",
            value: "qui",
          },
        ],
      },
      workloadsConfig: {
        scheduler: {
          count: 8056746523676181822,
          cpu: 72.199997,
          memoryGb: 72.199997,
          storageGb: 22.100000,
        },
        webServer: {
          cpu: 12.100000,
          memoryGb: 76.099998,
          storageGb: 40.099998,
        },
        worker: {
          cpu: 28.100000,
          maxCount: 3604381780091280195,
          memoryGb: 20.100000,
          minCount: 759605945513541974,
          storageGb: 31.200001,
        },
      },
    },
    createTime: "et",
    labels: {
      "qui": "earum",
      "illo": "omnis",
      "ut": "consequatur",
    },
    name: "dolor",
    state: "DELETING",
    updateTime: "error",
    uuid: "reprehenderit",
  },
};

sdk.projects.composerProjectsLocationsEnvironmentsCreate(req).then((res: ComposerProjectsLocationsEnvironmentsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `composerProjectsLocationsEnvironmentsCreate` - Create a new environment.
* `composerProjectsLocationsEnvironmentsList` - List environments.
* `composerProjectsLocationsEnvironmentsLoadSnapshot` - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* `composerProjectsLocationsEnvironmentsPatch` - Update an environment.
* `composerProjectsLocationsEnvironmentsSaveSnapshot` - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* `composerProjectsLocationsImageVersionsList` - List ImageVersions for provided location.
* `composerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `composerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `composerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
