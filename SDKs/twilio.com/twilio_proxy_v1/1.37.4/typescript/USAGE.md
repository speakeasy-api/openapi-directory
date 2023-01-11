<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateMessageInteractionRequest, CreateMessageInteractionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateMessageInteractionRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    participantSid: "sit",
    serviceSid: "voluptas",
    sessionSid: "culpa",
  },
  request: {
    body: "expedita",
    mediaUrl: [
      "dolor",
      "expedita",
      "voluptas",
    ],
  },
};

sdk.createMessageInteraction(req).then((res: CreateMessageInteractionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->