# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/run/v1alpha1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/run/v1alpha1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  RunNamespacesJobsCreateRequest,
  RunNamespacesJobsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RunNamespacesJobsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  job: {
    apiVersion: "provident",
    kind: "distinctio",
    metadata: {
      annotations: {
        "unde": "nulla",
        "corrupti": "illum",
        "vel": "error",
        "deserunt": "suscipit",
      },
      clusterName: "iure",
      creationTimestamp: "magnam",
      deletionGracePeriodSeconds: 891773,
      deletionTimestamp: "ipsa",
      finalizers: [
        "tempora",
        "suscipit",
        "molestiae",
        "minus",
      ],
      generateName: "placeat",
      generation: 528895,
      labels: {
        "excepturi": "nisi",
        "recusandae": "temporibus",
      },
      name: "ab",
      namespace: "quis",
      ownerReferences: [
        {
          apiVersion: "deserunt",
          blockOwnerDeletion: false,
          controller: false,
          kind: "perferendis",
          name: "ipsam",
          uid: "repellendus",
        },
      ],
      resourceVersion: "sapiente",
      selfLink: "quo",
      uid: "odit",
    },
    spec: {
      activeDeadlineSeconds: "at",
      backoffLimit: 870088,
      completions: 978619,
      parallelism: 473608,
      template: {
        spec: {
          activeDeadlineSeconds: "quod",
          containers: [
            {
              args: [
                "totam",
                "porro",
              ],
              command: [
                "dicta",
                "nam",
                "officia",
              ],
              env: [
                {
                  name: "fugit",
                  value: "deleniti",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "hic",
                      localObjectReference: {
                        name: "optio",
                      },
                      name: "totam",
                      optional: false,
                    },
                    secretKeyRef: {
                      key: "beatae",
                      localObjectReference: {
                        name: "commodi",
                      },
                      name: "molestiae",
                      optional: false,
                    },
                  },
                },
                {
                  name: "modi",
                  value: "qui",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "impedit",
                      localObjectReference: {
                        name: "cum",
                      },
                      name: "esse",
                      optional: false,
                    },
                    secretKeyRef: {
                      key: "ipsum",
                      localObjectReference: {
                        name: "excepturi",
                      },
                      name: "aspernatur",
                      optional: false,
                    },
                  },
                },
                {
                  name: "perferendis",
                  value: "ad",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "natus",
                      localObjectReference: {
                        name: "sed",
                      },
                      name: "iste",
                      optional: false,
                    },
                    secretKeyRef: {
                      key: "dolor",
                      localObjectReference: {
                        name: "natus",
                      },
                      name: "laboriosam",
                      optional: false,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    localObjectReference: {
                      name: "saepe",
                    },
                    name: "fuga",
                    optional: false,
                  },
                  prefix: "in",
                  secretRef: {
                    localObjectReference: {
                      name: "corporis",
                    },
                    name: "iste",
                    optional: false,
                  },
                },
                {
                  configMapRef: {
                    localObjectReference: {
                      name: "iure",
                    },
                    name: "saepe",
                    optional: false,
                  },
                  prefix: "quidem",
                  secretRef: {
                    localObjectReference: {
                      name: "architecto",
                    },
                    name: "ipsa",
                    optional: false,
                  },
                },
                {
                  configMapRef: {
                    localObjectReference: {
                      name: "reiciendis",
                    },
                    name: "est",
                    optional: false,
                  },
                  prefix: "mollitia",
                  secretRef: {
                    localObjectReference: {
                      name: "laborum",
                    },
                    name: "dolores",
                    optional: false,
                  },
                },
                {
                  configMapRef: {
                    localObjectReference: {
                      name: "dolorem",
                    },
                    name: "corporis",
                    optional: false,
                  },
                  prefix: "explicabo",
                  secretRef: {
                    localObjectReference: {
                      name: "nobis",
                    },
                    name: "enim",
                    optional: false,
                  },
                },
              ],
              image: "omnis",
              imagePullPolicy: "nemo",
              livenessProbe: {
                exec: {
                  command: [
                    "excepturi",
                    "accusantium",
                  ],
                },
                failureThreshold: 438601,
                grpc: {
                  port: 634274,
                  service: "doloribus",
                },
                httpGet: {
                  host: "sapiente",
                  httpHeaders: [
                    {
                      name: "mollitia",
                      value: "dolorem",
                    },
                  ],
                  path: "culpa",
                  scheme: "consequuntur",
                },
                initialDelaySeconds: 995300,
                periodSeconds: 653108,
                successThreshold: 581850,
                tcpSocket: {
                  host: "numquam",
                  port: 414369,
                },
                timeoutSeconds: 466311,
              },
              name: "molestiae",
              ports: [
                {
                  containerPort: 623510,
                  name: "quia",
                  protocol: "quis",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "laborum",
                  ],
                },
                failureThreshold: 656330,
                grpc: {
                  port: 317202,
                  service: "odit",
                },
                httpGet: {
                  host: "quo",
                  httpHeaders: [
                    {
                      name: "tenetur",
                      value: "ipsam",
                    },
                  ],
                  path: "id",
                  scheme: "possimus",
                },
                initialDelaySeconds: 13571,
                periodSeconds: 97101,
                successThreshold: 622846,
                tcpSocket: {
                  host: "temporibus",
                  port: 673660,
                },
                timeoutSeconds: 96098,
              },
              resources: {
                limits: {
                  "voluptatibus": "vero",
                  "nihil": "praesentium",
                  "voluptatibus": "ipsa",
                  "omnis": "voluptate",
                },
                requests: {
                  "perferendis": "doloremque",
                  "reprehenderit": "ut",
                  "maiores": "dicta",
                },
              },
              securityContext: {
                runAsUser: 359444,
              },
              startupProbe: {
                exec: {
                  command: [
                    "iusto",
                    "dicta",
                  ],
                },
                failureThreshold: 688661,
                grpc: {
                  port: 317983,
                  service: "accusamus",
                },
                httpGet: {
                  host: "commodi",
                  httpHeaders: [
                    {
                      name: "quae",
                      value: "ipsum",
                    },
                    {
                      name: "quidem",
                      value: "molestias",
                    },
                    {
                      name: "excepturi",
                      value: "pariatur",
                    },
                    {
                      name: "modi",
                      value: "praesentium",
                    },
                  ],
                  path: "rem",
                  scheme: "voluptates",
                },
                initialDelaySeconds: 93940,
                periodSeconds: 921158,
                successThreshold: 575947,
                tcpSocket: {
                  host: "veritatis",
                  port: 929297,
                },
                timeoutSeconds: 277718,
              },
              terminationMessagePath: "enim",
              terminationMessagePolicy: "consequatur",
              volumeMounts: [
                {
                  mountPath: "quibusdam",
                  name: "explicabo",
                  readOnly: false,
                  subPath: "deserunt",
                },
                {
                  mountPath: "distinctio",
                  name: "quibusdam",
                  readOnly: false,
                  subPath: "labore",
                },
                {
                  mountPath: "modi",
                  name: "qui",
                  readOnly: false,
                  subPath: "aliquid",
                },
              ],
              workingDir: "cupiditate",
            },
            {
              args: [
                "perferendis",
                "magni",
                "assumenda",
              ],
              command: [
                "alias",
                "fugit",
              ],
              env: [
                {
                  name: "excepturi",
                  value: "tempora",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "facilis",
                      localObjectReference: {
                        name: "tempore",
                      },
                      name: "labore",
                      optional: false,
                    },
                    secretKeyRef: {
                      key: "delectus",
                      localObjectReference: {
                        name: "eum",
                      },
                      name: "non",
                      optional: false,
                    },
                  },
                },
                {
                  name: "eligendi",
                  value: "sint",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "aliquid",
                      localObjectReference: {
                        name: "provident",
                      },
                      name: "necessitatibus",
                      optional: false,
                    },
                    secretKeyRef: {
                      key: "sint",
                      localObjectReference: {
                        name: "officia",
                      },
                      name: "dolor",
                      optional: false,
                    },
                  },
                },
                {
                  name: "debitis",
                  value: "a",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "dolorum",
                      localObjectReference: {
                        name: "in",
                      },
                      name: "in",
                      optional: false,
                    },
                    secretKeyRef: {
                      key: "illum",
                      localObjectReference: {
                        name: "maiores",
                      },
                      name: "rerum",
                      optional: false,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    localObjectReference: {
                      name: "magnam",
                    },
                    name: "cumque",
                    optional: false,
                  },
                  prefix: "facere",
                  secretRef: {
                    localObjectReference: {
                      name: "ea",
                    },
                    name: "aliquid",
                    optional: false,
                  },
                },
              ],
              image: "laborum",
              imagePullPolicy: "accusamus",
              livenessProbe: {
                exec: {
                  command: [
                    "occaecati",
                  ],
                },
                failureThreshold: 313218,
                grpc: {
                  port: 881736,
                  service: "delectus",
                },
                httpGet: {
                  host: "quidem",
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
                  scheme: "nisi",
                },
                initialDelaySeconds: 423855,
                periodSeconds: 618809,
                successThreshold: 606393,
                tcpSocket: {
                  host: "molestiae",
                  port: 19193,
                },
                timeoutSeconds: 470132,
              },
              name: "magnam",
              ports: [
                {
                  containerPort: 660174,
                  name: "labore",
                  protocol: "labore",
                },
                {
                  containerPort: 383462,
                  name: "natus",
                  protocol: "nobis",
                },
                {
                  containerPort: 428769,
                  name: "vero",
                  protocol: "aspernatur",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "magnam",
                  ],
                },
                failureThreshold: 92373,
                grpc: {
                  port: 569965,
                  service: "ullam",
                },
                httpGet: {
                  host: "provident",
                  httpHeaders: [
                    {
                      name: "sint",
                      value: "accusantium",
                    },
                    {
                      name: "mollitia",
                      value: "reiciendis",
                    },
                    {
                      name: "mollitia",
                      value: "ad",
                    },
                  ],
                  path: "eum",
                  scheme: "dolor",
                },
                initialDelaySeconds: 896547,
                periodSeconds: 141264,
                successThreshold: 367562,
                tcpSocket: {
                  host: "quasi",
                  port: 435865,
                },
                timeoutSeconds: 984043,
              },
              resources: {
                limits: {
                  "eius": "maxime",
                  "deleniti": "facilis",
                  "in": "architecto",
                  "architecto": "repudiandae",
                },
                requests: {
                  "expedita": "nihil",
                  "repellat": "quibusdam",
                },
              },
              securityContext: {
                runAsUser: 149448,
              },
              startupProbe: {
                exec: {
                  command: [
                    "pariatur",
                    "accusantium",
                    "consequuntur",
                    "praesentium",
                  ],
                },
                failureThreshold: 615560,
                grpc: {
                  port: 166847,
                  service: "sunt",
                },
                httpGet: {
                  host: "quo",
                  httpHeaders: [
                    {
                      name: "pariatur",
                      value: "maxime",
                    },
                    {
                      name: "ea",
                      value: "excepturi",
                    },
                    {
                      name: "odit",
                      value: "ea",
                    },
                    {
                      name: "accusantium",
                      value: "ab",
                    },
                  ],
                  path: "maiores",
                  scheme: "quidem",
                },
                initialDelaySeconds: 373291,
                periodSeconds: 453543,
                successThreshold: 420075,
                tcpSocket: {
                  host: "nam",
                  port: 50588,
                },
                timeoutSeconds: 866383,
              },
              terminationMessagePath: "nemo",
              terminationMessagePolicy: "voluptatibus",
              volumeMounts: [
                {
                  mountPath: "fugiat",
                  name: "amet",
                  readOnly: false,
                  subPath: "aut",
                },
              ],
              workingDir: "cumque",
            },
            {
              args: [
                "hic",
                "libero",
              ],
              command: [
                "dolores",
                "quis",
                "totam",
              ],
              env: [
                {
                  name: "eaque",
                  value: "quis",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "nesciunt",
                      localObjectReference: {
                        name: "eos",
                      },
                      name: "perferendis",
                      optional: false,
                    },
                    secretKeyRef: {
                      key: "dolores",
                      localObjectReference: {
                        name: "minus",
                      },
                      name: "quam",
                      optional: false,
                    },
                  },
                },
                {
                  name: "dolor",
                  value: "vero",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "nostrum",
                      localObjectReference: {
                        name: "hic",
                      },
                      name: "recusandae",
                      optional: false,
                    },
                    secretKeyRef: {
                      key: "omnis",
                      localObjectReference: {
                        name: "facilis",
                      },
                      name: "perspiciatis",
                      optional: false,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    localObjectReference: {
                      name: "porro",
                    },
                    name: "consequuntur",
                    optional: false,
                  },
                  prefix: "blanditiis",
                  secretRef: {
                    localObjectReference: {
                      name: "error",
                    },
                    name: "eaque",
                    optional: false,
                  },
                },
              ],
              image: "occaecati",
              imagePullPolicy: "rerum",
              livenessProbe: {
                exec: {
                  command: [
                    "asperiores",
                  ],
                },
                failureThreshold: 934214,
                grpc: {
                  port: 267262,
                  service: "iste",
                },
                httpGet: {
                  host: "dolorum",
                  httpHeaders: [
                    {
                      name: "pariatur",
                      value: "provident",
                    },
                    {
                      name: "nobis",
                      value: "libero",
                    },
                    {
                      name: "delectus",
                      value: "quaerat",
                    },
                  ],
                  path: "quos",
                  scheme: "aliquid",
                },
                initialDelaySeconds: 212390,
                periodSeconds: 209843,
                successThreshold: 222443,
                tcpSocket: {
                  host: "qui",
                  port: 218749,
                },
                timeoutSeconds: 944373,
              },
              name: "excepturi",
              ports: [
                {
                  containerPort: 452109,
                  name: "dignissimos",
                  protocol: "reiciendis",
                },
                {
                  containerPort: 227414,
                  name: "dolorum",
                  protocol: "numquam",
                },
                {
                  containerPort: 85295,
                  name: "ipsa",
                  protocol: "ipsa",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "odio",
                    "quaerat",
                  ],
                },
                failureThreshold: 881005,
                grpc: {
                  port: 696344,
                  service: "voluptatibus",
                },
                httpGet: {
                  host: "voluptas",
                  httpHeaders: [
                    {
                      name: "eos",
                      value: "atque",
                    },
                    {
                      name: "sit",
                      value: "fugiat",
                    },
                    {
                      name: "ab",
                      value: "soluta",
                    },
                  ],
                  path: "dolorum",
                  scheme: "iusto",
                },
                initialDelaySeconds: 453697,
                periodSeconds: 677082,
                successThreshold: 536579,
                tcpSocket: {
                  host: "omnis",
                  port: 896672,
                },
                timeoutSeconds: 714697,
              },
              resources: {
                limits: {
                  "nihil": "ipsum",
                  "voluptate": "id",
                  "saepe": "eius",
                  "aspernatur": "perferendis",
                },
                requests: {
                  "optio": "accusamus",
                },
              },
              securityContext: {
                runAsUser: 320017,
              },
              startupProbe: {
                exec: {
                  command: [
                    "suscipit",
                    "deserunt",
                    "provident",
                    "minima",
                  ],
                },
                failureThreshold: 831049,
                grpc: {
                  port: 519711,
                  service: "similique",
                },
                httpGet: {
                  host: "alias",
                  httpHeaders: [
                    {
                      name: "quaerat",
                      value: "tempora",
                    },
                    {
                      name: "vel",
                      value: "quod",
                    },
                    {
                      name: "officiis",
                      value: "qui",
                    },
                    {
                      name: "dolorum",
                      value: "a",
                    },
                  ],
                  path: "esse",
                  scheme: "harum",
                },
                initialDelaySeconds: 483409,
                periodSeconds: 215507,
                successThreshold: 788740,
                tcpSocket: {
                  host: "tenetur",
                  port: 229442,
                },
                timeoutSeconds: 730856,
              },
              terminationMessagePath: "accusamus",
              terminationMessagePolicy: "numquam",
              volumeMounts: [
                {
                  mountPath: "dolorem",
                  name: "sapiente",
                  readOnly: false,
                  subPath: "totam",
                },
                {
                  mountPath: "nihil",
                  name: "sit",
                  readOnly: false,
                  subPath: "expedita",
                },
              ],
              workingDir: "neque",
            },
            {
              args: [
                "vel",
              ],
              command: [
                "voluptas",
                "deserunt",
                "quam",
              ],
              env: [
                {
                  name: "incidunt",
                  value: "qui",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "cupiditate",
                      localObjectReference: {
                        name: "maxime",
                      },
                      name: "pariatur",
                      optional: false,
                    },
                    secretKeyRef: {
                      key: "soluta",
                      localObjectReference: {
                        name: "dicta",
                      },
                      name: "laborum",
                      optional: false,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    localObjectReference: {
                      name: "incidunt",
                    },
                    name: "aspernatur",
                    optional: false,
                  },
                  prefix: "dolores",
                  secretRef: {
                    localObjectReference: {
                      name: "distinctio",
                    },
                    name: "facilis",
                    optional: false,
                  },
                },
                {
                  configMapRef: {
                    localObjectReference: {
                      name: "aliquid",
                    },
                    name: "quam",
                    optional: false,
                  },
                  prefix: "molestias",
                  secretRef: {
                    localObjectReference: {
                      name: "temporibus",
                    },
                    name: "qui",
                    optional: false,
                  },
                },
                {
                  configMapRef: {
                    localObjectReference: {
                      name: "neque",
                    },
                    name: "fugit",
                    optional: false,
                  },
                  prefix: "magni",
                  secretRef: {
                    localObjectReference: {
                      name: "odio",
                    },
                    name: "sunt",
                    optional: false,
                  },
                },
              ],
              image: "ullam",
              imagePullPolicy: "nam",
              livenessProbe: {
                exec: {
                  command: [
                    "voluptatem",
                    "cumque",
                    "soluta",
                    "nobis",
                  ],
                },
                failureThreshold: 92596,
                grpc: {
                  port: 903720,
                  service: "ipsum",
                },
                httpGet: {
                  host: "veritatis",
                  httpHeaders: [
                    {
                      name: "quos",
                      value: "tempore",
                    },
                    {
                      name: "cupiditate",
                      value: "aperiam",
                    },
                    {
                      name: "delectus",
                      value: "dolorem",
                    },
                  ],
                  path: "dolore",
                  scheme: "labore",
                },
                initialDelaySeconds: 240829,
                periodSeconds: 677263,
                successThreshold: 100294,
                tcpSocket: {
                  host: "quae",
                  port: 16429,
                },
                timeoutSeconds: 555649,
              },
              name: "itaque",
              ports: [
                {
                  containerPort: 669917,
                  name: "repellendus",
                  protocol: "porro",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "ut",
                    "facilis",
                    "cupiditate",
                    "qui",
                  ],
                },
                failureThreshold: 63955,
                grpc: {
                  port: 512393,
                  service: "odio",
                },
                httpGet: {
                  host: "occaecati",
                  httpHeaders: [
                    {
                      name: "quisquam",
                      value: "vero",
                    },
                    {
                      name: "omnis",
                      value: "quis",
                    },
                    {
                      name: "ipsum",
                      value: "delectus",
                    },
                    {
                      name: "voluptate",
                      value: "consectetur",
                    },
                  ],
                  path: "vero",
                  scheme: "tenetur",
                },
                initialDelaySeconds: 492268,
                periodSeconds: 941378,
                successThreshold: 715561,
                tcpSocket: {
                  host: "quod",
                  port: 486160,
                },
                timeoutSeconds: 630448,
              },
              resources: {
                limits: {
                  "vero": "ducimus",
                  "dolore": "quibusdam",
                  "illum": "sequi",
                },
                requests: {
                  "impedit": "aut",
                  "voluptatibus": "exercitationem",
                  "nulla": "fugit",
                },
              },
              securityContext: {
                runAsUser: 780427,
              },
              startupProbe: {
                exec: {
                  command: [
                    "doloribus",
                    "iusto",
                    "eligendi",
                    "ducimus",
                  ],
                },
                failureThreshold: 4048,
                grpc: {
                  port: 639473,
                  service: "tempora",
                },
                httpGet: {
                  host: "ipsam",
                  httpHeaders: [
                    {
                      name: "aspernatur",
                      value: "vel",
                    },
                    {
                      name: "possimus",
                      value: "magnam",
                    },
                  ],
                  path: "ratione",
                  scheme: "ex",
                },
                initialDelaySeconds: 511319,
                periodSeconds: 120657,
                successThreshold: 224317,
                tcpSocket: {
                  host: "maiores",
                  port: 97844,
                },
                timeoutSeconds: 406120,
              },
              terminationMessagePath: "nulla",
              terminationMessagePolicy: "excepturi",
              volumeMounts: [
                {
                  mountPath: "nostrum",
                  name: "sapiente",
                  readOnly: false,
                  subPath: "quisquam",
                },
                {
                  mountPath: "saepe",
                  name: "ea",
                  readOnly: false,
                  subPath: "impedit",
                },
                {
                  mountPath: "corporis",
                  name: "veniam",
                  readOnly: false,
                  subPath: "aliquid",
                },
                {
                  mountPath: "inventore",
                  name: "magnam",
                  readOnly: false,
                  subPath: "ea",
                },
              ],
              workingDir: "quo",
            },
          ],
          restartPolicy: "consectetur",
          serviceAccountName: "recusandae",
          terminationGracePeriodSeconds: "aspernatur",
          volumes: [
            {
              configMap: {
                defaultMode: 53427,
                items: [
                  {
                    key: "libero",
                    mode: 13948,
                    path: "aut",
                  },
                  {
                    key: "deleniti",
                    mode: 770581,
                    path: "aliquam",
                  },
                  {
                    key: "fugit",
                    mode: 882860,
                    path: "inventore",
                  },
                  {
                    key: "non",
                    mode: 89603,
                    path: "dolorum",
                  },
                ],
                name: "laborum",
                optional: false,
              },
              name: "placeat",
              secret: {
                defaultMode: 245367,
                items: [
                  {
                    key: "autem",
                    mode: 752135,
                    path: "quas",
                  },
                  {
                    key: "assumenda",
                    mode: 860552,
                    path: "voluptas",
                  },
                ],
                optional: false,
                secretName: "libero",
              },
            },
            {
              configMap: {
                defaultMode: 96549,
                items: [
                  {
                    key: "numquam",
                    mode: 131482,
                    path: "provident",
                  },
                  {
                    key: "ipsa",
                    mode: 476477,
                    path: "magnam",
                  },
                ],
                name: "odio",
                optional: false,
              },
              name: "eius",
              secret: {
                defaultMode: 458515,
                items: [
                  {
                    key: "rem",
                    mode: 683282,
                    path: "reprehenderit",
                  },
                  {
                    key: "quidem",
                    mode: 852635,
                    path: "ut",
                  },
                ],
                optional: false,
                secretName: "eum",
              },
            },
          ],
        },
      },
      ttlSecondsAfterFinished: 379927,
    },
    status: {
      active: 826871,
      completionTime: "eos",
      conditions: [
        {
          lastTransitionTime: "quisquam",
          message: "veritatis",
          reason: "ipsa",
          severity: "id",
          status: "quidem",
          type: "neque",
        },
        {
          lastTransitionTime: "quo",
          message: "illum",
          reason: "quo",
          severity: "fuga",
          status: "eius",
          type: "eos",
        },
        {
          lastTransitionTime: "voluptas",
          message: "ab",
          reason: "cupiditate",
          severity: "consequatur",
          status: "tempora",
          type: "debitis",
        },
      ],
      failed: 370853,
      imageDigest: "aspernatur",
      instances: [
        {
          completionTime: "quo",
          failed: 459856,
          index: 925164,
          lastAttemptResult: {
            exitCode: 44612,
            status: {
              code: 715179,
              details: [
                {
                  "inventore": "nihil",
                  "totam": "accusamus",
                },
                {
                  "odio": "occaecati",
                  "commodi": "sapiente",
                },
                {
                  "deserunt": "molestiae",
                },
                {
                  "porro": "eum",
                },
              ],
              message: "quas",
            },
          },
          lastExitCode: 510017,
          restarted: 159867,
          startTime: "deleniti",
          succeeded: 143829,
        },
      ],
      observedGeneration: 681393,
      startTime: "mollitia",
      succeeded: 277596,
    },
  },
  accessToken: "atque",
  alt: AltEnum.Json,
  callback: "minima",
  fields: "nisi",
  key: "fugit",
  oauthToken: "sapiente",
  parent: "consequuntur",
  prettyPrint: false,
  quotaUser: "ratione",
  uploadType: "explicabo",
  uploadProtocol: "saepe",
};

sdk.namespaces.runNamespacesJobsCreate(req).then((res: RunNamespacesJobsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### namespaces

* `runNamespacesJobsCreate` - Create a job.
* `runNamespacesJobsDelete` - Delete a job.
* `runNamespacesJobsGet` - Get information about a job.
* `runNamespacesJobsList` - List jobs.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

