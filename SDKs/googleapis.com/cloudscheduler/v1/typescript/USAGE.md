<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CloudschedulerProjectsLocationsJobsCreateRequest, CloudschedulerProjectsLocationsJobsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudschedulerProjectsLocationsJobsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    appEngineHttpTarget: {
      appEngineRouting: {
        host: "dicta",
        instance: "debitis",
        service: "voluptatum",
        version: "et",
      },
      body: "ut",
      headers: {
        "et": "voluptate",
        "iste": "vitae",
        "totam": "dolores",
      },
      httpMethod: "POST",
      relativeUri: "debitis",
    },
    attemptDeadline: "vel",
    description: "odio",
    httpTarget: {
      body: "dolore",
      headers: {
        "aspernatur": "accusantium",
        "totam": "commodi",
      },
      httpMethod: "PATCH",
      oauthToken: {
        scope: "est",
        serviceAccountEmail: "aut",
      },
      oidcToken: {
        audience: "odit",
        serviceAccountEmail: "non",
      },
      uri: "voluptas",
    },
    lastAttemptTime: "omnis",
    name: "aut",
    pubsubTarget: {
      attributes: {
        "sed": "officiis",
      },
      data: "autem",
      topicName: "consectetur",
    },
    retryConfig: {
      maxBackoffDuration: "nobis",
      maxDoublings: 4345851588384648695,
      maxRetryDuration: "qui",
      minBackoffDuration: "recusandae",
      retryCount: 7561811714888168464,
    },
    schedule: "ipsum",
    scheduleTime: "eveniet",
    state: "UPDATE_FAILED",
    status: {
      code: 7338728586234333996,
      details: [
        {
          "exercitationem": "aut",
          "reprehenderit": "tempore",
          "maiores": "incidunt",
        },
      ],
      message: "dolor",
    },
    timeZone: "beatae",
    userUpdateTime: "veritatis",
  },
};

sdk.projects.cloudschedulerProjectsLocationsJobsCreate(req).then((res: CloudschedulerProjectsLocationsJobsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->