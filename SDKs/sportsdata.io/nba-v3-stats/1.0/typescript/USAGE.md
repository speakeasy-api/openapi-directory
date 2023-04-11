<!-- Start SDK Example Usage -->
```typescript
import {
  AllStarsRequest,
  AllStarsResponse,
  AllStarsFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: AllStarsRequest = {
  format: AllStarsFormatEnum.Json,
  season: "provident",
};

sdk.allStars(req).then((res: AllStarsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->