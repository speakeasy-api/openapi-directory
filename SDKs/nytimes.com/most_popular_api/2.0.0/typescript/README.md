# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nytimes.com/most_popular_api/2.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nytimes.com/most_popular_api/2.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GETMostemailedSectionTimePeriodJsonRequest,
  GETMostemailedSectionTimePeriodJsonResponse
} from "openapi/dist/sdk/models/operations";
import {
  TimePeriodEnum,
  SectionEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GETMostemailedSectionTimePeriodJsonRequest = {
  section: SectionEnum.PublicEditor,
  timePeriod: TimePeriodEnum.Seven,
};

sdk.getMostemailedSectionTimePeriodJson(req).then((res: GETMostemailedSectionTimePeriodJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getMostemailedSectionTimePeriodJson` - Most Emailed by Section & Time Period
* `getMostsharedSectionTimePeriodJson` - Most Shared by Section & Time Period
* `getMostviewedSectionTimePeriodJson` - Most Viewed by Section & Time Period
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

