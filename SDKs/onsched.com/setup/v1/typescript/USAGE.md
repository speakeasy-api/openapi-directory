<!-- Start SDK Example Usage -->
```typescript
import {
  GetSetupV1AppointmentsRequest,
  GetSetupV1AppointmentsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetSetupV1AppointmentsRequest = {
  bookedBy: "corrupti",
  calendarId: "provident",
  customerId: "distinctio",
  email: "Leda_Stiedemann@hotmail.com",
  endDate: "2022-05-18T09:34:54.894Z",
  lastname: "Oberbrunner",
  limit: 384382,
  locationId: "iure",
  offset: 297534,
  resourceId: "debitis",
  serviceAllocationId: "ipsa",
  serviceId: "delectus",
  startDate: "2022-08-14T01:03:07.567Z",
  status: "molestiae",
};

sdk.appointments.getSetupV1Appointments(req).then((res: GetSetupV1AppointmentsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->