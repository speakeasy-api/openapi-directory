# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hubapi.com/crm/v3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hubapi.com/crm/v3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest,
  DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest = {
  appId: 548814,
  cardId: "provident",
};

sdk.cards.deleteCrmV3ExtensionsCardsAppIdCardIdArchive(req).then((res: DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### cards

* `deleteCrmV3ExtensionsCardsAppIdCardIdArchive` - Delete a card
* `getCrmV3ExtensionsCardsAppIdCardIdGetById` - Get a card.
* `getCrmV3ExtensionsCardsAppIdGetAll` - Get all cards
* `patchCrmV3ExtensionsCardsAppIdCardIdUpdate` - Update a card
* `postCrmV3ExtensionsCardsAppIdCreate` - Create a new card

### sampleResponse

* `getCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponse` - Get sample card detail response
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

