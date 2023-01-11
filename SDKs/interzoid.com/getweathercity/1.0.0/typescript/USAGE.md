<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetweatherRequest, GetweatherResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetweatherRequest = {
  queryParams: {
    city: "sit",
    license: "voluptas",
    state: "culpa",
  },
};

sdk.weatherByCityAndState.getweather(req).then((res: GetweatherResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->