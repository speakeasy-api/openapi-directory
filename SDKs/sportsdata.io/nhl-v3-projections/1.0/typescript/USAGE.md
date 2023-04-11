<!-- Start SDK Example Usage -->
```typescript
import {
  DfsSlatesByDateRequest,
  DfsSlatesByDateResponse,
  DfsSlatesByDateFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DfsSlatesByDateRequest = {
  date: "corrupti",
  format: DfsSlatesByDateFormatEnum.Json,
};

sdk.dfsSlatesByDate(req).then((res: DfsSlatesByDateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->