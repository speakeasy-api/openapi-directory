<!-- Start SDK Example Usage -->
```typescript
import {
  DriverDetailsRequest,
  DriverDetailsResponse,
  DriverDetailsFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DriverDetailsRequest = {
  driverid: "corrupti",
  format: DriverDetailsFormatEnum.Json,
};

sdk.driverDetails(req).then((res: DriverDetailsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->