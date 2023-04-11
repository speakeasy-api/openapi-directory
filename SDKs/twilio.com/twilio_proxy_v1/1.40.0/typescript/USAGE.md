<!-- Start SDK Example Usage -->
```typescript
import {
  CreateMessageInteractionRequest,
  CreateMessageInteractionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateMessageInteractionRequest = {
  participantSid: "corrupti",
  requestBody: {
    body: "provident",
    mediaUrl: [
      "https://outstanding-strait.name",
      "https://impressive-ox.name",
      "http://innocent-effect.org",
    ],
  },
  serviceSid: "ipsa",
  sessionSid: "delectus",
};

sdk.createMessageInteraction(req).then((res: CreateMessageInteractionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->