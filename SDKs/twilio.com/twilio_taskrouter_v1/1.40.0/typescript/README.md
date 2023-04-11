# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_taskrouter_v1/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_taskrouter_v1/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateActivityRequest,
  CreateActivityResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateActivityRequest = {
  requestBody: {
    available: false,
    friendlyName: "corrupti",
  },
  workspaceSid: "provident",
};

sdk.createActivity(req).then((res: CreateActivityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createActivity`
* `createTask`
* `createTaskChannel`
* `createTaskQueue`
* `createWorker`
* `createWorkflow`
* `createWorkspace`
* `deleteActivity`
* `deleteTask`
* `deleteTaskChannel`
* `deleteTaskQueue`
* `deleteWorker`
* `deleteWorkflow`
* `deleteWorkspace`
* `fetchActivity`
* `fetchEvent`
* `fetchTask`
* `fetchTaskChannel`
* `fetchTaskQueue`
* `fetchTaskQueueCumulativeStatistics`
* `fetchTaskQueueRealTimeStatistics`
* `fetchTaskQueueStatistics`
* `fetchTaskReservation`
* `fetchWorker`
* `fetchWorkerChannel`
* `fetchWorkerInstanceStatistics`
* `fetchWorkerReservation`
* `fetchWorkerStatistics`
* `fetchWorkersCumulativeStatistics`
* `fetchWorkersRealTimeStatistics`
* `fetchWorkflow`
* `fetchWorkflowCumulativeStatistics`
* `fetchWorkflowRealTimeStatistics`
* `fetchWorkflowStatistics`
* `fetchWorkspace`
* `fetchWorkspaceCumulativeStatistics`
* `fetchWorkspaceRealTimeStatistics`
* `fetchWorkspaceStatistics`
* `listActivity`
* `listEvent`
* `listTask`
* `listTaskChannel`
* `listTaskQueue`
* `listTaskQueuesStatistics`
* `listTaskReservation`
* `listWorker`
* `listWorkerChannel`
* `listWorkerReservation`
* `listWorkflow`
* `listWorkspace`
* `updateActivity`
* `updateTask`
* `updateTaskChannel`
* `updateTaskQueue`
* `updateTaskReservation`
* `updateWorker`
* `updateWorkerChannel`
* `updateWorkerReservation`
* `updateWorkflow`
* `updateWorkspace`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

