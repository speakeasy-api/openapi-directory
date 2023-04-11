import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reason why this transfer will be returned. This is sent to the initiating bank.
 */
export declare enum InboundAchTransferReturnReasonEnum {
    AuthorizationRevokedByCustomer = "authorization_revoked_by_customer",
    PaymentStopped = "payment_stopped",
    CustomerAdvisedUnauthorizedImproperIneligibleOrIncomplete = "customer_advised_unauthorized_improper_ineligible_or_incomplete",
    RepresentativePayeeDeceasedOrUnableToContinueInThatCapacity = "representative_payee_deceased_or_unable_to_continue_in_that_capacity",
    BeneficiaryOrAccountHolderDeceased = "beneficiary_or_account_holder_deceased",
    CreditEntryRefusedByReceiver = "credit_entry_refused_by_receiver",
    DuplicateEntry = "duplicate_entry",
    CorporateCustomerAdvisedNotAuthorized = "corporate_customer_advised_not_authorized"
}
/**
 * The lifecycle status of the transfer.
 */
export declare enum InboundAchTransferReturnStatusEnum {
    PendingSubmitting = "pending_submitting",
    Submitted = "submitted"
}
/**
 * After the return is submitted to FedACH, this will contain supplemental details.
 */
export declare class InboundACHTransferReturnInboundACHTransferReturnSubmission extends SpeakeasyBase {
    /**
     * When the ACH transfer return was sent to FedACH.
     */
    submittedAt: Date;
    /**
     * The trace number for the submission.
     */
    traceNumber: string;
}
/**
 * A constant representing the object's type. For this resource it will always be `inbound_ach_transfer_return`.
 */
export declare enum InboundAchTransferReturnTypeEnum {
    InboundAchTransferReturn = "inbound_ach_transfer_return"
}
/**
 * If unauthorized activity occurs via ACH, you can create an Inbound ACH Transfer Return and we'll reverse the transaction. You can create an Inbound ACH Transfer return the first two days after receiving an Inbound ACH Transfer.
 */
export declare class InboundAchTransferReturn extends SpeakeasyBase {
    /**
     * The ID of the Inbound ACH Transfer Return.
     */
    id: string;
    /**
     * The ID for the Transaction that is being returned.
     */
    inboundAchTransferTransactionId: string;
    /**
     * The reason why this transfer will be returned. This is sent to the initiating bank.
     */
    reason: InboundAchTransferReturnReasonEnum;
    /**
     * The lifecycle status of the transfer.
     */
    status: InboundAchTransferReturnStatusEnum;
    /**
     * After the return is submitted to FedACH, this will contain supplemental details.
     */
    submission: InboundACHTransferReturnInboundACHTransferReturnSubmission;
    /**
     * The ID for the transaction refunding the transfer.
     */
    transactionId: string;
    /**
     * A constant representing the object's type. For this resource it will always be `inbound_ach_transfer_return`.
     */
    type: InboundAchTransferReturnTypeEnum;
}
