<!-- Start SDK Example Usage -->
```typescript
import {
  GroundhogRequest,
  GroundhogResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GroundhogRequest = {
  slug: "corrupti",
};

sdk.groundhogs.groundhog(req).then((res: GroundhogResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->