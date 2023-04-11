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