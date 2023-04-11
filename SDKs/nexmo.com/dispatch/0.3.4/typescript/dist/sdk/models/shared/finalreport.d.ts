import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FinalReportLinksMessagesChannelEnum {
    Messenger = "messenger",
    ViberSeviceMsg = "viber_sevice_msg",
    Sms = "sms",
    Whatsapp = "whatsapp",
    Mms = "mms"
}
export declare enum FinalReportLinksMessagesStatusEnum {
    Submitted = "submitted",
    Delivered = "delivered",
    Read = "read",
    Rejected = "rejected",
    Undeliverable = "undeliverable"
}
/**
 * The charge currency in ISO 4217 format.
 */
export declare enum FinalReportLinksMessagesUsageCurrencyEnum {
    Eur = "EUR"
}
export declare class FinalReportLinksMessagesUsage extends SpeakeasyBase {
    /**
     * The charge currency in ISO 4217 format.
     */
    currency?: FinalReportLinksMessagesUsageCurrencyEnum;
    /**
     * The charge amount as a stringified number.
     */
    price?: string;
}
export declare class FinalReportLinksMessages extends SpeakeasyBase {
    channel?: FinalReportLinksMessagesChannelEnum;
    /**
     * Please note GET is not currently supported
     */
    href?: string;
    messageUuid?: string;
    status?: FinalReportLinksMessagesStatusEnum;
    usage?: FinalReportLinksMessagesUsage;
}
export declare class FinalReportLinks extends SpeakeasyBase {
    messages?: FinalReportLinksMessages[];
}
export declare enum FinalReportStatusEnum {
    Completed = "completed",
    Error = "error"
}
export declare enum FinalReportTemplateEnum {
    Failover = "failover"
}
/**
 * The charge currency in ISO 4217 format.
 */
export declare enum FinalReportUsageCurrencyEnum {
    Eur = "EUR"
}
/**
 * This is the total cost of your Workflow request. Please note if a preceding message in the workflow request is delivered after the final message in the workflow is delivered it may not reflect the true total cost of the workflow.
 */
export declare class FinalReportUsage extends SpeakeasyBase {
    /**
     * The charge currency in ISO 4217 format.
     */
    currency?: FinalReportUsageCurrencyEnum;
    /**
     * The charge amount as a stringified number.
     */
    price?: string;
}
export declare class FinalReport extends SpeakeasyBase {
    links?: FinalReportLinks;
    dispatchUuid?: string;
    status?: FinalReportStatusEnum;
    template?: FinalReportTemplateEnum;
    /**
     * The datetime of when the event occurred.
     */
    timestamp?: string;
    /**
     * This is the total cost of your Workflow request. Please note if a preceding message in the workflow request is delivered after the final message in the workflow is delivered it may not reflect the true total cost of the workflow.
     */
    usage?: FinalReportUsage;
}
