# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/siteVerification/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/siteVerification/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  SiteVerificationWebResourceDeleteRequest,
  SiteVerificationWebResourceDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SiteVerificationWebResourceDeleteRequest = {
  alt: AltEnum.Json,
  fields: "corrupti",
  id: "provident",
  key: "distinctio",
  oauthToken: "quibusdam",
  prettyPrint: false,
  quotaUser: "unde",
  userIp: "nulla",
};

sdk.webResource.siteVerificationWebResourceDelete(req).then((res: SiteVerificationWebResourceDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### webResource

* `siteVerificationWebResourceDelete` - Relinquish ownership of a website or domain.
* `siteVerificationWebResourceGet` - Get the most current data for a website or domain.
* `siteVerificationWebResourceGetToken` - Get a verification token for placing on a website or domain.
* `siteVerificationWebResourceInsert` - Attempt verification of a website or domain.
* `siteVerificationWebResourceList` - Get the list of your verified websites and domains.
* `siteVerificationWebResourcePatch` - Modify the list of owners for your website or domain. This method supports patch semantics.
* `siteVerificationWebResourceUpdate` - Modify the list of owners for your website or domain.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

