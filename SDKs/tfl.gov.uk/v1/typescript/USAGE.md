<!-- Start SDK Example Usage -->
```typescript
import {
  AccidentStatsGetRequest,
  AccidentStatsGetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AccidentStatsGetRequest = {
  year: 548814,
};

sdk.accidentStats.accidentStatsGet(req).then((res: AccidentStatsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->