<!-- Start SDK Example Usage -->
```typescript
import {
  KeysApiCurrentRequest,
  KeysApiCurrentResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: KeysApiCurrentRequest = {
  serial: "corrupti",
};

sdk.keysApi.keysApiCurrent(req).then((res: KeysApiCurrentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->