# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_bulkexports_v1/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_bulkexports_v1/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateExportCustomJobRequest,
  CreateExportCustomJobResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateExportCustomJobRequest = {
  requestBody: {
    email: "Larue_Rau85@yahoo.com",
    endDay: "corrupti",
    friendlyName: "illum",
    startDay: "vel",
    webhookMethod: "error",
    webhookUrl: "deserunt",
  },
  resourceType: "suscipit",
};

sdk.createExportCustomJob(req).then((res: CreateExportCustomJobResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createExportCustomJob`
* `deleteJob`
* `fetchDay` - Fetch a specific Day.
* `fetchExport` - Fetch a specific Export.
* `fetchExportConfiguration` - Fetch a specific Export Configuration.
* `fetchJob`
* `listDay` - Retrieve a list of all Days for a resource.
* `listExportCustomJob`
* `updateExportConfiguration` - Update a specific Export Configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

