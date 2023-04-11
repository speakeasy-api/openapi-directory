import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The direction of the fax
 */
export declare enum FaxV1FaxDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * The quality of the fax
 */
export declare enum FaxV1FaxQualityEnum {
    Standard = "standard",
    Fine = "fine",
    Superfine = "superfine"
}
/**
 * The status of the fax
 */
export declare enum FaxV1FaxStatusEnum {
    Queued = "queued",
    Processing = "processing",
    Sending = "sending",
    Delivered = "delivered",
    Receiving = "receiving",
    Received = "received",
    NoAnswer = "no-answer",
    Busy = "busy",
    Failed = "failed",
    Canceled = "canceled"
}
/**
 * OK
 */
export declare class FaxV1Fax extends SpeakeasyBase {
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string;
    /**
     * The API version used to transmit the fax
     */
    apiVersion?: string;
    /**
     * The ISO 8601 formatted date and time in GMT when the resource was created
     */
    dateCreated?: Date;
    /**
     * The ISO 8601 formatted date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date;
    /**
     * The direction of the fax
     */
    direction?: FaxV1FaxDirectionEnum;
    /**
     * The time it took to transmit the fax
     */
    duration?: number;
    /**
     * The number the fax was sent from
     */
    from?: string;
    /**
     * The URLs of the fax's related resources
     */
    links?: Record<string, any>;
    /**
     * The SID of the FaxMedia resource that is associated with the Fax
     */
    mediaSid?: string;
    /**
     * The Twilio-hosted URL that can be used to download fax media
     */
    mediaUrl?: string;
    /**
     * The number of pages contained in the fax document
     */
    numPages?: number;
    /**
     * The fax transmission price
     */
    price?: number;
    /**
     * The ISO 4217 currency used for billing
     */
    priceUnit?: string;
    /**
     * The quality of the fax
     */
    quality?: FaxV1FaxQualityEnum;
    /**
     * The unique string that identifies the resource
     */
    sid?: string;
    /**
     * The status of the fax
     */
    status?: FaxV1FaxStatusEnum;
    /**
     * The phone number that received the fax
     */
    to?: string;
    /**
     * The absolute URL of the fax resource
     */
    url?: string;
}
