import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The channel sending to.
 */
export declare enum MessageStatusMessengerChannelEnum {
    Messenger = "messenger"
}
/**
 * If the message encountered a problem a descriptive error will be supplied in this object.
 */
export declare class MessageStatusMessengerError extends SpeakeasyBase {
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
export declare enum MessageStatusMessengerStatusEnum {
    Submitted = "submitted",
    Delivered = "delivered",
    Rejected = "rejected",
    Undeliverable = "undeliverable",
    Read = "read"
}
/**
 * The charge currency in ISO 4217 format.
 */
export declare enum MessageStatusMessengerUsageCurrencyEnum {
    Eur = "EUR"
}
export declare class MessageStatusMessengerUsage extends SpeakeasyBase {
    /**
     * The charge currency in ISO 4217 format.
     */
    currency?: MessageStatusMessengerUsageCurrencyEnum;
    /**
     * The charge amount as a stringified number.
     */
    price?: string;
}
/**
 * Messenger
 */
export declare class MessageStatusMessenger extends SpeakeasyBase {
    /**
     * The channel sending to.
     */
    channel: MessageStatusMessengerChannelEnum;
    /**
     * Client reference of up to 100 characters. The reference will be present in every message status.
     */
    clientRef?: string;
    /**
     * If the message encountered a problem a descriptive error will be supplied in this object.
     */
    error?: MessageStatusMessengerError;
    /**
     * The ID of the message sender
     *
     * @remarks
     *
     */
    from: string;
    /**
     * The UUID of the message
     */
    messageUuid: string;
    status: MessageStatusMessengerStatusEnum;
    /**
     * The datetime of when the event occurred, in `ISO 8601` format.
     */
    timestamp: string;
    /**
     * The ID of the message recipient
     *
     * @remarks
     *
     */
    to: string;
    usage?: MessageStatusMessengerUsage;
}
