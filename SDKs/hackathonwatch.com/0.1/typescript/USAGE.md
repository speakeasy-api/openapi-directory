<!-- Start SDK Example Usage -->
```typescript
import {
  GETHackathonsIdFormatRequest,
  GETHackathonsIdFormatResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GETHackathonsIdFormatRequest = {
  id: 548814,
};

sdk.hackathons.getHackathonsIdFormat(req).then((res: GETHackathonsIdFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->