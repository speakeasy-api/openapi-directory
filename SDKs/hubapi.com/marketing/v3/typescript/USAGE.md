<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest, PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest = {
  security: {
    privateAppsLegacy: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    externalEventId: "sit",
    subscriberState: "voluptas",
  },
  queryParams: {
    externalAccountId: "culpa",
  },
  request: {
    inputs: [
      {
        interactionDateTime: 3390393562759376202,
        properties: {
          "expedita": "voluptas",
          "fugit": "et",
        },
        vid: 2661732831099943416,
      },
      {
        interactionDateTime: 8325060299420976708,
        properties: {
          "debitis": "voluptatum",
          "et": "ut",
          "dolorem": "et",
        },
        vid: 7373105480197164748,
      },
    ],
  },
};

sdk.attendanceSubscriberStateChanges.postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate(req).then((res: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->