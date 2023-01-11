<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FindRequest, FindResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FindRequest = {
  queryParams: {
    classificationId: [
      "voluptas",
    ],
    classificationName: [
      "expedita",
      "consequuntur",
    ],
    id: "dolor",
    includeLicensedContent: " no",
    includeSpellcheck: " no",
    includeTest: "yes",
    keyword: "et",
    locale: "nihil",
    page: "rerum",
    size: "dicta",
    sort: "debitis",
    source: "ticketmaster",
  },
};

sdk.find(req).then((res: FindResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->