<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetSetupV1AppointmentsRequest, GetSetupV1AppointmentsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: GetSetupV1AppointmentsRequest = {
  queryParams: {
    bookedBy: "sit",
    calendarId: "voluptas",
    customerId: "culpa",
    email: "expedita",
    endDate: "1997-12-26T13:41:25Z",
    lastname: "dolor",
    limit: 1774932891286980153,
    locationId: "voluptas",
    offset: 8274930044578894929,
    resourceId: "et",
    serviceAllocationId: "nihil",
    serviceId: "rerum",
    startDate: "2004-06-02T10:14:12Z",
    status: "voluptatum",
  },
};

sdk.appointments.getSetupV1Appointments(req).then((res: GetSetupV1AppointmentsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->