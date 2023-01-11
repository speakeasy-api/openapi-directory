<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest, CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    certificateIssuanceConfigId: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    certificateAuthorityConfig: {
      certificateAuthorityServiceConfig: {
        caPool: "debitis",
      },
    },
    description: "voluptatum",
    keyAlgorithm: "KEY_ALGORITHM_UNSPECIFIED",
    labels: {
      "dolorem": "et",
      "voluptate": "iste",
      "vitae": "totam",
    },
    lifetime: "dolores",
    name: "illum",
    rotationWindowPercentage: 6392442863481646880,
  },
};

sdk.projects.certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(req).then((res: CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->