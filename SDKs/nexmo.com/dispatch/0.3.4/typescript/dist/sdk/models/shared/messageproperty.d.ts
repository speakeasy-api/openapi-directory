import { SpeakeasyBase } from "../../../internal/utils";
import { AudioProperty } from "./audioproperty";
import { FileProperty } from "./fileproperty";
import { ImageProperty } from "./imageproperty";
import { TemplateProperty } from "./templateproperty";
import { VideoProperty } from "./videoproperty";
/**
 * The type of message that you are sending.
 *
 * @remarks
 *
 * **Messenger**: supports `text`, `image`, `audio`, `video` and `file`.
 *
 * **Viber Business Messages**: supports `image` and `text`.
 *
 * **WhatsApp**: supports `template`, `text`, `image`, `audio`, `video` and `file`.
 *
 * **SMS**: supports `text`.
 *
 */
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
    /**
     * The text of the message.
     *
     * @remarks
     *
     * **Messenger**: Is limited to 640 characters
     *
     * **SMS** or **Viber**: Is 1000 characters
     *
     * **WhatsApp**: is 4096 characters
     *
     */
    text?: string;
    /**
     * The type of message that you are sending.
     *
     * @remarks
     *
     * **Messenger**: supports `text`, `image`, `audio`, `video` and `file`.
     *
     * **Viber Business Messages**: supports `image` and `text`.
     *
     * **WhatsApp**: supports `template`, `text`, `image`, `audio`, `video` and `file`.
     *
     * **SMS**: supports `text`.
     *
     */
    type: MessagePropertyContentTypeEnum;
    video?: VideoProperty;
}
/**
 * The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy]( https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.
 */
export declare enum MessagePropertyMessengerCategoryEnum {
    Response = "response",
    Update = "update",
    MessageTag = "message_tag"
}
export declare class MessagePropertyMessenger extends SpeakeasyBase {
    /**
     * The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy]( https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.
     */
    category?: MessagePropertyMessengerCategoryEnum;
    /**
     * ‘A full list of the possible tags is available on [developers.facebook.com](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)'
     */
    tag?: string;
}
/**
 * The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative and a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.
 */
export declare enum MessagePropertyViberServiceMsgCategoryEnum {
    Transaction = "transaction",
    Promotion = "promotion"
}
export declare class MessagePropertyViberServiceMsg extends SpeakeasyBase {
    /**
     * The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative and a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.
     */
    category?: MessagePropertyViberServiceMsgCategoryEnum;
    /**
     * Only valid for Viber Business Messages. Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.
     */
    ttl?: number;
}
/**
 * Please note that WhatsApp will deprecate `fallback` policy in January 2020. There are two policies that you can specify when sending a Message Template: `deterministic` and `fallback`. `deterministic` — Deliver the Message Template in exactly the language and locale asked for. `fallback` — Deliver the Message Template in the language that matches users language/locale setting on device. If one can not be found, deliver using the specified fallback language.
 */
export declare enum MessagePropertyWhatsappPolicyEnum {
    Fallback = "fallback",
    Deterministic = "deterministic"
}
export declare class MessagePropertyWhatsapp extends SpeakeasyBase {
    /**
     * We are using the industry standard, BCP 47, for locales. So in your API call to the /messages API you will need to put “en-GB” and this will refer to the “en_GB” template for WhatsApp. A full list of the possible locales is available on [developers.facebook.com](https://developers.facebook.com/docs/whatsapp/message-templates/creation#translations).
     */
    locale?: string;
    /**
     * Please note that WhatsApp will deprecate `fallback` policy in January 2020. There are two policies that you can specify when sending a Message Template: `deterministic` and `fallback`. `deterministic` — Deliver the Message Template in exactly the language and locale asked for. `fallback` — Deliver the Message Template in the language that matches users language/locale setting on device. If one can not be found, deliver using the specified fallback language.
     */
    policy?: MessagePropertyWhatsappPolicyEnum;
}
export declare class MessageProperty extends SpeakeasyBase {
    content: MessagePropertyContent;
    messenger?: MessagePropertyMessenger;
    viberServiceMsg?: MessagePropertyViberServiceMsg;
    whatsapp?: MessagePropertyWhatsapp;
}
