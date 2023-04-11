<!-- Start SDK Example Usage -->
```typescript
import {
  GetcitystandardRequest,
  GetcitystandardResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetcitystandardRequest = {
  city: "Laruecester",
  license: "quibusdam",
};

sdk.cityDataStandardization.getcitystandard(req).then((res: GetcitystandardResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->