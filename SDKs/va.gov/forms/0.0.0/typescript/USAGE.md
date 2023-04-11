<!-- Start SDK Example Usage -->
```typescript
import {
  FindFormByFormNameRequest,
  FindFormByFormNameResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FindFormByFormNameRequest = {
  formName: "corrupti",
};

sdk.forms.findFormByFormName(req).then((res: FindFormByFormNameResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->