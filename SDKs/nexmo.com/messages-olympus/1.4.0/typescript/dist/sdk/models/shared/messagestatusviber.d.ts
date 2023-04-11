import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The channel sending to.
 */
export declare enum MessageStatusViberChannelEnum {
    ViberService = "viber_service"
}
/**
 * If the message encountered a problem a descriptive error will be supplied in this object.
 */
export declare class MessageStatusViberError extends SpeakeasyBase {
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
export declare enum MessageStatusViberStatusEnum {
    Submitted = "submitted",
    Delivered = "delivered",
    Rejected = "rejected",
    Undeliverable = "undeliverable",
    Read = "read"
}
/**
 * The charge currency in ISO 4217 format.
 */
export declare enum MessageStatusViberUsageCurrencyEnum {
    Eur = "EUR"
}
export declare class MessageStatusViberUsage extends SpeakeasyBase {
    /**
     * The charge currency in ISO 4217 format.
     */
    currency?: MessageStatusViberUsageCurrencyEnum;
    /**
     * The charge amount as a stringified number.
     */
    price?: string;
}
/**
 * Viber
 */
export declare class MessageStatusViber extends SpeakeasyBase {
    /**
     * The channel sending to.
     */
    channel: MessageStatusViberChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * If the message encountered a problem a descriptive error will be supplied in this object.
     */
    error?: MessageStatusViberError;
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
    status: MessageStatusViberStatusEnum;
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
    usage?: MessageStatusViberUsage;
}
