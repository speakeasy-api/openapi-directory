<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PlusActivitiesGetRequest, PlusActivitiesGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PlusActivitiesGetRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
    },
  },
  pathParams: {
    activityId: "sit",
  },
  queryParams: {
    alt: "json",
    fields: "culpa",
    key: "expedita",
    oauthToken: "consequuntur",
    prettyPrint: false,
    quotaUser: "expedita",
    userIp: "voluptas",
  },
};

sdk.activities.plusActivitiesGet(req).then((res: PlusActivitiesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->