<!-- Start SDK Example Usage -->
```typescript
import {
  .,
  ArticleAddMeasureUnitResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: . = [
  {
    id: 592845,
    name: "distinctio",
    type: "quibusdam",
  },
  {
    id: 602763,
    name: "nulla",
    type: "corrupti",
  },
  {
    id: 847252,
    name: "vel",
    type: "error",
  },
];

sdk.article.articleAddMeasureUnit(req).then((res: ArticleAddMeasureUnitResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->