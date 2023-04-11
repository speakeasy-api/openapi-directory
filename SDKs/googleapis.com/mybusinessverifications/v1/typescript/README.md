# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/mybusinessverifications/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/mybusinessverifications/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  MybusinessverificationsLocationsFetchVerificationOptionsRequest,
  MybusinessverificationsLocationsFetchVerificationOptionsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MybusinessverificationsLocationsFetchVerificationOptionsRequest = {
  dollarXgafv: XgafvEnum.Two,
  fetchVerificationOptionsRequest: {
    context: {
      address: {
        addressLines: [
          "distinctio",
          "quibusdam",
          "unde",
        ],
        administrativeArea: "nulla",
        languageCode: "corrupti",
        locality: "illum",
        organization: "vel",
        postalCode: "63428-0923",
        recipients: [
          "minus",
          "placeat",
        ],
        regionCode: "voluptatum",
        revision: 479977,
        sortingCode: "excepturi",
        sublocality: "nisi",
      },
    },
    languageCode: "recusandae",
  },
  accessToken: "temporibus",
  alt: AltEnum.Json,
  callback: "quis",
  fields: "veritatis",
  key: "deserunt",
  location: "perferendis",
  oauthToken: "ipsam",
  prettyPrint: false,
  quotaUser: "repellendus",
  uploadType: "sapiente",
  uploadProtocol: "quo",
};

sdk.locations.mybusinessverificationsLocationsFetchVerificationOptions(req).then((res: MybusinessverificationsLocationsFetchVerificationOptionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### locations

* `mybusinessverificationsLocationsFetchVerificationOptions` - Reports all eligible verification options for a location in a specific language.
* `mybusinessverificationsLocationsGetVoiceOfMerchantState` - Gets the VoiceOfMerchant state.
* `mybusinessverificationsLocationsVerificationsComplete` - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
* `mybusinessverificationsLocationsVerificationsList` - List verifications of a location, ordered by create time.
* `mybusinessverificationsLocationsVerify` - Starts the verification process for a location.

### verificationTokens

* `mybusinessverificationsVerificationTokensGenerate` - Generates a token for the provided location data as a vetted [partner](https://support.google.com/business/answer/7674102). Throws PERMISSION_DENIED if the caller is not a vetted partner account. Throws FAILED_PRECONDITION if the caller's VettedStatus is INVALID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

