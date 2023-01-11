<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { SearchRequest, SearchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: SearchRequest = {
  headers: {
    galaxyApName: "sit",
    galaxyApPassword: "voluptas",
    galaxySearchType: "culpa",
  },
  request: {
    address: {
      addressLine1: "expedita",
      addressLine2: "consequuntur",
    },
    age: 96.199997,
    dob: "voluptas",
    email: "fugit",
    firstName: "et",
    lastName: "nihil",
    middleName: "rerum",
    phoneNumber: "dicta",
  },
};

sdk.search(req).then((res: SearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->