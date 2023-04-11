<!-- Start SDK Example Usage -->
```typescript
import {
  PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest,
  PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest = {
  dollarXgafv: XgafvEnum.Two,
  activateCertificateAuthorityRequest: {
    pemCaCertificate: "provident",
    requestId: "distinctio",
    subordinateConfig: {
      certificateAuthority: "quibusdam",
      pemIssuerChain: {
        pemCertificates: [
          "nulla",
          "corrupti",
          "illum",
        ],
      },
    },
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  name: "magnam",
  oauthToken: "debitis",
  prettyPrint: false,
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.projects.privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate(req).then((res: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->