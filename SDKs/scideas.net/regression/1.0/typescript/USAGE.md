<!-- Start SDK Example Usage -->
```typescript
import {
  shared.RegressionApiBody,
  PostRegressionApiResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.RegressionApiBody = {
  convertDateTo: "month",
  data: [
    {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
    {
      "error": "deserunt",
      "suscipit": "iure",
    },
    {
      "debitis": "ipsa",
      "delectus": "tempora",
    },
  ],
  ignoreVariables: [
    {
      "minus": "placeat",
      "voluptatum": "iusto",
    },
    {
      "nisi": "recusandae",
      "temporibus": "ab",
      "quis": "veritatis",
    },
  ],
  key: "abc123",
  outcomeVariable: "sales",
};

sdk.postRegressionApi(req).then((res: PostRegressionApiResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->