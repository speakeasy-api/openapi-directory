<!-- Start SDK Example Usage -->
```typescript
import {
  GetcountrystandardRequest,
  GetcountrystandardResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetcountrystandardRequest = {
  country: "Malta",
  license: "provident",
};

sdk.countryNameStandardization.getcountrystandard(req).then((res: GetcountrystandardResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->