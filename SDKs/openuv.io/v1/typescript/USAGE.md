<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetForecastRequest, GetForecastResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetForecastRequest = {
  queryParams: {
    alt: 74.099998,
    dt: "1978-05-13T03:50:47Z",
    lat: 6.200000,
    lng: 96.199997,
    ozone: 77.099998,
  },
  headers: {
    xAccessToken: "et",
  },
};

sdk.getForecast(req).then((res: GetForecastResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->