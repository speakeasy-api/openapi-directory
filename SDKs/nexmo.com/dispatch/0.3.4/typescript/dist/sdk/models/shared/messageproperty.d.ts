import { SpeakeasyBase } from "../../../internal/utils";
import { AudioProperty } from "./audioproperty";
import { FileProperty } from "./fileproperty";
import { ImageProperty } from "./imageproperty";
import { TemplateProperty } from "./templateproperty";
import { VideoProperty } from "./videoproperty";
export declare enum MessagePropertyContentTypeEnum {
    Text = "text",
    Image = "image",
    Audio = "audio",
    Video = "video",
    File = "file",
    Template = "template",
    Custom = "custom"
}
export declare class MessagePropertyContent extends SpeakeasyBase {
    audio?: AudioProperty;
    file?: FileProperty;
    image?: ImageProperty;
    template?: TemplateProperty;
    text?: string;
    type: MessagePropertyContentTypeEnum;
    video?: VideoProperty;
}
export declare enum MessagePropertyMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}
export declare class MessagePropertyMessenger extends SpeakeasyBase {
    category?: MessagePropertyMessengerCategoryEnum;
    tag?: string;
}
export declare enum MessagePropertyViberServiceMsgCategoryEnum {
    Transaction = "transaction",
    Promotion = "promotion"
}
export declare class MessagePropertyViberServiceMsg extends SpeakeasyBase {
    category?: MessagePropertyViberServiceMsgCategoryEnum;
    ttl?: number;
}
export declare enum MessagePropertyWhatsappPolicyEnum {
    Fallback = "fallback",
    Deterministic = "deterministic"
}
export declare class MessagePropertyWhatsapp extends SpeakeasyBase {
    locale?: string;
    policy?: MessagePropertyWhatsappPolicyEnum;
}
export declare class MessageProperty extends SpeakeasyBase {
    content: MessagePropertyContent;
    messenger?: MessagePropertyMessenger;
    viberServiceMsg?: MessagePropertyViberServiceMsg;
    whatsapp?: MessagePropertyWhatsapp;
}
