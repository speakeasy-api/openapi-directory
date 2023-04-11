<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CreateWorkflow,
  CreateWorkflowResponse
} from "openapi/dist/sdk/models/operations";
import {
  CreateWorkflowTemplateEnum,
  ToPropertyTypeEnum,
  MessagePropertyContentTypeEnum,
  MessagePropertyMessengerCategoryEnum,
  MessagePropertyViberServiceMsgCategoryEnum,
  MessagePropertyWhatsappPolicyEnum,
  FromPropertyTypeEnum,
  FailoverPropertyConditionStatusEnum,
  FinalReportLinksMessagesChannelEnum,
  FinalReportLinksMessagesStatusEnum,
  FinalReportLinksMessagesUsageCurrencyEnum,
  FinalReportStatusEnum,
  FinalReportTemplateEnum,
  FinalReportUsageCurrencyEnum,
  MessageStatusStatusEnum,
  MessageStatusUsageCurrencyEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.CreateWorkflow = {
  template: CreateWorkflowTemplateEnum.Failover,
  workflow: [
    {
      from: {
        id: "0123456789012345",
        number: "447700900000",
        type: FromPropertyTypeEnum.Sms,
      },
      message: {
        content: {
          audio: {
            url: "https://example.com/audio.mp3",
          },
          file: {
            caption: "Additional text to accompany the image.",
            url: "https://example.com/file.zip",
          },
          image: {
            caption: "Additional text to accompany the image.",
            url: "https://example.com/image.jpg",
          },
          template: {
            name: "whatsapp:hsm:technology:vonage:verify",
            parameters: [
              {
                default: "1234",
              },
              {
                default: "1234",
              },
              {
                default: "1234",
              },
            ],
          },
          text: "Vonage Verification code: 64873. Valid for 10 minutes.",
          type: MessagePropertyContentTypeEnum.Text,
          video: {
            url: "https://example.com/video.mp4",
          },
        },
        messenger: {
          category: MessagePropertyMessengerCategoryEnum.MessageTag,
          tag: "ticket_update",
        },
        viberServiceMsg: {
          category: MessagePropertyViberServiceMsgCategoryEnum.Transaction,
          ttl: 600,
        },
        whatsapp: {
          locale: "en-GB",
          policy: MessagePropertyWhatsappPolicyEnum.Deterministic,
        },
      },
      to: {
        id: "0123456789012345",
        number: "447700900000",
        type: ToPropertyTypeEnum.Sms,
      },
    },
    {
      from: {
        id: "0123456789012345",
        number: "447700900000",
        type: FromPropertyTypeEnum.Sms,
      },
      message: {
        content: {
          audio: {
            url: "https://example.com/audio.mp3",
          },
          file: {
            caption: "Additional text to accompany the image.",
            url: "https://example.com/file.zip",
          },
          image: {
            caption: "Additional text to accompany the image.",
            url: "https://example.com/image.jpg",
          },
          template: {
            name: "whatsapp:hsm:technology:vonage:verify",
            parameters: [
              {
                default: "1234",
              },
              {
                default: "1234",
              },
              {
                default: "1234",
              },
            ],
          },
          text: "Vonage Verification code: 64873. Valid for 10 minutes.",
          type: MessagePropertyContentTypeEnum.Text,
          video: {
            url: "https://example.com/video.mp4",
          },
        },
        messenger: {
          category: MessagePropertyMessengerCategoryEnum.MessageTag,
          tag: "ticket_update",
        },
        viberServiceMsg: {
          category: MessagePropertyViberServiceMsgCategoryEnum.Transaction,
          ttl: 600,
        },
        whatsapp: {
          locale: "en-GB",
          policy: MessagePropertyWhatsappPolicyEnum.Deterministic,
        },
      },
      to: {
        id: "0123456789012345",
        number: "447700900000",
        type: ToPropertyTypeEnum.Sms,
      },
    },
    {
      from: {
        id: "0123456789012345",
        number: "447700900000",
        type: FromPropertyTypeEnum.Sms,
      },
      message: {
        content: {
          audio: {
            url: "https://example.com/audio.mp3",
          },
          file: {
            caption: "Additional text to accompany the image.",
            url: "https://example.com/file.zip",
          },
          image: {
            caption: "Additional text to accompany the image.",
            url: "https://example.com/image.jpg",
          },
          template: {
            name: "whatsapp:hsm:technology:vonage:verify",
            parameters: [
              {
                default: "1234",
              },
              {
                default: "1234",
              },
              {
                default: "1234",
              },
            ],
          },
          text: "Vonage Verification code: 64873. Valid for 10 minutes.",
          type: MessagePropertyContentTypeEnum.Text,
          video: {
            url: "https://example.com/video.mp4",
          },
        },
        messenger: {
          category: MessagePropertyMessengerCategoryEnum.MessageTag,
          tag: "ticket_update",
        },
        viberServiceMsg: {
          category: MessagePropertyViberServiceMsgCategoryEnum.Transaction,
          ttl: 600,
        },
        whatsapp: {
          locale: "en-GB",
          policy: MessagePropertyWhatsappPolicyEnum.Deterministic,
        },
      },
      to: {
        id: "0123456789012345",
        number: "447700900000",
        type: ToPropertyTypeEnum.Sms,
      },
    },
  ],
};

sdk.createWorkflow(req).then((res: CreateWorkflowResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->