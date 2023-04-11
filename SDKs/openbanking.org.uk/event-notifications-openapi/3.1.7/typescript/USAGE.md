<!-- Start SDK Example Usage -->
```typescript
import {
  CreateEventNotificationRequest,
  CreateEventNotificationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateEventNotificationRequest = {
  requestBody: "corrupti",
  xFapiFinancialId: "provident",
  xFapiInteractionId: "distinctio",
};

sdk.eventNotification.createEventNotification(req).then((res: CreateEventNotificationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->