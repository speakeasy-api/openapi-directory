<!-- Start SDK Example Usage -->
```typescript
import {
  CreateBindingRequest,
  CreateBindingResponse
} from "openapi/dist/sdk/models/operations";
import {
  BindingEnumBindingTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateBindingRequest = {
  requestBody: {
    address: "5786 Little Streets",
    bindingType: BindingEnumBindingTypeEnum.Sms,
    credentialSid: "error",
    endpoint: "deserunt",
    identity: "suscipit",
    notificationProtocolVersion: "iure",
    tag: [
      "debitis",
      "ipsa",
    ],
  },
  serviceSid: "delectus",
};

sdk.createBinding(req).then((res: CreateBindingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->