<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CompareStationRequest, CompareStationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CompareStationRequest = {
  pathParams: {
    stationName: "sit",
  },
};

sdk.odWeather.compareStation(req).then((res: CompareStationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->