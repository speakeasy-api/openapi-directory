import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioProperty } from "./audioproperty";
import { FileProperty } from "./fileproperty";
import { ImageProperty } from "./imageproperty";
import { TemplateProperty } from "./templateproperty";
import { VideoProperty } from "./videoproperty";


export enum MessagePropertyContentTypeEnum {
    Text = "text",
    Image = "image",
    Audio = "audio",
    Video = "video",
    File = "file",
    Template = "template",
    Custom = "custom"
}


export class MessagePropertyContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: AudioProperty;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: FileProperty;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ImageProperty;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: TemplateProperty;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: MessagePropertyContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=video" })
  video?: VideoProperty;
}

export enum MessagePropertyMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}


export class MessagePropertyMessenger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: MessagePropertyMessengerCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}

export enum MessagePropertyViberServiceMsgCategoryEnum {
    Transaction = "transaction",
    Promotion = "promotion"
}


export class MessagePropertyViberServiceMsg extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: MessagePropertyViberServiceMsgCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}

export enum MessagePropertyWhatsappPolicyEnum {
    Fallback = "fallback",
    Deterministic = "deterministic"
}


export class MessagePropertyWhatsapp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: MessagePropertyWhatsappPolicyEnum;
}


export class MessageProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: MessagePropertyContent;

  @SpeakeasyMetadata({ data: "json, name=messenger" })
  messenger?: MessagePropertyMessenger;

  @SpeakeasyMetadata({ data: "json, name=viber_service_msg" })
  viberServiceMsg?: MessagePropertyViberServiceMsg;

  @SpeakeasyMetadata({ data: "json, name=whatsapp" })
  whatsapp?: MessagePropertyWhatsapp;
}
