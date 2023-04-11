<!-- Start SDK Example Usage -->
```typescript
import {
  DoubleclicksearchConversionGetRequest,
  DoubleclicksearchConversionGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DoubleclicksearchConversionGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  adGroupId: "distinctio",
  adId: "quibusdam",
  advertiserId: "unde",
  agencyId: "nulla",
  alt: AltEnum.Media,
  callback: "illum",
  campaignId: "vel",
  criterionId: "error",
  customerId: "deserunt",
  endDate: 384382,
  engineAccountId: "iure",
  fields: "magnam",
  key: "debitis",
  oauthToken: "ipsa",
  prettyPrint: false,
  quotaUser: "delectus",
  rowCount: 272656,
  startDate: 383441,
  startRow: 477665,
  uploadType: "minus",
  uploadProtocol: "placeat",
};

sdk.conversion.doubleclicksearchConversionGet(req).then((res: DoubleclicksearchConversionGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->