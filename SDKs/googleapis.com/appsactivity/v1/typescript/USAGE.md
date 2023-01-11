<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AppsactivityActivitiesListRequest, AppsactivityActivitiesListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AppsactivityActivitiesListRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    alt: "json",
    driveAncestorId: "voluptas",
    driveFileId: "culpa",
    fields: "expedita",
    groupingStrategy: "none",
    key: "dolor",
    oauthToken: "expedita",
    pageSize: 6044372234677422456,
    pageToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    source: "rerum",
    userId: "dicta",
    userIp: "debitis",
  },
};

sdk.activities.appsactivityActivitiesList(req).then((res: AppsactivityActivitiesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->