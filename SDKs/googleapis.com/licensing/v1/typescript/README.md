# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/licensing/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/licensing/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  LicensingLicenseAssignmentsDeleteRequest,
  LicensingLicenseAssignmentsDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: LicensingLicenseAssignmentsDeleteRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  prettyPrint: false,
  productId: "illum",
  quotaUser: "vel",
  skuId: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
  userId: "iure",
};

sdk.licenseAssignments.licensingLicenseAssignmentsDelete(req).then((res: LicensingLicenseAssignmentsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### licenseAssignments

* `licensingLicenseAssignmentsDelete` - Revoke a license.
* `licensingLicenseAssignmentsGet` - Get a specific user's license by product SKU.
* `licensingLicenseAssignmentsInsert` - Assign a license.
* `licensingLicenseAssignmentsListForProduct` - List all users assigned licenses for a specific product SKU.
* `licensingLicenseAssignmentsListForProductAndSku` - List all users assigned licenses for a specific product SKU.
* `licensingLicenseAssignmentsPatch` - Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
* `licensingLicenseAssignmentsUpdate` - Reassign a user's product SKU with a different SKU in the same product.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

