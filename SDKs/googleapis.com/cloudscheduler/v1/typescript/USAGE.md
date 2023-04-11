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