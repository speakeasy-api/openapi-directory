<!-- Start SDK Example Usage -->
```typescript
import {
  AppengineAppsAuthorizedCertificatesCreateRequest,
  AppengineAppsAuthorizedCertificatesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  ManagedCertificateStatusEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AppengineAppsAuthorizedCertificatesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  authorizedCertificate: {
    certificateRawData: {
      privateKey: "provident",
      publicCertificate: "distinctio",
    },
    displayName: "quibusdam",
    domainMappingsCount: 602763,
    domainNames: [
      "corrupti",
      "illum",
      "vel",
      "error",
    ],
    expireTime: "deserunt",
    id: "suscipit",
    managedCertificate: {
      lastRenewalTime: "iure",
      status: ManagedCertificateStatusEnum.Pending,
    },
    name: "debitis",
    visibleDomainMappings: [
      "delectus",
    ],
  },
  accessToken: "tempora",
  alt: AltEnum.Media,
  appsId: "molestiae",
  callback: "minus",
  fields: "placeat",
  key: "voluptatum",
  oauthToken: "iusto",
  prettyPrint: false,
  quotaUser: "excepturi",
  uploadType: "nisi",
  uploadProtocol: "recusandae",
};

sdk.apps.appengineAppsAuthorizedCertificatesCreate(req).then((res: AppengineAppsAuthorizedCertificatesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->