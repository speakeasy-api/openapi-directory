<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BillDetailBillsJurisdictionSessionBillIdGetRequest, BillDetailBillsJurisdictionSessionBillIdGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BillDetailBillsJurisdictionSessionBillIdGetRequest = {
  pathParams: {
    billId: "sit",
    jurisdiction: "voluptas",
    session: "culpa",
  },
  queryParams: {
    apikey: "expedita",
    include: [
      "versions",
      "versions",
      "votes",
    ],
  },
  headers: {
    xApiKey: "fugit",
  },
};

sdk.bills.billDetailBillsJurisdictionSessionBillIdGet(req).then((res: BillDetailBillsJurisdictionSessionBillIdGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->