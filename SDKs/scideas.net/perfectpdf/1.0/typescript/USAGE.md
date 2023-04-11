<!-- Start SDK Example Usage -->
```typescript
import {
  shared.PerfectpdfApiBody,
  PostPerfectpdfApiResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.PerfectpdfApiBody = {
  apiKey: "abc123",
  html: "<!doctype html><html><head><meta charset="UTF-8"><title>my title</title><script src="script.js"></script></head><body><div>My PDF</div></body></html>",
};

sdk.postPerfectpdfApi(req).then((res: PostPerfectpdfApiResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->