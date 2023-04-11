<!-- Start SDK Example Usage -->
```typescript
import {
  FetchMessagingCountryRequest,
  FetchMessagingCountryResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FetchMessagingCountryRequest = {
  isoCountry: "corrupti",
};

sdk.fetchMessagingCountry(req).then((res: FetchMessagingCountryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->