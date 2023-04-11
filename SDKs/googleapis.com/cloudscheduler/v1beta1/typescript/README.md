# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudscheduler/v1beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudscheduler/v1beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CloudschedulerProjectsLocationsJobsCreateRequest,
  CloudschedulerProjectsLocationsJobsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  JobStateEnum,
  HttpTargetHttpMethodEnum,
  AppEngineHttpTargetHttpMethodEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudschedulerProjectsLocationsJobsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  job: {
    appEngineHttpTarget: {
      appEngineRouting: {
        host: "provident",
        instance: "distinctio",
        service: "quibusdam",
        version: "unde",
      },
      body: "nulla",
      headers: {
        "illum": "vel",
        "error": "deserunt",
        "suscipit": "iure",
      },
      httpMethod: AppEngineHttpTargetHttpMethodEnum.Get,
      relativeUri: "debitis",
    },
    attemptDeadline: "ipsa",
    description: "delectus",
    httpTarget: {
      body: "tempora",
      headers: {
        "molestiae": "minus",
        "placeat": "voluptatum",
      },
      httpMethod: HttpTargetHttpMethodEnum.Head,
      oauthToken: {
        scope: "excepturi",
        serviceAccountEmail: "nisi",
      },
      oidcToken: {
        audience: "recusandae",
        serviceAccountEmail: "temporibus",
      },
      uri: "http://gloomy-blanket.name",
    },
    lastAttemptTime: "perferendis",
    legacyAppEngineCron: false,
    name: "ipsam",
    pubsubTarget: {
      attributes: {
        "sapiente": "quo",
        "odit": "at",
        "at": "maiores",
        "molestiae": "quod",
      },
      data: "quod",
      topicName: "esse",
    },
    retryConfig: {
      maxBackoffDuration: "totam",
      maxDoublings: 780529,
      maxRetryDuration: "dolorum",
      minBackoffDuration: "dicta",
      retryCount: 720633,
    },
    schedule: "officia",
    scheduleTime: "occaecati",
    state: JobStateEnum.StateUnspecified,
    status: {
      code: 537373,
      details: [
        {
          "totam": "beatae",
          "commodi": "molestiae",
          "modi": "qui",
          "impedit": "cum",
        },
        {
          "ipsum": "excepturi",
          "aspernatur": "perferendis",
        },
        {
          "natus": "sed",
          "iste": "dolor",
        },
        {
          "laboriosam": "hic",
          "saepe": "fuga",
          "in": "corporis",
        },
      ],
      message: "iste",
    },
    timeZone: "iure",
    userUpdateTime: "saepe",
  },
  accessToken: "quidem",
  alt: AltEnum.Json,
  callback: "ipsa",
  fields: "reiciendis",
  key: "est",
  oauthToken: "mollitia",
  parent: "laborum",
  prettyPrint: false,
  quotaUser: "dolores",
  uploadType: "dolorem",
  uploadProtocol: "corporis",
};

sdk.projects.cloudschedulerProjectsLocationsJobsCreate(req).then((res: CloudschedulerProjectsLocationsJobsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `cloudschedulerProjectsLocationsJobsCreate` - Creates a job.
* `cloudschedulerProjectsLocationsJobsDelete` - Deletes a job.
* `cloudschedulerProjectsLocationsJobsGet` - Gets a job.
* `cloudschedulerProjectsLocationsJobsList` - Lists jobs.
* `cloudschedulerProjectsLocationsJobsPatch` - Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.
* `cloudschedulerProjectsLocationsJobsPause` - Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.
* `cloudschedulerProjectsLocationsJobsResume` - Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.
* `cloudschedulerProjectsLocationsJobsRun` - Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
* `cloudschedulerProjectsLocationsList` - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

