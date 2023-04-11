<!-- Start SDK Example Usage -->
```typescript
import {
  GETAffectedGenomicModelsUsingGETRequest,
  GETAffectedGenomicModelsUsingGETResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GETAffectedGenomicModelsUsingGETRequest = {
  taxonId: "corrupti",
};

sdk.agr.getAffectedGenomicModelsUsingGET(req).then((res: GETAffectedGenomicModelsUsingGETResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->