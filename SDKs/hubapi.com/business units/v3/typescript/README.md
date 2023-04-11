# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hubapi.com/business units/v3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hubapi.com/business units/v3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetBusinessUnitsV3BusinessUnitsUserUserIdRequest,
  GetBusinessUnitsV3BusinessUnitsUserUserIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetBusinessUnitsV3BusinessUnitsUserUserIdRequest = {
  name: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  properties: [
    "nulla",
    "corrupti",
    "illum",
  ],
  userId: "vel",
};

sdk.businessUnit.getBusinessUnitsV3BusinessUnitsUserUserId(req).then((res: GetBusinessUnitsV3BusinessUnitsUserUserIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### businessUnit

* `getBusinessUnitsV3BusinessUnitsUserUserId` - Get Business Units for a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

