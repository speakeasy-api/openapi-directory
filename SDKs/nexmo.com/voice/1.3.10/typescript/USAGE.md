<!-- Start SDK Example Usage -->
```typescript
import {
  .,
  CreateCallResponse
} from "openapi/dist/sdk/models/operations";
import {
  CreateCallRequestNccoEventMethodEnum,
  CreateCallRequestNccoMachineDetectionEnum,
  EndpointWebsocketContentTypeEnum,
  CreateCallRequestAnswerUrlAnswerMethodEnum,
  CreateCallRequestAnswerUrlEventMethodEnum,
  CreateCallRequestAnswerUrlMachineDetectionEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: . = {
  answerMethod: CreateCallRequestAnswerUrlAnswerMethodEnum.Get,
  answerUrl: [
    "quibusdam",
    "unde",
    "nulla",
  ],
  eventMethod: CreateCallRequestAnswerUrlEventMethodEnum.Get,
  eventUrl: [
    "http://physical-pegboard.info",
    "http://fond-teen.com",
    "https://fatherly-geyser.info",
    "https://studious-lynx.info",
  ],
  from: {
    number: "14155550100",
    type: "phone",
  },
  lengthTimer: 568045,
  machineDetection: CreateCallRequestAnswerUrlMachineDetectionEnum.Continue,
  randomFromNumber: false,
  ringingTimer: 392785,
  to: [
    {
      extension: "1234",
      type: "vbc",
    },
    {
      dtmfAnswer: "p*123#",
      number: "14155550100",
      type: "phone",
    },
    {
      type: "sip",
      uri: "sip:rebekka@sip.example.com",
    },
    {
      dtmfAnswer: "p*123#",
      number: "14155550100",
      type: "phone",
    },
  ],
};

sdk.calls.createCall(req).then((res: CreateCallResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->