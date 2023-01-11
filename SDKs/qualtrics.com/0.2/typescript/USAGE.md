<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateContactInMailinglistRequest, CreateContactInMailinglistResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateContactInMailinglistRequest = {
  pathParams: {
    directoryId: "sit",
    mailingListId: "voluptas",
  },
  request: {
    email: "culpa",
    firstName: "expedita",
    lastName: "consequuntur",
    unsubscribed: false,
  },
};

sdk.createContactInMailinglist(req).then((res: CreateContactInMailinglistResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->