<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BooksBookshelvesGetRequest, BooksBookshelvesGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BooksBookshelvesGetRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    shelf: "sit",
    userId: "voluptas",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "expedita",
    alt: "proto",
    callback: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    source: "rerum",
    uploadType: "dicta",
    uploadProtocol: "debitis",
  },
};

sdk.bookshelves.booksBookshelvesGet(req).then((res: BooksBookshelvesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->