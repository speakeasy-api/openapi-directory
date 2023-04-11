<!-- Start SDK Example Usage -->
```typescript
import {
  CreateApplicationRequestBody,
  CreateApplicationResponse,
  CreateApplicationRequestBodyTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateApplicationRequestBody = {
  answerMethod: "GET",
  answerUrl: "https://example.com/webhooks/answer",
  apiKey: "ap1k3y",
  apiSecret: "230e6cf0709417176df1b4fc1e083adc",
  eventMethod: "POST",
  eventUrl: "https://example.com/webhooks/event",
  inboundMethod: "POST",
  inboundUrl: "https://example.com/webhooks/inbound",
  name: "My Application",
  statusMethod: "POST",
  statusUrl: "https://example.com/webhooks/status",
  type: CreateApplicationRequestBodyTypeEnum.Voice,
};

sdk.createApplication(req).then((res: CreateApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->