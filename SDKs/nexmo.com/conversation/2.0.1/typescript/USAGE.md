<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateConversationRequest, CreateConversationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: CreateConversationRequest = {
  request: {
    displayName: "sit",
    imageUrl: "voluptas",
    name: "culpa",
    properties: {
      ttl: 6.200000,
    },
  },
};

sdk.conversation.createConversation(req).then((res: CreateConversationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->