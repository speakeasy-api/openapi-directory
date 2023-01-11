<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ConnectorsProjectsLocationsConnectionsActionsExecuteRequest, ConnectorsProjectsLocationsConnectionsActionsExecuteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ConnectorsProjectsLocationsConnectionsActionsExecuteRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    name: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    parameters: {
      "debitis": "voluptatum",
      "et": "ut",
      "dolorem": "et",
    },
  },
};

sdk.projects.connectorsProjectsLocationsConnectionsActionsExecute(req).then((res: ConnectorsProjectsLocationsConnectionsActionsExecuteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->