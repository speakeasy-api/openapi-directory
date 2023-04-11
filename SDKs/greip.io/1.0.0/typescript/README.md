# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/greip.io/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/greip.io/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetBulkLookupRequest,
  GetBulkLookupResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetBulkLookupRequest = {
  format: "XML",
  ips: "1.1.1.1,2.2.2.2",
  key: "2517bc4fc3f790e8f09bc808bb63b899",
  lang: "AR",
  params: "currency",
};

sdk.getBulkLookup(req).then((res: GetBulkLookupResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getBulkLookup` - BulkLookup endpoint: Returns the geolocation data of multiple IP Addresses.
* `getCountry` - Country endpoint: Returns the information of a specific country by passing the `countrCode`.
* `getGeoIP` - GeoIP endpoint: Returns the geolocation data of the visitor.
* `getIPLookup` - IPLookup endpoint: Returns the geolocation data of a specific IP Address.
* `getBadWords` - badWords endpoint: Detects whether user inputs contain profanity or not.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

