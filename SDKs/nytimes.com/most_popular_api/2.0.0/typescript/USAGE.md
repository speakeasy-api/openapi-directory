<!-- Start SDK Example Usage -->
```typescript
import {
  GETMostemailedSectionTimePeriodJsonRequest,
  GETMostemailedSectionTimePeriodJsonResponse
} from "openapi/dist/sdk/models/operations";
import {
  TimePeriodEnum,
  SectionEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GETMostemailedSectionTimePeriodJsonRequest = {
  section: SectionEnum.PublicEditor,
  timePeriod: TimePeriodEnum.Seven,
};

sdk.getMostemailedSectionTimePeriodJson(req).then((res: GETMostemailedSectionTimePeriodJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->