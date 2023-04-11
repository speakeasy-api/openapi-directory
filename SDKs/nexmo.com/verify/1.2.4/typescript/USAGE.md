<!-- Start SDK Example Usage -->
```typescript
import {
  VerifyCheckRequest,
  VerifyCheckResponse
} from "openapi/dist/sdk/models/operations";
import {
  FormatEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: VerifyCheckRequest = {
  checkRequest: {
    apiKey: "abcd1234",
    apiSecret: "Sup3rS3cr3t!!",
    code: "1234",
    ipAddress: "123.0.0.255",
    requestId: "abcdef0123456789abcdef0123456789",
  },
  format: FormatEnum.Xml,
};

sdk.verifyCheck(req).then((res: VerifyCheckResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->