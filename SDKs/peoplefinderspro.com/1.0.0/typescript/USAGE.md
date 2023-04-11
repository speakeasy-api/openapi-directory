<!-- Start SDK Example Usage -->
```typescript
import {
  SearchRequest,
  SearchResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SearchRequest = {
  requestBody: {
    address: {
      addressLine1: "corrupti",
      addressLine2: "provident",
    },
    age: 7151.9,
    dob: "quibusdam",
    email: "Ryan.Little62@yahoo.com",
    firstName: "Luna",
    lastName: "Hoppe",
    middleName: "iure",
    phoneNumber: "magnam",
  },
  galaxyApName: "debitis",
  galaxyApPassword: "ipsa",
  galaxySearchType: "delectus",
};

sdk.search(req).then((res: SearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->