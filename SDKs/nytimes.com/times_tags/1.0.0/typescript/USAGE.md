<!-- Start SDK Example Usage -->
```typescript
import {
  GetTimestagsRequest,
  GetTimestagsResponse,
  GetTimestagsFilterEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apikey: "YOUR_API_KEY_HERE",
  },
});

const req: GetTimestagsRequest = {
  filter: GetTimestagsFilterEnum.Org,
  max: 592845,
  query: "distinctio",
};

sdk.getTimestags(req).then((res: GetTimestagsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->