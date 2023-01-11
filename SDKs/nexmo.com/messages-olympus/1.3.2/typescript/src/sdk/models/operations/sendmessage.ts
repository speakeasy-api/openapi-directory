import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SendMessageRequestBody1TextChannelEnum {
    Sms = "sms"
}

export enum SendMessageRequestBody1TextMessageTypeEnum {
    Text = "text"
}


// SendMessageRequestBody1Text
/** 
 * The text of message to send.
**/
export class SendMessageRequestBody1Text extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody1TextChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody1TextMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: any;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}

export enum SendMessageRequestBody2ImageChannelEnum {
    Mms = "mms"
}

export enum SendMessageRequestBody2ImageMessageTypeEnum {
    Image = "image"
}


export class SendMessageRequestBody2Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody2ImageChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: any;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody2ImageMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}

export enum SendMessageRequestBody2VCardChannelEnum {
    Mms = "mms"
}

export enum SendMessageRequestBody2VCardMessageTypeEnum {
    Vcard = "vcard"
}


export class SendMessageRequestBody2VCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody2VCardChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody2VCardMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;

  @SpeakeasyMetadata({ data: "json, name=vcard" })
  vcard: any;
}

export enum SendMessageRequestBody2AudioChannelEnum {
    Mms = "mms"
}

export enum SendMessageRequestBody2AudioMessageTypeEnum {
    Audio = "audio"
}


export class SendMessageRequestBody2Audio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio: any;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody2AudioChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody2AudioMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}

export enum SendMessageRequestBody2VideoChannelEnum {
    Mms = "mms"
}

export enum SendMessageRequestBody2VideoMessageTypeEnum {
    Video = "video"
}


export class SendMessageRequestBody2Video extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody2VideoChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody2VideoMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;

  @SpeakeasyMetadata({ data: "json, name=video" })
  video: any;
}

export enum SendMessageRequestBody3TextChannelEnum {
    Whatsapp = "whatsapp"
}

export enum SendMessageRequestBody3TextMessageTypeEnum {
    Text = "text"
}


// SendMessageRequestBody3Text
/** 
 * The text of message to send.
**/
export class SendMessageRequestBody3Text extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody3TextChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody3TextMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: any;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}

export enum SendMessageRequestBody3LocationChannelEnum {
    Whatsapp = "whatsapp"
}


export class SendMessageRequestBody3LocationLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat: number;

  @SpeakeasyMetadata({ data: "json, name=long" })
  long: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum SendMessageRequestBody3LocationMessageTypeEnum {
    Location = "location"
}


export class SendMessageRequestBody3Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody3LocationChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: SendMessageRequestBody3LocationLocation;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody3LocationMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: any;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}

export enum SendMessageRequestBody3ImageChannelEnum {
    Whatsapp = "whatsapp"
}

export enum SendMessageRequestBody3ImageMessageTypeEnum {
    Image = "image"
}


export class SendMessageRequestBody3Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody3ImageChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: any;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody3ImageMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}

export enum SendMessageRequestBody3AudioChannelEnum {
    Whatsapp = "whatsapp"
}

export enum SendMessageRequestBody3AudioMessageTypeEnum {
    Audio = "audio"
}


export class SendMessageRequestBody3Audio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio: any;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody3AudioChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody3AudioMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}

export enum SendMessageRequestBody3VideoChannelEnum {
    Whatsapp = "whatsapp"
}

export enum SendMessageRequestBody3VideoMessageTypeEnum {
    Video = "video"
}


export class SendMessageRequestBody3Video extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody3VideoChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody3VideoMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;

  @SpeakeasyMetadata({ data: "json, name=video" })
  video: any;
}

export enum SendMessageRequestBody3FileChannelEnum {
    Whatsapp = "whatsapp"
}

export enum SendMessageRequestBody3FileMessageTypeEnum {
    File = "file"
}


export class SendMessageRequestBody3File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody3FileChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file: any;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody3FileMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}

export enum SendMessageRequestBody3TemplateChannelEnum {
    Whatsapp = "whatsapp"
}

export enum SendMessageRequestBody3TemplateMessageTypeEnum {
    Template = "template"
}


export class SendMessageRequestBody3TemplateTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: string[];
}

export enum SendMessageRequestBody3TemplateWhatsappPolicyEnum {
    Deterministic = "deterministic"
}


export class SendMessageRequestBody3TemplateWhatsapp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: SendMessageRequestBody3TemplateWhatsappPolicyEnum;
}


export class SendMessageRequestBody3Template extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody3TemplateChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody3TemplateMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template: SendMessageRequestBody3TemplateTemplate;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;

  @SpeakeasyMetadata({ data: "json, name=whatsapp" })
  whatsapp: SendMessageRequestBody3TemplateWhatsapp;
}

export enum SendMessageRequestBody3CustomChannelEnum {
    Whatsapp = "whatsapp"
}

export enum SendMessageRequestBody3CustomMessageTypeEnum {
    Custom = "custom"
}


export class SendMessageRequestBody3Custom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody3CustomChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody3CustomMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}

export enum SendMessageRequestBody4TextChannelEnum {
    Messenger = "messenger"
}

export enum SendMessageRequestBody4TextMessageTypeEnum {
    Text = "text"
}

export enum SendMessageRequestBody4TextMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}


export class SendMessageRequestBody4TextMessenger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: SendMessageRequestBody4TextMessengerCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}


// SendMessageRequestBody4Text
/** 
 * The text of message to send.
**/
export class SendMessageRequestBody4Text extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody4TextChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody4TextMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=messenger" })
  messenger?: SendMessageRequestBody4TextMessenger;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: any;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}

export enum SendMessageRequestBody4ImageChannelEnum {
    Messenger = "messenger"
}

export enum SendMessageRequestBody4ImageMessageTypeEnum {
    Image = "image"
}

export enum SendMessageRequestBody4ImageMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}


export class SendMessageRequestBody4ImageMessenger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: SendMessageRequestBody4ImageMessengerCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}


export class SendMessageRequestBody4Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody4ImageChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: any;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody4ImageMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=messenger" })
  messenger?: SendMessageRequestBody4ImageMessenger;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}

export enum SendMessageRequestBody4AudioChannelEnum {
    Messenger = "messenger"
}

export enum SendMessageRequestBody4AudioMessageTypeEnum {
    Audio = "audio"
}

export enum SendMessageRequestBody4AudioMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}


export class SendMessageRequestBody4AudioMessenger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: SendMessageRequestBody4AudioMessengerCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}


export class SendMessageRequestBody4Audio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio: any;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody4AudioChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody4AudioMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=messenger" })
  messenger?: SendMessageRequestBody4AudioMessenger;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}

export enum SendMessageRequestBody4VideoChannelEnum {
    Messenger = "messenger"
}

export enum SendMessageRequestBody4VideoMessageTypeEnum {
    Video = "video"
}

export enum SendMessageRequestBody4VideoMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}


export class SendMessageRequestBody4VideoMessenger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: SendMessageRequestBody4VideoMessengerCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}


export class SendMessageRequestBody4Video extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody4VideoChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody4VideoMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=messenger" })
  messenger?: SendMessageRequestBody4VideoMessenger;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;

  @SpeakeasyMetadata({ data: "json, name=video" })
  video: any;
}

export enum SendMessageRequestBody4FileChannelEnum {
    Messenger = "messenger"
}

export enum SendMessageRequestBody4FileMessageTypeEnum {
    File = "file"
}

export enum SendMessageRequestBody4FileMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}


export class SendMessageRequestBody4FileMessenger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: SendMessageRequestBody4FileMessengerCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}


export class SendMessageRequestBody4File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody4FileChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file: any;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody4FileMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=messenger" })
  messenger?: SendMessageRequestBody4FileMessenger;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}

export enum SendMessageRequestBody5TextChannelEnum {
    ViberService = "viber_service"
}

export enum SendMessageRequestBody5TextMessageTypeEnum {
    Text = "text"
}

export enum SendMessageRequestBody5TextViberServiceCategoryEnum {
    Transaction = "transaction",
    Promotion = "promotion"
}


export class SendMessageRequestBody5TextViberService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: SendMessageRequestBody5TextViberServiceCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// SendMessageRequestBody5Text
/** 
 * The text of message to send.
**/
export class SendMessageRequestBody5Text extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody5TextChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody5TextMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: any;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;

  @SpeakeasyMetadata({ data: "json, name=viber_service" })
  viberService?: SendMessageRequestBody5TextViberService;
}

export enum SendMessageRequestBody5ImageChannelEnum {
    ViberService = "viber_service"
}

export enum SendMessageRequestBody5ImageMessageTypeEnum {
    Image = "image"
}

export enum SendMessageRequestBody5ImageViberServiceCategoryEnum {
    Transaction = "transaction",
    Promotion = "promotion"
}


export class SendMessageRequestBody5ImageViberService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: SendMessageRequestBody5ImageViberServiceCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class SendMessageRequestBody5Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: SendMessageRequestBody5ImageChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: any;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType: SendMessageRequestBody5ImageMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;

  @SpeakeasyMetadata({ data: "json, name=viber_service" })
  viberService?: SendMessageRequestBody5ImageViberService;
}


export class SendMessageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth?: shared.SchemeBearerAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;
}


export class SendMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: SendMessageSecurity;
}


export class SendMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorInternal?: shared.ErrorInternal;

  @SpeakeasyMetadata()
  errorPaymentRequired?: shared.ErrorPaymentRequired;

  @SpeakeasyMetadata()
  errorThrottled?: shared.ErrorThrottled;

  @SpeakeasyMetadata()
  sendMessage202ApplicationJSONObject?: Record<string, any>;

  @SpeakeasyMetadata()
  sendMessage401ApplicationJSONOneOf?: any;

  @SpeakeasyMetadata()
  sendMessage422ApplicationJSONOneOf?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
