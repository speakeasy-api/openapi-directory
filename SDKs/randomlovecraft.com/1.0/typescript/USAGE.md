<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetBooksResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.books.getBooks().then((res: GetBooksResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->