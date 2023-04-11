# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/mbus.local/0.3.5/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/mbus.local/0.3.5/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetRequest,
  GetResponse
} from "openapi/dist/sdk/models/operations";
import {
  BaudrateEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetRequest = {
  address: "48",
  baudrate: BaudrateEnum.TwoThousandFourHundred,
  device: "ttyAMA0",
};

sdk.get(req).then((res: GetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `get` - Gets data from the slave identified by {address}
* `getMulti` - Gets data from the slave identified by {address}, and supports multiple responses from the slave
* `hat` - Gets Raspberry Pi Hat information
* `hatOff` - Turns off power to the M-Bus
* `hatOn` - Turns on power to the M-Bus
* `mbusApi` - Returns this API specification
* `scan` - Scan the specified device for slaves
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

