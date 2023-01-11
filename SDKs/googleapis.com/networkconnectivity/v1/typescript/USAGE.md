<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest, NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest = {
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
    hubId: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    requestId: "rerum",
    uploadType: "dicta",
    uploadProtocol: "debitis",
  },
  request: {
    description: "voluptatum",
    labels: {
      "ut": "dolorem",
    },
    name: "et",
    routingVpcs: [
      {
        uri: "iste",
      },
    ],
  },
};

sdk.projects.networkconnectivityProjectsLocationsGlobalHubsCreate(req).then((res: NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->