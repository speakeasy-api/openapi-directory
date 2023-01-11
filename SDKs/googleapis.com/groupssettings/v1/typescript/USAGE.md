<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GroupsSettingsGroupsGetRequest, GroupsSettingsGroupsGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GroupsSettingsGroupsGetRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    groupUniqueId: "sit",
  },
  queryParams: {
    alt: "atom",
    fields: "culpa",
    key: "expedita",
    oauthToken: "consequuntur",
    prettyPrint: false,
    quotaUser: "expedita",
    userIp: "voluptas",
  },
};

sdk.groups.groupsSettingsGroupsGet(req).then((res: GroupsSettingsGroupsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->