<!-- Start SDK Example Usage -->
```typescript
import {
  CurrenciesHistoryGETRequest,
  CurrenciesHistoryGETResponse,
  CurrenciesHistoryGETFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    token: "YOUR_API_KEY_HERE",
  },
});

const req: CurrenciesHistoryGETRequest = {
  end: "2021-10-25T05:21:43.948Z",
  format: CurrenciesHistoryGETFormatEnum.Xml,
  interval: "quibusdam",
  pairs: "unde",
  start: "2021-05-14T08:28:11.899Z",
};

sdk.currencies.currenciesHistoryGET(req).then((res: CurrenciesHistoryGETResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->