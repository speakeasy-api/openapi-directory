<!-- Start SDK Example Usage -->
```typescript
import {
  GroupsSettingsGroupsGetRequest,
  GroupsSettingsGroupsGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GroupsSettingsGroupsGetRequest = {
  alt: AltEnum.Json,
  fields: "provident",
  groupUniqueId: "distinctio",
  key: "quibusdam",
  oauthToken: "unde",
  prettyPrint: false,
  quotaUser: "nulla",
  userIp: "corrupti",
};

sdk.groups.groupsSettingsGroupsGet(req).then((res: GroupsSettingsGroupsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->