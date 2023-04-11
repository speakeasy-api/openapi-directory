<!-- Start SDK Example Usage -->
```typescript
import {
  NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest,
  NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  AuthorizationPolicyActionEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  authorizationPolicyInput: {
    action: AuthorizationPolicyActionEnum.Allow,
    description: "distinctio",
    labels: {
      "unde": "nulla",
      "corrupti": "illum",
      "vel": "error",
      "deserunt": "suscipit",
    },
    name: "iure",
    rules: [
      {
        destinations: [
          {
            hosts: [
              "delectus",
            ],
            httpHeaderMatch: {
              headerName: "tempora",
              regexMatch: "suscipit",
            },
            methods: [
              "minus",
              "placeat",
            ],
            ports: [
              479977,
              568045,
              392785,
            ],
          },
          {
            hosts: [
              "temporibus",
              "ab",
              "quis",
              "veritatis",
            ],
            httpHeaderMatch: {
              headerName: "deserunt",
              regexMatch: "perferendis",
            },
            methods: [
              "repellendus",
              "sapiente",
            ],
            ports: [
              140350,
              870013,
              870088,
              978619,
            ],
          },
          {
            hosts: [
              "quod",
              "quod",
            ],
            httpHeaderMatch: {
              headerName: "esse",
              regexMatch: "totam",
            },
            methods: [
              "dolorum",
              "dicta",
              "nam",
              "officia",
            ],
            ports: [
              143353,
              537373,
              944669,
            ],
          },
          {
            hosts: [
              "totam",
              "beatae",
              "commodi",
              "molestiae",
            ],
            httpHeaderMatch: {
              headerName: "modi",
              regexMatch: "qui",
            },
            methods: [
              "cum",
              "esse",
              "ipsum",
              "excepturi",
            ],
            ports: [
              18789,
            ],
          },
        ],
        sources: [
          {
            ipBlocks: [
              "sed",
              "iste",
              "dolor",
            ],
            principals: [
              "laboriosam",
              "hic",
              "saepe",
            ],
          },
          {
            ipBlocks: [
              "in",
              "corporis",
              "iste",
            ],
            principals: [
              "saepe",
              "quidem",
            ],
          },
        ],
      },
      {
        destinations: [
          {
            hosts: [
              "reiciendis",
            ],
            httpHeaderMatch: {
              headerName: "est",
              regexMatch: "mollitia",
            },
            methods: [
              "dolores",
              "dolorem",
              "corporis",
            ],
            ports: [
              750686,
            ],
          },
        ],
        sources: [
          {
            ipBlocks: [
              "nemo",
              "minima",
              "excepturi",
            ],
            principals: [
              "iure",
            ],
          },
          {
            ipBlocks: [
              "doloribus",
              "sapiente",
              "architecto",
            ],
            principals: [
              "dolorem",
              "culpa",
              "consequuntur",
            ],
          },
        ],
      },
    ],
  },
  accessToken: "repellat",
  alt: AltEnum.Media,
  authorizationPolicyId: "occaecati",
  callback: "numquam",
  fields: "commodi",
  key: "quam",
  oauthToken: "molestiae",
  parent: "velit",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "quia",
  uploadProtocol: "quis",
};

sdk.projects.networksecurityProjectsLocationsAuthorizationPoliciesCreate(req).then((res: NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->