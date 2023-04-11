<!-- Start SDK Example Usage -->
```typescript
import {
  CloudsearchDebugDatasourcesItemsCheckAccessRequest,
  CloudsearchDebugDatasourcesItemsCheckAccessResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudsearchDebugDatasourcesItemsCheckAccessRequest = {
  dollarXgafv: XgafvEnum.Two,
  principal: {
    groupResourceName: "provident",
    gsuitePrincipal: {
      gsuiteDomain: false,
      gsuiteGroupEmail: "distinctio",
      gsuiteUserEmail: "quibusdam",
    },
    userResourceName: "unde",
  },
  accessToken: "nulla",
  alt: AltEnum.Media,
  callback: "illum",
  debugOptionsEnableDebugging: false,
  fields: "vel",
  key: "error",
  name: "deserunt",
  oauthToken: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.debug.cloudsearchDebugDatasourcesItemsCheckAccess(req).then((res: CloudsearchDebugDatasourcesItemsCheckAccessResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->