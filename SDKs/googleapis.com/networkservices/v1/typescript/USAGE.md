<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest, NetworkservicesProjectsLocationsEndpointPoliciesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest = {
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
    endpointPolicyId: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    authorizationPolicy: "debitis",
    clientTlsPolicy: "voluptatum",
    description: "et",
    endpointMatcher: {
      metadataLabelMatcher: {
        metadataLabelMatchCriteria: "MATCH_ALL",
        metadataLabels: [
          {
            labelName: "et",
            labelValue: "voluptate",
          },
          {
            labelName: "iste",
            labelValue: "vitae",
          },
          {
            labelName: "totam",
            labelValue: "dolores",
          },
        ],
      },
    },
    labels: {
      "debitis": "vel",
      "odio": "dolore",
      "id": "aspernatur",
    },
    name: "accusantium",
    serverTlsPolicy: "totam",
    trafficPortSelector: {
      ports: [
        "quis",
        "est",
      ],
    },
    type: "GRPC_SERVER",
  },
};

sdk.projects.networkservicesProjectsLocationsEndpointPoliciesCreate(req).then((res: NetworkservicesProjectsLocationsEndpointPoliciesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->