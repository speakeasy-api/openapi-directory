<!-- Start SDK Example Usage -->
```typescript
import {
  shared.BehavioralEventHttpCompletionRequest,
  PostEventsV3SendResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.BehavioralEventHttpCompletionRequest = {
  email: "Larue_Rau85@yahoo.com",
  eventName: "corrupti",
  objectId: "illum",
  occurredAt: "2022-05-18T09:34:54.894Z",
  properties: {
    "suscipit": "iure",
    "magnam": "debitis",
    "ipsa": "delectus",
  },
  utk: "tempora",
};

sdk.behavioralEventsTracking.postEventsV3Send(req).then((res: PostEventsV3SendResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->