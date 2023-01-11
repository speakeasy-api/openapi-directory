<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BatchProjectsLocationsJobsCreateRequest, BatchProjectsLocationsJobsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BatchProjectsLocationsJobsCreateRequest = {
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
    jobId: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    requestId: "rerum",
    uploadType: "dicta",
    uploadProtocol: "debitis",
  },
  request: {
    allocationPolicy: {
      instances: [
        {
          installGpuDrivers: false,
          instanceTemplate: "ut",
          policy: {
            accelerators: [
              {
                count: "et",
                installGpuDrivers: false,
                type: "iste",
              },
              {
                count: "vitae",
                installGpuDrivers: true,
                type: "dolores",
              },
              {
                count: "illum",
                installGpuDrivers: true,
                type: "vel",
              },
            ],
            disks: [
              {
                deviceName: "dolore",
                existingDisk: "id",
                newDisk: {
                  diskInterface: "aspernatur",
                  image: "accusantium",
                  sizeGb: "totam",
                  snapshot: "commodi",
                  type: "quis",
                },
              },
            ],
            machineType: "est",
            minCpuPlatform: "aut",
            provisioningModel: "SPOT",
          },
        },
      ],
      labels: {
        "voluptas": "omnis",
        "aut": "illo",
        "sed": "officiis",
      },
      location: {
        allowedLocations: [
          "consectetur",
          "nobis",
        ],
      },
      network: {
        networkInterfaces: [
          {
            network: "qui",
            noExternalIpAddress: true,
            subnetwork: "at",
          },
        ],
      },
      serviceAccount: {
        email: "ipsum",
      },
    },
    labels: {
      "modi": "sint",
      "inventore": "ut",
    },
    logsPolicy: {
      destination: "PATH",
      logsPath: "aut",
    },
    notifications: [
      {
        message: {
          newJobState: "FAILED",
          newTaskState: "RUNNING",
          type: "TASK_STATE_CHANGED",
        },
        pubsubTopic: "dolor",
      },
    ],
    priority: "beatae",
    status: {
      runDuration: "veritatis",
      state: "FAILED",
      statusEvents: [
        {
          description: "omnis",
          eventTime: "ipsum",
          taskExecution: {
            exitCode: 1198006251912892506,
          },
          type: "dolores",
        },
        {
          description: "placeat",
          eventTime: "vel",
          taskExecution: {
            exitCode: 2587000937929698613,
          },
          type: "mollitia",
        },
        {
          description: "voluptas",
          eventTime: "quam",
          taskExecution: {
            exitCode: 7481608503761597087,
          },
          type: "qui",
        },
      ],
      taskGroups: {
        "unde": {
          counts: {
            "autem": "qui",
            "ut": "itaque",
          },
          instances: [
            {
              machineType: "neque",
              provisioningModel: "PROVISIONING_MODEL_UNSPECIFIED",
              taskPack: "et",
            },
          ],
        },
      },
    },
    taskGroups: [
      {
        parallelism: "esse",
        permissiveSsh: true,
        requireHostsFile: false,
        taskCount: "velit",
        taskCountPerNode: "cumque",
        taskEnvironments: [
          {
            variables: {
              "voluptates": "magni",
              "et": "optio",
            },
          },
        ],
        taskSpec: {
          computeResource: {
            bootDiskMib: "qui",
            cpuMilli: "earum",
            memoryMib: "illo",
          },
          environment: {
            variables: {
              "ut": "consequatur",
              "dolor": "commodi",
            },
          },
          environments: {
            "reprehenderit": "consectetur",
          },
          lifecyclePolicies: [
            {
              action: "ACTION_UNSPECIFIED",
              actionCondition: {
                exitCodes: [
                  1937101031588528881,
                  6604365855503062775,
                  1836598054518427835,
                ],
              },
            },
          ],
          maxRetryCount: 7540276489530073149,
          maxRunDuration: "quas",
          runnables: [
            {
              alwaysRun: false,
              background: true,
              barrier: {
                name: "ipsa",
              },
              container: {
                blockExternalNetwork: false,
                commands: [
                  "perferendis",
                ],
                entrypoint: "atque",
                imageUri: "ratione",
                options: "quisquam",
                password: "explicabo",
                username: "ea",
                volumes: [
                  "eum",
                ],
              },
              environment: {
                variables: {
                  "et": "rerum",
                  "reiciendis": "quis",
                },
              },
              ignoreExitStatus: true,
              script: {
                path: "minima",
                text: "necessitatibus",
              },
              timeout: "est",
            },
            {
              alwaysRun: true,
              background: true,
              barrier: {
                name: "labore",
              },
              container: {
                blockExternalNetwork: false,
                commands: [
                  "ad",
                  "expedita",
                ],
                entrypoint: "vel",
                imageUri: "qui",
                options: "modi",
                password: "nihil",
                username: "tempora",
                volumes: [
                  "eaque",
                ],
              },
              environment: {
                variables: {
                  "sit": "autem",
                  "quis": "vel",
                },
              },
              ignoreExitStatus: false,
              script: {
                path: "placeat",
                text: "qui",
              },
              timeout: "nisi",
            },
            {
              alwaysRun: true,
              background: false,
              barrier: {
                name: "porro",
              },
              container: {
                blockExternalNetwork: true,
                commands: [
                  "accusamus",
                ],
                entrypoint: "numquam",
                imageUri: "laborum",
                options: "rerum",
                password: "ut",
                username: "laborum",
                volumes: [
                  "quis",
                ],
              },
              environment: {
                variables: {
                  "soluta": "aperiam",
                  "consequuntur": "excepturi",
                },
              },
              ignoreExitStatus: true,
              script: {
                path: "inventore",
                text: "delectus",
              },
              timeout: "ipsa",
            },
          ],
          volumes: [
            {
              deviceName: "animi",
              gcs: {
                remotePath: "ut",
              },
              mountOptions: [
                "fuga",
              ],
              mountPath: "sed",
              nfs: {
                remotePath: "sed",
                server: "et",
              },
            },
            {
              deviceName: "consequuntur",
              gcs: {
                remotePath: "non",
              },
              mountOptions: [
                "provident",
                "molestiae",
                "pariatur",
              ],
              mountPath: "quasi",
              nfs: {
                remotePath: "corrupti",
                server: "enim",
              },
            },
          ],
        },
      },
      {
        parallelism: "qui",
        permissiveSsh: true,
        requireHostsFile: false,
        taskCount: "modi",
        taskCountPerNode: "neque",
        taskEnvironments: [
          {
            variables: {
              "et": "est",
            },
          },
          {
            variables: {
              "ex": "voluptatem",
            },
          },
          {
            variables: {
              "temporibus": "velit",
              "quae": "est",
              "ut": "necessitatibus",
            },
          },
        ],
        taskSpec: {
          computeResource: {
            bootDiskMib: "in",
            cpuMilli: "possimus",
            memoryMib: "voluptatem",
          },
          environment: {
            variables: {
              "doloribus": "saepe",
            },
          },
          environments: {
            "earum": "et",
            "ut": "asperiores",
          },
          lifecyclePolicies: [
            {
              action: "ACTION_UNSPECIFIED",
              actionCondition: {
                exitCodes: [
                  6787227741588449494,
                ],
              },
            },
          ],
          maxRetryCount: 4883506937319508494,
          maxRunDuration: "nihil",
          runnables: [
            {
              alwaysRun: false,
              background: true,
              barrier: {
                name: "non",
              },
              container: {
                blockExternalNetwork: false,
                commands: [
                  "possimus",
                  "illo",
                  "qui",
                ],
                entrypoint: "quia",
                imageUri: "ipsam",
                options: "ducimus",
                password: "enim",
                username: "blanditiis",
                volumes: [
                  "delectus",
                ],
              },
              environment: {
                variables: {
                  "dolore": "repellat",
                  "velit": "officia",
                },
              },
              ignoreExitStatus: true,
              script: {
                path: "sunt",
                text: "voluptas",
              },
              timeout: "amet",
            },
          ],
          volumes: [
            {
              deviceName: "a",
              gcs: {
                remotePath: "qui",
              },
              mountOptions: [
                "autem",
              ],
              mountPath: "corporis",
              nfs: {
                remotePath: "dicta",
                server: "rem",
              },
            },
            {
              deviceName: "doloremque",
              gcs: {
                remotePath: "quae",
              },
              mountOptions: [
                "recusandae",
                "qui",
              ],
              mountPath: "minus",
              nfs: {
                remotePath: "et",
                server: "rerum",
              },
            },
            {
              deviceName: "ut",
              gcs: {
                remotePath: "rem",
              },
              mountOptions: [
                "et",
                "reiciendis",
                "aspernatur",
              ],
              mountPath: "praesentium",
              nfs: {
                remotePath: "porro",
                server: "nihil",
              },
            },
          ],
        },
      },
      {
        parallelism: "adipisci",
        permissiveSsh: false,
        requireHostsFile: false,
        taskCount: "accusantium",
        taskCountPerNode: "atque",
        taskEnvironments: [
          {
            variables: {
              "quidem": "est",
              "quo": "vero",
            },
          },
          {
            variables: {
              "totam": "deserunt",
            },
          },
          {
            variables: {
              "repellat": "beatae",
              "omnis": "totam",
            },
          },
        ],
        taskSpec: {
          computeResource: {
            bootDiskMib: "aut",
            cpuMilli: "et",
            memoryMib: "magni",
          },
          environment: {
            variables: {
              "et": "culpa",
              "repellendus": "voluptas",
            },
          },
          environments: {
            "veniam": "architecto",
            "molestias": "rerum",
          },
          lifecyclePolicies: [
            {
              action: "ACTION_UNSPECIFIED",
              actionCondition: {
                exitCodes: [
                  1215184329252422444,
                  4178331056796501958,
                  8590975497400104807,
                ],
              },
            },
            {
              action: "ACTION_UNSPECIFIED",
              actionCondition: {
                exitCodes: [
                  5127216006209335150,
                ],
              },
            },
            {
              action: "ACTION_UNSPECIFIED",
              actionCondition: {
                exitCodes: [
                  5850174490929081658,
                  434570727381690637,
                  2506834319279501248,
                ],
              },
            },
          ],
          maxRetryCount: 8019821597217977465,
          maxRunDuration: "et",
          runnables: [
            {
              alwaysRun: true,
              background: true,
              barrier: {
                name: "ipsum",
              },
              container: {
                blockExternalNetwork: false,
                commands: [
                  "et",
                  "vero",
                ],
                entrypoint: "voluptatem",
                imageUri: "ex",
                options: "magni",
                password: "vero",
                username: "distinctio",
                volumes: [
                  "ea",
                  "non",
                ],
              },
              environment: {
                variables: {
                  "nam": "beatae",
                  "quae": "qui",
                  "magni": "minus",
                },
              },
              ignoreExitStatus: true,
              script: {
                path: "aut",
                text: "neque",
              },
              timeout: "iusto",
            },
            {
              alwaysRun: false,
              background: false,
              barrier: {
                name: "debitis",
              },
              container: {
                blockExternalNetwork: true,
                commands: [
                  "enim",
                  "ut",
                ],
                entrypoint: "non",
                imageUri: "nihil",
                options: "laborum",
                password: "recusandae",
                username: "nihil",
                volumes: [
                  "iste",
                  "perferendis",
                  "id",
                ],
              },
              environment: {
                variables: {
                  "hic": "voluptatem",
                },
              },
              ignoreExitStatus: false,
              script: {
                path: "libero",
                text: "qui",
              },
              timeout: "omnis",
            },
          ],
          volumes: [
            {
              deviceName: "nostrum",
              gcs: {
                remotePath: "non",
              },
              mountOptions: [
                "repellat",
                "quo",
              ],
              mountPath: "dolorum",
              nfs: {
                remotePath: "laboriosam",
                server: "velit",
              },
            },
            {
              deviceName: "ea",
              gcs: {
                remotePath: "tempore",
              },
              mountOptions: [
                "aut",
              ],
              mountPath: "tempora",
              nfs: {
                remotePath: "aliquid",
                server: "mollitia",
              },
            },
          ],
        },
      },
    ],
  },
};

sdk.projects.batchProjectsLocationsJobsCreate(req).then((res: BatchProjectsLocationsJobsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->