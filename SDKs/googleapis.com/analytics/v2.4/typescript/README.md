# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/analytics/v2.4/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/analytics/v2.4/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AnalyticsDataGetRequest,
  AnalyticsDataGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AnalyticsDataGetRequest = {
  alt: AltEnum.Atom,
  dimensions: "corrupti",
  endDate: "provident",
  fields: "distinctio",
  filters: "quibusdam",
  ids: "unde",
  key: "nulla",
  maxResults: 544883,
  metrics: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  segment: "deserunt",
  sort: "suscipit",
  startDate: "iure",
  startIndex: 297534,
  userIp: "debitis",
};

sdk.data.analyticsDataGet(req).then((res: AnalyticsDataGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### data

* `analyticsDataGet` - Returns Analytics report data for a view (profile).

### management

* `analyticsManagementAccountsList` - Lists all accounts to which the user has access.
* `analyticsManagementGoalsList` - Lists goals to which the user has access.
* `analyticsManagementProfilesList` - Lists views (profiles) to which the user has access.
* `analyticsManagementSegmentsList` - Lists advanced segments to which the user has access.
* `analyticsManagementWebpropertiesList` - Lists web properties to which the user has access.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

