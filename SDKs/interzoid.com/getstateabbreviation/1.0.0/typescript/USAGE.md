<!-- Start SDK Example Usage -->
```typescript
import {
  GetstateabbreviationRequest,
  GetstateabbreviationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetstateabbreviationRequest = {
  license: "corrupti",
  state: "provident",
};

sdk.stateDataStandardization.getstateabbreviation(req).then((res: GetstateabbreviationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->