<!-- Start SDK Example Usage -->
```typescript
import {
  GetAreasRequest,
  GetAreasResponse,
  GetAreasFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAreasRequest = {
  format: GetAreasFormatEnum.Xml,
};

sdk.resources.getAreas(req).then((res: GetAreasResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->