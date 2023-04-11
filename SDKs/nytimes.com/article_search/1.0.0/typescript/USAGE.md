<!-- Start SDK Example Usage -->
```typescript
import {
  GetArticlesearchJsonRequest,
  GetArticlesearchJsonResponse,
  GetArticlesearchJsonSortEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apikey: "YOUR_API_KEY_HERE",
  },
});

const req: GetArticlesearchJsonRequest = {
  beginDate: "corrupti",
  endDate: "provident",
  facetField: "distinctio",
  facetFilter: false,
  fl: "quibusdam",
  fq: "unde",
  hl: false,
  page: 857946,
  q: "corrupti",
  sort: GetArticlesearchJsonSortEnum.Oldest,
};

sdk.stories.getArticlesearchJson(req).then((res: GetArticlesearchJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->