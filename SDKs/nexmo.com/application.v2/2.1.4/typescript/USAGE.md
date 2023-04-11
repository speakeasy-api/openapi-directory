<!-- Start SDK Example Usage -->
```typescript
import {
  CreateApplicationRequestBody,
  CreateApplicationResponse
} from "openapi/dist/sdk/models/operations";
import {
  VoiceCapabilityPaymentsGatewaysModeEnum,
  VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum,
  VoiceCapabilityWebhooksEventUrlHttpMethodEnum,
  VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum,
  VerifyCapabilityVersionEnum,
  VerifyCapabilityWebhooksStatusUrlHttpMethodEnum,
  RtcCapabilityWebhooksEventUrlHttpMethodEnum,
  MessagesCapabilityWebhooksInboundUrlHttpMethodEnum,
  MessagesCapabilityWebhooksStatusUrlHttpMethodEnum,
  MeetingsCapabilityWebhooksRecordingChangedHttpMethodEnum,
  MeetingsCapabilityWebhooksRoomChangedHttpMethodEnum,
  MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    password: "YOUR_PASSWORD_HERE",
    username: "YOUR_USERNAME_HERE",
  },
});

const req: CreateApplicationRequestBody = {
  capabilities: {
    meetings: {
      webhooks: {
        recordingChanged: {
          address: "https://example.com/webhooks/event",
          httpMethod: MeetingsCapabilityWebhooksRecordingChangedHttpMethodEnum.Post,
        },
        roomChanged: {
          address: "https://example.com/webhooks/event",
          httpMethod: MeetingsCapabilityWebhooksRoomChangedHttpMethodEnum.Post,
        },
        sessionChanged: {
          address: "https://example.com/webhooks/event",
          httpMethod: MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum.Post,
        },
      },
    },
    messages: {
      version: "corrupti",
      webhooks: {
        inboundUrl: {
          address: "https://example.com/webhooks/inbound",
          httpMethod: MessagesCapabilityWebhooksInboundUrlHttpMethodEnum.Post,
        },
        statusUrl: {
          address: "https://example.com/webhooks/status",
          httpMethod: MessagesCapabilityWebhooksStatusUrlHttpMethodEnum.Post,
        },
      },
    },
    rtc: {
      legPersistenceTime: 5,
      signedCallbacks: true,
      webhooks: {
        eventUrl: {
          address: "https://example.com/webhooks/event",
          httpMethod: RtcCapabilityWebhooksEventUrlHttpMethodEnum.Post,
        },
      },
    },
    vbc: {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
    verify: {
      version: VerifyCapabilityVersionEnum.V2,
      webhooks: {
        statusUrl: {
          address: "https://example.com/webhooks/event",
          httpMethod: VerifyCapabilityWebhooksStatusUrlHttpMethodEnum.Post,
        },
      },
    },
    voice: {
      conversationTtl: 30,
      payments: {
        gateways: [
          {
            credential: "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
            mode: VoiceCapabilityPaymentsGatewaysModeEnum.Live,
            type: "Stripe",
          },
          {
            credential: "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
            mode: VoiceCapabilityPaymentsGatewaysModeEnum.Live,
            type: "Stripe",
          },
        ],
      },
      signedCallbacks: true,
      webhooks: {
        answerUrl: {
          address: "https://example.com/webhooks/answer",
          connectionTimeout: 500,
          httpMethod: VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum.Post,
          socketTimeout: 3000,
        },
        eventUrl: {
          address: "https://example.com/webhooks/event",
          connectionTimeout: 500,
          httpMethod: VoiceCapabilityWebhooksEventUrlHttpMethodEnum.Post,
          socketTimeout: 3000,
        },
        fallbackAnswerUrl: {
          address: "https://fallback.example.com/webhooks/answer",
          connectionTimeout: 500,
          httpMethod: VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum.Post,
          socketTimeout: 3000,
        },
      },
    },
  },
  keys: {
    publicKey: "-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCA
  KOxjsU4pf/sMFi9N0jqcSLcjxu33G
  d/vynKnlw9SENi+UZR44GdjGdmfm1
  tL1eA7IBh2HNnkYXnAwYzKJoa4eO3
  0kYWekeIZawIwe/g9faFgkev+1xsO
  OUNhPx2LhuLmgwWSRS4L5W851Xe3f
  UQIDAQAB
  -----END PUBLIC KEY-----
  ",
  },
  name: "Demo Application",
  privacy: {
    improveAi: true,
  },
};

sdk.createApplication(req).then((res: CreateApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->