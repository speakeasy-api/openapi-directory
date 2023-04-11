<!-- Start SDK Example Usage -->
```typescript
import {
  LocalservicesAccountReportsSearchRequest,
  LocalservicesAccountReportsSearchResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: LocalservicesAccountReportsSearchRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  endDateDay: 602763,
  endDateMonth: 857946,
  endDateYear: 544883,
  fields: "illum",
  key: "vel",
  oauthToken: "error",
  pageSize: 645894,
  pageToken: "suscipit",
  prettyPrint: false,
  query: "iure",
  quotaUser: "magnam",
  startDateDay: 891773,
  startDateMonth: 56713,
  startDateYear: 963663,
  uploadType: "tempora",
  uploadProtocol: "suscipit",
};

sdk.accountReports.localservicesAccountReportsSearch(req).then((res: LocalservicesAccountReportsSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->