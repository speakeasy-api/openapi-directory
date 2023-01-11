<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { WorkloadmanagerProjectsLocationsEvaluationsCreateRequest, WorkloadmanagerProjectsLocationsEvaluationsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: WorkloadmanagerProjectsLocationsEvaluationsCreateRequest = {
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
    evaluationId: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    requestId: "rerum",
    uploadType: "dicta",
    uploadProtocol: "debitis",
  },
  request: {
    description: "voluptatum",
    labels: {
      "ut": "dolorem",
    },
    name: "et",
    resourceFilter: {
      gceInstanceFilter: {
        serviceAccounts: [
          "iste",
        ],
      },
      inclusionLabels: {
        "totam": "dolores",
      },
      resourceIdPatterns: [
        "debitis",
        "vel",
        "odio",
      ],
      scopes: [
        "id",
        "aspernatur",
      ],
    },
    resourceStatus: {
      rulesNewerVersions: [
        "totam",
        "commodi",
        "quis",
      ],
      state: "CREATING",
    },
    ruleNames: [
      "odit",
      "non",
      "voluptas",
    ],
  },
};

sdk.projects.workloadmanagerProjectsLocationsEvaluationsCreate(req).then((res: WorkloadmanagerProjectsLocationsEvaluationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->