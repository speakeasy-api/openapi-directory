# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/youtubereporting/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/youtubereporting/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  YoutubereportingJobsCreateRequest,
  YoutubereportingJobsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: YoutubereportingJobsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  job: {
    createTime: "provident",
    expireTime: "distinctio",
    id: "quibusdam",
    name: "unde",
    reportTypeId: "nulla",
    systemManaged: false,
  },
  accessToken: "corrupti",
  alt: AltEnum.Proto,
  callback: "vel",
  fields: "error",
  key: "deserunt",
  oauthToken: "suscipit",
  onBehalfOfContentOwner: "iure",
  prettyPrint: false,
  quotaUser: "magnam",
  uploadType: "debitis",
  uploadProtocol: "ipsa",
};

sdk.jobs.youtubereportingJobsCreate(req).then((res: YoutubereportingJobsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### jobs

* `youtubereportingJobsCreate` - Creates a job and returns it.
* `youtubereportingJobsDelete` - Deletes a job.
* `youtubereportingJobsGet` - Gets a job.
* `youtubereportingJobsList` - Lists jobs.
* `youtubereportingJobsReportsGet` - Gets the metadata of a specific report.
* `youtubereportingJobsReportsList` - Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.

### media

* `youtubereportingMediaDownload` - Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.

### reportTypes

* `youtubereportingReportTypesList` - Lists report types.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

