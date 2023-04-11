<!-- Start SDK Example Usage -->
```typescript
import {
  SendAnSmsRequest,
  SendAnSmsResponse,
  SendAnSmsFormatEnum,
} from "openapi/dist/sdk/models/operations";
import {
  NewMessageMessageClassEnum,
  NewMessageTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SendAnSmsRequest = {
  newMessage: {
    accountRef: "customer1234",
    apiKey: "abcd1234",
    apiSecret: "abcdef0123456789",
    body: "0011223344556677",
    callback: "https://example.com/sms-dlr",
    clientRef: "my-personal-reference",
    contentId: "1107457532145798767",
    entityId: "1101456324675322134",
    from: "AcmeInc",
    messageClass: NewMessageMessageClassEnum.Two,
    protocolId: 127,
    sig: "provident",
    statusReportReq: false,
    text: "Hello World!",
    to: "447700900000",
    ttl: 900000,
    type: NewMessageTypeEnum.Text,
    udh: "06050415811581",
  },
  format: SendAnSmsFormatEnum.Json,
};

sdk.sendAnSms(req).then((res: SendAnSmsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->