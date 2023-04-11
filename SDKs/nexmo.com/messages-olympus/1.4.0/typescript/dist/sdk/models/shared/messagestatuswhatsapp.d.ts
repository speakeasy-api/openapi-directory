import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The channel sending to.
 */
export declare enum MessageStatusWhatsAppChannelEnum {
    Whatsapp = "whatsapp"
}
/**
 * If the message encountered a problem a descriptive error will be supplied in this object.
 */
export declare class MessageStatusWhatsAppError extends SpeakeasyBase {
    /**
     * Text describing the error. See [our errors list](https://developer.nexmo.com/api-errors/messages-olympus) for a list of possible errors
     */
    detail?: string;
    /**
     * The record id of this error's occurrence.
     */
    instance?: string;
    /**
     * The error code encountered when sending the message. See [our errors list](https://developer.nexmo.com/api-errors/messages-olympus) for a list of possible errors
     */
    title?: string;
    /**
     * The type of error encountered, follow URL for more details
     */
    type?: string;
}
export declare enum MessageStatusWhatsAppStatusEnum {
    Submitted = "submitted",
    Delivered = "delivered",
    Rejected = "rejected",
    Undeliverable = "undeliverable",
    Read = "read"
}
/**
 * The charge currency in ISO 4217 format.
 */
export declare enum MessageStatusWhatsAppUsageCurrencyEnum {
    Eur = "EUR"
}
export declare class MessageStatusWhatsAppUsage extends SpeakeasyBase {
    /**
     * The charge currency in ISO 4217 format.
     */
    currency?: MessageStatusWhatsAppUsageCurrencyEnum;
    /**
     * The charge amount as a stringified number. For WhatsApp this is the default Vonage charge per conversation.
     */
    price?: string;
}
/**
 * An object contining data related to the origin of the conversation.
 */
export declare class MessageStatusWhatsAppWhatsappConversationOrigin extends SpeakeasyBase {
    /**
     * The conversation type.
     */
    type?: string;
}
/**
 * An object contining data for the conversation to which the message relates.
 */
export declare class MessageStatusWhatsAppWhatsappConversation extends SpeakeasyBase {
    /**
     * The id of the conversation.
     */
    id?: string;
    /**
     * An object contining data related to the origin of the conversation.
     */
    origin?: MessageStatusWhatsAppWhatsappConversationOrigin;
}
/**
 * An object contining meta-data related to the WhatsApp message that triggered this callback. Only present for callbacks with a `status` of `delivered`.
 */
export declare class MessageStatusWhatsAppWhatsapp extends SpeakeasyBase {
    /**
     * An object contining data for the conversation to which the message relates.
     */
    conversation?: MessageStatusWhatsAppWhatsappConversation;
}
/**
 * WhatsApp
 */
export declare class MessageStatusWhatsApp extends SpeakeasyBase {
    /**
     * The channel sending to.
     */
    channel: MessageStatusWhatsAppChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * If the message encountered a problem a descriptive error will be supplied in this object.
     */
    error?: MessageStatusWhatsAppError;
    /**
     * The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The UUID of the message
     */
    messageUuid: string;
    status: MessageStatusWhatsAppStatusEnum;
    /**
     * The datetime of when the event occurred, in `ISO 8601` format.
     */
    timestamp: string;
    /**
     * The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     */
    to: string;
    usage?: MessageStatusWhatsAppUsage;
    /**
     * An object contining meta-data related to the WhatsApp message that triggered this callback. Only present for callbacks with a `status` of `delivered`.
     */
    whatsapp?: MessageStatusWhatsAppWhatsapp;
}
