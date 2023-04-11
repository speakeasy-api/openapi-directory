<!-- Start SDK Example Usage -->
```typescript
import {
  GetweatherRequest,
  GetweatherResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetweatherRequest = {
  city: "Laruecester",
  license: "quibusdam",
  state: "unde",
};

sdk.weatherByCityAndState.getweather(req).then((res: GetweatherResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->