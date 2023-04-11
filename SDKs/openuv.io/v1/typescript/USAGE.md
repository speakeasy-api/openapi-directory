<!-- Start SDK Example Usage -->
```typescript
import {
  GetForecastRequest,
  GetForecastResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetForecastRequest = {
  alt: 1050,
  dt: "2018-02-04T04:39:06.467Z",
  lat: 78.67,
  lng: 115.67,
  ozone: 304.5,
  xAccessToken: "corrupti",
};

sdk.getForecast(req).then((res: GetForecastResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->