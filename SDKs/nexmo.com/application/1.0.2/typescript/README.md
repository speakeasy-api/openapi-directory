# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nexmo.com/application/1.0.2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nexmo.com/application/1.0.2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateApplicationRequestBody,
  CreateApplicationResponse,
  CreateApplicationRequestBodyTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateApplicationRequestBody = {
  answerMethod: "GET",
  answerUrl: "https://example.com/webhooks/answer",
  apiKey: "ap1k3y",
  apiSecret: "230e6cf0709417176df1b4fc1e083adc",
  eventMethod: "POST",
  eventUrl: "https://example.com/webhooks/event",
  inboundMethod: "POST",
  inboundUrl: "https://example.com/webhooks/inbound",
  name: "My Application",
  statusMethod: "POST",
  statusUrl: "https://example.com/webhooks/status",
  type: CreateApplicationRequestBodyTypeEnum.Voice,
};

sdk.createApplication(req).then((res: CreateApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createApplication` - Create Application
* `deleteApplication` - Destroy Application
* `retrieveApplication` - Retrieve Application
* `retrieveApplications` - Retrieve all Applications
* `updateApplication` - Update Application
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

