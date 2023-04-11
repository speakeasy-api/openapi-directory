import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If your account requires approvals for transfers and the transfer was approved, this will contain details of the approval.
 */
export declare class WireTransferTransferApproval extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was approved.
     */
    approvedAt: Date;
}
/**
 * If your account requires approvals for transfers and the transfer was not approved, this will contain details of the cancellation.
 */
export declare class WireTransferTransferCancellation extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Transfer was canceled.
     */
    canceledAt: Date;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's currency. For wire transfers this is always equal to `usd`.
 */
export declare enum WireTransferCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * The transfer's network.
 */
export declare enum WireTransferNetworkEnum {
    Wire = "wire"
}
/**
 * If your transfer is reversed, this will contain details of the reversal.
 */
export declare class WireTransferInboundWireReversal extends SpeakeasyBase {
    /**
     * The amount that was reversed.
     */
    amount: number;
    /**
     * The description on the reversal message from Fedwire.
     */
    description: string;
    /**
     * Additional financial institution information included in the wire reversal.
     */
    financialInstitutionToFinancialInstitutionInformation: string;
    /**
     * The Fedwire cycle date for the wire reversal.
     */
    inputCycleDate: Date;
    /**
     * The Fedwire transaction identifier.
     */
    inputMessageAccountabilityData: string;
    /**
     * The Fedwire sequence number.
     */
    inputSequenceNumber: string;
    /**
     * The Fedwire input source identifier.
     */
    inputSource: string;
    /**
     * The Fedwire cycle date for the wire transfer that was reversed.
     */
    previousMessageInputCycleDate: Date;
    /**
     * The Fedwire transaction identifier for the wire transfer that was reversed.
     */
    previousMessageInputMessageAccountabilityData: string;
    /**
     * The Fedwire sequence number for the wire transfer that was reversed.
     */
    previousMessageInputSequenceNumber: string;
    /**
     * The Fedwire input source identifier for the wire transfer that was reversed.
     */
    previousMessageInputSource: string;
    /**
     * Information included in the wire reversal for the receiving financial institution.
     */
    receiverFinancialInstitutionInformation: string;
}
/**
 * The lifecycle status of the transfer.
 */
export declare enum WireTransferStatusEnum {
    Canceled = "canceled",
    RequiresAttention = "requires_attention",
    PendingApproval = "pending_approval",
    Rejected = "rejected",
    Reversed = "reversed",
    Complete = "complete",
    PendingCreating = "pending_creating"
}
/**
 * After the transfer is submitted to Fedwire, this will contain supplemental details.
 */
export declare class WireTransferWireTransferSubmission extends SpeakeasyBase {
    /**
     * The accountability data for the submission.
     */
    inputMessageAccountabilityData: string;
    /**
     * When this wire transfer was submitted to Fedwire.
     */
    submittedAt: Date;
}
/**
 * A constant representing the object's type. For this resource it will always be `wire_transfer`.
 */
export declare enum WireTransferTypeEnum {
    WireTransfer = "wire_transfer"
}
/**
 * Wire transfers move funds between your Increase account and any other account accessible by Fedwire.
 */
export declare class WireTransfer extends SpeakeasyBase {
    /**
     * The Account to which the transfer belongs.
     */
    accountId: string;
    /**
     * The destination account number.
     */
    accountNumber: string;
    /**
     * The transfer amount in USD cents.
     */
    amount: number;
    /**
     * If your account requires approvals for transfers and the transfer was approved, this will contain details of the approval.
     */
    approval: WireTransferTransferApproval;
    /**
     * The beneficiary's address line 1.
     */
    beneficiaryAddressLine1: string;
    /**
     * The beneficiary's address line 2.
     */
    beneficiaryAddressLine2: string;
    /**
     * The beneficiary's address line 3.
     */
    beneficiaryAddressLine3: string;
    /**
     * The beneficiary's name.
     */
    beneficiaryName: string;
    /**
     * If your account requires approvals for transfers and the transfer was not approved, this will contain details of the cancellation.
     */
    cancellation: WireTransferTransferCancellation;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was created.
     */
    createdAt: Date;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's currency. For wire transfers this is always equal to `usd`.
     */
    currency: WireTransferCurrencyEnum;
    /**
     * The identifier of the External Account the transfer was made to, if any.
     */
    externalAccountId: string;
    /**
     * The wire transfer's identifier.
     */
    id: string;
    /**
     * The message that will show on the recipient's bank statement.
     */
    messageToRecipient: string;
    /**
     * The transfer's network.
     */
    network: WireTransferNetworkEnum;
    /**
     * If your transfer is reversed, this will contain details of the reversal.
     */
    reversal: WireTransferInboundWireReversal;
    /**
     * The American Bankers' Association (ABA) Routing Transit Number (RTN).
     */
    routingNumber: string;
    /**
     * The lifecycle status of the transfer.
     */
    status: WireTransferStatusEnum;
    /**
     * After the transfer is submitted to Fedwire, this will contain supplemental details.
     */
    submission: WireTransferWireTransferSubmission;
    /**
     * If the transfer was created from a template, this will be the template's ID.
     */
    templateId: string;
    /**
     * The ID for the transaction funding the transfer.
     */
    transactionId: string;
    /**
     * A constant representing the object's type. For this resource it will always be `wire_transfer`.
     */
    type: WireTransferTypeEnum;
}
