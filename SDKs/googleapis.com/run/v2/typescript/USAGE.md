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