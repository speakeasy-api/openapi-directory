# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/run/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/run/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  RunProjectsLocationsJobsCreateRequest,
  RunProjectsLocationsJobsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudRunV2JobLaunchStageEnum,
  GoogleCloudRunV2ConditionExecutionReasonEnum,
  GoogleCloudRunV2ConditionReasonEnum,
  GoogleCloudRunV2ConditionRevisionReasonEnum,
  GoogleCloudRunV2ConditionSeverityEnum,
  GoogleCloudRunV2ConditionStateEnum,
  GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum,
  GoogleCloudRunV2VpcAccessEgressEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RunProjectsLocationsJobsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudRunV2JobInput: {
    annotations: {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
    binaryAuthorization: {
      breakglassJustification: "vel",
      useDefault: false,
    },
    client: "error",
    clientVersion: "deserunt",
    labels: {
      "iure": "magnam",
      "debitis": "ipsa",
    },
    latestCreatedExecution: {
      completionTime: "delectus",
      createTime: "tempora",
      name: "suscipit",
    },
    launchStage: GoogleCloudRunV2JobLaunchStageEnum.EarlyAccess,
    name: "minus",
    template: {
      annotations: {
        "voluptatum": "iusto",
        "excepturi": "nisi",
        "recusandae": "temporibus",
        "ab": "quis",
      },
      labels: {
        "deserunt": "perferendis",
      },
      parallelism: 368241,
      taskCount: 832620,
      template: {
        containers: [
          {
            args: [
              "odit",
              "at",
              "at",
              "maiores",
            ],
            command: [
              "quod",
              "quod",
            ],
            env: [
              {
                name: "totam",
                value: "porro",
                valueSource: {
                  secretKeyRef: {
                    secret: "dolorum",
                    version: "dicta",
                  },
                },
              },
              {
                name: "nam",
                value: "officia",
                valueSource: {
                  secretKeyRef: {
                    secret: "occaecati",
                    version: "fugit",
                  },
                },
              },
            ],
            image: "deleniti",
            livenessProbe: {
              failureThreshold: 944669,
              grpc: {
                port: 758616,
                service: "totam",
              },
              httpGet: {
                httpHeaders: [
                  {
                    name: "commodi",
                    value: "molestiae",
                  },
                ],
                path: "modi",
                port: 186332,
              },
              initialDelaySeconds: 774234,
              periodSeconds: 736918,
              tcpSocket: {
                port: 456150,
              },
              timeoutSeconds: 216550,
            },
            name: "excepturi",
            ports: [
              {
                containerPort: 18789,
                name: "ad",
              },
            ],
            resources: {
              cpuIdle: false,
              limits: {
                "sed": "iste",
                "dolor": "natus",
                "laboriosam": "hic",
              },
            },
            startupProbe: {
              failureThreshold: 902599,
              grpc: {
                port: 681820,
                service: "in",
              },
              httpGet: {
                httpHeaders: [
                  {
                    name: "iste",
                    value: "iure",
                  },
                  {
                    name: "saepe",
                    value: "quidem",
                  },
                ],
                path: "architecto",
                port: 60225,
              },
              initialDelaySeconds: 969810,
              periodSeconds: 666767,
              tcpSocket: {
                port: 653140,
              },
              timeoutSeconds: 670638,
            },
            volumeMounts: [
              {
                mountPath: "dolorem",
                name: "corporis",
              },
            ],
            workingDir: "explicabo",
          },
          {
            args: [
              "enim",
              "omnis",
              "nemo",
              "minima",
            ],
            command: [
              "accusantium",
              "iure",
              "culpa",
            ],
            env: [
              {
                name: "sapiente",
                value: "architecto",
                valueSource: {
                  secretKeyRef: {
                    secret: "mollitia",
                    version: "dolorem",
                  },
                },
              },
              {
                name: "culpa",
                value: "consequuntur",
                valueSource: {
                  secretKeyRef: {
                    secret: "repellat",
                    version: "mollitia",
                  },
                },
              },
              {
                name: "occaecati",
                value: "numquam",
                valueSource: {
                  secretKeyRef: {
                    secret: "commodi",
                    version: "quam",
                  },
                },
              },
              {
                name: "molestiae",
                value: "velit",
                valueSource: {
                  secretKeyRef: {
                    secret: "error",
                    version: "quia",
                  },
                },
              },
            ],
            image: "quis",
            livenessProbe: {
              failureThreshold: 110375,
              grpc: {
                port: 674752,
                service: "animi",
              },
              httpGet: {
                httpHeaders: [
                  {
                    name: "odit",
                    value: "quo",
                  },
                  {
                    name: "sequi",
                    value: "tenetur",
                  },
                ],
                path: "ipsam",
                port: 662527,
              },
              initialDelaySeconds: 820994,
              periodSeconds: 13571,
              tcpSocket: {
                port: 97101,
              },
              timeoutSeconds: 622846,
            },
            name: "temporibus",
            ports: [
              {
                containerPort: 96098,
                name: "reiciendis",
              },
              {
                containerPort: 976460,
                name: "vero",
              },
              {
                containerPort: 468651,
                name: "praesentium",
              },
            ],
            resources: {
              cpuIdle: false,
              limits: {
                "ipsa": "omnis",
                "voluptate": "cum",
                "perferendis": "doloremque",
                "reprehenderit": "ut",
              },
            },
            startupProbe: {
              failureThreshold: 979587,
              grpc: {
                port: 120196,
                service: "corporis",
              },
              httpGet: {
                httpHeaders: [
                  {
                    name: "iusto",
                    value: "dicta",
                  },
                  {
                    name: "harum",
                    value: "enim",
                  },
                ],
                path: "accusamus",
                port: 414263,
              },
              initialDelaySeconds: 918236,
              periodSeconds: 64147,
              tcpSocket: {
                port: 216822,
              },
              timeoutSeconds: 692472,
            },
            volumeMounts: [
              {
                mountPath: "excepturi",
                name: "pariatur",
              },
              {
                mountPath: "modi",
                name: "praesentium",
              },
              {
                mountPath: "rem",
                name: "voluptates",
              },
            ],
            workingDir: "quasi",
          },
          {
            args: [
              "sint",
              "veritatis",
              "itaque",
              "incidunt",
            ],
            command: [
              "consequatur",
              "est",
            ],
            env: [
              {
                name: "explicabo",
                value: "deserunt",
                valueSource: {
                  secretKeyRef: {
                    secret: "distinctio",
                    version: "quibusdam",
                  },
                },
              },
              {
                name: "labore",
                value: "modi",
                valueSource: {
                  secretKeyRef: {
                    secret: "qui",
                    version: "aliquid",
                  },
                },
              },
              {
                name: "cupiditate",
                value: "quos",
                valueSource: {
                  secretKeyRef: {
                    secret: "perferendis",
                    version: "magni",
                  },
                },
              },
              {
                name: "assumenda",
                value: "ipsam",
                valueSource: {
                  secretKeyRef: {
                    secret: "alias",
                    version: "fugit",
                  },
                },
              },
            ],
            image: "dolorum",
            livenessProbe: {
              failureThreshold: 569618,
              grpc: {
                port: 270008,
                service: "facilis",
              },
              httpGet: {
                httpHeaders: [
                  {
                    name: "labore",
                    value: "delectus",
                  },
                  {
                    name: "eum",
                    value: "non",
                  },
                  {
                    name: "eligendi",
                    value: "sint",
                  },
                ],
                path: "aliquid",
                port: 592042,
              },
              initialDelaySeconds: 896039,
              periodSeconds: 572252,
              tcpSocket: {
                port: 638921,
              },
              timeoutSeconds: 223081,
            },
            name: "debitis",
            ports: [
              {
                containerPort: 680056,
                name: "in",
              },
              {
                containerPort: 449198,
                name: "illum",
              },
              {
                containerPort: 978571,
                name: "rerum",
              },
              {
                containerPort: 116202,
                name: "magnam",
              },
            ],
            resources: {
              cpuIdle: false,
              limits: {
                "facere": "ea",
                "aliquid": "laborum",
                "accusamus": "non",
                "occaecati": "enim",
              },
            },
            startupProbe: {
              failureThreshold: 881736,
              grpc: {
                port: 965417,
                service: "quidem",
              },
              httpGet: {
                httpHeaders: [
                  {
                    name: "nam",
                    value: "id",
                  },
                  {
                    name: "blanditiis",
                    value: "deleniti",
                  },
                  {
                    name: "sapiente",
                    value: "amet",
                  },
                ],
                path: "deserunt",
                port: 394869,
              },
              initialDelaySeconds: 423855,
              periodSeconds: 618809,
              tcpSocket: {
                port: 606393,
              },
              timeoutSeconds: 474867,
            },
            volumeMounts: [
              {
                mountPath: "nihil",
                name: "magnam",
              },
            ],
            workingDir: "distinctio",
          },
          {
            args: [
              "labore",
              "labore",
              "suscipit",
            ],
            command: [
              "nobis",
              "eum",
              "vero",
            ],
            env: [
              {
                name: "architecto",
                value: "magnam",
                valueSource: {
                  secretKeyRef: {
                    secret: "et",
                    version: "excepturi",
                  },
                },
              },
            ],
            image: "ullam",
            livenessProbe: {
              failureThreshold: 590873,
              grpc: {
                port: 551816,
                service: "sint",
              },
              httpGet: {
                httpHeaders: [
                  {
                    name: "mollitia",
                    value: "reiciendis",
                  },
                ],
                path: "mollitia",
                port: 320997,
              },
              initialDelaySeconds: 431418,
              periodSeconds: 221262,
              tcpSocket: {
                port: 896547,
              },
              timeoutSeconds: 141264,
            },
            name: "nemo",
            ports: [
              {
                containerPort: 435865,
                name: "doloribus",
              },
            ],
            resources: {
              cpuIdle: false,
              limits: {
                "eius": "maxime",
                "deleniti": "facilis",
                "in": "architecto",
                "architecto": "repudiandae",
              },
            },
            startupProbe: {
              failureThreshold: 352312,
              grpc: {
                port: 714242,
                service: "nihil",
              },
              httpGet: {
                httpHeaders: [
                  {
                    name: "quibusdam",
                    value: "sed",
                  },
                  {
                    name: "saepe",
                    value: "pariatur",
                  },
                  {
                    name: "accusantium",
                    value: "consequuntur",
                  },
                  {
                    name: "praesentium",
                    value: "natus",
                  },
                ],
                path: "magni",
                port: 123820,
              },
              initialDelaySeconds: 779051,
              periodSeconds: 848009,
              tcpSocket: {
                port: 864934,
              },
              timeoutSeconds: 807319,
            },
            volumeMounts: [
              {
                mountPath: "excepturi",
                name: "odit",
              },
              {
                mountPath: "ea",
                name: "accusantium",
              },
            ],
            workingDir: "ab",
          },
        ],
        encryptionKey: "maiores",
        executionEnvironment: GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum.ExecutionEnvironmentGen2,
        maxRetries: 373291,
        serviceAccount: "voluptate",
        timeout: "autem",
        volumes: [
          {
            cloudSqlInstance: {
              instances: [
                "pariatur",
              ],
            },
            name: "nemo",
            secret: {
              defaultMode: 975522,
              items: [
                {
                  mode: 855804,
                  path: "amet",
                  version: "aut",
                },
              ],
              secret: "cumque",
            },
          },
          {
            cloudSqlInstance: {
              instances: [
                "hic",
                "libero",
              ],
            },
            name: "nobis",
            secret: {
              defaultMode: 171629,
              items: [
                {
                  mode: 521037,
                  path: "dignissimos",
                  version: "eaque",
                },
                {
                  mode: 338985,
                  path: "nesciunt",
                  version: "eos",
                },
              ],
              secret: "perferendis",
            },
          },
          {
            cloudSqlInstance: {
              instances: [
                "minus",
              ],
            },
            name: "quam",
            secret: {
              defaultMode: 223924,
              items: [
                {
                  mode: 345352,
                  path: "hic",
                  version: "recusandae",
                },
                {
                  mode: 608253,
                  path: "facilis",
                  version: "perspiciatis",
                },
                {
                  mode: 31838,
                  path: "porro",
                  version: "consequuntur",
                },
                {
                  mode: 500026,
                  path: "error",
                  version: "eaque",
                },
              ],
              secret: "occaecati",
            },
          },
        ],
        vpcAccess: {
          connector: "rerum",
          egress: GoogleCloudRunV2VpcAccessEgressEnum.VpcEgressUnspecified,
        },
      },
    },
    terminalCondition: {
      executionReason: GoogleCloudRunV2ConditionExecutionReasonEnum.Cancelling,
      lastTransitionTime: "earum",
      message: "modi",
      reason: GoogleCloudRunV2ConditionReasonEnum.EncryptionKeyCheckFailed,
      revisionReason: GoogleCloudRunV2ConditionRevisionReasonEnum.MinInstancesNotProvisioned,
      severity: GoogleCloudRunV2ConditionSeverityEnum.Warning,
      state: GoogleCloudRunV2ConditionStateEnum.ConditionSucceeded,
      type: "provident",
    },
  },
  accessToken: "nobis",
  alt: AltEnum.Proto,
  callback: "delectus",
  fields: "quaerat",
  jobId: "quos",
  key: "aliquid",
  oauthToken: "dolorem",
  parent: "dolorem",
  prettyPrint: false,
  quotaUser: "dolor",
  uploadType: "qui",
  uploadProtocol: "ipsum",
  validateOnly: false,
};

sdk.projects.runProjectsLocationsJobsCreate(req).then((res: RunProjectsLocationsJobsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `runProjectsLocationsJobsCreate` - Creates a Job.
* `runProjectsLocationsJobsExecutionsList` - Lists Executions from a Job.
* `runProjectsLocationsJobsExecutionsTasksList` - Lists Tasks from an Execution of a Job.
* `runProjectsLocationsJobsList` - Lists Jobs.
* `runProjectsLocationsJobsRun` - Triggers creation of a new Execution of this Job.
* `runProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `runProjectsLocationsOperationsWait` - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* `runProjectsLocationsServicesCreate` - Creates a new Service in a given project and location.
* `runProjectsLocationsServicesGetIamPolicy` - Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
* `runProjectsLocationsServicesList` - Lists Services.
* `runProjectsLocationsServicesPatch` - Updates a Service.
* `runProjectsLocationsServicesRevisionsDelete` - Deletes a Revision.
* `runProjectsLocationsServicesRevisionsGet` - Gets information about a Revision.
* `runProjectsLocationsServicesRevisionsList` - Lists Revisions from a given Service, or from a given location.
* `runProjectsLocationsServicesSetIamPolicy` - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* `runProjectsLocationsServicesTestIamPermissions` - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

