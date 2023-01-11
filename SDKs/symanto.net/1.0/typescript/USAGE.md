<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CommunicationRequest, CommunicationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CommunicationRequest = {
  queryParams: {
    all: false,
  },
  request: [
    {
      id: "culpa",
      language: "expedita",
      text: "consequuntur",
    },
  ],
};

sdk.textAnalysis.communication(req).then((res: CommunicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->