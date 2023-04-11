<!-- Start SDK Example Usage -->
```typescript
import {
  .,
  PostSuggestResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: . = "es";

sdk.feedback.postSuggest(req).then((res: PostSuggestResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->