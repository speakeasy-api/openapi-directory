<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCredentialListRequest,
  CreateCredentialListResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateCredentialListRequest = {
  requestBody: {
    credentialListSid: "corrupti",
  },
  trunkSid: "provident",
};

sdk.createCredentialList(req).then((res: CreateCredentialListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->