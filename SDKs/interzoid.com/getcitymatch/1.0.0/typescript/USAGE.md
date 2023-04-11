<!-- Start SDK Example Usage -->
```typescript
import {
  GetcitymatchRequest,
  GetcitymatchResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetcitymatchRequest = {
  city: "Laruecester",
  license: "quibusdam",
};

sdk.cityNameSimilarityKey.getcitymatch(req).then((res: GetcitymatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->