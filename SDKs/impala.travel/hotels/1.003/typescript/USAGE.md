<!-- Start SDK Example Usage -->
```typescript
import {
  CancelBookingRequest,
  CancelBookingResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyAuthentication: "YOUR_API_KEY_HERE",
  },
});

const req: CancelBookingRequest = {
  bookingId: "corrupti",
};

sdk.bookings.cancelBooking(req).then((res: CancelBookingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->