<!-- Start SDK Example Usage -->
```typescript
import {
  TrafficdirectorDiscoveryClientStatusRequest,
  TrafficdirectorDiscoveryClientStatusResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TrafficdirectorDiscoveryClientStatusRequest = {
  dollarXgafv: XgafvEnum.Two,
  clientStatusRequest: {
    nodeMatchers: [
      {
        nodeId: {
          exact: "distinctio",
          ignoreCase: false,
          prefix: "quibusdam",
          regex: "unde",
          safeRegex: {
            googleRe2: {
              maxProgramSize: 857946,
            },
            regex: "corrupti",
          },
          suffix: "illum",
        },
        nodeMetadatas: [
          {
            path: [
              {
                key: "deserunt",
              },
              {
                key: "suscipit",
              },
              {
                key: "iure",
              },
            ],
            value: {
              boolMatch: false,
              doubleMatch: {
                exact: 2975.34,
                range: {
                  end: 8917.73,
                  start: 567.13,
                },
              },
              listMatch: {
                oneOf: {},
              },
              nullMatch: {
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
                "iusto": "excepturi",
              },
              presentMatch: false,
              stringMatch: {
                exact: "nisi",
                ignoreCase: false,
                prefix: "recusandae",
                regex: "temporibus",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 71036,
                  },
                  regex: "quis",
                },
                suffix: "veritatis",
              },
            },
          },
          {
            path: [
              {
                key: "perferendis",
              },
              {
                key: "ipsam",
              },
              {
                key: "repellendus",
              },
            ],
            value: {
              boolMatch: false,
              doubleMatch: {
                exact: 9571.56,
                range: {
                  end: 7781.57,
                  start: 1403.5,
                },
              },
              listMatch: {
                oneOf: {},
              },
              nullMatch: {
                "at": "maiores",
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
              },
              presentMatch: false,
              stringMatch: {
                exact: "dolorum",
                ignoreCase: false,
                prefix: "dicta",
                regex: "nam",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 639921,
                  },
                  regex: "occaecati",
                },
                suffix: "fugit",
              },
            },
          },
        ],
      },
      {
        nodeId: {
          exact: "deleniti",
          ignoreCase: false,
          prefix: "hic",
          regex: "optio",
          safeRegex: {
            googleRe2: {
              maxProgramSize: 521848,
            },
            regex: "beatae",
          },
          suffix: "commodi",
        },
        nodeMetadatas: [
          {
            path: [
              {
                key: "qui",
              },
              {
                key: "impedit",
              },
            ],
            value: {
              boolMatch: false,
              doubleMatch: {
                exact: 7369.18,
                range: {
                  end: 4561.5,
                  start: 2165.5,
                },
              },
              listMatch: {
                oneOf: {},
              },
              nullMatch: {
                "aspernatur": "perferendis",
                "ad": "natus",
                "sed": "iste",
              },
              presentMatch: false,
              stringMatch: {
                exact: "dolor",
                ignoreCase: false,
                prefix: "natus",
                regex: "laboriosam",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 943749,
                  },
                  regex: "saepe",
                },
                suffix: "fuga",
              },
            },
          },
          {
            path: [
              {
                key: "corporis",
              },
              {
                key: "iste",
              },
            ],
            value: {
              boolMatch: false,
              doubleMatch: {
                exact: 4370.32,
                range: {
                  end: 9023.49,
                  start: 6976.31,
                },
              },
              listMatch: {
                oneOf: {},
              },
              nullMatch: {
                "ipsa": "reiciendis",
              },
              presentMatch: false,
              stringMatch: {
                exact: "est",
                ignoreCase: false,
                prefix: "mollitia",
                regex: "laborum",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 170909,
                  },
                  regex: "dolorem",
                },
                suffix: "corporis",
              },
            },
          },
        ],
      },
      {
        nodeId: {
          exact: "explicabo",
          ignoreCase: false,
          prefix: "nobis",
          regex: "enim",
          safeRegex: {
            googleRe2: {
              maxProgramSize: 607831,
            },
            regex: "nemo",
          },
          suffix: "minima",
        },
        nodeMetadatas: [
          {
            path: [
              {
                key: "iure",
              },
            ],
            value: {
              boolMatch: false,
              doubleMatch: {
                exact: 6342.74,
                range: {
                  end: 9883.74,
                  start: 9589.5,
                },
              },
              listMatch: {
                oneOf: {},
              },
              nullMatch: {
                "mollitia": "dolorem",
              },
              presentMatch: false,
              stringMatch: {
                exact: "culpa",
                ignoreCase: false,
                prefix: "consequuntur",
                regex: "repellat",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 653108,
                  },
                  regex: "occaecati",
                },
                suffix: "numquam",
              },
            },
          },
          {
            path: [
              {
                key: "quam",
              },
              {
                key: "molestiae",
              },
            ],
            value: {
              boolMatch: false,
              doubleMatch: {
                exact: 2444.25,
                range: {
                  end: 6235.1,
                  start: 1589.69,
                },
              },
              listMatch: {
                oneOf: {},
              },
              nullMatch: {
                "vitae": "laborum",
                "animi": "enim",
              },
              presentMatch: false,
              stringMatch: {
                exact: "odit",
                ignoreCase: false,
                prefix: "quo",
                regex: "sequi",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 949572,
                  },
                  regex: "ipsam",
                },
                suffix: "id",
              },
            },
          },
          {
            path: [
              {
                key: "aut",
              },
              {
                key: "quasi",
              },
              {
                key: "error",
              },
              {
                key: "temporibus",
              },
            ],
            value: {
              boolMatch: false,
              doubleMatch: {
                exact: 6736.6,
                range: {
                  end: 960.98,
                  start: 9719.45,
                },
              },
              listMatch: {
                oneOf: {},
              },
              nullMatch: {
                "vero": "nihil",
                "praesentium": "voluptatibus",
                "ipsa": "omnis",
                "voluptate": "cum",
              },
              presentMatch: false,
              stringMatch: {
                exact: "perferendis",
                ignoreCase: false,
                prefix: "doloremque",
                regex: "reprehenderit",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 282807,
                  },
                  regex: "maiores",
                },
                suffix: "dicta",
              },
            },
          },
        ],
      },
    ],
  },
  accessToken: "corporis",
  alt: AltEnum.Json,
  callback: "iusto",
  fields: "dicta",
  key: "harum",
  oauthToken: "enim",
  prettyPrint: false,
  quotaUser: "accusamus",
  uploadType: "commodi",
  uploadProtocol: "repudiandae",
};

sdk.discovery.trafficdirectorDiscoveryClientStatus(req).then((res: TrafficdirectorDiscoveryClientStatusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->