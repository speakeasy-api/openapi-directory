<!-- Start SDK Example Usage -->
```typescript
import {
  TravelpartnerAccountsAccountLinksCreateRequest,
  TravelpartnerAccountsAccountLinksCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  AccountLinkStatusEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TravelpartnerAccountsAccountLinksCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  accountLink: {
    accountLinkTarget: {
      allHotels: false,
      hotelList: {
        partnerHotelIds: [
          "distinctio",
          "quibusdam",
          "unde",
        ],
      },
    },
    googleAdsCustomerName: "nulla",
    name: "corrupti",
    status: AccountLinkStatusEnum.Approved,
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  oauthToken: "magnam",
  parent: "debitis",
  prettyPrint: false,
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.accounts.travelpartnerAccountsAccountLinksCreate(req).then((res: TravelpartnerAccountsAccountLinksCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->