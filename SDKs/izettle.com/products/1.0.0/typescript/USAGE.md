<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCategoriesRequest,
  CreateCategoriesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateCategoriesRequest = {
  createCategoriesRequest: {
    categories: [
      {
        name: "provident",
        uuid: "bd9d8d69-a674-4e0f-867c-c8796ed151a0",
      },
      {
        name: "ipsam",
        uuid: "dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7",
      },
      {
        name: "ipsum",
        uuid: "92059293-96fe-4a75-96eb-10faaa2352c5",
      },
    ],
  },
  organizationUuid: "955907af-f1a3-4a2f-a946-7739251aa52c",
};

sdk.categories.createCategories(req).then((res: CreateCategoriesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->