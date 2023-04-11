import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTransactionsCategoryInEnum {
    AccountTransferIntention = "account_transfer_intention",
    AchCheckConversionReturn = "ach_check_conversion_return",
    AchCheckConversion = "ach_check_conversion",
    AchTransferIntention = "ach_transfer_intention",
    AchTransferRejection = "ach_transfer_rejection",
    AchTransferReturn = "ach_transfer_return",
    CardDisputeAcceptance = "card_dispute_acceptance",
    CardRefund = "card_refund",
    CardSettlement = "card_settlement",
    CheckDepositAcceptance = "check_deposit_acceptance",
    CheckDepositReturn = "check_deposit_return",
    CheckTransferIntention = "check_transfer_intention",
    CheckTransferReturn = "check_transfer_return",
    CheckTransferRejection = "check_transfer_rejection",
    CheckTransferStopPaymentRequest = "check_transfer_stop_payment_request",
    DisputeResolution = "dispute_resolution",
    EmpyrealCashDeposit = "empyreal_cash_deposit",
    InboundAchTransfer = "inbound_ach_transfer",
    InboundAchTransferReturnIntention = "inbound_ach_transfer_return_intention",
    InboundCheck = "inbound_check",
    InboundInternationalAchTransfer = "inbound_international_ach_transfer",
    InboundRealTimePaymentsTransferConfirmation = "inbound_real_time_payments_transfer_confirmation",
    InboundWireDrawdownPaymentReversal = "inbound_wire_drawdown_payment_reversal",
    InboundWireDrawdownPayment = "inbound_wire_drawdown_payment",
    InboundWireReversal = "inbound_wire_reversal",
    InboundWireTransfer = "inbound_wire_transfer",
    InterestPayment = "interest_payment",
    InternalGeneralLedgerTransaction = "internal_general_ledger_transaction",
    InternalSource = "internal_source",
    CardRouteRefund = "card_route_refund",
    CardRouteSettlement = "card_route_settlement",
    RealTimePaymentsTransferAcknowledgement = "real_time_payments_transfer_acknowledgement",
    SampleFunds = "sample_funds",
    WireDrawdownPaymentIntention = "wire_drawdown_payment_intention",
    WireDrawdownPaymentRejection = "wire_drawdown_payment_rejection",
    WireTransferIntention = "wire_transfer_intention",
    WireTransferRejection = "wire_transfer_rejection",
    Other = "other"
}
export declare class ListTransactionsRequest extends SpeakeasyBase {
    accountId?: string;
    categoryIn?: ListTransactionsCategoryInEnum[];
    createdAtAfter?: Date;
    createdAtBefore?: Date;
    createdAtOnOrAfter?: Date;
    createdAtOnOrBefore?: Date;
    cursor?: string;
    limit?: number;
    routeId?: string;
}
export declare enum ListTransactionsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListTransactionsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListTransactionsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListTransactionsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListTransactionsDefaultApplicationJson13TypeEnum;
}
export declare enum ListTransactionsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListTransactionsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListTransactionsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListTransactionsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListTransactionsDefaultApplicationJson12TypeEnum;
}
export declare enum ListTransactionsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListTransactionsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListTransactionsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListTransactionsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListTransactionsDefaultApplicationJson11TypeEnum;
}
export declare enum ListTransactionsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListTransactionsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListTransactionsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListTransactionsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListTransactionsDefaultApplicationJson10TypeEnum;
}
export declare enum ListTransactionsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListTransactionsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListTransactionsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListTransactionsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListTransactionsDefaultApplicationJson9TypeEnum;
}
export declare enum ListTransactionsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListTransactionsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListTransactionsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListTransactionsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListTransactionsDefaultApplicationJson8TypeEnum;
}
export declare enum ListTransactionsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListTransactionsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListTransactionsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListTransactionsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListTransactionsDefaultApplicationJson7TypeEnum;
}
export declare enum ListTransactionsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListTransactionsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListTransactionsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListTransactionsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListTransactionsDefaultApplicationJson6TypeEnum;
}
export declare enum ListTransactionsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListTransactionsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListTransactionsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListTransactionsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListTransactionsDefaultApplicationJson5TypeEnum;
}
export declare enum ListTransactionsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListTransactionsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListTransactionsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListTransactionsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListTransactionsDefaultApplicationJson4TypeEnum;
}
export declare enum ListTransactionsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListTransactionsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListTransactionsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListTransactionsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListTransactionsDefaultApplicationJson3TypeEnum;
}
export declare enum ListTransactionsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListTransactionsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListTransactionsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListTransactionsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListTransactionsDefaultApplicationJson2TypeEnum;
}
export declare enum ListTransactionsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListTransactionsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListTransactionsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListTransactionsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListTransactionsDefaultApplicationJson1TypeEnum;
}
export declare class ListTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Transaction List
     */
    transactionList?: shared.TransactionList;
}
