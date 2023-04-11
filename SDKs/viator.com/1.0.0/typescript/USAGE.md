<!-- Start SDK Example Usage -->
```typescript
import {
  BookingAvailabilityRequest,
  BookingAvailabilityResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: BookingAvailabilityRequest = {
  acceptLanguage: "en-US",
  requestBody: {
    ageBands: [
      {
        bandId: 592845,
        count: 715190,
      },
      {
        bandId: 844266,
        count: 602763,
      },
      {
        bandId: 857946,
        count: 544883,
      },
    ],
    currencyCode: "illum",
    month: "vel",
    productCode: "error",
    year: "deserunt",
  },
};

sdk.bookingServices.bookingAvailability(req).then((res: BookingAvailabilityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->