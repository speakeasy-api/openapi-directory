<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccessTokensAccessTokensRequest,
  GetAccessTokensAccessTokensResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAccessTokensAccessTokensRequest = {
  accessTokens: "corrupti",
  callback: "provident",
  filter: "distinctio",
  page: 844266,
  pagesize: 602763,
};

sdk.getAccessTokensAccessTokens(req).then((res: GetAccessTokensAccessTokensResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->