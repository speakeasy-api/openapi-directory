# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/qualtrics.com/0.2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/qualtrics.com/0.2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateContactInMailinglistRequest,
  CreateContactInMailinglistResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateContactInMailinglistRequest = {
  createContactInMailingList: {
    email: "Larue_Rau85@yahoo.com",
    firstName: "Karley",
    lastName: "Stamm",
    unsubscribed: false,
  },
  directoryId: "vel",
  mailingListId: "error",
};

sdk.createContactInMailinglist(req).then((res: CreateContactInMailinglistResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createContactInMailinglist` - Create contact in mailing list
* `generateDistributionLinks` - Generate distribution links
* `getDistributions` - Get distributions for survey
* `getEventSubscriptions` - Get event subscriptions
* `getSurvey` - Get survey
* `retrievedistributionlinks` - Retrieve distribution links
* `webhookDelete` - Remove subscription to response event
* `whenAResponseIsReceived` - Triggers when a response is submitted to a qualtrics survey
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

