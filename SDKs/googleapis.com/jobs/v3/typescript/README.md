# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/jobs/v3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/jobs/v3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  JobsProjectsClientEventsCreateRequest,
  JobsProjectsClientEventsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  JobEventTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: JobsProjectsClientEventsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  createClientEventRequest: {
    clientEvent: {
      createTime: "provident",
      eventId: "distinctio",
      extraInfo: {
        "unde": "nulla",
        "corrupti": "illum",
        "vel": "error",
        "deserunt": "suscipit",
      },
      jobEvent: {
        jobs: [
          "magnam",
          "debitis",
        ],
        type: JobEventTypeEnum.JobEventTypeUnspecified,
      },
      parentEventId: "delectus",
      requestId: "tempora",
    },
  },
  accessToken: "suscipit",
  alt: AltEnum.Media,
  callback: "minus",
  fields: "placeat",
  key: "voluptatum",
  oauthToken: "iusto",
  parent: "excepturi",
  prettyPrint: false,
  quotaUser: "nisi",
  uploadType: "recusandae",
  uploadProtocol: "temporibus",
};

sdk.projects.jobsProjectsClientEventsCreate(req).then((res: JobsProjectsClientEventsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `jobsProjectsClientEventsCreate` - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* `jobsProjectsCompaniesCreate` - Creates a new company entity.
* `jobsProjectsCompaniesList` - Lists all companies associated with the service account.
* `jobsProjectsComplete` - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* `jobsProjectsJobsBatchDelete` - Deletes a list of Jobs by filter.
* `jobsProjectsJobsCreate` - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* `jobsProjectsJobsDelete` - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* `jobsProjectsJobsGet` - Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
* `jobsProjectsJobsList` - Lists jobs by filter.
* `jobsProjectsJobsPatch` - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* `jobsProjectsJobsSearch` - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* `jobsProjectsJobsSearchForAlert` - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

