import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If the notification is for a future credit or debit.
 */
export declare enum AchPrenotificationCreditDebitIndicatorEnum {
    Credit = "credit",
    Debit = "debit"
}
/**
 * If your prenotification is returned, this will contain details of the return.
 */
export declare class ACHPrenotificationACHPrenotificationReturn extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Prenotification was returned.
     */
    createdAt: Date;
    /**
     * Why the Prenotification was returned.
     */
    returnReasonCode: string;
}
/**
 * The lifecycle status of the ACH Prenotification.
 */
export declare enum AchPrenotificationStatusEnum {
    PendingSubmitting = "pending_submitting",
    RequiresAttention = "requires_attention",
    Returned = "returned",
    Submitted = "submitted"
}
/**
 * A constant representing the object's type. For this resource it will always be `ach_prenotification`.
 */
export declare enum AchPrenotificationTypeEnum {
    AchPrenotification = "ach_prenotification"
}
/**
 * ACH Prenotifications are one way you can verify account and routing numbers by Automated Clearing House (ACH).
 */
export declare class AchPrenotification extends SpeakeasyBase {
    /**
     * The destination account number.
     */
    accountNumber: string;
    /**
     * Additional information for the recipient.
     */
    addendum: string;
    /**
     * The description of the date of the notification.
     */
    companyDescriptiveDate: string;
    /**
     * Optional data associated with the notification.
     */
    companyDiscretionaryData: string;
    /**
     * The description of the notification.
     */
    companyEntryDescription: string;
    /**
     * The name by which you know the company.
     */
    companyName: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the prenotification was created.
     */
    createdAt: Date;
    /**
     * If the notification is for a future credit or debit.
     */
    creditDebitIndicator: AchPrenotificationCreditDebitIndicatorEnum;
    /**
     * The effective date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    effectiveDate: Date;
    /**
     * The ACH Prenotification's identifier.
     */
    id: string;
    /**
     * If your prenotification is returned, this will contain details of the return.
     */
    prenotificationReturn: ACHPrenotificationACHPrenotificationReturn;
    /**
     * The American Bankers' Association (ABA) Routing Transit Number (RTN).
     */
    routingNumber: string;
    /**
     * The lifecycle status of the ACH Prenotification.
     */
    status: AchPrenotificationStatusEnum;
    /**
     * A constant representing the object's type. For this resource it will always be `ach_prenotification`.
     */
    type: AchPrenotificationTypeEnum;
}
