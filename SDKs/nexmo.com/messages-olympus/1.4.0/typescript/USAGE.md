<!-- Start SDK Example Usage -->
```typescript
import {
  .,
  SendMessageResponse,
  SendMessageRequestBody5FileChannelEnum,
  SendMessageRequestBody5FileMessageTypeEnum,
  SendMessageRequestBody5FileViberServiceCategoryEnum,
  SendMessageRequestBody5VideoChannelEnum,
  SendMessageRequestBody5VideoMessageTypeEnum,
  SendMessageRequestBody5VideoViberServiceCategoryEnum,
  SendMessageRequestBody5ImageChannelEnum,
  SendMessageRequestBody5ImageMessageTypeEnum,
  SendMessageRequestBody5ImageViberServiceCategoryEnum,
  SendMessageRequestBody5TextChannelEnum,
  SendMessageRequestBody5TextMessageTypeEnum,
  SendMessageRequestBody5TextViberServiceCategoryEnum,
  SendMessageRequestBody4FileChannelEnum,
  SendMessageRequestBody4FileMessageTypeEnum,
  SendMessageRequestBody4FileMessengerCategoryEnum,
  SendMessageRequestBody4VideoChannelEnum,
  SendMessageRequestBody4VideoMessageTypeEnum,
  SendMessageRequestBody4VideoMessengerCategoryEnum,
  SendMessageRequestBody4AudioChannelEnum,
  SendMessageRequestBody4AudioMessageTypeEnum,
  SendMessageRequestBody4AudioMessengerCategoryEnum,
  SendMessageRequestBody4ImageChannelEnum,
  SendMessageRequestBody4ImageMessageTypeEnum,
  SendMessageRequestBody4ImageMessengerCategoryEnum,
  SendMessageRequestBody4TextChannelEnum,
  SendMessageRequestBody4TextMessageTypeEnum,
  SendMessageRequestBody4TextMessengerCategoryEnum,
  SendMessageRequestBody3CustomChannelEnum,
  SendMessageRequestBody3CustomMessageTypeEnum,
  SendMessageRequestBody3TemplateChannelEnum,
  SendMessageRequestBody3TemplateMessageTypeEnum,
  SendMessageRequestBody3TemplateWhatsappPolicyEnum,
  SendMessageRequestBody3FileChannelEnum,
  SendMessageRequestBody3FileMessageTypeEnum,
  SendMessageRequestBody3VideoChannelEnum,
  SendMessageRequestBody3VideoMessageTypeEnum,
  SendMessageRequestBody3AudioChannelEnum,
  SendMessageRequestBody3AudioMessageTypeEnum,
  SendMessageRequestBody3ImageChannelEnum,
  SendMessageRequestBody3ImageMessageTypeEnum,
  SendMessageRequestBody3LocationChannelEnum,
  SendMessageRequestBody3LocationMessageTypeEnum,
  SendMessageRequestBody3TextChannelEnum,
  SendMessageRequestBody3TextMessageTypeEnum,
  SendMessageRequestBody2VideoChannelEnum,
  SendMessageRequestBody2VideoMessageTypeEnum,
  SendMessageRequestBody2AudioChannelEnum,
  SendMessageRequestBody2AudioMessageTypeEnum,
  SendMessageRequestBody2VCardChannelEnum,
  SendMessageRequestBody2VCardMessageTypeEnum,
  SendMessageRequestBody2ImageChannelEnum,
  SendMessageRequestBody2ImageMessageTypeEnum,
  SendMessageRequestBody1TextChannelEnum,
  SendMessageRequestBody1TextMessageTypeEnum,
} from "openapi/dist/sdk/models/operations";
import {
  MessageStatusSMSChannelEnum,
  MessageStatusSMSStatusEnum,
  MessageStatusSMSUsageCurrencyEnum,
  MessageStatusMMSChannelEnum,
  MessageStatusMMSStatusEnum,
  MessageStatusMMSUsageCurrencyEnum,
  MessageStatusWhatsAppChannelEnum,
  MessageStatusWhatsAppStatusEnum,
  MessageStatusWhatsAppUsageCurrencyEnum,
  MessageStatusMessengerChannelEnum,
  MessageStatusMessengerStatusEnum,
  MessageStatusMessengerUsageCurrencyEnum,
  MessageStatusViberChannelEnum,
  MessageStatusViberStatusEnum,
  MessageStatusViberUsageCurrencyEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: . = {
  channel: SendMessageRequestBody3VideoChannelEnum.Whatsapp,
  clientRef: "distinctio",
  from: "447700900001",
  messageType: SendMessageRequestBody3VideoMessageTypeEnum.Video,
  to: "447700900000",
  video: {
    url: "https://example.com/video.mp4",
  },
};

sdk.sendMessage(req).then((res: SendMessageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->