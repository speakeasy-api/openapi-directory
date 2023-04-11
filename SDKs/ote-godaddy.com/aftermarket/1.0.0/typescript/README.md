# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ote-godaddy.com/aftermarket/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ote-godaddy.com/aftermarket/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  .,
  AddExpiryListingsJsonResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: . = [
  {
    domain: "provident",
    expiresAt: "distinctio",
    losingRegistrarId: 844266,
    pageViewsMonthly: 602763,
    revenueMonthly: 857946,
  },
  {
    domain: "corrupti",
    expiresAt: "illum",
    losingRegistrarId: 423655,
    pageViewsMonthly: 623564,
    revenueMonthly: 645894,
  },
  {
    domain: "suscipit",
    expiresAt: "iure",
    losingRegistrarId: 297534,
    pageViewsMonthly: 891773,
    revenueMonthly: 56713,
  },
];

sdk.v1.addExpiryListingsJson(req).then((res: AddExpiryListingsJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### v1

* `addExpiryListingsJson` - Add expiry listings into GoDaddy Auction
* `addExpiryListingsRaw` - Add expiry listings into GoDaddy Auction
* `deleteListings` - Remove listings from GoDaddy Auction
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

