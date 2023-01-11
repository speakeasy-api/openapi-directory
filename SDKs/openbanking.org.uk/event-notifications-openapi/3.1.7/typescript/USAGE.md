<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateEventNotificationRequest, CreateEventNotificationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateEventNotificationRequest = {
  headers: {
    xFapiFinancialId: "sit",
    xFapiInteractionId: "voluptas",
  },
  request: "culpa",
};

sdk.eventNotification.createEventNotification(req).then((res: CreateEventNotificationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->