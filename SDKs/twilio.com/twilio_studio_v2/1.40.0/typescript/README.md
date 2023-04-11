# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_studio_v2/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_studio_v2/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateExecutionRequest,
  CreateExecutionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateExecutionRequest = {
  flowSid: "corrupti",
  requestBody: {
    from: "provident",
    parameters: "distinctio",
    to: "quibusdam",
  },
};

sdk.createExecution(req).then((res: CreateExecutionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createExecution` - Triggers a new Execution for the Flow
* `createFlow` - Create a Flow.
* `deleteExecution` - Delete the Execution and all Steps relating to it.
* `deleteFlow` - Delete a specific Flow.
* `fetchExecution` - Retrieve an Execution
* `fetchExecutionContext` - Retrieve the most recent context for an Execution.
* `fetchExecutionStep` - Retrieve a Step.
* `fetchExecutionStepContext` - Retrieve the context for an Execution Step.
* `fetchFlow` - Retrieve a specific Flow.
* `fetchFlowRevision` - Retrieve a specific Flow revision.
* `fetchTestUser` - Fetch flow test users
* `listExecution` - Retrieve a list of all Executions for the Flow.
* `listExecutionStep` - Retrieve a list of all Steps for an Execution.
* `listFlow` - Retrieve a list of all Flows.
* `listFlowRevision` - Retrieve a list of all Flows revisions.
* `updateExecution` - Update the status of an Execution to `ended`.
* `updateFlow` - Update a Flow.
* `updateFlowValidate` - Validate flow JSON definition
* `updateTestUser` - Update flow test users
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

