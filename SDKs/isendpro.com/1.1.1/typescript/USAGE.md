<!-- Start SDK Example Usage -->
```typescript
import {
  shared.ShortlinkRequest,
  AddShortlinkResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.ShortlinkRequest = {
  keyid: "corrupti",
  shortlink: "provident",
};

sdk.addShortlink.addShortlink(req).then((res: AddShortlinkResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->