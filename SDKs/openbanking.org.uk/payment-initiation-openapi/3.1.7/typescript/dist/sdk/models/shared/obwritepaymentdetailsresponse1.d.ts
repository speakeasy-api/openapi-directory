import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Status of a transfe, as assigned by the transaction administrator.
 */
export declare enum OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnum {
    Accepted = "Accepted",
    AcceptedCancellationRequest = "AcceptedCancellationRequest",
    AcceptedCreditSettlementCompleted = "AcceptedCreditSettlementCompleted",
    AcceptedCustomerProfile = "AcceptedCustomerProfile",
    AcceptedFundsChecked = "AcceptedFundsChecked",
    AcceptedSettlementCompleted = "AcceptedSettlementCompleted",
    AcceptedSettlementInProcess = "AcceptedSettlementInProcess",
    AcceptedTechnicalValidation = "AcceptedTechnicalValidation",
    AcceptedWithChange = "AcceptedWithChange",
    AcceptedWithoutPosting = "AcceptedWithoutPosting",
    Cancelled = "Cancelled",
    NoCancellationProcess = "NoCancellationProcess",
    PartiallyAcceptedCancellationRequest = "PartiallyAcceptedCancellationRequest",
    PartiallyAcceptedTechnicalCorrect = "PartiallyAcceptedTechnicalCorrect",
    PaymentCancelled = "PaymentCancelled",
    Pending = "Pending",
    PendingCancellationRequest = "PendingCancellationRequest",
    Received = "Received",
    Rejected = "Rejected",
    RejectedCancellationRequest = "RejectedCancellationRequest"
}
/**
 * Reason Code provided for the status of a transfer.
 */
export declare enum OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum {
    Cancelled = "Cancelled",
    PendingFailingSettlement = "PendingFailingSettlement",
    PendingSettlement = "PendingSettlement",
    Proprietary = "Proprietary",
    ProprietaryRejection = "ProprietaryRejection",
    Suspended = "Suspended",
    Unmatched = "Unmatched"
}
/**
 * Payment status details as per underlying Payment Rail.
 */
export declare class OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetail extends SpeakeasyBase {
    /**
     * User community specific instrument.
     *
     * @remarks
     * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
     */
    localInstrument?: string;
    /**
     * Status of a transfer, as assigned by the transaction administrator.
     */
    status: string;
    /**
     * Reason Code provided for the status of a transfer.
     */
    statusReason?: OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum;
    /**
     * Reason provided for the status of a transfer.
     */
    statusReasonDescription?: string;
}
/**
 * Payment status details.
 */
export declare class OBWritePaymentDetailsResponse1DataPaymentStatus extends SpeakeasyBase {
    /**
     * Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.
     */
    paymentTransactionId: string;
    /**
     * Status of a transfe, as assigned by the transaction administrator.
     */
    status: OBWritePaymentDetailsResponse1DataPaymentStatusStatusEnum;
    /**
     * Payment status details as per underlying Payment Rail.
     */
    statusDetail?: OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetail;
    /**
     * Date and time at which the status was assigned to the transfer.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    statusUpdateDateTime: Date;
}
export declare class OBWritePaymentDetailsResponse1Data extends SpeakeasyBase {
    paymentStatus?: OBWritePaymentDetailsResponse1DataPaymentStatus[];
}
/**
 * Payment Details Read
 */
export declare class OBWritePaymentDetailsResponse1 extends SpeakeasyBase {
    data: OBWritePaymentDetailsResponse1Data;
    /**
     * Links relevant to the payload
     */
    links?: Links;
    /**
     * Meta Data relevant to the payload
     */
    meta?: Meta;
}
