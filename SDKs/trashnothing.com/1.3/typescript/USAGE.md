<!-- Start SDK Example Usage -->
```typescript
import {
  ContactModeratorsRequest,
  ContactModeratorsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    oauth2Code: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ContactModeratorsRequest = {
  requestBody: {
    message: "corrupti",
    subject: "provident",
  },
  groupId: "distinctio",
};

sdk.groups.contactModerators(req).then((res: ContactModeratorsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->