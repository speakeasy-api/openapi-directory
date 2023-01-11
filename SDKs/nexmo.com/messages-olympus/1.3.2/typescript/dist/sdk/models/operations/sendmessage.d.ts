import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SendMessageRequestBody1TextChannelEnum {
    Sms = "sms"
}
export declare enum SendMessageRequestBody1TextMessageTypeEnum {
    Text = "text"
}
/**
 * The text of message to send.
**/
export declare class SendMessageRequestBody1Text extends SpeakeasyBase {
    channel: SendMessageRequestBody1TextChannelEnum;
    clientRef?: string;
    from: string;
    messageType: SendMessageRequestBody1TextMessageTypeEnum;
    text: any;
    to: string;
}
export declare enum SendMessageRequestBody2ImageChannelEnum {
    Mms = "mms"
}
export declare enum SendMessageRequestBody2ImageMessageTypeEnum {
    Image = "image"
}
export declare class SendMessageRequestBody2Image extends SpeakeasyBase {
    channel: SendMessageRequestBody2ImageChannelEnum;
    clientRef?: string;
    from: string;
    image: any;
    messageType: SendMessageRequestBody2ImageMessageTypeEnum;
    to: string;
}
export declare enum SendMessageRequestBody2VCardChannelEnum {
    Mms = "mms"
}
export declare enum SendMessageRequestBody2VCardMessageTypeEnum {
    Vcard = "vcard"
}
export declare class SendMessageRequestBody2VCard extends SpeakeasyBase {
    channel: SendMessageRequestBody2VCardChannelEnum;
    clientRef?: string;
    from: string;
    messageType: SendMessageRequestBody2VCardMessageTypeEnum;
    to: string;
    vcard: any;
}
export declare enum SendMessageRequestBody2AudioChannelEnum {
    Mms = "mms"
}
export declare enum SendMessageRequestBody2AudioMessageTypeEnum {
    Audio = "audio"
}
export declare class SendMessageRequestBody2Audio extends SpeakeasyBase {
    audio: any;
    channel: SendMessageRequestBody2AudioChannelEnum;
    clientRef?: string;
    from: string;
    messageType: SendMessageRequestBody2AudioMessageTypeEnum;
    to: string;
}
export declare enum SendMessageRequestBody2VideoChannelEnum {
    Mms = "mms"
}
export declare enum SendMessageRequestBody2VideoMessageTypeEnum {
    Video = "video"
}
export declare class SendMessageRequestBody2Video extends SpeakeasyBase {
    channel: SendMessageRequestBody2VideoChannelEnum;
    clientRef?: string;
    from: string;
    messageType: SendMessageRequestBody2VideoMessageTypeEnum;
    to: string;
    video: any;
}
export declare enum SendMessageRequestBody3TextChannelEnum {
    Whatsapp = "whatsapp"
}
export declare enum SendMessageRequestBody3TextMessageTypeEnum {
    Text = "text"
}
/**
 * The text of message to send.
**/
export declare class SendMessageRequestBody3Text extends SpeakeasyBase {
    channel: SendMessageRequestBody3TextChannelEnum;
    clientRef?: string;
    from: string;
    messageType: SendMessageRequestBody3TextMessageTypeEnum;
    text: any;
    to: string;
}
export declare enum SendMessageRequestBody3LocationChannelEnum {
    Whatsapp = "whatsapp"
}
export declare class SendMessageRequestBody3LocationLocation extends SpeakeasyBase {
    address?: string;
    lat: number;
    long: number;
    name?: string;
}
export declare enum SendMessageRequestBody3LocationMessageTypeEnum {
    Location = "location"
}
export declare class SendMessageRequestBody3Location extends SpeakeasyBase {
    channel: SendMessageRequestBody3LocationChannelEnum;
    clientRef?: string;
    from: string;
    location: SendMessageRequestBody3LocationLocation;
    messageType: SendMessageRequestBody3LocationMessageTypeEnum;
    text?: any;
    to: string;
}
export declare enum SendMessageRequestBody3ImageChannelEnum {
    Whatsapp = "whatsapp"
}
export declare enum SendMessageRequestBody3ImageMessageTypeEnum {
    Image = "image"
}
export declare class SendMessageRequestBody3Image extends SpeakeasyBase {
    channel: SendMessageRequestBody3ImageChannelEnum;
    clientRef?: string;
    from: string;
    image: any;
    messageType: SendMessageRequestBody3ImageMessageTypeEnum;
    to: string;
}
export declare enum SendMessageRequestBody3AudioChannelEnum {
    Whatsapp = "whatsapp"
}
export declare enum SendMessageRequestBody3AudioMessageTypeEnum {
    Audio = "audio"
}
export declare class SendMessageRequestBody3Audio extends SpeakeasyBase {
    audio: any;
    channel: SendMessageRequestBody3AudioChannelEnum;
    clientRef?: string;
    from: string;
    messageType: SendMessageRequestBody3AudioMessageTypeEnum;
    to: string;
}
export declare enum SendMessageRequestBody3VideoChannelEnum {
    Whatsapp = "whatsapp"
}
export declare enum SendMessageRequestBody3VideoMessageTypeEnum {
    Video = "video"
}
export declare class SendMessageRequestBody3Video extends SpeakeasyBase {
    channel: SendMessageRequestBody3VideoChannelEnum;
    clientRef?: string;
    from: string;
    messageType: SendMessageRequestBody3VideoMessageTypeEnum;
    to: string;
    video: any;
}
export declare enum SendMessageRequestBody3FileChannelEnum {
    Whatsapp = "whatsapp"
}
export declare enum SendMessageRequestBody3FileMessageTypeEnum {
    File = "file"
}
export declare class SendMessageRequestBody3File extends SpeakeasyBase {
    channel: SendMessageRequestBody3FileChannelEnum;
    clientRef?: string;
    file: any;
    from: string;
    messageType: SendMessageRequestBody3FileMessageTypeEnum;
    to: string;
}
export declare enum SendMessageRequestBody3TemplateChannelEnum {
    Whatsapp = "whatsapp"
}
export declare enum SendMessageRequestBody3TemplateMessageTypeEnum {
    Template = "template"
}
export declare class SendMessageRequestBody3TemplateTemplate extends SpeakeasyBase {
    name: string;
    parameters?: string[];
}
export declare enum SendMessageRequestBody3TemplateWhatsappPolicyEnum {
    Deterministic = "deterministic"
}
export declare class SendMessageRequestBody3TemplateWhatsapp extends SpeakeasyBase {
    locale: string;
    policy?: SendMessageRequestBody3TemplateWhatsappPolicyEnum;
}
export declare class SendMessageRequestBody3Template extends SpeakeasyBase {
    channel: SendMessageRequestBody3TemplateChannelEnum;
    clientRef?: string;
    from: string;
    messageType: SendMessageRequestBody3TemplateMessageTypeEnum;
    template: SendMessageRequestBody3TemplateTemplate;
    to: string;
    whatsapp: SendMessageRequestBody3TemplateWhatsapp;
}
export declare enum SendMessageRequestBody3CustomChannelEnum {
    Whatsapp = "whatsapp"
}
export declare enum SendMessageRequestBody3CustomMessageTypeEnum {
    Custom = "custom"
}
export declare class SendMessageRequestBody3Custom extends SpeakeasyBase {
    channel: SendMessageRequestBody3CustomChannelEnum;
    clientRef?: string;
    custom?: Record<string, any>;
    from: string;
    messageType: SendMessageRequestBody3CustomMessageTypeEnum;
    to: string;
}
export declare enum SendMessageRequestBody4TextChannelEnum {
    Messenger = "messenger"
}
export declare enum SendMessageRequestBody4TextMessageTypeEnum {
    Text = "text"
}
export declare enum SendMessageRequestBody4TextMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}
export declare class SendMessageRequestBody4TextMessenger extends SpeakeasyBase {
    category?: SendMessageRequestBody4TextMessengerCategoryEnum;
    tag?: string;
}
/**
 * The text of message to send.
**/
export declare class SendMessageRequestBody4Text extends SpeakeasyBase {
    channel: SendMessageRequestBody4TextChannelEnum;
    clientRef?: string;
    from: string;
    messageType: SendMessageRequestBody4TextMessageTypeEnum;
    messenger?: SendMessageRequestBody4TextMessenger;
    text: any;
    to: string;
}
export declare enum SendMessageRequestBody4ImageChannelEnum {
    Messenger = "messenger"
}
export declare enum SendMessageRequestBody4ImageMessageTypeEnum {
    Image = "image"
}
export declare enum SendMessageRequestBody4ImageMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}
export declare class SendMessageRequestBody4ImageMessenger extends SpeakeasyBase {
    category?: SendMessageRequestBody4ImageMessengerCategoryEnum;
    tag?: string;
}
export declare class SendMessageRequestBody4Image extends SpeakeasyBase {
    channel: SendMessageRequestBody4ImageChannelEnum;
    clientRef?: string;
    from: string;
    image: any;
    messageType: SendMessageRequestBody4ImageMessageTypeEnum;
    messenger?: SendMessageRequestBody4ImageMessenger;
    to: string;
}
export declare enum SendMessageRequestBody4AudioChannelEnum {
    Messenger = "messenger"
}
export declare enum SendMessageRequestBody4AudioMessageTypeEnum {
    Audio = "audio"
}
export declare enum SendMessageRequestBody4AudioMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}
export declare class SendMessageRequestBody4AudioMessenger extends SpeakeasyBase {
    category?: SendMessageRequestBody4AudioMessengerCategoryEnum;
    tag?: string;
}
export declare class SendMessageRequestBody4Audio extends SpeakeasyBase {
    audio: any;
    channel: SendMessageRequestBody4AudioChannelEnum;
    clientRef?: string;
    from: string;
    messageType: SendMessageRequestBody4AudioMessageTypeEnum;
    messenger?: SendMessageRequestBody4AudioMessenger;
    to: string;
}
export declare enum SendMessageRequestBody4VideoChannelEnum {
    Messenger = "messenger"
}
export declare enum SendMessageRequestBody4VideoMessageTypeEnum {
    Video = "video"
}
export declare enum SendMessageRequestBody4VideoMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}
export declare class SendMessageRequestBody4VideoMessenger extends SpeakeasyBase {
    category?: SendMessageRequestBody4VideoMessengerCategoryEnum;
    tag?: string;
}
export declare class SendMessageRequestBody4Video extends SpeakeasyBase {
    channel: SendMessageRequestBody4VideoChannelEnum;
    clientRef?: string;
    from: string;
    messageType: SendMessageRequestBody4VideoMessageTypeEnum;
    messenger?: SendMessageRequestBody4VideoMessenger;
    to: string;
    video: any;
}
export declare enum SendMessageRequestBody4FileChannelEnum {
    Messenger = "messenger"
}
export declare enum SendMessageRequestBody4FileMessageTypeEnum {
    File = "file"
}
export declare enum SendMessageRequestBody4FileMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}
export declare class SendMessageRequestBody4FileMessenger extends SpeakeasyBase {
    category?: SendMessageRequestBody4FileMessengerCategoryEnum;
    tag?: string;
}
export declare class SendMessageRequestBody4File extends SpeakeasyBase {
    channel: SendMessageRequestBody4FileChannelEnum;
    clientRef?: string;
    file: any;
    from: string;
    messageType: SendMessageRequestBody4FileMessageTypeEnum;
    messenger?: SendMessageRequestBody4FileMessenger;
    to: string;
}
export declare enum SendMessageRequestBody5TextChannelEnum {
    ViberService = "viber_service"
}
export declare enum SendMessageRequestBody5TextMessageTypeEnum {
    Text = "text"
}
export declare enum SendMessageRequestBody5TextViberServiceCategoryEnum {
    Transaction = "transaction",
    Promotion = "promotion"
}
export declare class SendMessageRequestBody5TextViberService extends SpeakeasyBase {
    category?: SendMessageRequestBody5TextViberServiceCategoryEnum;
    ttl?: number;
    type?: string;
}
/**
 * The text of message to send.
**/
export declare class SendMessageRequestBody5Text extends SpeakeasyBase {
    channel: SendMessageRequestBody5TextChannelEnum;
    clientRef?: string;
    from: string;
    messageType: SendMessageRequestBody5TextMessageTypeEnum;
    text: any;
    to: string;
    viberService?: SendMessageRequestBody5TextViberService;
}
export declare enum SendMessageRequestBody5ImageChannelEnum {
    ViberService = "viber_service"
}
export declare enum SendMessageRequestBody5ImageMessageTypeEnum {
    Image = "image"
}
export declare enum SendMessageRequestBody5ImageViberServiceCategoryEnum {
    Transaction = "transaction",
    Promotion = "promotion"
}
export declare class SendMessageRequestBody5ImageViberService extends SpeakeasyBase {
    category?: SendMessageRequestBody5ImageViberServiceCategoryEnum;
    ttl?: number;
    type?: string;
}
export declare class SendMessageRequestBody5Image extends SpeakeasyBase {
    channel: SendMessageRequestBody5ImageChannelEnum;
    clientRef?: string;
    from: string;
    image: any;
    messageType: SendMessageRequestBody5ImageMessageTypeEnum;
    to: string;
    viberService?: SendMessageRequestBody5ImageViberService;
}
export declare class SendMessageSecurity extends SpeakeasyBase {
    bearerAuth?: shared.SchemeBearerAuth;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class SendMessageRequest extends SpeakeasyBase {
    request: any;
    security: SendMessageSecurity;
}
export declare class SendMessageResponse extends SpeakeasyBase {
    contentType: string;
    errorInternal?: shared.ErrorInternal;
    errorPaymentRequired?: shared.ErrorPaymentRequired;
    errorThrottled?: shared.ErrorThrottled;
    sendMessage202ApplicationJSONObject?: Record<string, any>;
    sendMessage401ApplicationJSONOneOf?: any;
    sendMessage422ApplicationJSONOneOf?: any;
    statusCode: number;
}
