<!-- Start SDK Example Usage -->
```typescript
import {
  CurrentSeasonRequest,
  CurrentSeasonResponse,
  CurrentSeasonFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CurrentSeasonRequest = {
  format: CurrentSeasonFormatEnum.Json,
};

sdk.currentSeason(req).then((res: CurrentSeasonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->