<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CreateBehaviorInput,
  ReportBehaviorResponse
} from "openapi/dist/sdk/models/operations";
import {
  CreateBehaviorInputCountryEnum,
  CreateBehaviorInputDocumentTypeEnum,
  CreateBehaviorInputReasonEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.CreateBehaviorInput = {
  birthDate: "2021-10-25T05:21:43.948Z",
  country: CreateBehaviorInputCountryEnum.Cr,
  documentId: "quibusdam",
  documentType: CreateBehaviorInputDocumentTypeEnum.Name,
  email: "Karley_Stamm@hotmail.com",
  feedbackDate: "2022-03-26T09:37:56.283Z",
  firstName: "Hunter",
  lastName: "Gulgowski",
  phoneNumber: "debitis",
  reason: CreateBehaviorInputReasonEnum.Rape,
};

sdk.behavior.reportBehavior(req).then((res: ReportBehaviorResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->