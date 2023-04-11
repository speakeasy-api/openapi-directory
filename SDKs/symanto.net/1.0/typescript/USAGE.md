<!-- Start SDK Example Usage -->
```typescript
import {
  CommunicationRequest,
  CommunicationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CommunicationRequest = {
  requestBody: [
    {
      id: "1",
      language: "en",
      text: "I love the service",
    },
    {
      id: "1",
      language: "en",
      text: "I love the service",
    },
    {
      id: "1",
      language: "en",
      text: "I love the service",
    },
  ],
  all: false,
};

sdk.textAnalysis.communication(req).then((res: CommunicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->