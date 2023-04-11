# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/chromeuxreport/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/chromeuxreport/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ChromeuxreportRecordsQueryHistoryRecordRequest,
  ChromeuxreportRecordsQueryHistoryRecordResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  QueryHistoryRequestFormFactorEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ChromeuxreportRecordsQueryHistoryRecordRequest = {
  dollarXgafv: XgafvEnum.Two,
  queryHistoryRequest: {
    formFactor: QueryHistoryRequestFormFactorEnum.Desktop,
    metrics: [
      "quibusdam",
      "unde",
      "nulla",
    ],
    origin: "corrupti",
    url: "illum",
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  oauthToken: "magnam",
  prettyPrint: false,
  quotaUser: "debitis",
  uploadType: "ipsa",
  uploadProtocol: "delectus",
};

sdk.records.chromeuxreportRecordsQueryHistoryRecord(req).then((res: ChromeuxreportRecordsQueryHistoryRecordResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### records

* `chromeuxreportRecordsQueryHistoryRecord` - Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.
* `chromeuxreportRecordsQueryRecord` - Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

