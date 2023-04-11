<!-- Start SDK Example Usage -->
```typescript
import {
  AddUserToAccountRequestBody,
  AddUserToAccountResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AddUserToAccountRequestBody = {
  account: {
    accountId: "corrupti",
    domain: "provident",
  },
  users: [
    {
      identification: {
        email: "Leda_Stiedemann@hotmail.com",
        userId: "vel",
      },
    },
    {
      identification: {
        email: "Luna.Hoppe@yahoo.com",
        userId: "debitis",
      },
    },
    {
      identification: {
        email: "Vincenzo.Goldner@gmail.com",
        userId: "minus",
      },
    },
  ],
};

sdk.accounts.addUserToAccount(req).then((res: AddUserToAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->