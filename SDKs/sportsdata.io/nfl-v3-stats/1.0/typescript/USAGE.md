<!-- Start SDK Example Usage -->
```typescript
import {
  AreGamesInProgressRequest,
  AreGamesInProgressResponse,
  AreGamesInProgressFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: AreGamesInProgressRequest = {
  format: AreGamesInProgressFormatEnum.Json,
};

sdk.areGamesInProgress(req).then((res: AreGamesInProgressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->