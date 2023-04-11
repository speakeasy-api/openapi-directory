# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/pagespeedonline/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/pagespeedonline/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  PagespeedonlinePagespeedapiRunpagespeedRequest,
  PagespeedonlinePagespeedapiRunpagespeedResponse,
  PagespeedonlinePagespeedapiRunpagespeedStrategyEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PagespeedonlinePagespeedapiRunpagespeedRequest = {
  alt: AltEnum.Json,
  fields: "corrupti",
  filterThirdPartyResources: false,
  key: "provident",
  locale: "distinctio",
  oauthToken: "quibusdam",
  prettyPrint: false,
  quotaUser: "unde",
  rule: [
    "corrupti",
    "illum",
    "vel",
    "error",
  ],
  screenshot: false,
  strategy: PagespeedonlinePagespeedapiRunpagespeedStrategyEnum.Mobile,
  url: "suscipit",
  userIp: "iure",
};

sdk.pagespeedapi.pagespeedonlinePagespeedapiRunpagespeed(req).then((res: PagespeedonlinePagespeedapiRunpagespeedResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### pagespeedapi

* `pagespeedonlinePagespeedapiRunpagespeed` - Runs PageSpeed analysis on the page at the specified URL, and returns a PageSpeed score, a list of suggestions to make that page faster, and other information.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

