<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest, NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest = {
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
    authorizationPolicyId: "consequuntur",
    callback: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    action: "ACTION_UNSPECIFIED",
    description: "voluptatum",
    labels: {
      "ut": "dolorem",
    },
    name: "et",
    rules: [
      {
        destinations: [
          {
            hosts: [
              "totam",
            ],
            httpHeaderMatch: {
              headerName: "dolores",
              regexMatch: "illum",
            },
            methods: [
              "vel",
            ],
            ports: [
              6303220950515014660,
            ],
          },
          {
            hosts: [
              "aspernatur",
              "accusantium",
            ],
            httpHeaderMatch: {
              headerName: "totam",
              regexMatch: "commodi",
            },
            methods: [
              "est",
              "aut",
              "odit",
            ],
            ports: [
              167566062957544642,
              4778690082005258714,
              1059542851699319360,
            ],
          },
          {
            hosts: [
              "sed",
            ],
            httpHeaderMatch: {
              headerName: "officiis",
              regexMatch: "autem",
            },
            methods: [
              "nobis",
            ],
            ports: [
              7699391924090763411,
            ],
          },
        ],
        sources: [
          {
            ipBlocks: [
              "ipsum",
              "eveniet",
            ],
            principals: [
              "sint",
              "inventore",
            ],
          },
          {
            ipBlocks: [
              "exercitationem",
              "aut",
              "reprehenderit",
            ],
            principals: [
              "maiores",
              "incidunt",
              "dolor",
            ],
          },
          {
            ipBlocks: [
              "veritatis",
              "in",
              "et",
            ],
            principals: [
              "ipsum",
              "ex",
            ],
          },
        ],
      },
    ],
  },
};

sdk.projects.networksecurityProjectsLocationsAuthorizationPoliciesCreate(req).then((res: NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->