<!-- Start SDK Example Usage -->
```typescript
import {
  GetBooksResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.books.getBooks().then((res: GetBooksResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->