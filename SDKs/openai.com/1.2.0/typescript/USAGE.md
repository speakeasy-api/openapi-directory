<!-- Start SDK Example Usage -->
```typescript
import {
  CancelFineTuneRequest,
  CancelFineTuneResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CancelFineTuneRequest = {
  fineTuneId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
};

sdk.openAI.cancelFineTune(req).then((res: CancelFineTuneResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->