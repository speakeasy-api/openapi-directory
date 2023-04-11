<!-- Start SDK Example Usage -->
```typescript
import {
  PubsubSubscriptionsAcknowledgeRequest,
  PubsubSubscriptionsAcknowledgeResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PubsubSubscriptionsAcknowledgeRequest = {
  dollarXgafv: XgafvEnum.Two,
  acknowledgeRequest: {
    ackId: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
    subscription: "nulla",
  },
  accessToken: "corrupti",
  alt: AltEnum.Proto,
  callback: "vel",
  fields: "error",
  key: "deserunt",
  oauthToken: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.subscriptions.pubsubSubscriptionsAcknowledge(req).then((res: PubsubSubscriptionsAcknowledgeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->