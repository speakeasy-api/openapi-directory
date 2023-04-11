<!-- Start SDK Example Usage -->
```typescript
import {
  AnalyticsRequest,
  AnalyticsResponse,
  AnalyticsGroupByEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: AnalyticsRequest = {
  end: "corrupti",
  groupBy: AnalyticsGroupByEnum.Subaccount,
  label: "distinctio",
  start: "quibusdam",
  subaccounts: "unde",
};

sdk.analytics.analytics(req).then((res: AnalyticsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->