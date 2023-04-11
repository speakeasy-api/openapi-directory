# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hubapi.com/analytics/v3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hubapi.com/analytics/v3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.BehavioralEventHttpCompletionRequest,
  PostEventsV3SendResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.BehavioralEventHttpCompletionRequest = {
  email: "Larue_Rau85@yahoo.com",
  eventName: "corrupti",
  objectId: "illum",
  occurredAt: "2022-05-18T09:34:54.894Z",
  properties: {
    "suscipit": "iure",
    "magnam": "debitis",
    "ipsa": "delectus",
  },
  utk: "tempora",
};

sdk.behavioralEventsTracking.postEventsV3Send(req).then((res: PostEventsV3SendResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### behavioralEventsTracking

* `postEventsV3Send` - Sends Custom Behavioral Event
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

