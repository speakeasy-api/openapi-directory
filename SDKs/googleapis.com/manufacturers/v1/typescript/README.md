# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/manufacturers/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/manufacturers/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ManufacturersAccountsLanguagesProductCertificationsDeleteRequest,
  ManufacturersAccountsLanguagesProductCertificationsDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ManufacturersAccountsLanguagesProductCertificationsDeleteRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  name: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.accounts.manufacturersAccountsLanguagesProductCertificationsDelete(req).then((res: ManufacturersAccountsLanguagesProductCertificationsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `manufacturersAccountsLanguagesProductCertificationsDelete` - Deletes a product certification by its name. This method can only be called by certification bodies.
* `manufacturersAccountsLanguagesProductCertificationsGet` - Gets a product certification by its name. This method can only be called by certification bodies.
* `manufacturersAccountsLanguagesProductCertificationsList` - Lists product certifications from a specified certification body. This method can only be called by certification bodies.
* `manufacturersAccountsLanguagesProductCertificationsPatch` - Updates (or creates if allow_missing = true) a product certification which links certifications with products. This method can only be called by certification bodies.
* `manufacturersAccountsProductsDelete` - Deletes the product from a Manufacturer Center account.
* `manufacturersAccountsProductsGet` - Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.
* `manufacturersAccountsProductsList` - Lists all the products in a Manufacturer Center account.
* `manufacturersAccountsProductsUpdate` - Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

