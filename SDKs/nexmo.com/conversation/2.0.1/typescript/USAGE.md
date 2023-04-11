<!-- Start SDK Example Usage -->
```typescript
import {
  CreateConversationRequestBody,
  CreateConversationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CreateConversationRequestBody = {
  displayName: "Customer Chat",
  imageUrl: "https://example.com/image.png",
  name: "customer_chat",
  properties: {
    ttl: 60,
  },
};

sdk.conversation.createConversation(req).then((res: CreateConversationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->