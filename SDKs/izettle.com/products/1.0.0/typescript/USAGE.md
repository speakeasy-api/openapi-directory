<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateCategoriesRequest, CreateCategoriesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateCategoriesRequest = {
  security: {
    zettleApiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    organizationUuid: "sit",
  },
  request: {
    categories: [
      {
        name: "culpa",
        uuid: "expedita",
      },
    ],
  },
};

sdk.categories.createCategories(req).then((res: CreateCategoriesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->