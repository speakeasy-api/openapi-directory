<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateApplicationRequest, CreateApplicationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateApplicationRequest = {
  request: {
    answerMethod: "sit",
    answerUrl: "voluptas",
    apiKey: "culpa",
    apiSecret: "expedita",
    eventMethod: "consequuntur",
    eventUrl: "dolor",
    inboundMethod: "expedita",
    inboundUrl: "voluptas",
    name: "fugit",
    statusMethod: "et",
    statusUrl: "nihil",
    type: "messages",
  },
};

sdk.createApplication(req).then((res: CreateApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->