<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostEventsV3SendRequest, PostEventsV3SendResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostEventsV3SendRequest = {
  security: {
    hapikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  request: {
    email: "sit",
    eventName: "voluptas",
    objectId: "culpa",
    occurredAt: "2019-04-21T07:38:14Z",
    properties: {
      "dolor": "expedita",
      "voluptas": "fugit",
      "et": "nihil",
    },
    utk: "rerum",
  },
};

sdk.behavioralEventsTracking.postEventsV3Send(req).then((res: PostEventsV3SendResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->