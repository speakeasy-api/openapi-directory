# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_studio_v1/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_studio_v1/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateEngagementRequest,
  CreateEngagementResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateEngagementRequest = {
  flowSid: "corrupti",
  requestBody: {
    from: "provident",
    parameters: "distinctio",
    to: "quibusdam",
  },
};

sdk.createEngagement(req).then((res: CreateEngagementResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createEngagement` - Triggers a new Engagement for the Flow
* `createExecution` - Triggers a new Execution for the Flow
* `deleteEngagement` - Delete this Engagement and all Steps relating to it.
* `deleteExecution` - Delete the Execution and all Steps relating to it.
* `deleteFlow` - Delete a specific Flow.
* `fetchEngagement` - Retrieve an Engagement
* `fetchEngagementContext` - Retrieve the most recent context for an Engagement.
* `fetchExecution` - Retrieve an Execution
* `fetchExecutionContext` - Retrieve the most recent context for an Execution.
* `fetchExecutionStep` - Retrieve a Step.
* `fetchExecutionStepContext` - Retrieve the context for an Execution Step.
* `fetchFlow` - Retrieve a specific Flow.
* `fetchStep` - Retrieve a Step.
* `fetchStepContext` - Retrieve the context for an Engagement Step.
* `listEngagement` - Retrieve a list of all Engagements for the Flow.
* `listExecution` - Retrieve a list of all Executions for the Flow.
* `listExecutionStep` - Retrieve a list of all Steps for an Execution.
* `listFlow` - Retrieve a list of all Flows.
* `listStep` - Retrieve a list of all Steps for an Engagement.
* `updateExecution` - Update the status of an Execution to `ended`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

