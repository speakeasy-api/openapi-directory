<!-- Start SDK Example Usage -->
```typescript
import {
  CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest,
  CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  CertificateIssuanceConfigKeyAlgorithmEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  certificateIssuanceConfigInput: {
    certificateAuthorityConfig: {
      certificateAuthorityServiceConfig: {
        caPool: "provident",
      },
    },
    description: "distinctio",
    keyAlgorithm: CertificateIssuanceConfigKeyAlgorithmEnum.EcdsaP256,
    labels: {
      "nulla": "corrupti",
      "illum": "vel",
      "error": "deserunt",
    },
    lifetime: "suscipit",
    name: "iure",
    rotationWindowPercentage: 297534,
  },
  accessToken: "debitis",
  alt: AltEnum.Json,
  callback: "delectus",
  certificateIssuanceConfigId: "tempora",
  fields: "suscipit",
  key: "molestiae",
  oauthToken: "minus",
  parent: "placeat",
  prettyPrint: false,
  quotaUser: "voluptatum",
  uploadType: "iusto",
  uploadProtocol: "excepturi",
};

sdk.projects.certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(req).then((res: CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->