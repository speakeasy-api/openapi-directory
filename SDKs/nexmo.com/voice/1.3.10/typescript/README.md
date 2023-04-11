# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nexmo.com/voice/1.3.10/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nexmo.com/voice/1.3.10/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### calls

* `createCall` - Create an outbound call
* `getCall` - Get detail of a specific call
* `getCalls` - Get details of your calls
* `updateCall` - Modify an in progress call

### playDTMF

* `startDTMF` - Play DTMF tones into a call

### playTTS

* `startTalk` - Play text to speech into a call
* `stopTalk` - Stop text to speech in a call

### streamAudio

* `startStream` - Play an audio file into a call
* `stopStream` - Stop playing an audio file into a call
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

