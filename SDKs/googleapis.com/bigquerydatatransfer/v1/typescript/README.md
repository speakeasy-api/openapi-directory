# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/bigquerydatatransfer/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/bigquerydatatransfer/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest,
  BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest = {
  dollarXgafv: XgafvEnum.Two,
  requestBody: {
    "distinctio": "quibusdam",
    "unde": "nulla",
    "corrupti": "illum",
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  name: "magnam",
  oauthToken: "debitis",
  prettyPrint: false,
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.projects.bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds(req).then((res: BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds` - Returns true if valid credentials exist for the given data source and requesting user.
* `bigquerydatatransferProjectsLocationsDataSourcesList` - Lists supported data sources and returns their settings.
* `bigquerydatatransferProjectsLocationsEnrollDataSources` - Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).
* `bigquerydatatransferProjectsLocationsList` - Lists information about the supported locations for this service.
* `bigquerydatatransferProjectsTransferConfigsCreate` - Creates a new data transfer configuration.
* `bigquerydatatransferProjectsTransferConfigsList` - Returns information about all transfer configs owned by a project in the specified location.
* `bigquerydatatransferProjectsTransferConfigsPatch` - Updates a data transfer configuration. All fields must be set, even if they are not updated.
* `bigquerydatatransferProjectsTransferConfigsRunsDelete` - Deletes the specified transfer run.
* `bigquerydatatransferProjectsTransferConfigsRunsGet` - Returns information about the particular transfer run.
* `bigquerydatatransferProjectsTransferConfigsRunsList` - Returns information about running and completed transfer runs.
* `bigquerydatatransferProjectsTransferConfigsRunsTransferLogsList` - Returns log messages for the transfer run.
* `bigquerydatatransferProjectsTransferConfigsScheduleRuns` - Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
* `bigquerydatatransferProjectsTransferConfigsStartManualRuns` - Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

