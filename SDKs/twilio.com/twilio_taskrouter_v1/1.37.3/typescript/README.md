# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { CreateActivityRequest, CreateActivityResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateActivityRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    workspaceSid: "aut",
  },
  request: {
    available: false,
    friendlyName: "architecto",
  },
};

sdk.sdk.createActivity(req).then((res: CreateActivityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
