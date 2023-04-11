<!-- Start SDK Example Usage -->
```typescript
import {
  AddOrReplaceDocumentsRequest,
  AddOrReplaceDocumentsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AddOrReplaceDocumentsRequest = {
  requestBody: [
    {
      author: "Jane Austen",
      genre: "romance",
      id: 2,
      price: 3.5,
      title: "Pride and Prejudice",
    },
    {
      author: "Jane Austen",
      genre: "romance",
      id: 2,
      price: 3.5,
      title: "Pride and Prejudice",
    },
    {
      author: "Jane Austen",
      genre: "romance",
      id: 2,
      price: 3.5,
      title: "Pride and Prejudice",
    },
  ],
  primaryKey: "id",
};

sdk.documents.addOrReplaceDocuments(req).then((res: AddOrReplaceDocumentsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->