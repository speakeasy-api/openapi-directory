<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAssetRequest,
  CreateAssetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateAssetRequest = {
  requestBody: {
    friendlyName: "corrupti",
  },
  serviceSid: "provident",
};

sdk.createAsset(req).then((res: CreateAssetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->