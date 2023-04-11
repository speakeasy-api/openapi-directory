<!-- Start SDK Example Usage -->
```typescript
import {
  shared.RedactTransaction,
  RedactMessageResponse
} from "openapi/dist/sdk/models/operations";
import {
  RedactTransactionProductEnum,
  RedactTransactionTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.RedactTransaction = {
  id: "209ab3c7536542b91e8b5aef032f6861",
  product: RedactTransactionProductEnum.Sms,
  type: RedactTransactionTypeEnum.Outbound,
};

sdk.redactMessage(req).then((res: RedactMessageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->