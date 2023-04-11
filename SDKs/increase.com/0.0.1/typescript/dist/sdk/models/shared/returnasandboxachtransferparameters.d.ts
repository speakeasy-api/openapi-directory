import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reason why the Federal Reserve or destination bank returned this transfer. Defaults to `no_account`.
 */
export declare enum ReturnASandboxAchTransferParametersReasonEnum {
    InsufficientFund = "insufficient_fund",
    NoAccount = "no_account",
    AccountClosed = "account_closed",
    InvalidAccountNumberStructure = "invalid_account_number_structure",
    AccountFrozenEntryReturnedPerOfacInstruction = "account_frozen_entry_returned_per_ofac_instruction",
    CreditEntryRefusedByReceiver = "credit_entry_refused_by_receiver",
    UnauthorizedDebitToConsumerAccountUsingCorporateSecCode = "unauthorized_debit_to_consumer_account_using_corporate_sec_code",
    CorporateCustomerAdvisedNotAuthorized = "corporate_customer_advised_not_authorized",
    PaymentStopped = "payment_stopped",
    NonTransactionAccount = "non_transaction_account",
    UncollectedFunds = "uncollected_funds",
    RoutingNumberCheckDigitError = "routing_number_check_digit_error",
    CustomerAdvisedUnauthorizedImproperIneligibleOrIncomplete = "customer_advised_unauthorized_improper_ineligible_or_incomplete",
    AmountFieldError = "amount_field_error",
    AuthorizationRevokedByCustomer = "authorization_revoked_by_customer",
    InvalidAchRoutingNumber = "invalid_ach_routing_number",
    FileRecordEditCriteria = "file_record_edit_criteria",
    EnrInvalidIndividualName = "enr_invalid_individual_name",
    ReturnedPerOdfiRequest = "returned_per_odfi_request",
    AddendaError = "addenda_error",
    LimitedParticipationDfi = "limited_participation_dfi",
    IncorrectlyCodedOutboundInternationalPayment = "incorrectly_coded_outbound_international_payment",
    Other = "other"
}
export declare class ReturnASandboxAchTransferParameters extends SpeakeasyBase {
    /**
     * The reason why the Federal Reserve or destination bank returned this transfer. Defaults to `no_account`.
     */
    reason?: ReturnASandboxAchTransferParametersReasonEnum;
}
