<!-- Start SDK Example Usage -->
```typescript
import {
  GetEventsV3EventsGetPageRequest,
  GetEventsV3EventsGetPageResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetEventsV3EventsGetPageRequest = {
  after: "corrupti",
  before: "provident",
  eventType: "distinctio",
  limit: 844266,
  objectId: 602763,
  objectType: "nulla",
  occurredAfter: "2021-04-22T12:08:58.275Z",
  occurredBefore: "2022-05-18T09:34:54.894Z",
  sort: [
    "suscipit",
    "iure",
    "magnam",
  ],
};

sdk.events.getEventsV3EventsGetPage(req).then((res: GetEventsV3EventsGetPageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->