<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteAttributesComputedIdRequest,
  DeleteAttributesComputedIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    password: "YOUR_PASSWORD_HERE",
    username: "YOUR_USERNAME_HERE",
  },
});

const req: DeleteAttributesComputedIdRequest = {
  id: 548814,
};

sdk.attributes.deleteAttributesComputedId(req).then((res: DeleteAttributesComputedIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->