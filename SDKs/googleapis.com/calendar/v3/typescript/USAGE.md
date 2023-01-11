<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CalendarAclDeleteRequest, CalendarAclDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CalendarAclDeleteRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    calendarId: "sit",
    ruleId: "voluptas",
  },
  queryParams: {
    alt: "json",
    fields: "expedita",
    key: "consequuntur",
    oauthToken: "dolor",
    prettyPrint: true,
    quotaUser: "voluptas",
    userIp: "fugit",
  },
};

sdk.acl.calendarAclDelete(req).then((res: CalendarAclDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->