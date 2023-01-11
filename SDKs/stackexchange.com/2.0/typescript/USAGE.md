<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAccessTokensAccessTokensRequest, GetAccessTokensAccessTokensResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAccessTokensAccessTokensRequest = {
  pathParams: {
    accessTokens: "sit",
  },
  queryParams: {
    callback: "voluptas",
    filter: "culpa",
    page: 501233450539197794,
    pagesize: 3390393562759376202,
  },
};

sdk.getAccessTokensAccessTokens(req).then((res: GetAccessTokensAccessTokensResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->