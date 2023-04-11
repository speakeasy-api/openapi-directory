# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/va.gov/confirmation/0.0.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/va.gov/confirmation/0.0.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.VeteranStatusRequest,
  GetVeteranStatusResponse
} from "openapi/dist/sdk/models/operations";
import {
  VeteranStatusRequestGenderEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.VeteranStatusRequest = {
  birthDate: "1965-01-01",
  firstName: "John",
  gender: VeteranStatusRequestGenderEnum.M,
  lastName: "Doe",
  middleName: "Theodore",
  ssn: "555-55-5555",
};

sdk.veteranConfirmationStatus.getVeteranStatus(req).then((res: GetVeteranStatusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### veteranConfirmationStatus

* `getVeteranStatus` - Get confirmation about an individual's Veteran status according to the VA
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

