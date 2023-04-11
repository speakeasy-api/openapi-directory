<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteConsumerV1AppointmentsIdRequest,
  DeleteConsumerV1AppointmentsIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: DeleteConsumerV1AppointmentsIdRequest = {
  id: "corrupti",
};

sdk.appointments.deleteConsumerV1AppointmentsId(req).then((res: DeleteConsumerV1AppointmentsIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->