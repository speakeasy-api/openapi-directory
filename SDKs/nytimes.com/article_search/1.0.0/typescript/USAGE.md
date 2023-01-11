<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetArticlesearchJsonRequest, GetArticlesearchJsonResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetArticlesearchJsonRequest = {
  queryParams: {
    beginDate: "sit",
    endDate: "voluptas",
    facetField: "culpa",
    facetFilter: false,
    fl: "consequuntur",
    fq: "dolor",
    hl: true,
    page: 6044372234677422456,
    q: "fugit",
    sort: "newest",
  },
};

sdk.stories.getArticlesearchJson(req).then((res: GetArticlesearchJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->