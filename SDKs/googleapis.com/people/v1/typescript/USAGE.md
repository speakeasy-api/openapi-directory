<!-- Start SDK Example Usage -->
```typescript
import {
  PeopleContactGroupsBatchGetRequest,
  PeopleContactGroupsBatchGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PeopleContactGroupsBatchGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  groupFields: "nulla",
  key: "corrupti",
  maxMembers: 847252,
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  resourceNames: [
    "suscipit",
    "iure",
    "magnam",
  ],
  uploadType: "debitis",
  uploadProtocol: "ipsa",
};

sdk.contactGroups.peopleContactGroupsBatchGet(req).then((res: PeopleContactGroupsBatchGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->