<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest, PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    name: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    pemCaCertificate: "dicta",
    requestId: "debitis",
    subordinateConfig: {
      certificateAuthority: "voluptatum",
      pemIssuerChain: {
        pemCertificates: [
          "ut",
        ],
      },
    },
  },
};

sdk.projects.privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate(req).then((res: PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->