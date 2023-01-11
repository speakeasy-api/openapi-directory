<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AppengineAppsAuthorizedCertificatesCreateRequest, AppengineAppsAuthorizedCertificatesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AppengineAppsAuthorizedCertificatesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    appsId: "sit",
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
    certificateRawData: {
      privateKey: "dicta",
      publicCertificate: "debitis",
    },
    displayName: "voluptatum",
    domainMappingsCount: 2339563716805116249,
    domainNames: [
      "dolorem",
      "et",
      "voluptate",
    ],
    expireTime: "iste",
    id: "vitae",
    managedCertificate: {
      lastRenewalTime: "totam",
      status: "FAILED_RETRYING_NOT_VISIBLE",
    },
    name: "illum",
    visibleDomainMappings: [
      "vel",
    ],
  },
};

sdk.apps.appengineAppsAuthorizedCertificatesCreate(req).then((res: AppengineAppsAuthorizedCertificatesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->