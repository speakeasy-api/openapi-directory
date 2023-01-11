<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteConsumerV1AppointmentsIdRequest, DeleteConsumerV1AppointmentsIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: DeleteConsumerV1AppointmentsIdRequest = {
  pathParams: {
    id: "sit",
  },
};

sdk.appointments.deleteConsumerV1AppointmentsId(req).then((res: DeleteConsumerV1AppointmentsIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->