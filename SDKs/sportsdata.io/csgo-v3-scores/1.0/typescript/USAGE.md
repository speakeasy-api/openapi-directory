<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AreasCountriesRequest, AreasCountriesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AreasCountriesRequest = {
  pathParams: {
    format: "xml",
  },
};

sdk.areasCountries(req).then((res: AreasCountriesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->