<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetweatherzipcodeRequest, GetweatherzipcodeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetweatherzipcodeRequest = {
  queryParams: {
    license: "sit",
    zip: "voluptas",
  },
};

sdk.weatherByZipCode.getweatherzipcode(req).then((res: GetweatherzipcodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->