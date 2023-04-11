<!-- Start SDK Example Usage -->
```typescript
import {
  GetBulkLookupRequest,
  GetBulkLookupResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetBulkLookupRequest = {
  format: "XML",
  ips: "1.1.1.1,2.2.2.2",
  key: "2517bc4fc3f790e8f09bc808bb63b899",
  lang: "AR",
  params: "currency",
};

sdk.getBulkLookup(req).then((res: GetBulkLookupResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->