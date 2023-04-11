<!-- Start SDK Example Usage -->
```typescript
import {
  PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest,
  PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest = {
  batchInputMarketingEventSubscriber: {
    inputs: [
      {
        interactionDateTime: 592845,
        properties: {
          "quibusdam": "unde",
          "nulla": "corrupti",
          "illum": "vel",
        },
        vid: 623564,
      },
      {
        interactionDateTime: 645894,
        properties: {
          "iure": "magnam",
          "debitis": "ipsa",
        },
        vid: 963663,
      },
      {
        interactionDateTime: 272656,
        properties: {
          "molestiae": "minus",
          "placeat": "voluptatum",
        },
        vid: 479977,
      },
    ],
  },
  externalAccountId: "excepturi",
  externalEventId: "nisi",
  subscriberState: "recusandae",
};

sdk.attendanceSubscriberStateChanges.postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate(req).then((res: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->