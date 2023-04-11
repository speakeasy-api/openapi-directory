<!-- Start SDK Example Usage -->
```typescript
import {
  AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest,
  AdvisorynotificationsOrganizationsLocationsNotificationsGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  languageCode: "corrupti",
  name: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.organizations.advisorynotificationsOrganizationsLocationsNotificationsGet(req).then((res: AdvisorynotificationsOrganizationsLocationsNotificationsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->