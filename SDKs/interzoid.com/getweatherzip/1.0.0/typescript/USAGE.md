<!-- Start SDK Example Usage -->
```typescript
import {
  GetweatherzipcodeRequest,
  GetweatherzipcodeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetweatherzipcodeRequest = {
  license: "corrupti",
  zip: "provident",
};

sdk.weatherByZipCode.getweatherzipcode(req).then((res: GetweatherzipcodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->