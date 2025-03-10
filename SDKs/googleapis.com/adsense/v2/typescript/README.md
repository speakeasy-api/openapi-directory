# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/adsense/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/adsense/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AdsenseAccountsAdclientsAdunitsCreateRequest,
  AdsenseAccountsAdclientsAdunitsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  AdUnitStateEnum,
  ContentAdsSettingsTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AdsenseAccountsAdclientsAdunitsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  adUnitInput: {
    contentAdsSettings: {
      size: "provident",
      type: ContentAdsSettingsTypeEnum.MatchedContent,
    },
    displayName: "quibusdam",
    state: AdUnitStateEnum.Active,
  },
  accessToken: "nulla",
  alt: AltEnum.Media,
  callback: "illum",
  fields: "vel",
  key: "error",
  oauthToken: "deserunt",
  parent: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.accounts.adsenseAccountsAdclientsAdunitsCreate(req).then((res: AdsenseAccountsAdclientsAdunitsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `adsenseAccountsAdclientsAdunitsCreate` - Creates an ad unit. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product. Note that ad units can only be created for ad clients with an "AFC" product code. For more info see the [AdClient resource](/adsense/management/reference/rest/v2/accounts.adclients). For now, this method can only be used to create `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566
* `adsenseAccountsAdclientsAdunitsGetAdcode` - Gets the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).
* `adsenseAccountsAdclientsAdunitsList` - Lists all ad units under a specified account and ad client.
* `adsenseAccountsAdclientsAdunitsListLinkedCustomChannels` - Lists all the custom channels available for an ad unit.
* `adsenseAccountsAdclientsCustomchannelsCreate` - Creates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* `adsenseAccountsAdclientsCustomchannelsDelete` - Deletes a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* `adsenseAccountsAdclientsCustomchannelsList` - Lists all the custom channels available in an ad client.
* `adsenseAccountsAdclientsCustomchannelsListLinkedAdUnits` - Lists all the ad units available for a custom channel.
* `adsenseAccountsAdclientsCustomchannelsPatch` - Updates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* `adsenseAccountsAdclientsList` - Lists all the ad clients available in an account.
* `adsenseAccountsAdclientsUrlchannelsList` - Lists active url channels.
* `adsenseAccountsAlertsList` - Lists all the alerts available in an account.
* `adsenseAccountsGetAdBlockingRecoveryTag` - Gets the ad blocking recovery tag of an account.
* `adsenseAccountsList` - Lists all accounts available to this user.
* `adsenseAccountsListChildAccounts` - Lists all accounts directly managed by the given AdSense account.
* `adsenseAccountsPaymentsList` - Lists all the payments available for an account.
* `adsenseAccountsReportsGenerate` - Generates an ad hoc report.
* `adsenseAccountsReportsGenerateCsv` - Generates a csv formatted ad hoc report.
* `adsenseAccountsReportsGetSaved` - Gets the saved report from the given resource name.
* `adsenseAccountsReportsSavedGenerate` - Generates a saved report.
* `adsenseAccountsReportsSavedGenerateCsv` - Generates a csv formatted saved report.
* `adsenseAccountsReportsSavedList` - Lists saved reports.
* `adsenseAccountsSitesGet` - Gets information about the selected site.
* `adsenseAccountsSitesList` - Lists all the sites available in an account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

