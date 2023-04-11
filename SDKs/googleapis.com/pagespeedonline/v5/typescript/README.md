# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/pagespeedonline/v5/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/pagespeedonline/v5/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  PagespeedonlinePagespeedapiRunpagespeedRequest,
  PagespeedonlinePagespeedapiRunpagespeedResponse,
  PagespeedonlinePagespeedapiRunpagespeedCategoryEnum,
  PagespeedonlinePagespeedapiRunpagespeedStrategyEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PagespeedonlinePagespeedapiRunpagespeedRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  captchaToken: "unde",
  category: [
    PagespeedonlinePagespeedapiRunpagespeedCategoryEnum.Performance,
    PagespeedonlinePagespeedapiRunpagespeedCategoryEnum.Seo,
    PagespeedonlinePagespeedapiRunpagespeedCategoryEnum.BestPractices,
    PagespeedonlinePagespeedapiRunpagespeedCategoryEnum.Performance,
  ],
  fields: "deserunt",
  key: "suscipit",
  locale: "iure",
  oauthToken: "magnam",
  prettyPrint: false,
  quotaUser: "debitis",
  strategy: PagespeedonlinePagespeedapiRunpagespeedStrategyEnum.StrategyUnspecified,
  uploadType: "delectus",
  uploadProtocol: "tempora",
  url: "suscipit",
  utmCampaign: "molestiae",
  utmSource: "minus",
};

sdk.pagespeedapi.pagespeedonlinePagespeedapiRunpagespeed(req).then((res: PagespeedonlinePagespeedapiRunpagespeedResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### pagespeedapi

* `pagespeedonlinePagespeedapiRunpagespeed` - Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

