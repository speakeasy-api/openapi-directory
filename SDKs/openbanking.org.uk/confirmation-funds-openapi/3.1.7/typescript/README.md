# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/openbanking.org.uk/confirmation-funds-openapi/3.1.7/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/openbanking.org.uk/confirmation-funds-openapi/3.1.7/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateFundsConfirmationConsentsRequest,
  CreateFundsConfirmationConsentsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateFundsConfirmationConsentsRequest = {
  authorization: "corrupti",
  obFundsConfirmationConsent1: {
    data: {
      debtorAccount: {
        identification: "provident",
        name: "distinctio",
        schemeName: "quibusdam",
        secondaryIdentification: "unde",
      },
      expirationDateTime: "2021-05-14T08:28:11.899Z",
    },
  },
  xCustomerUserAgent: "illum",
  xFapiAuthDate: "vel",
  xFapiCustomerIpAddress: "error",
  xFapiInteractionId: "deserunt",
};

sdk.fundsConfirmations.createFundsConfirmationConsents(req).then((res: CreateFundsConfirmationConsentsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### fundsConfirmations

* `createFundsConfirmationConsents` - Create Funds Confirmation Consent
* `createFundsConfirmations` - Create Funds Confirmation
* `deleteFundsConfirmationConsentsConsentId` - Delete Funds Confirmation Consent
* `getFundsConfirmationConsentsConsentId` - Get Funds Confirmation Consent
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

