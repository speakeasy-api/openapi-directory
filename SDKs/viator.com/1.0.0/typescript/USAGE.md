<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BookingAvailabilityRequest, BookingAvailabilityResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BookingAvailabilityRequest = {
  headers: {
    acceptLanguage: "sit",
  },
  request: {
    ageBands: [
      {
        bandId: 6050128673802995827,
        count: 501233450539197794,
      },
    ],
    currencyCode: "consequuntur",
    month: "dolor",
    productCode: "expedita",
    year: "voluptas",
  },
};

sdk.bookingServices.bookingAvailability(req).then((res: BookingAvailabilityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->