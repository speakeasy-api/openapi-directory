<!-- Start SDK Example Usage -->
```typescript
import {
  CloudresourcemanagerOrganizationsGetRequest,
  CloudresourcemanagerOrganizationsGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudresourcemanagerOrganizationsGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  name: "corrupti",
  oauthToken: "illum",
  organizationId: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.organizations.cloudresourcemanagerOrganizationsGet(req).then((res: CloudresourcemanagerOrganizationsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->