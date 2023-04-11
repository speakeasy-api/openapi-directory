<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteAPISpecificationRequest,
  DeleteAPISpecificationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteAPISpecificationRequest = {
  id: "corrupti",
};

sdk.apiSpecification.deleteAPISpecification(req).then((res: DeleteAPISpecificationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->