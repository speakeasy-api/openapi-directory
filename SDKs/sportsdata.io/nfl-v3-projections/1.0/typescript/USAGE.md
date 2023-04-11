<!-- Start SDK Example Usage -->
```typescript
import {
  DfsSlateOwnershipProjectionsBySlateidRequest,
  DfsSlateOwnershipProjectionsBySlateidResponse,
  DfsSlateOwnershipProjectionsBySlateidFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DfsSlateOwnershipProjectionsBySlateidRequest = {
  format: DfsSlateOwnershipProjectionsBySlateidFormatEnum.Json,
  slateId: "provident",
};

sdk.dfsSlateOwnershipProjectionsBySlateid(req).then((res: DfsSlateOwnershipProjectionsBySlateidResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->