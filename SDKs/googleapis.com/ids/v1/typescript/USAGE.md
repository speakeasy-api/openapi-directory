<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { IdsProjectsLocationsEndpointsCreateRequest, IdsProjectsLocationsEndpointsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: IdsProjectsLocationsEndpointsCreateRequest = {
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
    endpointId: "dolor",
    fields: "expedita",
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
    network: "et",
    severity: "SEVERITY_UNSPECIFIED",
    trafficLogs: true,
  },
};

sdk.projects.idsProjectsLocationsEndpointsCreate(req).then((res: IdsProjectsLocationsEndpointsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->