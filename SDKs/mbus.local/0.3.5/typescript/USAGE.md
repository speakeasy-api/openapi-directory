<!-- Start SDK Example Usage -->
```typescript
import {
  GetRequest,
  GetResponse
} from "openapi/dist/sdk/models/operations";
import {
  BaudrateEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetRequest = {
  address: "48",
  baudrate: BaudrateEnum.TwoThousandFourHundred,
  device: "ttyAMA0",
};

sdk.get(req).then((res: GetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->