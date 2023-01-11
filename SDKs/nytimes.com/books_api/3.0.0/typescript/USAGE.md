<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetListsBestSellersHistoryJsonRequest, GetListsBestSellersHistoryJsonResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetListsBestSellersHistoryJsonRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    ageGroup: "sit",
    author: "voluptas",
    contributor: "culpa",
    isbn: "expedita",
    price: "consequuntur",
    publisher: "dolor",
    title: "expedita",
  },
};

sdk.getListsBestSellersHistoryJson(req).then((res: GetListsBestSellersHistoryJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->