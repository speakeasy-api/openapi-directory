import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The channel sending to.
 */
export declare enum MessageStatusMMSChannelEnum {
    Mms = "mms"
}
/**
 * If the message encountered a problem a descriptive error will be supplied in this object.
 */
export declare class MessageStatusMMSError extends SpeakeasyBase {
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
/**
 * The status of the message.
 */
export declare enum MessageStatusMMSStatusEnum {
    Submitted = "submitted",
    Delivered = "delivered",
    Rejected = "rejected",
    Undeliverable = "undeliverable"
}
/**
 * The charge currency in ISO 4217 format.
 */
export declare enum MessageStatusMMSUsageCurrencyEnum {
    Eur = "EUR"
}
export declare class MessageStatusMMSUsage extends SpeakeasyBase {
    /**
     * The charge currency in ISO 4217 format.
     */
    currency?: MessageStatusMMSUsageCurrencyEnum;
    /**
     * The charge amount as a stringified number.
     */
    price?: string;
}
/**
 * MMS
 */
export declare class MessageStatusMMS extends SpeakeasyBase {
    /**
     * The channel sending to.
     */
    channel: MessageStatusMMSChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * If the message encountered a problem a descriptive error will be supplied in this object.
     */
    error?: MessageStatusMMSError;
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
    /**
     * The status of the message.
     */
    status: MessageStatusMMSStatusEnum;
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
    usage?: MessageStatusMMSUsage;
}
