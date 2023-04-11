<!-- Start SDK Example Usage -->
```typescript
import {
  GetBillingRecipientsRequest,
  GetBillingRecipientsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetBillingRecipientsRequest = {
  workgroupId: "corrupti",
};

sdk.contact.getBillingRecipients(req).then((res: GetBillingRecipientsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->