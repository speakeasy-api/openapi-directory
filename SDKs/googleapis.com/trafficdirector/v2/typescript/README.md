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
import { TrafficdirectorDiscoveryClientStatusRequest, TrafficdirectorDiscoveryClientStatusResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TrafficdirectorDiscoveryClientStatusRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    oauthToken: "expedita",
    prettyPrint: true,
    quotaUser: "fugit",
    uploadType: "et",
    uploadProtocol: "nihil",
  },
  request: {
    nodeMatchers: [
      {
        nodeId: {
          exact: "dicta",
          ignoreCase: true,
          prefix: "voluptatum",
          regex: "et",
          safeRegex: {
            googleRe2: {
              maxProgramSize: 7144924247938981575,
            },
            regex: "dolorem",
          },
          suffix: "et",
        },
        nodeMetadatas: [
          {
            path: [
              {
                key: "vitae",
              },
              {
                key: "totam",
              },
              {
                key: "dolores",
              },
            ],
            value: {
              boolMatch: false,
              doubleMatch: {
                exact: 86.099998,
                range: {
                  end: 20.200001,
                  start: 12.200000,
                },
              },
              listMatch: {
                oneOf: {
                
                },
              },
              nullMatch: {
                "totam": "commodi",
                "quis": "est",
                "aut": "odit",
              },
              presentMatch: true,
              stringMatch: {
                exact: "voluptas",
                ignoreCase: true,
                prefix: "aut",
                regex: "illo",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 5558237345453186302,
                  },
                  regex: "officiis",
                },
                suffix: "autem",
              },
            },
          },
        ],
      },
      {
        nodeId: {
          exact: "consectetur",
          ignoreCase: false,
          prefix: "odio",
          regex: "qui",
          safeRegex: {
            googleRe2: {
              maxProgramSize: 388440063886460141,
            },
            regex: "at",
          },
          suffix: "ipsum",
        },
        nodeMetadatas: [
          {
            path: [
              {
                key: "sint",
              },
              {
                key: "inventore",
              },
            ],
            value: {
              boolMatch: true,
              doubleMatch: {
                exact: 56.099998,
                range: {
                  end: 30.200001,
                  start: 97.099998,
                },
              },
              listMatch: {
                oneOf: {
                
                },
              },
              nullMatch: {
                "beatae": "veritatis",
                "in": "et",
              },
              presentMatch: false,
              stringMatch: {
                exact: "ipsum",
                ignoreCase: true,
                prefix: "dolores",
                regex: "placeat",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 2118716725206170867,
                  },
                  regex: "rerum",
                },
                suffix: "mollitia",
              },
            },
          },
          {
            path: [
              {
                key: "quam",
              },
              {
                key: "reprehenderit",
              },
            ],
            value: {
              boolMatch: true,
              doubleMatch: {
                exact: 78.099998,
                range: {
                  end: 31.100000,
                  start: 13.100000,
                },
              },
              listMatch: {
                oneOf: {
                
                },
              },
              nullMatch: {
                "ab": "neque",
                "ullam": "et",
                "accusantium": "esse",
              },
              presentMatch: true,
              stringMatch: {
                exact: "quam",
                ignoreCase: false,
                prefix: "cumque",
                regex: "soluta",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 759605945513541974,
                  },
                  regex: "voluptates",
                },
                suffix: "magni",
              },
            },
          },
        ],
      },
      {
        nodeId: {
          exact: "et",
          ignoreCase: true,
          prefix: "qui",
          regex: "earum",
          safeRegex: {
            googleRe2: {
              maxProgramSize: 4391202566038595699,
            },
            regex: "omnis",
          },
          suffix: "ut",
        },
        nodeMetadatas: [
          {
            path: [
              {
                key: "commodi",
              },
              {
                key: "error",
              },
            ],
            value: {
              boolMatch: false,
              doubleMatch: {
                exact: 3.200000,
                range: {
                  end: 19.100000,
                  start: 80.199997,
                },
              },
              listMatch: {
                oneOf: {
                
                },
              },
              nullMatch: {
                "aut": "quas",
              },
              presentMatch: true,
              stringMatch: {
                exact: "laudantium",
                ignoreCase: true,
                prefix: "ipsa",
                regex: "expedita",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 8204648627352676445,
                  },
                  regex: "perferendis",
                },
                suffix: "atque",
              },
            },
          },
          {
            path: [
              {
                key: "quisquam",
              },
            ],
            value: {
              boolMatch: false,
              doubleMatch: {
                exact: 42.099998,
                range: {
                  end: 15.200000,
                  start: 66.099998,
                },
              },
              listMatch: {
                oneOf: {
                
                },
              },
              nullMatch: {
                "quis": "cumque",
                "minima": "necessitatibus",
                "est": "quis",
              },
              presentMatch: true,
              stringMatch: {
                exact: "labore",
                ignoreCase: false,
                prefix: "impedit",
                regex: "ad",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 8953538234431013647,
                  },
                  regex: "vel",
                },
                suffix: "qui",
              },
            },
          },
          {
            path: [
              {
                key: "nihil",
              },
              {
                key: "tempora",
              },
            ],
            value: {
              boolMatch: true,
              doubleMatch: {
                exact: 59.099998,
                range: {
                  end: 68.099998,
                  start: 66.099998,
                },
              },
              listMatch: {
                oneOf: {
                
                },
              },
              nullMatch: {
                "placeat": "qui",
                "nisi": "quis",
              },
              presentMatch: false,
              stringMatch: {
                exact: "porro",
                ignoreCase: true,
                prefix: "et",
                regex: "accusamus",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 7953274849279451463,
                  },
                  regex: "laborum",
                },
                suffix: "rerum",
              },
            },
          },
        ],
      },
    ],
  },
};

sdk.discovery.trafficdirectorDiscoveryClientStatus(req).then((res: TrafficdirectorDiscoveryClientStatusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### discovery

* `trafficdirectorDiscoveryClientStatus`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
