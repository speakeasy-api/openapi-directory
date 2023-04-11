<!-- Start SDK Example Usage -->
```typescript
import {
  DepthChartsRequest,
  DepthChartsResponse,
  DepthChartsFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DepthChartsRequest = {
  format: DepthChartsFormatEnum.Json,
};

sdk.depthCharts(req).then((res: DepthChartsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->