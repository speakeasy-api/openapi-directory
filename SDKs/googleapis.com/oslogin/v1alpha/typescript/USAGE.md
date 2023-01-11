<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { OsloginUsersGetLoginProfileRequest, OsloginUsersGetLoginProfileResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: OsloginUsersGetLoginProfileRequest = {
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
    operatingSystemType: "OPERATING_SYSTEM_TYPE_UNSPECIFIED",
    prettyPrint: false,
    projectId: "nihil",
    quotaUser: "rerum",
    systemId: "dicta",
    uploadType: "debitis",
    uploadProtocol: "voluptatum",
    view: "LOGIN_PROFILE_VIEW_UNSPECIFIED",
  },
};

sdk.users.osloginUsersGetLoginProfile(req).then((res: OsloginUsersGetLoginProfileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->