import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reason why this transfer will be returned. The most usual return codes are `payment_stopped` for debits and `credit_entry_refused_by_receiver` for credits.
 */
export declare enum CreateAnAchReturnParametersReasonEnum {
    AuthorizationRevokedByCustomer = "authorization_revoked_by_customer",
    PaymentStopped = "payment_stopped",
    CustomerAdvisedUnauthorizedImproperIneligibleOrIncomplete = "customer_advised_unauthorized_improper_ineligible_or_incomplete",
    RepresentativePayeeDeceasedOrUnableToContinueInThatCapacity = "representative_payee_deceased_or_unable_to_continue_in_that_capacity",
    BeneficiaryOrAccountHolderDeceased = "beneficiary_or_account_holder_deceased",
    CreditEntryRefusedByReceiver = "credit_entry_refused_by_receiver",
    DuplicateEntry = "duplicate_entry",
    CorporateCustomerAdvisedNotAuthorized = "corporate_customer_advised_not_authorized"
}
export declare class CreateAnAchReturnParameters extends SpeakeasyBase {
    /**
     * The reason why this transfer will be returned. The most usual return codes are `payment_stopped` for debits and `credit_entry_refused_by_receiver` for credits.
     */
    reason: CreateAnAchReturnParametersReasonEnum;
    /**
     * The transaction identifier of the Inbound ACH Transfer to return to the originating financial institution.
     */
    transactionId: string;
}
