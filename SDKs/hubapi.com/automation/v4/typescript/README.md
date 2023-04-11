# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hubapi.com/automation/v4/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hubapi.com/automation/v4/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.BatchInputCallbackCompletionBatchRequest,
  PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.BatchInputCallbackCompletionBatchRequest = {
  inputs: [
    {
      callbackId: "provident",
      outputFields: {
        "quibusdam": "unde",
        "nulla": "corrupti",
        "illum": "vel",
      },
    },
    {
      callbackId: "error",
      outputFields: {
        "suscipit": "iure",
        "magnam": "debitis",
        "ipsa": "delectus",
      },
    },
    {
      callbackId: "tempora",
      outputFields: {
        "molestiae": "minus",
        "placeat": "voluptatum",
      },
    },
  ],
};

sdk.callbacks.postAutomationV4ActionsCallbacksCompleteCompleteBatch(req).then((res: PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### callbacks

* `postAutomationV4ActionsCallbacksCompleteCompleteBatch` - Complete a batch of callbacks
* `postAutomationV4ActionsCallbacksCallbackIdCompleteComplete` - Complete a callback

### definitions

* `deleteAutomationV4ActionsAppIdDefinitionIdArchive` - Archive a custom action
* `getAutomationV4ActionsAppIdDefinitionIdGetById` - Get a custom action
* `getAutomationV4ActionsAppIdGetPage` - Get all custom actions
* `patchAutomationV4ActionsAppIdDefinitionIdUpdate` - Update a custom action
* `postAutomationV4ActionsAppIdCreate` - Create new custom action

### functions

* `deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive` - Delete a custom action function
* `deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType` - Delete a custom action function
* `getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById` - Get a custom action function
* `getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType` - Get a custom action function
* `getAutomationV4ActionsAppIdDefinitionIdFunctionsGetPage` - Get all custom action functions
* `putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace` - Create or replace a custom action function
* `putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType` - Create or replace a custom action function

### revisions

* `getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById` - Get a revision for a custom action
* `getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage` - Get all revisions for a custom action
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

