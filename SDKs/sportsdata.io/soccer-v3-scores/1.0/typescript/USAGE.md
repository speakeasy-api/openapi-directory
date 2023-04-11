<!-- Start SDK Example Usage -->
```typescript
import {
  AreasCountriesRequest,
  AreasCountriesResponse,
  AreasCountriesFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: AreasCountriesRequest = {
  format: AreasCountriesFormatEnum.Json,
};

sdk.areasCountries(req).then((res: AreasCountriesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->