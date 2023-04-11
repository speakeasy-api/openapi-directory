# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nexmo.com/messages-olympus/1.4.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nexmo.com/messages-olympus/1.4.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `sendMessage` - Send a message to the given channel.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

