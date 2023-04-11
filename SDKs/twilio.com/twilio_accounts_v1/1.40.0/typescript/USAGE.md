<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCredentialAwsCreateCredentialAwsRequest,
  CreateCredentialAwsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateCredentialAwsCreateCredentialAwsRequest = {
  accountSid: "corrupti",
  credentials: "provident",
  friendlyName: "distinctio",
};

sdk.createCredentialAws(req).then((res: CreateCredentialAwsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->