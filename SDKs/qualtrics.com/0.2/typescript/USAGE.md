<!-- Start SDK Example Usage -->
```typescript
import {
  CreateContactInMailinglistRequest,
  CreateContactInMailinglistResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateContactInMailinglistRequest = {
  createContactInMailingList: {
    email: "Larue_Rau85@yahoo.com",
    firstName: "Karley",
    lastName: "Stamm",
    unsubscribed: false,
  },
  directoryId: "vel",
  mailingListId: "error",
};

sdk.createContactInMailinglist(req).then((res: CreateContactInMailinglistResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->