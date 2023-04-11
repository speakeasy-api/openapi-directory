<!-- Start SDK Example Usage -->
```typescript
import {
  FetchTrunkingCountryRequest,
  FetchTrunkingCountryResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FetchTrunkingCountryRequest = {
  isoCountry: "corrupti",
};

sdk.fetchTrunkingCountry(req).then((res: FetchTrunkingCountryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->