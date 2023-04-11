# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_autopilot_v1/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_autopilot_v1/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAssistantCreateAssistantRequest,
  CreateAssistantResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateAssistantCreateAssistantRequest = {
  callbackEvents: "corrupti",
  callbackUrl: "https://salty-stag.name",
  defaults: "nulla",
  friendlyName: "corrupti",
  logQueries: false,
  styleSheet: "illum",
  uniqueName: "vel",
};

sdk.createAssistant(req).then((res: CreateAssistantResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createAssistant`
* `createField`
* `createFieldType`
* `createFieldValue`
* `createModelBuild`
* `createQuery`
* `createSample`
* `createTask`
* `createWebhook`
* `deleteAssistant`
* `deleteField`
* `deleteFieldType`
* `deleteFieldValue`
* `deleteModelBuild`
* `deleteQuery`
* `deleteSample`
* `deleteTask`
* `deleteWebhook`
* `fetchAssistant`
* `fetchDefaults`
* `fetchDialogue`
* `fetchField`
* `fetchFieldType`
* `fetchFieldValue`
* `fetchModelBuild`
* `fetchQuery`
* `fetchSample`
* `fetchStyleSheet` - Returns Style sheet JSON object for the Assistant
* `fetchTask`
* `fetchTaskActions` - Returns JSON actions for the Task.
* `fetchTaskStatistics`
* `fetchWebhook`
* `listAssistant`
* `listField`
* `listFieldType`
* `listFieldValue`
* `listModelBuild`
* `listQuery`
* `listSample`
* `listTask`
* `listWebhook`
* `updateAssistant`
* `updateDefaults`
* `updateFieldType`
* `updateModelBuild`
* `updateQuery`
* `updateRestoreAssistant`
* `updateSample`
* `updateStyleSheet` - Updates the style sheet for an Assistant identified by `assistant_sid`.
* `updateTask`
* `updateTaskActions` - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* `updateWebhook`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

