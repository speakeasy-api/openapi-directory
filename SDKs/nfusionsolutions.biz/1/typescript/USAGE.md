<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetApiVVersionCurrenciesHistoryRequest, GetApiVVersionCurrenciesHistoryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetApiVVersionCurrenciesHistoryRequest = {
  pathParams: {
    version: "sit",
  },
  queryParams: {
    end: "2006-05-01T09:38:06Z",
    format: "xml",
    interval: "expedita",
    pairs: "consequuntur",
    start: "2003-04-20T23:11:44Z",
    token: "expedita",
  },
};

sdk.currencies.getApiVVersionCurrenciesHistory(req).then((res: GetApiVVersionCurrenciesHistoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->