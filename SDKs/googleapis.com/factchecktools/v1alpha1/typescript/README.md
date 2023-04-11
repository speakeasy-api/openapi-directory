# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/factchecktools/v1alpha1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/factchecktools/v1alpha1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  FactchecktoolsClaimsSearchRequest,
  FactchecktoolsClaimsSearchResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FactchecktoolsClaimsSearchRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  languageCode: "corrupti",
  maxAgeDays: 847252,
  oauthToken: "vel",
  offset: 623564,
  pageSize: 645894,
  pageToken: "suscipit",
  prettyPrint: false,
  query: "iure",
  quotaUser: "magnam",
  reviewPublisherSiteFilter: "debitis",
  uploadType: "ipsa",
  uploadProtocol: "delectus",
};

sdk.claims.factchecktoolsClaimsSearch(req).then((res: FactchecktoolsClaimsSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### claims

* `factchecktoolsClaimsSearch` - Search through fact-checked claims.

### pages

* `factchecktoolsPagesCreate` - Create `ClaimReview` markup on a page.
* `factchecktoolsPagesDelete` - Delete all `ClaimReview` markup on a page.
* `factchecktoolsPagesGet` - Get all `ClaimReview` markup on a page.
* `factchecktoolsPagesList` - List the `ClaimReview` markup pages for a specific URL or for an organization.
* `factchecktoolsPagesUpdate` - Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

