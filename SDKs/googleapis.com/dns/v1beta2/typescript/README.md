# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/dns/v1beta2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/dns/v1beta2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DnsChangesCreateRequest,
  DnsChangesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  ChangeStatusEnum,
  RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum,
  RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DnsChangesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  change: {
    additions: [
      {
        kind: "distinctio",
        name: "quibusdam",
        routingPolicy: {
          geo: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "corrupti",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "vel",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "deserunt",
                      port: "suscipit",
                      project: "iure",
                      region: "magnam",
                    },
                    {
                      ipAddress: "debitis",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "delectus",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "suscipit",
                      port: "molestiae",
                      project: "minus",
                      region: "placeat",
                    },
                    {
                      ipAddress: "voluptatum",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "excepturi",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "recusandae",
                      port: "temporibus",
                      project: "ab",
                      region: "quis",
                    },
                    {
                      ipAddress: "veritatis",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "perferendis",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "repellendus",
                      port: "sapiente",
                      project: "quo",
                      region: "odit",
                    },
                  ],
                },
                kind: "at",
                location: "at",
                rrdatas: [
                  "molestiae",
                  "quod",
                  "quod",
                  "esse",
                ],
                signatureRrdatas: [
                  "porro",
                  "dolorum",
                  "dicta",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "officia",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "fugit",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "hic",
                      port: "optio",
                      project: "totam",
                      region: "beatae",
                    },
                    {
                      ipAddress: "commodi",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "modi",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "impedit",
                      port: "cum",
                      project: "esse",
                      region: "ipsum",
                    },
                    {
                      ipAddress: "excepturi",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "perferendis",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "natus",
                      port: "sed",
                      project: "iste",
                      region: "dolor",
                    },
                  ],
                },
                kind: "natus",
                location: "laboriosam",
                rrdatas: [
                  "saepe",
                  "fuga",
                  "in",
                  "corporis",
                ],
                signatureRrdatas: [
                  "iure",
                  "saepe",
                  "quidem",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "ipsa",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "est",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "laborum",
                      port: "dolores",
                      project: "dolorem",
                      region: "corporis",
                    },
                  ],
                },
                kind: "explicabo",
                location: "nobis",
                rrdatas: [
                  "omnis",
                  "nemo",
                ],
                signatureRrdatas: [
                  "excepturi",
                  "accusantium",
                ],
              },
            ],
            kind: "iure",
          },
          geoPolicy: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "sapiente",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "mollitia",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "culpa",
                      port: "consequuntur",
                      project: "repellat",
                      region: "mollitia",
                    },
                    {
                      ipAddress: "occaecati",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "commodi",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "molestiae",
                      port: "velit",
                      project: "error",
                      region: "quia",
                    },
                    {
                      ipAddress: "quis",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "laborum",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "enim",
                      port: "odit",
                      project: "quo",
                      region: "sequi",
                    },
                    {
                      ipAddress: "tenetur",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "id",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "aut",
                      port: "quasi",
                      project: "error",
                      region: "temporibus",
                    },
                  ],
                },
                kind: "laborum",
                location: "quasi",
                rrdatas: [
                  "voluptatibus",
                  "vero",
                  "nihil",
                  "praesentium",
                ],
                signatureRrdatas: [
                  "ipsa",
                  "omnis",
                  "voluptate",
                  "cum",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "doloremque",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "ut",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "dicta",
                      port: "corporis",
                      project: "dolore",
                      region: "iusto",
                    },
                  ],
                },
                kind: "dicta",
                location: "harum",
                rrdatas: [
                  "accusamus",
                  "commodi",
                ],
                signatureRrdatas: [
                  "quae",
                  "ipsum",
                  "quidem",
                  "molestias",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "pariatur",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "praesentium",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "voluptates",
                      port: "quasi",
                      project: "repudiandae",
                      region: "sint",
                    },
                    {
                      ipAddress: "veritatis",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "incidunt",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "consequatur",
                      port: "est",
                      project: "quibusdam",
                      region: "explicabo",
                    },
                    {
                      ipAddress: "deserunt",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "quibusdam",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "modi",
                      port: "qui",
                      project: "aliquid",
                      region: "cupiditate",
                    },
                  ],
                },
                kind: "quos",
                location: "perferendis",
                rrdatas: [
                  "assumenda",
                ],
                signatureRrdatas: [
                  "alias",
                  "fugit",
                ],
              },
            ],
            kind: "dolorum",
          },
          kind: "excepturi",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: false,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "tempore",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                        kind: "delectus",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                        networkUrl: "non",
                        port: "eligendi",
                        project: "sint",
                        region: "aliquid",
                      },
                      {
                        ipAddress: "provident",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                        kind: "sint",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "dolor",
                        port: "debitis",
                        project: "a",
                        region: "dolorum",
                      },
                      {
                        ipAddress: "in",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                        kind: "illum",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "rerum",
                        port: "dicta",
                        project: "magnam",
                        region: "cumque",
                      },
                    ],
                  },
                  kind: "facere",
                  location: "ea",
                  rrdatas: [
                    "laborum",
                    "accusamus",
                  ],
                  signatureRrdatas: [
                    "occaecati",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "accusamus",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                        kind: "quidem",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "nam",
                        port: "id",
                        project: "blanditiis",
                        region: "deleniti",
                      },
                      {
                        ipAddress: "sapiente",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                        kind: "deserunt",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                        networkUrl: "vel",
                        port: "natus",
                        project: "omnis",
                        region: "molestiae",
                      },
                    ],
                  },
                  kind: "perferendis",
                  location: "nihil",
                  rrdatas: [
                    "distinctio",
                    "id",
                  ],
                  signatureRrdatas: [
                    "labore",
                    "suscipit",
                  ],
                },
              ],
              kind: "natus",
            },
            kind: "nobis",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "vero",
                  ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                  kind: "architecto",
                  loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                  networkUrl: "et",
                  port: "excepturi",
                  project: "ullam",
                  region: "provident",
                },
                {
                  ipAddress: "quos",
                  ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                  kind: "accusantium",
                  loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                  networkUrl: "reiciendis",
                  port: "mollitia",
                  project: "ad",
                  region: "eum",
                },
              ],
            },
            trickleTraffic: 2212.62,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "nemo",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "iure",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "debitis",
                      port: "eius",
                      project: "maxime",
                      region: "deleniti",
                    },
                  ],
                },
                kind: "facilis",
                rrdatas: [
                  "architecto",
                  "architecto",
                ],
                signatureRrdatas: [
                  "ullam",
                  "expedita",
                  "nihil",
                  "repellat",
                ],
                weight: 8411.4,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "saepe",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "accusantium",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "praesentium",
                      port: "natus",
                      project: "magni",
                      region: "sunt",
                    },
                  ],
                },
                kind: "quo",
                rrdatas: [
                  "pariatur",
                  "maxime",
                  "ea",
                  "excepturi",
                ],
                signatureRrdatas: [
                  "ea",
                ],
                weight: 332.22,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "maiores",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "ipsam",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "autem",
                      port: "nam",
                      project: "eaque",
                      region: "pariatur",
                    },
                  ],
                },
                kind: "nemo",
                rrdatas: [
                  "perferendis",
                  "fugiat",
                  "amet",
                  "aut",
                ],
                signatureRrdatas: [
                  "corporis",
                  "hic",
                  "libero",
                  "nobis",
                ],
                weight: 1716.29,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "totam",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "eaque",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "nesciunt",
                      port: "eos",
                      project: "perferendis",
                      region: "dolores",
                    },
                    {
                      ipAddress: "minus",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "dolor",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "nostrum",
                      port: "hic",
                      project: "recusandae",
                      region: "omnis",
                    },
                  ],
                },
                kind: "facilis",
                rrdatas: [
                  "voluptatem",
                  "porro",
                  "consequuntur",
                ],
                signatureRrdatas: [
                  "error",
                  "eaque",
                  "occaecati",
                ],
                weight: 6990.98,
              },
            ],
            kind: "adipisci",
          },
          wrrPolicy: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "modi",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "dolorum",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "pariatur",
                      port: "provident",
                      project: "nobis",
                      region: "libero",
                    },
                    {
                      ipAddress: "delectus",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "quos",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "dolorem",
                      port: "dolorem",
                      project: "dolor",
                      region: "qui",
                    },
                    {
                      ipAddress: "ipsum",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "excepturi",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "voluptate",
                      port: "dignissimos",
                      project: "reiciendis",
                      region: "amet",
                    },
                    {
                      ipAddress: "dolorum",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "veritatis",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "ipsa",
                      port: "iure",
                      project: "odio",
                      region: "quaerat",
                    },
                  ],
                },
                kind: "accusamus",
                rrdatas: [
                  "voluptatibus",
                  "voluptas",
                  "natus",
                ],
                signatureRrdatas: [
                  "atque",
                ],
                weight: 246.78,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "ab",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "dolorum",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "voluptate",
                      port: "dolorum",
                      project: "deleniti",
                      region: "omnis",
                    },
                    {
                      ipAddress: "necessitatibus",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "asperiores",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "ipsum",
                      port: "voluptate",
                      project: "id",
                      region: "saepe",
                    },
                    {
                      ipAddress: "eius",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "perferendis",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "optio",
                      port: "accusamus",
                      project: "ad",
                      region: "saepe",
                    },
                    {
                      ipAddress: "suscipit",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "provident",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "repellendus",
                      port: "totam",
                      project: "similique",
                      region: "alias",
                    },
                  ],
                },
                kind: "at",
                rrdatas: [
                  "tempora",
                  "vel",
                ],
                signatureRrdatas: [
                  "officiis",
                  "qui",
                  "dolorum",
                  "a",
                ],
                weight: 4561.3,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "iusto",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "quisquam",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "amet",
                      port: "tempore",
                      project: "accusamus",
                      region: "numquam",
                    },
                    {
                      ipAddress: "enim",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "sapiente",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "nihil",
                      port: "sit",
                      project: "expedita",
                      region: "neque",
                    },
                    {
                      ipAddress: "sed",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "libero",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "deserunt",
                      port: "quam",
                      project: "ipsum",
                      region: "incidunt",
                    },
                  ],
                },
                kind: "qui",
                rrdatas: [
                  "maxime",
                  "pariatur",
                  "soluta",
                ],
                signatureRrdatas: [
                  "laborum",
                ],
                weight: 5173.79,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "aspernatur",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "distinctio",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "aliquid",
                      port: "quam",
                      project: "molestias",
                      region: "temporibus",
                    },
                    {
                      ipAddress: "qui",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "fugit",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "odio",
                      port: "sunt",
                      project: "ullam",
                      region: "nam",
                    },
                  ],
                },
                kind: "hic",
                rrdatas: [
                  "cumque",
                ],
                signatureRrdatas: [
                  "nobis",
                  "et",
                  "saepe",
                ],
                weight: 2174.5,
              },
            ],
            kind: "veritatis",
          },
        },
        rrdatas: [
          "quos",
          "tempore",
          "cupiditate",
        ],
        signatureRrdatas: [
          "delectus",
        ],
        ttl: 209157,
        type: "dolore",
      },
      {
        kind: "labore",
        name: "adipisci",
        routingPolicy: {
          geo: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "quae",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "quas",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "consequatur",
                      port: "est",
                      project: "repellendus",
                      region: "porro",
                    },
                  ],
                },
                kind: "doloribus",
                location: "ut",
                rrdatas: [
                  "cupiditate",
                  "qui",
                  "quae",
                ],
                signatureRrdatas: [
                  "odio",
                  "occaecati",
                  "voluptatibus",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "vero",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "quis",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "delectus",
                      port: "voluptate",
                      project: "consectetur",
                      region: "vero",
                    },
                    {
                      ipAddress: "tenetur",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "hic",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "quod",
                      port: "odio",
                      project: "similique",
                      region: "facilis",
                    },
                    {
                      ipAddress: "vero",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "dolore",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "illum",
                      port: "sequi",
                      project: "natus",
                      region: "impedit",
                    },
                    {
                      ipAddress: "aut",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "exercitationem",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "fugit",
                      port: "porro",
                      project: "maiores",
                      region: "doloribus",
                    },
                  ],
                },
                kind: "iusto",
                location: "eligendi",
                rrdatas: [
                  "alias",
                  "officia",
                ],
                signatureRrdatas: [
                  "ipsam",
                  "ea",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "vel",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "magnam",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "ex",
                      port: "laudantium",
                      project: "dicta",
                      region: "dolor",
                    },
                  ],
                },
                kind: "maiores",
                location: "quasi",
                rrdatas: [
                  "nulla",
                  "excepturi",
                ],
                signatureRrdatas: [
                  "nostrum",
                  "sapiente",
                  "quisquam",
                  "saepe",
                ],
              },
            ],
            kind: "ea",
          },
          geoPolicy: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "veniam",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "inventore",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "ea",
                      port: "quo",
                      project: "consectetur",
                      region: "recusandae",
                    },
                    {
                      ipAddress: "aspernatur",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "eaque",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "libero",
                      port: "aut",
                      project: "aut",
                      region: "deleniti",
                    },
                  ],
                },
                kind: "impedit",
                location: "aliquam",
                rrdatas: [
                  "accusamus",
                ],
                signatureRrdatas: [
                  "non",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "dolorum",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "placeat",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "eum",
                      port: "autem",
                      project: "nobis",
                      region: "quas",
                    },
                  ],
                },
                kind: "assumenda",
                location: "nulla",
                rrdatas: [
                  "libero",
                  "quasi",
                ],
                signatureRrdatas: [
                  "numquam",
                  "explicabo",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "ipsa",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "magnam",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "eius",
                      port: "esse",
                      project: "esse",
                      region: "rem",
                    },
                    {
                      ipAddress: "fuga",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "quidem",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "ut",
                      port: "eum",
                      project: "suscipit",
                      region: "assumenda",
                    },
                    {
                      ipAddress: "eos",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "quisquam",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "ipsa",
                      port: "id",
                      project: "quidem",
                      region: "neque",
                    },
                  ],
                },
                kind: "quo",
                location: "illum",
                rrdatas: [
                  "fuga",
                  "eius",
                  "eos",
                  "voluptas",
                ],
                signatureRrdatas: [
                  "cupiditate",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "tempora",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "ipsam",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "sequi",
                      port: "quo",
                      project: "esse",
                      region: "recusandae",
                    },
                  ],
                },
                kind: "aperiam",
                location: "distinctio",
                rrdatas: [
                  "dignissimos",
                  "inventore",
                  "nihil",
                  "totam",
                ],
                signatureRrdatas: [
                  "aliquam",
                  "odio",
                  "occaecati",
                  "commodi",
                ],
              },
            ],
            kind: "sapiente",
          },
          kind: "dolores",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: false,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "accusantium",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                        kind: "eum",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "praesentium",
                        port: "consequuntur",
                        project: "deleniti",
                        region: "fugit",
                      },
                      {
                        ipAddress: "fuga",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                        kind: "incidunt",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "explicabo",
                        port: "minima",
                        project: "nisi",
                        region: "fugit",
                      },
                    ],
                  },
                  kind: "sapiente",
                  location: "consequuntur",
                  rrdatas: [
                    "explicabo",
                  ],
                  signatureRrdatas: [
                    "occaecati",
                    "atque",
                    "et",
                    "esse",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "accusamus",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                        kind: "esse",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "nam",
                        port: "vero",
                        project: "aliquid",
                        region: "quasi",
                      },
                      {
                        ipAddress: "saepe",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                        kind: "harum",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                        networkUrl: "rerum",
                        port: "occaecati",
                        project: "minima",
                        region: "distinctio",
                      },
                      {
                        ipAddress: "eligendi",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                        kind: "culpa",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "adipisci",
                        port: "cumque",
                        project: "consequuntur",
                        region: "consequatur",
                      },
                      {
                        ipAddress: "minus",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                        kind: "sapiente",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                        networkUrl: "esse",
                        port: "blanditiis",
                        project: "provident",
                        region: "a",
                      },
                    ],
                  },
                  kind: "nulla",
                  location: "quas",
                  rrdatas: [
                    "quasi",
                    "a",
                  ],
                  signatureRrdatas: [
                    "sint",
                    "pariatur",
                    "possimus",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "eveniet",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                        kind: "facere",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                        networkUrl: "consequuntur",
                        port: "quasi",
                        project: "similique",
                        region: "culpa",
                      },
                    ],
                  },
                  kind: "aliquid",
                  location: "tenetur",
                  rrdatas: [
                    "earum",
                  ],
                  signatureRrdatas: [
                    "in",
                    "eius",
                  ],
                },
              ],
              kind: "libero",
            },
            kind: "illum",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "accusantium",
                  ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                  kind: "sapiente",
                  loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                  networkUrl: "ullam",
                  port: "reprehenderit",
                  project: "ullam",
                  region: "nisi",
                },
                {
                  ipAddress: "aut",
                  ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                  kind: "qui",
                  loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                  networkUrl: "ex",
                  port: "deleniti",
                  project: "itaque",
                  region: "dolorum",
                },
                {
                  ipAddress: "architecto",
                  ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                  kind: "tenetur",
                  loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                  networkUrl: "at",
                  port: "et",
                  project: "voluptate",
                  region: "ipsa",
                },
              ],
            },
            trickleTraffic: 3267.01,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "adipisci",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "temporibus",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "rem",
                      port: "aut",
                      project: "laudantium",
                      region: "eum",
                    },
                  ],
                },
                kind: "mollitia",
                rrdatas: [
                  "corrupti",
                ],
                signatureRrdatas: [
                  "voluptatem",
                  "dolor",
                ],
                weight: 5801.52,
              },
            ],
            kind: "numquam",
          },
          wrrPolicy: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "voluptas",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "dignissimos",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "maiores",
                      port: "natus",
                      project: "velit",
                      region: "voluptatibus",
                    },
                  ],
                },
                kind: "voluptas",
                rrdatas: [
                  "aperiam",
                  "ea",
                  "quaerat",
                  "consequuntur",
                ],
                signatureRrdatas: [
                  "officia",
                  "maxime",
                  "dignissimos",
                  "officia",
                ],
                weight: 9894.1,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "quae",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "porro",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "labore",
                      port: "ab",
                      project: "adipisci",
                      region: "fuga",
                    },
                    {
                      ipAddress: "id",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "velit",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "est",
                      port: "recusandae",
                      project: "totam",
                      region: "fugiat",
                    },
                  ],
                },
                kind: "vel",
                rrdatas: [
                  "quos",
                  "vel",
                ],
                signatureRrdatas: [
                  "possimus",
                  "facilis",
                ],
                weight: 7382.27,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "in",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "reiciendis",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "nemo",
                      port: "recusandae",
                      project: "aliquid",
                      region: "aperiam",
                    },
                    {
                      ipAddress: "cum",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "in",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "earum",
                      port: "facere",
                      project: "numquam",
                      region: "doloribus",
                    },
                  ],
                },
                kind: "suscipit",
                rrdatas: [
                  "quidem",
                  "saepe",
                  "necessitatibus",
                  "dolore",
                ],
                signatureRrdatas: [
                  "asperiores",
                ],
                weight: 2415.45,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "amet",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "dignissimos",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "debitis",
                      port: "consectetur",
                      project: "corporis",
                      region: "harum",
                    },
                  ],
                },
                kind: "laboriosam",
                rrdatas: [
                  "voluptates",
                ],
                signatureRrdatas: [
                  "vitae",
                  "accusamus",
                  "similique",
                ],
                weight: 2724.37,
              },
            ],
            kind: "aspernatur",
          },
        },
        rrdatas: [
          "voluptas",
          "voluptas",
        ],
        signatureRrdatas: [
          "nobis",
          "dolorum",
        ],
        ttl: 237807,
        type: "minus",
      },
      {
        kind: "dolores",
        name: "blanditiis",
        routingPolicy: {
          geo: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "aliquam",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "temporibus",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "adipisci",
                      port: "cum",
                      project: "blanditiis",
                      region: "quas",
                    },
                    {
                      ipAddress: "hic",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "culpa",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "pariatur",
                      port: "totam",
                      project: "hic",
                      region: "exercitationem",
                    },
                  ],
                },
                kind: "nobis",
                location: "sit",
                rrdatas: [
                  "sed",
                  "reiciendis",
                  "explicabo",
                ],
                signatureRrdatas: [
                  "facilis",
                  "voluptate",
                  "expedita",
                  "ab",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "dolore",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "sed",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "commodi",
                      port: "quidem",
                      project: "explicabo",
                      region: "voluptas",
                    },
                    {
                      ipAddress: "unde",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "suscipit",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "debitis",
                      port: "illo",
                      project: "reiciendis",
                      region: "perferendis",
                    },
                    {
                      ipAddress: "corrupti",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "incidunt",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "provident",
                      port: "eius",
                      project: "necessitatibus",
                      region: "ipsum",
                    },
                  ],
                },
                kind: "ea",
                location: "occaecati",
                rrdatas: [
                  "voluptatibus",
                  "tempora",
                  "tempora",
                ],
                signatureRrdatas: [
                  "reiciendis",
                  "ex",
                ],
              },
            ],
            kind: "sit",
          },
          geoPolicy: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "praesentium",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "quaerat",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "ipsam",
                      port: "debitis",
                      project: "rem",
                      region: "sit",
                    },
                    {
                      ipAddress: "nobis",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "veniam",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "recusandae",
                      port: "reiciendis",
                      project: "nulla",
                      region: "magni",
                    },
                    {
                      ipAddress: "aperiam",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "numquam",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "in",
                      port: "officiis",
                      project: "beatae",
                      region: "laudantium",
                    },
                    {
                      ipAddress: "exercitationem",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "cum",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "dolorum",
                      port: "voluptatum",
                      project: "error",
                      region: "hic",
                    },
                  ],
                },
                kind: "expedita",
                location: "debitis",
                rrdatas: [
                  "dolorum",
                ],
                signatureRrdatas: [
                  "officia",
                  "dolorum",
                ],
              },
            ],
            kind: "corrupti",
          },
          kind: "accusamus",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: false,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "fugit",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                        kind: "fugiat",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                        networkUrl: "culpa",
                        port: "expedita",
                        project: "magnam",
                        region: "consequatur",
                      },
                      {
                        ipAddress: "esse",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                        kind: "sit",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "quas",
                        port: "repudiandae",
                        project: "corporis",
                        region: "et",
                      },
                      {
                        ipAddress: "blanditiis",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                        kind: "sed",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                        networkUrl: "vel",
                        port: "nostrum",
                        project: "saepe",
                        region: "error",
                      },
                    ],
                  },
                  kind: "consequatur",
                  location: "incidunt",
                  rrdatas: [
                    "dolorem",
                    "harum",
                    "dicta",
                    "architecto",
                  ],
                  signatureRrdatas: [
                    "labore",
                    "quidem",
                    "atque",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "nam",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                        kind: "laboriosam",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                        networkUrl: "amet",
                        port: "deserunt",
                        project: "voluptate",
                        region: "unde",
                      },
                      {
                        ipAddress: "reiciendis",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                        kind: "repellendus",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "voluptates",
                        port: "perferendis",
                        project: "est",
                        region: "quidem",
                      },
                      {
                        ipAddress: "reprehenderit",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                        kind: "fuga",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "mollitia",
                        port: "veniam",
                        project: "voluptatem",
                        region: "quisquam",
                      },
                    ],
                  },
                  kind: "repudiandae",
                  location: "quasi",
                  rrdatas: [
                    "reprehenderit",
                    "asperiores",
                    "totam",
                  ],
                  signatureRrdatas: [
                    "quidem",
                    "maxime",
                  ],
                },
              ],
              kind: "et",
            },
            kind: "esse",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "assumenda",
                  ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                  kind: "atque",
                  loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                  networkUrl: "officiis",
                  port: "officiis",
                  project: "accusamus",
                  region: "natus",
                },
              ],
            },
            trickleTraffic: 3283.03,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "maiores",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "at",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "blanditiis",
                      port: "suscipit",
                      project: "repudiandae",
                      region: "atque",
                    },
                    {
                      ipAddress: "atque",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "recusandae",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "repellendus",
                      port: "labore",
                      project: "reiciendis",
                      region: "doloremque",
                    },
                  ],
                },
                kind: "repudiandae",
                rrdatas: [
                  "accusantium",
                ],
                signatureRrdatas: [
                  "dolores",
                ],
                weight: 3164.88,
              },
            ],
            kind: "laboriosam",
          },
          wrrPolicy: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "molestias",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "saepe",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "occaecati",
                      port: "officiis",
                      project: "perspiciatis",
                      region: "in",
                    },
                    {
                      ipAddress: "adipisci",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "occaecati",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "fugit",
                      port: "id",
                      project: "quis",
                      region: "reprehenderit",
                    },
                    {
                      ipAddress: "error",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "corporis",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "eveniet",
                      port: "non",
                      project: "vero",
                      region: "doloremque",
                    },
                    {
                      ipAddress: "iure",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "totam",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "molestiae",
                      port: "eveniet",
                      project: "qui",
                      region: "cum",
                    },
                  ],
                },
                kind: "iure",
                rrdatas: [
                  "ratione",
                  "laborum",
                  "distinctio",
                  "voluptatum",
                ],
                signatureRrdatas: [
                  "aliquam",
                  "ad",
                  "repellat",
                ],
                weight: 30.99,
              },
            ],
            kind: "corporis",
          },
        },
        rrdatas: [
          "nihil",
          "mollitia",
          "voluptas",
        ],
        signatureRrdatas: [
          "maiores",
        ],
        ttl: 970222,
        type: "dolores",
      },
    ],
    deletions: [
      {
        kind: "minima",
        name: "dolore",
        routingPolicy: {
          geo: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "quae",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "omnis",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "molestiae",
                      port: "ex",
                      project: "ut",
                      region: "culpa",
                    },
                  ],
                },
                kind: "adipisci",
                location: "debitis",
                rrdatas: [
                  "eum",
                  "nemo",
                  "recusandae",
                ],
                signatureRrdatas: [
                  "provident",
                  "quis",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "reiciendis",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "aspernatur",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "quasi",
                      port: "animi",
                      project: "nostrum",
                      region: "mollitia",
                    },
                    {
                      ipAddress: "provident",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "animi",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "aliquid",
                      port: "accusantium",
                      project: "repellat",
                      region: "doloribus",
                    },
                  ],
                },
                kind: "ullam",
                location: "in",
                rrdatas: [
                  "earum",
                  "officia",
                  "laborum",
                ],
                signatureRrdatas: [
                  "modi",
                  "voluptatibus",
                  "molestias",
                  "officiis",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "cumque",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "rerum",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "quis",
                      port: "inventore",
                      project: "fugit",
                      region: "cumque",
                    },
                    {
                      ipAddress: "quae",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "velit",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "eum",
                      port: "eius",
                      project: "rem",
                      region: "at",
                    },
                    {
                      ipAddress: "impedit",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "sapiente",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "dicta",
                      port: "minima",
                      project: "beatae",
                      region: "cupiditate",
                    },
                    {
                      ipAddress: "provident",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "soluta",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "illum",
                      port: "eaque",
                      project: "earum",
                      region: "perspiciatis",
                    },
                  ],
                },
                kind: "maiores",
                location: "debitis",
                rrdatas: [
                  "porro",
                  "suscipit",
                ],
                signatureRrdatas: [
                  "fugit",
                ],
              },
            ],
            kind: "cumque",
          },
          geoPolicy: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "animi",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "nulla",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "quasi",
                      port: "et",
                      project: "ducimus",
                      region: "natus",
                    },
                  ],
                },
                kind: "occaecati",
                location: "suscipit",
                rrdatas: [
                  "quasi",
                ],
                signatureRrdatas: [
                  "doloribus",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "necessitatibus",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "tempora",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "molestiae",
                      port: "dicta",
                      project: "iusto",
                      region: "esse",
                    },
                    {
                      ipAddress: "praesentium",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "reiciendis",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "architecto",
                      port: "fugiat",
                      project: "doloremque",
                      region: "dicta",
                    },
                    {
                      ipAddress: "odio",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "esse",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "consectetur",
                      port: "aliquid",
                      project: "ipsa",
                      region: "laborum",
                    },
                    {
                      ipAddress: "sunt",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "fugiat",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "aliquid",
                      port: "officia",
                      project: "suscipit",
                      region: "aliquid",
                    },
                  ],
                },
                kind: "perferendis",
                location: "eum",
                rrdatas: [
                  "iste",
                  "id",
                ],
                signatureRrdatas: [
                  "error",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "voluptates",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "laborum",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "ad",
                      port: "deleniti",
                      project: "enim",
                      region: "vitae",
                    },
                    {
                      ipAddress: "repellendus",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "quo",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "ut",
                      port: "ad",
                      project: "expedita",
                      region: "voluptatem",
                    },
                    {
                      ipAddress: "molestias",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "aliquid",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "voluptatum",
                      port: "omnis",
                      project: "veritatis",
                      region: "rerum",
                    },
                    {
                      ipAddress: "est",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "voluptatem",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "officiis",
                      port: "architecto",
                      project: "fuga",
                      region: "pariatur",
                    },
                  ],
                },
                kind: "debitis",
                location: "voluptatem",
                rrdatas: [
                  "deleniti",
                ],
                signatureRrdatas: [
                  "ex",
                  "sapiente",
                  "rem",
                  "minus",
                ],
              },
            ],
            kind: "nemo",
          },
          kind: "asperiores",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: false,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "perferendis",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                        kind: "totam",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "quibusdam",
                        port: "nam",
                        project: "ipsam",
                        region: "culpa",
                      },
                      {
                        ipAddress: "dolor",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                        kind: "inventore",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "veritatis",
                        port: "tempora",
                        project: "dolor",
                        region: "consequatur",
                      },
                    ],
                  },
                  kind: "architecto",
                  location: "sit",
                  rrdatas: [
                    "fugit",
                    "ab",
                  ],
                  signatureRrdatas: [
                    "quae",
                    "dolor",
                    "fugiat",
                  ],
                },
              ],
              kind: "ipsam",
            },
            kind: "consequuntur",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "quas",
                  ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                  kind: "impedit",
                  loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                  networkUrl: "esse",
                  port: "necessitatibus",
                  project: "sed",
                  region: "veniam",
                },
              ],
            },
            trickleTraffic: 1995.96,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "vel",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "magnam",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "ab",
                      port: "porro",
                      project: "autem",
                      region: "nobis",
                    },
                    {
                      ipAddress: "laboriosam",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "consequuntur",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "exercitationem",
                      port: "necessitatibus",
                      project: "quasi",
                      region: "nisi",
                    },
                  ],
                },
                kind: "at",
                rrdatas: [
                  "est",
                  "harum",
                  "sequi",
                  "doloribus",
                ],
                signatureRrdatas: [
                  "optio",
                  "occaecati",
                  "nemo",
                  "voluptate",
                ],
                weight: 5010.63,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "voluptas",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "nemo",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "eius",
                      port: "aspernatur",
                      project: "ducimus",
                      region: "nesciunt",
                    },
                    {
                      ipAddress: "fuga",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "incidunt",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "rem",
                      port: "fugiat",
                      project: "dicta",
                      region: "nisi",
                    },
                    {
                      ipAddress: "consequuntur",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "aperiam",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "reiciendis",
                      port: "soluta",
                      project: "alias",
                      region: "omnis",
                    },
                  ],
                },
                kind: "eos",
                rrdatas: [
                  "iste",
                  "magni",
                  "inventore",
                ],
                signatureRrdatas: [
                  "accusamus",
                  "voluptatibus",
                  "distinctio",
                ],
                weight: 6085.93,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "minima",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "maxime",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "temporibus",
                      port: "quos",
                      project: "commodi",
                      region: "itaque",
                    },
                    {
                      ipAddress: "commodi",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "earum",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "nam",
                      port: "vero",
                      project: "voluptatem",
                      region: "ipsam",
                    },
                    {
                      ipAddress: "vel",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "quasi",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "maiores",
                      port: "enim",
                      project: "sint",
                      region: "nulla",
                    },
                    {
                      ipAddress: "deserunt",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "nemo",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "est",
                      port: "quis",
                      project: "sint",
                      region: "accusamus",
                    },
                  ],
                },
                kind: "impedit",
                rrdatas: [
                  "necessitatibus",
                  "asperiores",
                  "ex",
                  "voluptas",
                ],
                signatureRrdatas: [
                  "delectus",
                  "quae",
                  "minus",
                  "fuga",
                ],
                weight: 6756.89,
              },
            ],
            kind: "consectetur",
          },
          wrrPolicy: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "ipsum",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "magni",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "repudiandae",
                      port: "nam",
                      project: "dolore",
                      region: "iusto",
                    },
                    {
                      ipAddress: "voluptate",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "dignissimos",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "quo",
                      port: "deleniti",
                      project: "quibusdam",
                      region: "iure",
                    },
                    {
                      ipAddress: "odit",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "vel",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "quibusdam",
                      port: "inventore",
                      project: "facere",
                      region: "libero",
                    },
                  ],
                },
                kind: "architecto",
                rrdatas: [
                  "quia",
                  "porro",
                  "aliquam",
                  "velit",
                ],
                signatureRrdatas: [
                  "accusantium",
                ],
                weight: 4246.63,
              },
            ],
            kind: "ea",
          },
        },
        rrdatas: [
          "vero",
        ],
        signatureRrdatas: [
          "eum",
          "velit",
          "ut",
        ],
        ttl: 596433,
        type: "earum",
      },
      {
        kind: "dicta",
        name: "impedit",
        routingPolicy: {
          geo: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "itaque",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "nisi",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "velit",
                      port: "laborum",
                      project: "non",
                      region: "dolor",
                    },
                    {
                      ipAddress: "iusto",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "doloremque",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "officia",
                      port: "recusandae",
                      project: "ea",
                      region: "quidem",
                    },
                    {
                      ipAddress: "voluptas",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "placeat",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "expedita",
                      port: "deleniti",
                      project: "a",
                      region: "voluptate",
                    },
                  ],
                },
                kind: "ullam",
                location: "unde",
                rrdatas: [
                  "animi",
                  "impedit",
                  "ipsam",
                  "corporis",
                ],
                signatureRrdatas: [
                  "error",
                  "esse",
                  "labore",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "vero",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "vitae",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "dolorem",
                      port: "ad",
                      project: "qui",
                      region: "iste",
                    },
                  ],
                },
                kind: "ex",
                location: "nemo",
                rrdatas: [
                  "libero",
                  "rem",
                  "dolorum",
                ],
                signatureRrdatas: [
                  "fugit",
                  "alias",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "vel",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "quae",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "neque",
                      port: "exercitationem",
                      project: "itaque",
                      region: "et",
                    },
                  ],
                },
                kind: "ipsum",
                location: "unde",
                rrdatas: [
                  "distinctio",
                  "maxime",
                  "quia",
                  "quia",
                ],
                signatureRrdatas: [
                  "omnis",
                  "libero",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "id",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "fugiat",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "quos",
                      port: "placeat",
                      project: "sit",
                      region: "iusto",
                    },
                  ],
                },
                kind: "ipsa",
                location: "voluptates",
                rrdatas: [
                  "aperiam",
                ],
                signatureRrdatas: [
                  "dolore",
                  "eligendi",
                  "distinctio",
                ],
              },
            ],
            kind: "voluptatem",
          },
          geoPolicy: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "dolores",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "beatae",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "facere",
                      port: "corrupti",
                      project: "molestiae",
                      region: "provident",
                    },
                    {
                      ipAddress: "accusamus",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "tempore",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "ea",
                      port: "autem",
                      project: "ipsam",
                      region: "rerum",
                    },
                  ],
                },
                kind: "laudantium",
                location: "corporis",
                rrdatas: [
                  "voluptatibus",
                  "cum",
                  "at",
                  "alias",
                ],
                signatureRrdatas: [
                  "quidem",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "repudiandae",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "expedita",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "eos",
                      port: "quibusdam",
                      project: "odio",
                      region: "praesentium",
                    },
                    {
                      ipAddress: "odit",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "corporis",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "earum",
                      port: "adipisci",
                      project: "recusandae",
                      region: "similique",
                    },
                    {
                      ipAddress: "ut",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "quis",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "unde",
                      port: "molestiae",
                      project: "delectus",
                      region: "cupiditate",
                    },
                  ],
                },
                kind: "fugit",
                location: "numquam",
                rrdatas: [
                  "nesciunt",
                  "at",
                ],
                signatureRrdatas: [
                  "dignissimos",
                  "optio",
                  "necessitatibus",
                ],
              },
            ],
            kind: "corporis",
          },
          kind: "qui",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: false,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "cupiditate",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                        kind: "placeat",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                        networkUrl: "neque",
                        port: "in",
                        project: "minus",
                        region: "eum",
                      },
                      {
                        ipAddress: "modi",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                        kind: "magnam",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "maiores",
                        port: "tempore",
                        project: "aperiam",
                        region: "libero",
                      },
                      {
                        ipAddress: "ratione",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                        kind: "totam",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "voluptas",
                        port: "quo",
                        project: "velit",
                        region: "minus",
                      },
                    ],
                  },
                  kind: "fuga",
                  location: "nostrum",
                  rrdatas: [
                    "impedit",
                    "delectus",
                    "tempore",
                  ],
                  signatureRrdatas: [
                    "odit",
                    "repellat",
                    "pariatur",
                    "nemo",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "aperiam",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                        kind: "minima",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                        networkUrl: "ducimus",
                        port: "excepturi",
                        project: "dolores",
                        region: "error",
                      },
                      {
                        ipAddress: "veritatis",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                        kind: "voluptate",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "itaque",
                        port: "similique",
                        project: "optio",
                        region: "ex",
                      },
                    ],
                  },
                  kind: "quaerat",
                  location: "commodi",
                  rrdatas: [
                    "placeat",
                    "quidem",
                    "exercitationem",
                    "quam",
                  ],
                  signatureRrdatas: [
                    "modi",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "sint",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                        kind: "sequi",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "cum",
                        port: "dicta",
                        project: "earum",
                        region: "veniam",
                      },
                    ],
                  },
                  kind: "animi",
                  location: "dolores",
                  rrdatas: [
                    "dicta",
                    "consequuntur",
                    "necessitatibus",
                  ],
                  signatureRrdatas: [
                    "ipsa",
                    "ducimus",
                    "maiores",
                  ],
                },
              ],
              kind: "veritatis",
            },
            kind: "quasi",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "pariatur",
                  ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                  kind: "excepturi",
                  loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                  networkUrl: "nemo",
                  port: "aliquam",
                  project: "nostrum",
                  region: "doloribus",
                },
                {
                  ipAddress: "eligendi",
                  ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                  kind: "enim",
                  loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                  networkUrl: "animi",
                  port: "quas",
                  project: "totam",
                  region: "molestias",
                },
              ],
            },
            trickleTraffic: 4849.66,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "architecto",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "iste",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "tempore",
                      port: "libero",
                      project: "velit",
                      region: "doloremque",
                    },
                    {
                      ipAddress: "delectus",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "cum",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "adipisci",
                      port: "saepe",
                      project: "deserunt",
                      region: "doloremque",
                    },
                    {
                      ipAddress: "quis",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "libero",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "cupiditate",
                      port: "molestiae",
                      project: "eligendi",
                      region: "possimus",
                    },
                    {
                      ipAddress: "non",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "itaque",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "asperiores",
                      port: "veniam",
                      project: "consequuntur",
                      region: "facere",
                    },
                  ],
                },
                kind: "laudantium",
                rrdatas: [
                  "pariatur",
                ],
                signatureRrdatas: [
                  "exercitationem",
                ],
                weight: 688.52,
              },
            ],
            kind: "velit",
          },
          wrrPolicy: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "nisi",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "quaerat",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "distinctio",
                      port: "nisi",
                      project: "quis",
                      region: "nisi",
                    },
                    {
                      ipAddress: "libero",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "facere",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "ipsum",
                      port: "ad",
                      project: "voluptatibus",
                      region: "voluptatibus",
                    },
                    {
                      ipAddress: "consequuntur",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "labore",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "eos",
                      port: "reprehenderit",
                      project: "nostrum",
                      region: "neque",
                    },
                  ],
                },
                kind: "iusto",
                rrdatas: [
                  "rem",
                  "eligendi",
                  "fugiat",
                ],
                signatureRrdatas: [
                  "officiis",
                  "ducimus",
                  "dolor",
                ],
                weight: 1180.41,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "porro",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "dignissimos",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "fugiat",
                      port: "ad",
                      project: "aspernatur",
                      region: "enim",
                    },
                    {
                      ipAddress: "delectus",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "dignissimos",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "illo",
                      port: "ab",
                      project: "incidunt",
                      region: "accusamus",
                    },
                    {
                      ipAddress: "saepe",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "veniam",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "reiciendis",
                      port: "earum",
                      project: "reprehenderit",
                      region: "praesentium",
                    },
                  ],
                },
                kind: "nemo",
                rrdatas: [
                  "quisquam",
                  "sequi",
                  "nihil",
                  "deleniti",
                ],
                signatureRrdatas: [
                  "labore",
                ],
                weight: 8288.41,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "quisquam",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "laudantium",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "consequatur",
                      port: "maxime",
                      project: "aspernatur",
                      region: "nam",
                    },
                    {
                      ipAddress: "expedita",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "provident",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "rerum",
                      port: "dignissimos",
                      project: "corporis",
                      region: "vero",
                    },
                  ],
                },
                kind: "similique",
                rrdatas: [
                  "iure",
                  "dolorem",
                  "commodi",
                  "impedit",
                ],
                signatureRrdatas: [
                  "aut",
                  "voluptatem",
                ],
                weight: 3228.29,
              },
            ],
            kind: "quae",
          },
        },
        rrdatas: [
          "illum",
        ],
        signatureRrdatas: [
          "quidem",
          "cum",
          "amet",
        ],
        ttl: 97676,
        type: "dicta",
      },
      {
        kind: "laudantium",
        name: "doloremque",
        routingPolicy: {
          geo: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "amet",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "dolorum",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "provident",
                      port: "repudiandae",
                      project: "consequatur",
                      region: "nemo",
                    },
                    {
                      ipAddress: "molestiae",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "facilis",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "aperiam",
                      port: "sint",
                      project: "accusamus",
                      region: "eos",
                    },
                  ],
                },
                kind: "totam",
                location: "dicta",
                rrdatas: [
                  "velit",
                ],
                signatureRrdatas: [
                  "sunt",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "dolor",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "atque",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "at",
                      port: "labore",
                      project: "minus",
                      region: "esse",
                    },
                    {
                      ipAddress: "voluptatem",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "rerum",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "aperiam",
                      port: "dignissimos",
                      project: "repellat",
                      region: "velit",
                    },
                    {
                      ipAddress: "porro",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "consectetur",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "dignissimos",
                      port: "consectetur",
                      project: "soluta",
                      region: "natus",
                    },
                    {
                      ipAddress: "temporibus",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "amet",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "aspernatur",
                      port: "quo",
                      project: "itaque",
                      region: "illum",
                    },
                  ],
                },
                kind: "laborum",
                location: "dignissimos",
                rrdatas: [
                  "qui",
                  "consectetur",
                  "repellat",
                  "explicabo",
                ],
                signatureRrdatas: [
                  "exercitationem",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "non",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "illo",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "deserunt",
                      port: "delectus",
                      project: "non",
                      region: "distinctio",
                    },
                    {
                      ipAddress: "in",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "labore",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "repudiandae",
                      port: "modi",
                      project: "in",
                      region: "explicabo",
                    },
                  ],
                },
                kind: "accusamus",
                location: "rem",
                rrdatas: [
                  "odit",
                ],
                signatureRrdatas: [
                  "enim",
                  "voluptate",
                  "similique",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "libero",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "sit",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "eum",
                      port: "nesciunt",
                      project: "mollitia",
                      region: "dignissimos",
                    },
                    {
                      ipAddress: "fugiat",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "molestiae",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "reiciendis",
                      port: "ab",
                      project: "modi",
                      region: "aut",
                    },
                  ],
                },
                kind: "aut",
                location: "eveniet",
                rrdatas: [
                  "commodi",
                  "numquam",
                ],
                signatureRrdatas: [
                  "possimus",
                  "voluptate",
                  "consectetur",
                ],
              },
            ],
            kind: "nesciunt",
          },
          geoPolicy: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "minus",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "distinctio",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "quas",
                      port: "et",
                      project: "facilis",
                      region: "amet",
                    },
                    {
                      ipAddress: "autem",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "alias",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "aut",
                      port: "quos",
                      project: "laudantium",
                      region: "repellendus",
                    },
                    {
                      ipAddress: "veritatis",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "eaque",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "delectus",
                      port: "mollitia",
                      project: "nulla",
                      region: "officia",
                    },
                    {
                      ipAddress: "sed",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "alias",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "hic",
                      port: "voluptatem",
                      project: "incidunt",
                      region: "qui",
                    },
                  ],
                },
                kind: "qui",
                location: "necessitatibus",
                rrdatas: [
                  "explicabo",
                  "beatae",
                  "aliquid",
                ],
                signatureRrdatas: [
                  "optio",
                  "voluptatibus",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "officia",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "totam",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "aliquid",
                      port: "ea",
                      project: "impedit",
                      region: "ducimus",
                    },
                    {
                      ipAddress: "odit",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "reiciendis",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "nulla",
                      port: "laborum",
                      project: "natus",
                      region: "accusamus",
                    },
                    {
                      ipAddress: "doloremque",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "rerum",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "voluptates",
                      port: "non",
                      project: "rem",
                      region: "quia",
                    },
                  ],
                },
                kind: "ullam",
                location: "quisquam",
                rrdatas: [
                  "voluptatibus",
                ],
                signatureRrdatas: [
                  "quae",
                  "officiis",
                  "architecto",
                  "architecto",
                ],
              },
            ],
            kind: "enim",
          },
          kind: "optio",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: false,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "facilis",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                        kind: "a",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "dicta",
                        port: "quos",
                        project: "ullam",
                        region: "dolore",
                      },
                    ],
                  },
                  kind: "modi",
                  location: "itaque",
                  rrdatas: [
                    "modi",
                    "consequuntur",
                    "assumenda",
                    "vero",
                  ],
                  signatureRrdatas: [
                    "impedit",
                    "porro",
                    "accusamus",
                    "totam",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "ab",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                        kind: "nihil",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                        networkUrl: "iure",
                        port: "odio",
                        project: "nesciunt",
                        region: "debitis",
                      },
                      {
                        ipAddress: "vel",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                        kind: "corporis",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                        networkUrl: "consequuntur",
                        port: "officia",
                        project: "reprehenderit",
                        region: "distinctio",
                      },
                      {
                        ipAddress: "eius",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                        kind: "rem",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "accusantium",
                        port: "veniam",
                        project: "saepe",
                        region: "neque",
                      },
                      {
                        ipAddress: "facere",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                        kind: "quos",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "fugiat",
                        port: "est",
                        project: "delectus",
                        region: "velit",
                      },
                    ],
                  },
                  kind: "vitae",
                  location: "nesciunt",
                  rrdatas: [
                    "illo",
                    "repellat",
                    "nemo",
                  ],
                  signatureRrdatas: [
                    "possimus",
                    "unde",
                    "incidunt",
                    "explicabo",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "cupiditate",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                        kind: "alias",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "nesciunt",
                        port: "commodi",
                        project: "sapiente",
                        region: "consequuntur",
                      },
                      {
                        ipAddress: "veniam",
                        ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                        kind: "officia",
                        loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                        networkUrl: "ut",
                        port: "numquam",
                        project: "tenetur",
                        region: "adipisci",
                      },
                    ],
                  },
                  kind: "libero",
                  location: "in",
                  rrdatas: [
                    "ex",
                    "minus",
                  ],
                  signatureRrdatas: [
                    "beatae",
                  ],
                },
              ],
              kind: "hic",
            },
            kind: "nisi",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "dolor",
                  ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                  kind: "fuga",
                  loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                  networkUrl: "architecto",
                  port: "qui",
                  project: "aliquid",
                  region: "magni",
                },
                {
                  ipAddress: "incidunt",
                  ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                  kind: "praesentium",
                  loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                  networkUrl: "exercitationem",
                  port: "expedita",
                  project: "facilis",
                  region: "impedit",
                },
                {
                  ipAddress: "sit",
                  ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                  kind: "culpa",
                  loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                  networkUrl: "amet",
                  port: "deserunt",
                  project: "modi",
                  region: "veniam",
                },
                {
                  ipAddress: "quod",
                  ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                  kind: "a",
                  loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                  networkUrl: "enim",
                  port: "doloribus",
                  project: "assumenda",
                  region: "officiis",
                },
              ],
            },
            trickleTraffic: 1039.9,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "ipsa",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "necessitatibus",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "dicta",
                      port: "vel",
                      project: "perspiciatis",
                      region: "debitis",
                    },
                    {
                      ipAddress: "ullam",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "accusantium",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "veritatis",
                      port: "provident",
                      project: "cumque",
                      region: "iure",
                    },
                    {
                      ipAddress: "quibusdam",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "nemo",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "velit",
                      port: "magnam",
                      project: "dignissimos",
                      region: "laboriosam",
                    },
                  ],
                },
                kind: "sed",
                rrdatas: [
                  "natus",
                  "provident",
                ],
                signatureRrdatas: [
                  "doloribus",
                  "facilis",
                  "quidem",
                ],
                weight: 9320.8,
              },
            ],
            kind: "laboriosam",
          },
          wrrPolicy: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "perspiciatis",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "cum",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "libero",
                      port: "nam",
                      project: "incidunt",
                      region: "recusandae",
                    },
                    {
                      ipAddress: "quod",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "saepe",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "quo",
                      port: "nesciunt",
                      project: "illum",
                      region: "nemo",
                    },
                  ],
                },
                kind: "illum",
                rrdatas: [
                  "non",
                  "mollitia",
                  "assumenda",
                ],
                signatureRrdatas: [
                  "distinctio",
                  "pariatur",
                  "ad",
                  "facere",
                ],
                weight: 6746.83,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "laborum",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "maxime",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "alias",
                      port: "suscipit",
                      project: "deserunt",
                      region: "molestias",
                    },
                    {
                      ipAddress: "laborum",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "occaecati",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "quo",
                      port: "perferendis",
                      project: "fugit",
                      region: "aliquid",
                    },
                    {
                      ipAddress: "magnam",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "eligendi",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "nostrum",
                      port: "officiis",
                      project: "unde",
                      region: "nulla",
                    },
                    {
                      ipAddress: "error",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Tcp,
                      kind: "magnam",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "esse",
                      port: "corrupti",
                      project: "fuga",
                      region: "facere",
                    },
                  ],
                },
                kind: "impedit",
                rrdatas: [
                  "deserunt",
                ],
                signatureRrdatas: [
                  "laboriosam",
                  "doloremque",
                  "voluptatem",
                  "facere",
                ],
                weight: 9010.08,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "consequatur",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "architecto",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "porro",
                      port: "blanditiis",
                      project: "quae",
                      region: "magni",
                    },
                    {
                      ipAddress: "officiis",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "necessitatibus",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "ipsa",
                      port: "excepturi",
                      project: "a",
                      region: "maiores",
                    },
                    {
                      ipAddress: "laudantium",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Udp,
                      kind: "alias",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.RegionalL4ilb,
                      networkUrl: "rem",
                      port: "dicta",
                      project: "suscipit",
                      region: "earum",
                    },
                    {
                      ipAddress: "doloribus",
                      ipProtocol: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.Undefined,
                      kind: "eius",
                      loadBalancerType: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.None,
                      networkUrl: "in",
                      port: "eligendi",
                      project: "quasi",
                      region: "neque",
                    },
                  ],
                },
                kind: "vero",
                rrdatas: [
                  "accusantium",
                  "qui",
                  "impedit",
                ],
                signatureRrdatas: [
                  "incidunt",
                ],
                weight: 1165.58,
              },
            ],
            kind: "odit",
          },
        },
        rrdatas: [
          "rerum",
          "alias",
        ],
        signatureRrdatas: [
          "vel",
          "accusantium",
          "id",
        ],
        ttl: 388169,
        type: "ex",
      },
    ],
    id: "quas",
    isServing: false,
    kind: "veritatis",
    startTime: "ullam",
    status: ChangeStatusEnum.Pending,
  },
  accessToken: "similique",
  alt: AltEnum.Json,
  callback: "quam",
  clientOperationId: "magni",
  fields: "deserunt",
  key: "delectus",
  managedZone: "omnis",
  oauthToken: "sed",
  prettyPrint: false,
  project: "nesciunt",
  quotaUser: "maxime",
  uploadType: "quis",
  uploadProtocol: "cupiditate",
};

sdk.changes.dnsChangesCreate(req).then((res: DnsChangesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### changes

* `dnsChangesCreate` - Atomically updates the ResourceRecordSet collection.
* `dnsChangesGet` - Fetches the representation of an existing Change.
* `dnsChangesList` - Enumerates Changes to a ResourceRecordSet collection.

### dnsKeys

* `dnsDnsKeysGet` - Fetches the representation of an existing DnsKey.
* `dnsDnsKeysList` - Enumerates DnsKeys to a ResourceRecordSet collection.

### managedZoneOperations

* `dnsManagedZoneOperationsGet` - Fetches the representation of an existing Operation.
* `dnsManagedZoneOperationsList` - Enumerates Operations for the given ManagedZone.

### managedZones

* `dnsManagedZonesCreate` - Creates a new ManagedZone.
* `dnsManagedZonesDelete` - Deletes a previously created ManagedZone.
* `dnsManagedZonesGet` - Fetches the representation of an existing ManagedZone.
* `dnsManagedZonesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `dnsManagedZonesList` - Enumerates ManagedZones that have been created but not yet deleted.
* `dnsManagedZonesPatch` - Applies a partial update to an existing ManagedZone.
* `dnsManagedZonesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `dnsManagedZonesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `dnsManagedZonesUpdate` - Updates an existing ManagedZone.

### policies

* `dnsPoliciesCreate` - Creates a new Policy.
* `dnsPoliciesDelete` - Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
* `dnsPoliciesGet` - Fetches the representation of an existing Policy.
* `dnsPoliciesList` - Enumerates all Policies associated with a project.
* `dnsPoliciesPatch` - Applies a partial update to an existing Policy.
* `dnsPoliciesUpdate` - Updates an existing Policy.

### projects

* `dnsProjectsGet` - Fetches the representation of an existing Project.

### resourceRecordSets

* `dnsResourceRecordSetsCreate` - Creates a new ResourceRecordSet.
* `dnsResourceRecordSetsDelete` - Deletes a previously created ResourceRecordSet.
* `dnsResourceRecordSetsGet` - Fetches the representation of an existing ResourceRecordSet.
* `dnsResourceRecordSetsList` - Enumerates ResourceRecordSets that you have created but not yet deleted.
* `dnsResourceRecordSetsPatch` - Applies a partial update to an existing ResourceRecordSet.

### responsePolicies

* `dnsResponsePoliciesCreate` - Creates a new Response Policy
* `dnsResponsePoliciesDelete` - Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
* `dnsResponsePoliciesGet` - Fetches the representation of an existing Response Policy.
* `dnsResponsePoliciesList` - Enumerates all Response Policies associated with a project.
* `dnsResponsePoliciesPatch` - Applies a partial update to an existing Response Policy.
* `dnsResponsePoliciesUpdate` - Updates an existing Response Policy.

### responsePolicyRules

* `dnsResponsePolicyRulesCreate` - Creates a new Response Policy Rule.
* `dnsResponsePolicyRulesDelete` - Deletes a previously created Response Policy Rule.
* `dnsResponsePolicyRulesGet` - Fetches the representation of an existing Response Policy Rule.
* `dnsResponsePolicyRulesList` - Enumerates all Response Policy Rules associated with a project.
* `dnsResponsePolicyRulesPatch` - Applies a partial update to an existing Response Policy Rule.
* `dnsResponsePolicyRulesUpdate` - Updates an existing Response Policy Rule.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

