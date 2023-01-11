<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { LicensingLicenseAssignmentsDeleteRequest, LicensingLicenseAssignmentsDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: LicensingLicenseAssignmentsDeleteRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    productId: "sit",
    skuId: "voluptas",
    userId: "culpa",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "consequuntur",
    alt: "media",
    callback: "expedita",
    fields: "voluptas",
    key: "fugit",
    oauthToken: "et",
    prettyPrint: true,
    quotaUser: "rerum",
    uploadType: "dicta",
    uploadProtocol: "debitis",
  },
};

sdk.licenseAssignments.licensingLicenseAssignmentsDelete(req).then((res: LicensingLicenseAssignmentsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->