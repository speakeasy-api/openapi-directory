<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { EventarcProjectsLocationsListRequest, EventarcProjectsLocationsListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: EventarcProjectsLocationsListRequest = {
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
    filter: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    pageSize: 1543572285742637646,
    pageToken: "nihil",
    prettyPrint: true,
    quotaUser: "dicta",
    uploadType: "debitis",
    uploadProtocol: "voluptatum",
  },
};

sdk.projects.eventarcProjectsLocationsList(req).then((res: EventarcProjectsLocationsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->