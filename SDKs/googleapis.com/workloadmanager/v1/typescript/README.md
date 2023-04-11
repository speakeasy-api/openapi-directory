# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/workloadmanager/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/workloadmanager/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  WorkloadmanagerProjectsLocationsEvaluationsCreateRequest,
  WorkloadmanagerProjectsLocationsEvaluationsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  ResourceStatusStateEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: WorkloadmanagerProjectsLocationsEvaluationsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  evaluationInput: {
    description: "provident",
    labels: {
      "quibusdam": "unde",
      "nulla": "corrupti",
      "illum": "vel",
    },
    name: "error",
    resourceFilter: {
      gceInstanceFilter: {
        serviceAccounts: [
          "suscipit",
          "iure",
          "magnam",
        ],
      },
      inclusionLabels: {
        "ipsa": "delectus",
        "tempora": "suscipit",
        "molestiae": "minus",
        "placeat": "voluptatum",
      },
      resourceIdPatterns: [
        "excepturi",
        "nisi",
      ],
      scopes: [
        "temporibus",
        "ab",
        "quis",
        "veritatis",
      ],
    },
    resourceStatus: {
      rulesNewerVersions: [
        "perferendis",
        "ipsam",
        "repellendus",
      ],
      state: ResourceStatusStateEnum.Deleting,
    },
    ruleNames: [
      "odit",
      "at",
      "at",
      "maiores",
    ],
  },
  accessToken: "molestiae",
  alt: AltEnum.Proto,
  callback: "quod",
  evaluationId: "esse",
  fields: "totam",
  key: "porro",
  oauthToken: "dolorum",
  parent: "dicta",
  prettyPrint: false,
  quotaUser: "nam",
  requestId: "officia",
  uploadType: "occaecati",
  uploadProtocol: "fugit",
};

sdk.projects.workloadmanagerProjectsLocationsEvaluationsCreate(req).then((res: WorkloadmanagerProjectsLocationsEvaluationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `workloadmanagerProjectsLocationsEvaluationsCreate` - Creates a new Evaluation in a given project and location.
* `workloadmanagerProjectsLocationsEvaluationsList` - Lists Evaluations in a given project and location.
* `workloadmanagerProjectsLocationsInsightsWriteInsight` - Write the data insights to workload manager data warehouse.
* `workloadmanagerProjectsLocationsList` - Lists information about the supported locations for this service.
* `workloadmanagerProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `workloadmanagerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `workloadmanagerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `workloadmanagerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

