<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { EventarcProjectsLocationsChannelConnectionsCreateRequest, EventarcProjectsLocationsChannelConnectionsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: EventarcProjectsLocationsChannelConnectionsCreateRequest = {
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
    channelConnectionId: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    activationToken: "debitis",
    channel: "voluptatum",
    name: "et",
  },
};

sdk.projects.eventarcProjectsLocationsChannelConnectionsCreate(req).then((res: EventarcProjectsLocationsChannelConnectionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->