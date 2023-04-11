<!-- Start SDK Example Usage -->
```typescript
import {
  GETListsBestSellersHistoryJsonRequest,
  GETListsBestSellersHistoryJsonResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GETListsBestSellersHistoryJsonRequest = {
  ageGroup: "corrupti",
  author: "provident",
  contributor: "distinctio",
  isbn: "quibusdam",
  price: "unde",
  publisher: "nulla",
  title: "Ms.",
};

sdk.getListsBestSellersHistoryJson(req).then((res: GETListsBestSellersHistoryJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->