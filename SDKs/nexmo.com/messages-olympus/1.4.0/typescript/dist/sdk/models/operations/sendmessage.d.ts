import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendMessageSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    bearerAuth?: string;
}
/**
 * The channel to send to. You must provide `viber_service` in this field
 */
export declare enum SendMessageRequestBody5FileChannelEnum {
    ViberService = "viber_service"
}
export declare class SendMessageRequestBody5FileFile extends SpeakeasyBase {
    url: string;
}
/**
 * The type of message to send. You must provide `file` in this field
 */
export declare enum SendMessageRequestBody5FileMessageTypeEnum {
    File = "file"
}
/**
 * The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.
 */
export declare enum SendMessageRequestBody5FileViberServiceCategoryEnum {
    Transaction = "transaction",
    Promotion = "promotion"
}
export declare class SendMessageRequestBody5FileViberService extends SpeakeasyBase {
    /**
     * The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.
     */
    category?: SendMessageRequestBody5FileViberServiceCategoryEnum;
    /**
     * Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.
     */
    ttl?: number;
    /**
     * Viber-specific type definition. To use "template", please contact your Vonage Account Manager to setup your templates. To find out more please visit the [product page](https://www.vonage.com/communications-apis/messages/)
     */
    type?: string;
}
export declare class SendMessageRequestBody5File extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `viber_service` in this field
     */
    channel: SendMessageRequestBody5FileChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    file: SendMessageRequestBody5FileFile;
    /**
     * The ID of the message sender
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `file` in this field
     */
    messageType: SendMessageRequestBody5FileMessageTypeEnum;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
    viberService?: SendMessageRequestBody5FileViberService;
}
/**
 * The channel to send to. You must provide `viber_service` in this field
 */
export declare enum SendMessageRequestBody5VideoChannelEnum {
    ViberService = "viber_service"
}
/**
 * The type of message to send. You must provide `video` in this field
 */
export declare enum SendMessageRequestBody5VideoMessageTypeEnum {
    Video = "video"
}
/**
 * The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.
 */
export declare enum SendMessageRequestBody5VideoViberServiceCategoryEnum {
    Transaction = "transaction",
    Promotion = "promotion"
}
export declare class SendMessageRequestBody5VideoViberService extends SpeakeasyBase {
    /**
     * The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.
     */
    category?: SendMessageRequestBody5VideoViberServiceCategoryEnum;
    /**
     * The duration of the video in seconds.
     */
    duration?: string;
    /**
     * The file size of the video in MB.
     */
    fileSize?: string;
    /**
     * Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.
     */
    ttl?: number;
    /**
     * Viber-specific type definition. To use "template", please contact your Vonage Account Manager to setup your templates. To find out more please visit the [product page](https://www.vonage.com/communications-apis/messages/)
     */
    type?: string;
}
export declare class SendMessageRequestBody5VideoVideo extends SpeakeasyBase {
    /**
     * Publicly accessible URL of the video attachment. Supports file types .mp4 and .3gpp
     *
     * @remarks
     * > Note: Only supports video codec H.264 and audio codec AAC
     *
     */
    url: string;
}
export declare class SendMessageRequestBody5Video extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `viber_service` in this field
     */
    channel: SendMessageRequestBody5VideoChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The ID of the message sender
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `video` in this field
     */
    messageType: SendMessageRequestBody5VideoMessageTypeEnum;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
    viberService?: SendMessageRequestBody5VideoViberService;
    video: SendMessageRequestBody5VideoVideo;
}
/**
 * The channel to send to. You must provide `viber_service` in this field
 */
export declare enum SendMessageRequestBody5ImageChannelEnum {
    ViberService = "viber_service"
}
export declare class SendMessageRequestBody5ImageImage extends SpeakeasyBase {
    /**
     * The publicly accessible URL of the image attachment. The image file is available for 48 hours after it is created. Supported types are .jpg, .jpeg, and .png
     */
    url: string;
}
/**
 * The type of message to send. You must provide `image` in this field
 */
export declare enum SendMessageRequestBody5ImageMessageTypeEnum {
    Image = "image"
}
/**
 * Node for Viber action buttons.
 */
export declare class SendMessageRequestBody5ImageViberServiceAction extends SpeakeasyBase {
    /**
     * Text which is rendered on the action button.
     */
    text?: string;
    /**
     * A URL which is requested when the action button is clicked.
     */
    url?: string;
}
/**
 * The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.
 */
export declare enum SendMessageRequestBody5ImageViberServiceCategoryEnum {
    Transaction = "transaction",
    Promotion = "promotion"
}
export declare class SendMessageRequestBody5ImageViberService extends SpeakeasyBase {
    /**
     * Node for Viber action buttons.
     */
    action?: SendMessageRequestBody5ImageViberServiceAction;
    /**
     * The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.
     */
    category?: SendMessageRequestBody5ImageViberServiceCategoryEnum;
    /**
     * Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.
     */
    ttl?: number;
    /**
     * Viber-specific type definition. To use "template", please contact your Vonage Account Manager to setup your templates. To find out more please visit the [product page](https://www.vonage.com/communications-apis/messages/)
     */
    type?: string;
}
export declare class SendMessageRequestBody5Image extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `viber_service` in this field
     */
    channel: SendMessageRequestBody5ImageChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The ID of the message sender
     *
     * @remarks
     *
     */
    from: string;
    image: SendMessageRequestBody5ImageImage;
    /**
     * The type of message to send. You must provide `image` in this field
     */
    messageType: SendMessageRequestBody5ImageMessageTypeEnum;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
    viberService?: SendMessageRequestBody5ImageViberService;
}
/**
 * The channel to send to. You must provide `viber_service` in this field
 */
export declare enum SendMessageRequestBody5TextChannelEnum {
    ViberService = "viber_service"
}
/**
 * The type of message to send. You must provide `text` in this field
 */
export declare enum SendMessageRequestBody5TextMessageTypeEnum {
    Text = "text"
}
/**
 * Node for Viber action buttons.
 */
export declare class SendMessageRequestBody5TextViberServiceAction extends SpeakeasyBase {
    /**
     * Text which is rendered on the action button.
     */
    text?: string;
    /**
     * A URL which is requested when the action button is clicked.
     */
    url?: string;
}
/**
 * The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.
 */
export declare enum SendMessageRequestBody5TextViberServiceCategoryEnum {
    Transaction = "transaction",
    Promotion = "promotion"
}
export declare class SendMessageRequestBody5TextViberService extends SpeakeasyBase {
    /**
     * Node for Viber action buttons.
     */
    action?: SendMessageRequestBody5TextViberServiceAction;
    /**
     * The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.
     */
    category?: SendMessageRequestBody5TextViberServiceCategoryEnum;
    /**
     * Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.
     */
    ttl?: number;
    /**
     * Viber-specific type definition. To use "template", please contact your Vonage Account Manager to setup your templates. To find out more please visit the [product page](https://www.vonage.com/communications-apis/messages/)
     */
    type?: string;
}
/**
 * The text of message to send.
 */
export declare class SendMessageRequestBody5Text extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `viber_service` in this field
     */
    channel: SendMessageRequestBody5TextChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The ID of the message sender
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `text` in this field
     */
    messageType: SendMessageRequestBody5TextMessageTypeEnum;
    text: string;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
    viberService?: SendMessageRequestBody5TextViberService;
}
/**
 * The channel to send to. You must provide `messenger` in this field
 */
export declare enum SendMessageRequestBody4FileChannelEnum {
    Messenger = "messenger"
}
export declare class SendMessageRequestBody4FileFile extends SpeakeasyBase {
    url: string;
}
/**
 * The type of message to send. You must provide `file` in this field
 */
export declare enum SendMessageRequestBody4FileMessageTypeEnum {
    File = "file"
}
/**
 * The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.
 */
export declare enum SendMessageRequestBody4FileMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}
export declare class SendMessageRequestBody4FileMessenger extends SpeakeasyBase {
    /**
     * The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.
     */
    category?: SendMessageRequestBody4FileMessengerCategoryEnum;
    /**
     * A tag describing the type and relevance of the 1:1 communication between your app and the end user. A full list of available tags is available [here](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)
     */
    tag?: string;
}
export declare class SendMessageRequestBody4File extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `messenger` in this field
     */
    channel: SendMessageRequestBody4FileChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    file: SendMessageRequestBody4FileFile;
    /**
     * The ID of the message sender
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `file` in this field
     */
    messageType: SendMessageRequestBody4FileMessageTypeEnum;
    messenger?: SendMessageRequestBody4FileMessenger;
    /**
     * The ID of the message recipient
     *
     * @remarks
     *
     */
    to: string;
}
/**
 * The channel to send to. You must provide `messenger` in this field
 */
export declare enum SendMessageRequestBody4VideoChannelEnum {
    Messenger = "messenger"
}
/**
 * The type of message to send. You must provide `video` in this field
 */
export declare enum SendMessageRequestBody4VideoMessageTypeEnum {
    Video = "video"
}
/**
 * The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.
 */
export declare enum SendMessageRequestBody4VideoMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}
export declare class SendMessageRequestBody4VideoMessenger extends SpeakeasyBase {
    /**
     * The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.
     */
    category?: SendMessageRequestBody4VideoMessengerCategoryEnum;
    /**
     * A tag describing the type and relevance of the 1:1 communication between your app and the end user. A full list of available tags is available [here](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)
     */
    tag?: string;
}
export declare class SendMessageRequestBody4VideoVideo extends SpeakeasyBase {
    /**
     * Publicly accessible URL of the video attachment. Supports file types .mp4 and .3gpp
     *
     * @remarks
     * > Note: Only supports video codec H.264 and audio codec AAC
     *
     */
    url: string;
}
export declare class SendMessageRequestBody4Video extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `messenger` in this field
     */
    channel: SendMessageRequestBody4VideoChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The ID of the message sender
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `video` in this field
     */
    messageType: SendMessageRequestBody4VideoMessageTypeEnum;
    messenger?: SendMessageRequestBody4VideoMessenger;
    /**
     * The ID of the message recipient
     *
     * @remarks
     *
     */
    to: string;
    video: SendMessageRequestBody4VideoVideo;
}
export declare class SendMessageRequestBody4AudioAudio extends SpeakeasyBase {
    url: string;
}
/**
 * The channel to send to. You must provide `messenger` in this field
 */
export declare enum SendMessageRequestBody4AudioChannelEnum {
    Messenger = "messenger"
}
/**
 * The type of message to send. You must provide `audio` in this field
 */
export declare enum SendMessageRequestBody4AudioMessageTypeEnum {
    Audio = "audio"
}
/**
 * The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.
 */
export declare enum SendMessageRequestBody4AudioMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}
export declare class SendMessageRequestBody4AudioMessenger extends SpeakeasyBase {
    /**
     * The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.
     */
    category?: SendMessageRequestBody4AudioMessengerCategoryEnum;
    /**
     * A tag describing the type and relevance of the 1:1 communication between your app and the end user. A full list of available tags is available [here](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)
     */
    tag?: string;
}
export declare class SendMessageRequestBody4Audio extends SpeakeasyBase {
    audio: SendMessageRequestBody4AudioAudio;
    /**
     * The channel to send to. You must provide `messenger` in this field
     */
    channel: SendMessageRequestBody4AudioChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The ID of the message sender
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `audio` in this field
     */
    messageType: SendMessageRequestBody4AudioMessageTypeEnum;
    messenger?: SendMessageRequestBody4AudioMessenger;
    /**
     * The ID of the message recipient
     *
     * @remarks
     *
     */
    to: string;
}
/**
 * The channel to send to. You must provide `messenger` in this field
 */
export declare enum SendMessageRequestBody4ImageChannelEnum {
    Messenger = "messenger"
}
export declare class SendMessageRequestBody4ImageImage extends SpeakeasyBase {
    /**
     * The publicly accessible URL of the image attachment. The image file is available for 48 hours after it is created. Supported types are .jpg, .jpeg, and .png
     */
    url: string;
}
/**
 * The type of message to send. You must provide `image` in this field
 */
export declare enum SendMessageRequestBody4ImageMessageTypeEnum {
    Image = "image"
}
/**
 * The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.
 */
export declare enum SendMessageRequestBody4ImageMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}
export declare class SendMessageRequestBody4ImageMessenger extends SpeakeasyBase {
    /**
     * The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.
     */
    category?: SendMessageRequestBody4ImageMessengerCategoryEnum;
    /**
     * A tag describing the type and relevance of the 1:1 communication between your app and the end user. A full list of available tags is available [here](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)
     */
    tag?: string;
}
export declare class SendMessageRequestBody4Image extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `messenger` in this field
     */
    channel: SendMessageRequestBody4ImageChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The ID of the message sender
     *
     * @remarks
     *
     */
    from: string;
    image: SendMessageRequestBody4ImageImage;
    /**
     * The type of message to send. You must provide `image` in this field
     */
    messageType: SendMessageRequestBody4ImageMessageTypeEnum;
    messenger?: SendMessageRequestBody4ImageMessenger;
    /**
     * The ID of the message recipient
     *
     * @remarks
     *
     */
    to: string;
}
/**
 * The channel to send to. You must provide `messenger` in this field
 */
export declare enum SendMessageRequestBody4TextChannelEnum {
    Messenger = "messenger"
}
/**
 * The type of message to send. You must provide `text` in this field
 */
export declare enum SendMessageRequestBody4TextMessageTypeEnum {
    Text = "text"
}
/**
 * The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.
 */
export declare enum SendMessageRequestBody4TextMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}
export declare class SendMessageRequestBody4TextMessenger extends SpeakeasyBase {
    /**
     * The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.
     */
    category?: SendMessageRequestBody4TextMessengerCategoryEnum;
    /**
     * A tag describing the type and relevance of the 1:1 communication between your app and the end user. A full list of available tags is available [here](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)
     */
    tag?: string;
}
/**
 * The text of message to send.
 */
export declare class SendMessageRequestBody4Text extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `messenger` in this field
     */
    channel: SendMessageRequestBody4TextChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The ID of the message sender
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `text` in this field
     */
    messageType: SendMessageRequestBody4TextMessageTypeEnum;
    messenger?: SendMessageRequestBody4TextMessenger;
    text: string;
    /**
     * The ID of the message recipient
     *
     * @remarks
     *
     */
    to: string;
}
/**
 * The channel to send to. You must provide `whatsapp` in this field
 */
export declare enum SendMessageRequestBody3CustomChannelEnum {
    Whatsapp = "whatsapp"
}
/**
 * The type of message to send. You must provide `custom` in this field
 */
export declare enum SendMessageRequestBody3CustomMessageTypeEnum {
    Custom = "custom"
}
export declare class SendMessageRequestBody3Custom extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `whatsapp` in this field
     */
    channel: SendMessageRequestBody3CustomChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * A custom payload, which is passed directly to WhatsApp for certain features such as templates and interactive messages. The schema of a custom object can vary widely. [Read more about Custom Objects](https://developer.vonage.com/messages/concepts/custom-objects).
     */
    custom?: Record<string, any>;
    /**
     * The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `custom` in this field
     */
    messageType: SendMessageRequestBody3CustomMessageTypeEnum;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
}
/**
 * The channel to send to. You must provide `whatsapp` in this field
 */
export declare enum SendMessageRequestBody3TemplateChannelEnum {
    Whatsapp = "whatsapp"
}
/**
 * The type of message to send. You must provide `template` in this field
 */
export declare enum SendMessageRequestBody3TemplateMessageTypeEnum {
    Template = "template"
}
export declare class SendMessageRequestBody3TemplateTemplate extends SpeakeasyBase {
    /**
     * The name of the template. For WhatsApp use your WhatsApp namespace (available via Facebook Business Manager), followed by a colon : and the name of the template to use.
     */
    name: string;
    /**
     * The parameters are an array of strings, with the first string being used for {{1}} in the template, with the second being {{2}} etc. Only required if the template specified by `name` contains parameters.
     */
    parameters?: string[];
}
/**
 * Policy for resolving what language template to use. As of right now the only valid choice is `deterministic`.
 */
export declare enum SendMessageRequestBody3TemplateWhatsappPolicyEnum {
    Deterministic = "deterministic"
}
export declare class SendMessageRequestBody3TemplateWhatsapp extends SpeakeasyBase {
    /**
     * The [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) language of the template. See [the WhatsApp documentation](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages-) for supported languages.
     */
    locale: string;
    /**
     * Policy for resolving what language template to use. As of right now the only valid choice is `deterministic`.
     */
    policy?: SendMessageRequestBody3TemplateWhatsappPolicyEnum;
}
export declare class SendMessageRequestBody3Template extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `whatsapp` in this field
     */
    channel: SendMessageRequestBody3TemplateChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `template` in this field
     */
    messageType: SendMessageRequestBody3TemplateMessageTypeEnum;
    template: SendMessageRequestBody3TemplateTemplate;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
    whatsapp: SendMessageRequestBody3TemplateWhatsapp;
}
/**
 * The channel to send to. You must provide `whatsapp` in this field
 */
export declare enum SendMessageRequestBody3FileChannelEnum {
    Whatsapp = "whatsapp"
}
export declare class SendMessageRequestBody3FileFile extends SpeakeasyBase {
    url: string;
}
/**
 * The type of message to send. You must provide `file` in this field
 */
export declare enum SendMessageRequestBody3FileMessageTypeEnum {
    File = "file"
}
export declare class SendMessageRequestBody3File extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `whatsapp` in this field
     */
    channel: SendMessageRequestBody3FileChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    file: SendMessageRequestBody3FileFile;
    /**
     * The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `file` in this field
     */
    messageType: SendMessageRequestBody3FileMessageTypeEnum;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
}
/**
 * The channel to send to. You must provide `whatsapp` in this field
 */
export declare enum SendMessageRequestBody3VideoChannelEnum {
    Whatsapp = "whatsapp"
}
/**
 * The type of message to send. You must provide `video` in this field
 */
export declare enum SendMessageRequestBody3VideoMessageTypeEnum {
    Video = "video"
}
export declare class SendMessageRequestBody3VideoVideo extends SpeakeasyBase {
    /**
     * Publicly accessible URL of the video attachment. Supports file types .mp4 and .3gpp
     *
     * @remarks
     * > Note: Only supports video codec H.264 and audio codec AAC
     *
     */
    url: string;
}
export declare class SendMessageRequestBody3Video extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `whatsapp` in this field
     */
    channel: SendMessageRequestBody3VideoChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `video` in this field
     */
    messageType: SendMessageRequestBody3VideoMessageTypeEnum;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
    video: SendMessageRequestBody3VideoVideo;
}
export declare class SendMessageRequestBody3AudioAudio extends SpeakeasyBase {
    url: string;
}
/**
 * The channel to send to. You must provide `whatsapp` in this field
 */
export declare enum SendMessageRequestBody3AudioChannelEnum {
    Whatsapp = "whatsapp"
}
/**
 * The type of message to send. You must provide `audio` in this field
 */
export declare enum SendMessageRequestBody3AudioMessageTypeEnum {
    Audio = "audio"
}
export declare class SendMessageRequestBody3Audio extends SpeakeasyBase {
    audio: SendMessageRequestBody3AudioAudio;
    /**
     * The channel to send to. You must provide `whatsapp` in this field
     */
    channel: SendMessageRequestBody3AudioChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `audio` in this field
     */
    messageType: SendMessageRequestBody3AudioMessageTypeEnum;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
}
/**
 * The channel to send to. You must provide `whatsapp` in this field
 */
export declare enum SendMessageRequestBody3ImageChannelEnum {
    Whatsapp = "whatsapp"
}
export declare class SendMessageRequestBody3ImageImage extends SpeakeasyBase {
    /**
     * The publicly accessible URL of the image attachment. The image file is available for 48 hours after it is created. Supported types are .jpg, .jpeg, and .png
     */
    url: string;
}
/**
 * The type of message to send. You must provide `image` in this field
 */
export declare enum SendMessageRequestBody3ImageMessageTypeEnum {
    Image = "image"
}
export declare class SendMessageRequestBody3Image extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `whatsapp` in this field
     */
    channel: SendMessageRequestBody3ImageChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details
     *
     * @remarks
     *
     */
    from: string;
    image: SendMessageRequestBody3ImageImage;
    /**
     * The type of message to send. You must provide `image` in this field
     */
    messageType: SendMessageRequestBody3ImageMessageTypeEnum;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
}
/**
 * The channel to send to. You must provide `whatsapp` in this field
 */
export declare enum SendMessageRequestBody3LocationChannelEnum {
    Whatsapp = "whatsapp"
}
export declare class SendMessageRequestBody3LocationLocation extends SpeakeasyBase {
    /**
     * Address of the location. Only displayed if `name` is present.
     */
    address?: string;
    /**
     * Latitude of the location.
     */
    lat: number;
    /**
     * Longitude of the location.
     */
    long: number;
    /**
     * Name of the location.
     */
    name?: string;
}
/**
 * The type of message to send. You must provide `location` in this field
 */
export declare enum SendMessageRequestBody3LocationMessageTypeEnum {
    Location = "location"
}
export declare class SendMessageRequestBody3Location extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `whatsapp` in this field
     */
    channel: SendMessageRequestBody3LocationChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details
     *
     * @remarks
     *
     */
    from: string;
    location: SendMessageRequestBody3LocationLocation;
    /**
     * The type of message to send. You must provide `location` in this field
     */
    messageType: SendMessageRequestBody3LocationMessageTypeEnum;
    /**
     * The location to be sent in the message.
     *
     * @remarks
     *
     */
    text?: any;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
}
/**
 * The channel to send to. You must provide `whatsapp` in this field
 */
export declare enum SendMessageRequestBody3TextChannelEnum {
    Whatsapp = "whatsapp"
}
/**
 * The type of message to send. You must provide `text` in this field
 */
export declare enum SendMessageRequestBody3TextMessageTypeEnum {
    Text = "text"
}
/**
 * The text of message to send.
 */
export declare class SendMessageRequestBody3Text extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `whatsapp` in this field
     */
    channel: SendMessageRequestBody3TextChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `text` in this field
     */
    messageType: SendMessageRequestBody3TextMessageTypeEnum;
    text: string;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
}
/**
 * The channel to send to. You must provide `mms` in this field
 */
export declare enum SendMessageRequestBody2VideoChannelEnum {
    Mms = "mms"
}
/**
 * The type of message to send. You must provide `video` in this field
 */
export declare enum SendMessageRequestBody2VideoMessageTypeEnum {
    Video = "video"
}
export declare class SendMessageRequestBody2VideoVideo extends SpeakeasyBase {
    /**
     * Publicly accessible URL of the video attachment. Supports file types .mp4 and .3gpp
     *
     * @remarks
     * > Note: Only supports video codec H.264 and audio codec AAC
     *
     */
    url: string;
}
export declare class SendMessageRequestBody2Video extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `mms` in this field
     */
    channel: SendMessageRequestBody2VideoChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `video` in this field
     */
    messageType: SendMessageRequestBody2VideoMessageTypeEnum;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
    video: SendMessageRequestBody2VideoVideo;
}
export declare class SendMessageRequestBody2AudioAudio extends SpeakeasyBase {
    url: string;
}
/**
 * The channel to send to. You must provide `mms` in this field
 */
export declare enum SendMessageRequestBody2AudioChannelEnum {
    Mms = "mms"
}
/**
 * The type of message to send. You must provide `audio` in this field
 */
export declare enum SendMessageRequestBody2AudioMessageTypeEnum {
    Audio = "audio"
}
export declare class SendMessageRequestBody2Audio extends SpeakeasyBase {
    audio: SendMessageRequestBody2AudioAudio;
    /**
     * The channel to send to. You must provide `mms` in this field
     */
    channel: SendMessageRequestBody2AudioChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `audio` in this field
     */
    messageType: SendMessageRequestBody2AudioMessageTypeEnum;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
}
/**
 * The channel to send to. You must provide `mms` in this field
 */
export declare enum SendMessageRequestBody2VCardChannelEnum {
    Mms = "mms"
}
/**
 * The type of message to send. You must provide `vcard` in this field
 */
export declare enum SendMessageRequestBody2VCardMessageTypeEnum {
    Vcard = "vcard"
}
export declare class SendMessageRequestBody2VCardVcard extends SpeakeasyBase {
    /**
     * The publicly accessible URL of the vCard attachment. Supported types are .vcf only
     */
    url: string;
}
export declare class SendMessageRequestBody2VCard extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `mms` in this field
     */
    channel: SendMessageRequestBody2VCardChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `vcard` in this field
     */
    messageType: SendMessageRequestBody2VCardMessageTypeEnum;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
    vcard: SendMessageRequestBody2VCardVcard;
}
/**
 * The channel to send to. You must provide `mms` in this field
 */
export declare enum SendMessageRequestBody2ImageChannelEnum {
    Mms = "mms"
}
export declare class SendMessageRequestBody2ImageImage extends SpeakeasyBase {
    /**
     * The publicly accessible URL of the image attachment. The image file is available for 48 hours after it is created. Supported types are .jpg, .jpeg, and .png
     */
    url: string;
}
/**
 * The type of message to send. You must provide `image` in this field
 */
export declare enum SendMessageRequestBody2ImageMessageTypeEnum {
    Image = "image"
}
export declare class SendMessageRequestBody2Image extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `mms` in this field
     */
    channel: SendMessageRequestBody2ImageChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details
     *
     * @remarks
     *
     */
    from: string;
    image: SendMessageRequestBody2ImageImage;
    /**
     * The type of message to send. You must provide `image` in this field
     */
    messageType: SendMessageRequestBody2ImageMessageTypeEnum;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
}
/**
 * The channel to send to. You must provide `sms` in this field
 */
export declare enum SendMessageRequestBody1TextChannelEnum {
    Sms = "sms"
}
/**
 * The type of message to send. You must provide `text` in this field
 */
export declare enum SendMessageRequestBody1TextMessageTypeEnum {
    Text = "text"
}
/**
 * The text of message to send.
 */
export declare class SendMessageRequestBody1Text extends SpeakeasyBase {
    /**
     * The channel to send to. You must provide `sms` in this field
     */
    channel: SendMessageRequestBody1TextChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The type of message to send. You must provide `text` in this field
     */
    messageType: SendMessageRequestBody1TextMessageTypeEnum;
    text: string;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
}
/**
 * Viber
 */
export declare class SendMessage202ApplicationJson5 extends SpeakeasyBase {
    /**
     * The UUID of the message
     */
    messageUuid?: string;
}
/**
 * Messenger
 */
export declare class SendMessage202ApplicationJson4 extends SpeakeasyBase {
    /**
     * The UUID of the message
     */
    messageUuid?: string;
}
/**
 * WhatsApp
 */
export declare class SendMessage202ApplicationJson3 extends SpeakeasyBase {
    /**
     * The UUID of the message
     */
    messageUuid?: string;
}
/**
 * MMS
 */
export declare class SendMessage202ApplicationJson2 extends SpeakeasyBase {
    /**
     * The UUID of the message
     */
    messageUuid?: string;
}
/**
 * SMS
 */
export declare class SendMessage202ApplicationJson1 extends SpeakeasyBase {
    /**
     * The UUID of the message
     */
    messageUuid?: string;
}
export declare class SendMessageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Internal error
     */
    errorInternal?: shared.ErrorInternal;
    /**
     * Payment Required
     */
    errorPaymentRequired?: shared.ErrorPaymentRequired;
    /**
     * Too Many Requests
     */
    errorThrottled?: shared.ErrorThrottled;
    /**
     * Accepted.
     */
    sendMessage202ApplicationJSONObject?: any;
    /**
     * Authentication failure
     */
    sendMessage401ApplicationJSONOneOf?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unprocessable Entity
     */
    sendMessage422ApplicationJSONOneOf?: any;
}
