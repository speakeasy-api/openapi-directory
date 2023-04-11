import { SpeakeasyBase } from "../../../internal/utils";
import { FromProperty } from "./fromproperty";
import { ToProperty } from "./toproperty";
export declare class MessageStatusLinksWorkflow extends SpeakeasyBase {
    dispatchUuid?: string;
    /**
     * Please note GET is not currently supported
     */
    href?: string;
}
export declare class MessageStatusLinks extends SpeakeasyBase {
    workflow?: MessageStatusLinksWorkflow;
}
export declare class MessageStatusError extends SpeakeasyBase {
    /**
     * The error code. See [our errors list](/api-errors/messages-olympus) for a list of possible errors
     */
    code?: number;
    /**
     * Text describing the error. See [our errors list](/api-errors/messages-olympus) for a list of possible errors
     */
    reason?: string;
}
/**
 * The status of the message.
 */
export declare enum MessageStatusStatusEnum {
    Submitted = "submitted",
    Delivered = "delivered",
    Read = "read",
    Rejected = "rejected",
    Undeliverable = "undeliverable"
}
/**
 * The charge currency in ISO 4217 format.
 */
export declare enum MessageStatusUsageCurrencyEnum {
    Eur = "EUR"
}
export declare class MessageStatusUsage extends SpeakeasyBase {
    /**
     * The charge currency in ISO 4217 format.
     */
    currency?: MessageStatusUsageCurrencyEnum;
    /**
     * The charge amount as a stringified number.
     */
    price?: string;
}
/**
 * The callbacks for the message status are the same as defined in the Messaging API. The only difference will be that dispatch_uuid and link will be appended.
 */
export declare class MessageStatus extends SpeakeasyBase {
    links?: MessageStatusLinks;
    error?: MessageStatusError;
    from?: FromProperty;
    messageUuid?: string;
    /**
     * The status of the message.
     */
    status?: MessageStatusStatusEnum;
    /**
     * The datetime of when the event occurred.
     */
    timestamp?: string;
    to?: ToProperty;
    usage?: MessageStatusUsage;
}
