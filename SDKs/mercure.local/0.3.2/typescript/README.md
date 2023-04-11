# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/mercure.local/0.3.2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/mercure.local/0.3.2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetWellKnownMercureRequest,
  GetWellKnownMercureResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetWellKnownMercureRequest = {
  lastEventID: "corrupti",
  lastEventIDQueryParameter: "provident",
  topic: [
    "quibusdam",
    "unde",
    "nulla",
  ],
};

sdk.getWellKnownMercure(req).then((res: GetWellKnownMercureResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getWellKnownMercure` - Subscribe to updates
* `getWellKnownMercureSubscriptions` - Active subscriptions
* `getWellKnownMercureSubscriptionsTopic` - Active subscriptions for the given topic
* `getWellKnownMercureSubscriptionsTopicSubscriber` - Active subscription for the given topic and subscriber
* `postWellKnownMercure` - Publish an update
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

