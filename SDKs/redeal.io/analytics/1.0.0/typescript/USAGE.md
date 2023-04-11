<!-- Start SDK Example Usage -->
```typescript
import {
  GetEventsRequest,
  GetEventsResponse,
  GetEventsTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetEventsRequest = {
  company: "Medhurst - Rau",
  deal: "quibusdam",
  nexttoken: "unde",
  queryexecutionid: "nulla",
  site: "corrupti",
  type: GetEventsTypeEnum.Contacts,
};

sdk.developers.getEvents(req).then((res: GetEventsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->