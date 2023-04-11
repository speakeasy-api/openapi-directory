# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/batch/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/batch/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  BatchProjectsLocationsJobsCreateRequest,
  BatchProjectsLocationsJobsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  LifecyclePolicyActionEnum,
  JobStatusStateEnum,
  InstanceStatusProvisioningModelEnum,
  StatusEventTaskStateEnum,
  MessageNewJobStateEnum,
  MessageNewTaskStateEnum,
  MessageTypeEnum,
  LogsPolicyDestinationEnum,
  InstancePolicyProvisioningModelEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BatchProjectsLocationsJobsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  jobInput: {
    allocationPolicy: {
      instances: [
        {
          installGpuDrivers: false,
          instanceTemplate: "distinctio",
          policy: {
            accelerators: [
              {
                count: "unde",
                installGpuDrivers: false,
                type: "nulla",
              },
              {
                count: "corrupti",
                installGpuDrivers: false,
                type: "illum",
              },
              {
                count: "vel",
                installGpuDrivers: false,
                type: "error",
              },
              {
                count: "deserunt",
                installGpuDrivers: false,
                type: "suscipit",
              },
            ],
            bootDisk: {
              diskInterface: "iure",
              image: "magnam",
              sizeGb: "debitis",
              snapshot: "ipsa",
              type: "delectus",
            },
            disks: [
              {
                deviceName: "suscipit",
                existingDisk: "molestiae",
                newDisk: {
                  diskInterface: "minus",
                  image: "placeat",
                  sizeGb: "voluptatum",
                  snapshot: "iusto",
                  type: "excepturi",
                },
              },
              {
                deviceName: "nisi",
                existingDisk: "recusandae",
                newDisk: {
                  diskInterface: "temporibus",
                  image: "ab",
                  sizeGb: "quis",
                  snapshot: "veritatis",
                  type: "deserunt",
                },
              },
            ],
            machineType: "perferendis",
            minCpuPlatform: "ipsam",
            provisioningModel: InstancePolicyProvisioningModelEnum.Preemptible,
          },
        },
        {
          installGpuDrivers: false,
          instanceTemplate: "sapiente",
          policy: {
            accelerators: [
              {
                count: "odit",
                installGpuDrivers: false,
                type: "at",
              },
              {
                count: "at",
                installGpuDrivers: false,
                type: "maiores",
              },
              {
                count: "molestiae",
                installGpuDrivers: false,
                type: "quod",
              },
              {
                count: "quod",
                installGpuDrivers: false,
                type: "esse",
              },
            ],
            bootDisk: {
              diskInterface: "totam",
              image: "porro",
              sizeGb: "dolorum",
              snapshot: "dicta",
              type: "nam",
            },
            disks: [
              {
                deviceName: "occaecati",
                existingDisk: "fugit",
                newDisk: {
                  diskInterface: "deleniti",
                  image: "hic",
                  sizeGb: "optio",
                  snapshot: "totam",
                  type: "beatae",
                },
              },
              {
                deviceName: "commodi",
                existingDisk: "molestiae",
                newDisk: {
                  diskInterface: "modi",
                  image: "qui",
                  sizeGb: "impedit",
                  snapshot: "cum",
                  type: "esse",
                },
              },
              {
                deviceName: "ipsum",
                existingDisk: "excepturi",
                newDisk: {
                  diskInterface: "aspernatur",
                  image: "perferendis",
                  sizeGb: "ad",
                  snapshot: "natus",
                  type: "sed",
                },
              },
            ],
            machineType: "iste",
            minCpuPlatform: "dolor",
            provisioningModel: InstancePolicyProvisioningModelEnum.Spot,
          },
        },
        {
          installGpuDrivers: false,
          instanceTemplate: "laboriosam",
          policy: {
            accelerators: [
              {
                count: "saepe",
                installGpuDrivers: false,
                type: "fuga",
              },
              {
                count: "in",
                installGpuDrivers: false,
                type: "corporis",
              },
              {
                count: "iste",
                installGpuDrivers: false,
                type: "iure",
              },
              {
                count: "saepe",
                installGpuDrivers: false,
                type: "quidem",
              },
            ],
            bootDisk: {
              diskInterface: "architecto",
              image: "ipsa",
              sizeGb: "reiciendis",
              snapshot: "est",
              type: "mollitia",
            },
            disks: [
              {
                deviceName: "dolores",
                existingDisk: "dolorem",
                newDisk: {
                  diskInterface: "corporis",
                  image: "explicabo",
                  sizeGb: "nobis",
                  snapshot: "enim",
                  type: "omnis",
                },
              },
              {
                deviceName: "nemo",
                existingDisk: "minima",
                newDisk: {
                  diskInterface: "excepturi",
                  image: "accusantium",
                  sizeGb: "iure",
                  snapshot: "culpa",
                  type: "doloribus",
                },
              },
              {
                deviceName: "sapiente",
                existingDisk: "architecto",
                newDisk: {
                  diskInterface: "mollitia",
                  image: "dolorem",
                  sizeGb: "culpa",
                  snapshot: "consequuntur",
                  type: "repellat",
                },
              },
            ],
            machineType: "mollitia",
            minCpuPlatform: "occaecati",
            provisioningModel: InstancePolicyProvisioningModelEnum.Standard,
          },
        },
      ],
      labels: {
        "quam": "molestiae",
        "velit": "error",
      },
      location: {
        allowedLocations: [
          "quis",
        ],
      },
      network: {
        networkInterfaces: [
          {
            network: "laborum",
            noExternalIpAddress: false,
            subnetwork: "animi",
          },
        ],
      },
      serviceAccount: {
        email: "Britney94@gmail.com",
        scopes: [
          "id",
          "possimus",
        ],
      },
    },
    labels: {
      "quasi": "error",
    },
    logsPolicy: {
      destination: LogsPolicyDestinationEnum.Path,
      logsPath: "laborum",
    },
    notifications: [
      {
        message: {
          newJobState: MessageNewJobStateEnum.DeletionInProgress,
          newTaskState: MessageNewTaskStateEnum.Succeeded,
          type: MessageTypeEnum.TaskStateChanged,
        },
        pubsubTopic: "nihil",
      },
    ],
    priority: "praesentium",
    status: {
      runDuration: "voluptatibus",
      state: JobStatusStateEnum.StateUnspecified,
      statusEvents: [
        {
          description: "voluptate",
          eventTime: "cum",
          taskExecution: {
            exitCode: 19987,
          },
          taskState: StatusEventTaskStateEnum.StateUnspecified,
          type: "reprehenderit",
        },
        {
          description: "ut",
          eventTime: "maiores",
          taskExecution: {
            exitCode: 120196,
          },
          taskState: StatusEventTaskStateEnum.Assigned,
          type: "dolore",
        },
        {
          description: "iusto",
          eventTime: "dicta",
          taskExecution: {
            exitCode: 688661,
          },
          taskState: StatusEventTaskStateEnum.Pending,
          type: "accusamus",
        },
      ],
      taskGroups: {
        "repudiandae": {
          counts: {
            "ipsum": "quidem",
          },
          instances: [
            {
              bootDisk: {
                diskInterface: "excepturi",
                image: "pariatur",
                sizeGb: "modi",
                snapshot: "praesentium",
                type: "rem",
              },
              machineType: "voluptates",
              provisioningModel: InstanceStatusProvisioningModelEnum.ProvisioningModelUnspecified,
              taskPack: "repudiandae",
            },
            {
              bootDisk: {
                diskInterface: "sint",
                image: "veritatis",
                sizeGb: "itaque",
                snapshot: "incidunt",
                type: "enim",
              },
              machineType: "consequatur",
              provisioningModel: InstanceStatusProvisioningModelEnum.Spot,
              taskPack: "quibusdam",
            },
            {
              bootDisk: {
                diskInterface: "explicabo",
                image: "deserunt",
                sizeGb: "distinctio",
                snapshot: "quibusdam",
                type: "labore",
              },
              machineType: "modi",
              provisioningModel: InstanceStatusProvisioningModelEnum.ProvisioningModelUnspecified,
              taskPack: "aliquid",
            },
          ],
        },
        "cupiditate": {
          counts: {
            "perferendis": "magni",
            "assumenda": "ipsam",
            "alias": "fugit",
          },
          instances: [
            {
              bootDisk: {
                diskInterface: "excepturi",
                image: "tempora",
                sizeGb: "facilis",
                snapshot: "tempore",
                type: "labore",
              },
              machineType: "delectus",
              provisioningModel: InstanceStatusProvisioningModelEnum.Standard,
              taskPack: "non",
            },
            {
              bootDisk: {
                diskInterface: "eligendi",
                image: "sint",
                sizeGb: "aliquid",
                snapshot: "provident",
                type: "necessitatibus",
              },
              machineType: "sint",
              provisioningModel: InstanceStatusProvisioningModelEnum.Spot,
              taskPack: "dolor",
            },
            {
              bootDisk: {
                diskInterface: "debitis",
                image: "a",
                sizeGb: "dolorum",
                snapshot: "in",
                type: "in",
              },
              machineType: "illum",
              provisioningModel: InstanceStatusProvisioningModelEnum.Preemptible,
              taskPack: "rerum",
            },
          ],
        },
      },
    },
    taskGroups: [
      {
        parallelism: "magnam",
        permissiveSsh: false,
        requireHostsFile: false,
        taskCount: "cumque",
        taskCountPerNode: "facere",
        taskEnvironments: [
          {
            encryptedVariables: {
              cipherText: "aliquid",
              keyName: "laborum",
            },
            secretVariables: {
              "non": "occaecati",
              "enim": "accusamus",
              "delectus": "quidem",
              "provident": "nam",
            },
            variables: {
              "blanditiis": "deleniti",
              "sapiente": "amet",
              "deserunt": "nisi",
            },
          },
          {
            encryptedVariables: {
              cipherText: "vel",
              keyName: "natus",
            },
            secretVariables: {
              "molestiae": "perferendis",
              "nihil": "magnam",
              "distinctio": "id",
            },
            variables: {
              "labore": "suscipit",
              "natus": "nobis",
            },
          },
        ],
        taskSpec: {
          computeResource: {
            bootDiskMib: "eum",
            cpuMilli: "vero",
            memoryMib: "aspernatur",
          },
          environment: {
            encryptedVariables: {
              cipherText: "architecto",
              keyName: "magnam",
            },
            secretVariables: {
              "excepturi": "ullam",
            },
            variables: {
              "quos": "sint",
              "accusantium": "mollitia",
              "reiciendis": "mollitia",
            },
          },
          environments: {
            "eum": "dolor",
            "necessitatibus": "odit",
          },
          lifecyclePolicies: [
            {
              action: LifecyclePolicyActionEnum.ActionUnspecified,
              actionCondition: {
                exitCodes: [
                  984043,
                  891924,
                ],
              },
            },
            {
              action: LifecyclePolicyActionEnum.ActionUnspecified,
              actionCondition: {
                exitCodes: [
                  537023,
                  703889,
                  447926,
                  100226,
                ],
              },
            },
          ],
          maxRetryCount: 99569,
          maxRunDuration: "repudiandae",
          runnables: [
            {
              alwaysRun: false,
              background: false,
              barrier: {
                name: "expedita",
              },
              container: {
                blockExternalNetwork: false,
                commands: [
                  "repellat",
                  "quibusdam",
                ],
                entrypoint: "sed",
                imageUri: "saepe",
                options: "pariatur",
                password: "accusantium",
                username: "Carroll.Lang",
                volumes: [
                  "quo",
                ],
              },
              environment: {
                encryptedVariables: {
                  cipherText: "illum",
                  keyName: "pariatur",
                },
                secretVariables: {
                  "ea": "excepturi",
                  "odit": "ea",
                  "accusantium": "ab",
                  "maiores": "quidem",
                },
                variables: {
                  "voluptate": "autem",
                  "nam": "eaque",
                },
              },
              ignoreExitStatus: false,
              script: {
                path: "pariatur",
                text: "nemo",
              },
              timeout: "voluptatibus",
            },
            {
              alwaysRun: false,
              background: false,
              barrier: {
                name: "perferendis",
              },
              container: {
                blockExternalNetwork: false,
                commands: [
                  "amet",
                  "aut",
                  "cumque",
                  "corporis",
                ],
                entrypoint: "hic",
                imageUri: "libero",
                options: "nobis",
                password: "dolores",
                username: "Eulalia.Lebsack",
                volumes: [
                  "nesciunt",
                  "eos",
                ],
              },
              environment: {
                encryptedVariables: {
                  cipherText: "perferendis",
                  keyName: "dolores",
                },
                secretVariables: {
                  "quam": "dolor",
                  "vero": "nostrum",
                  "hic": "recusandae",
                  "omnis": "facilis",
                },
                variables: {
                  "voluptatem": "porro",
                  "consequuntur": "blanditiis",
                  "error": "eaque",
                },
              },
              ignoreExitStatus: false,
              script: {
                path: "occaecati",
                text: "rerum",
              },
              timeout: "adipisci",
            },
          ],
          volumes: [
            {
              deviceName: "earum",
              gcs: {
                remotePath: "modi",
              },
              mountOptions: [
                "dolorum",
                "deleniti",
                "pariatur",
              ],
              mountPath: "provident",
              nfs: {
                remotePath: "nobis",
                server: "libero",
              },
            },
            {
              deviceName: "delectus",
              gcs: {
                remotePath: "quaerat",
              },
              mountOptions: [
                "aliquid",
                "dolorem",
                "dolorem",
              ],
              mountPath: "dolor",
              nfs: {
                remotePath: "qui",
                server: "ipsum",
              },
            },
            {
              deviceName: "hic",
              gcs: {
                remotePath: "excepturi",
              },
              mountOptions: [
                "voluptate",
                "dignissimos",
                "reiciendis",
              ],
              mountPath: "amet",
              nfs: {
                remotePath: "dolorum",
                server: "numquam",
              },
            },
            {
              deviceName: "veritatis",
              gcs: {
                remotePath: "ipsa",
              },
              mountOptions: [
                "iure",
              ],
              mountPath: "odio",
              nfs: {
                remotePath: "quaerat",
                server: "accusamus",
              },
            },
          ],
        },
      },
    ],
  },
  accessToken: "quidem",
  alt: AltEnum.Proto,
  callback: "voluptas",
  fields: "natus",
  jobId: "eos",
  key: "atque",
  oauthToken: "sit",
  parent: "fugiat",
  prettyPrint: false,
  quotaUser: "ab",
  requestId: "soluta",
  uploadType: "dolorum",
  uploadProtocol: "iusto",
};

sdk.projects.batchProjectsLocationsJobsCreate(req).then((res: BatchProjectsLocationsJobsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `batchProjectsLocationsJobsCreate` - Create a Job.
* `batchProjectsLocationsJobsList` - List all Jobs for a project within a region.
* `batchProjectsLocationsJobsTaskGroupsTasksList` - List Tasks associated with a job.
* `batchProjectsLocationsList` - Lists information about the supported locations for this service.
* `batchProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `batchProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `batchProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `batchProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `batchProjectsLocationsStateReport` - Report agent's state, e.g. agent status and tasks information
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

