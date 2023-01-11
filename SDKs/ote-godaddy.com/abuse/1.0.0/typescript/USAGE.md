<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateTicketRequest, CreateTicketResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateTicketRequest = {
  request: "sit",
};

sdk.v1.createTicket(req).then((res: CreateTicketResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->