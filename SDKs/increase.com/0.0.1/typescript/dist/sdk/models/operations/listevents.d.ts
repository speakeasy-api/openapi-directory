import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEventsCategoryInEnum {
    AccountCreated = "account.created",
    AccountUpdated = "account.updated",
    AccountNumberCreated = "account_number.created",
    AccountNumberUpdated = "account_number.updated",
    AccountStatementCreated = "account_statement.created",
    AccountTransferCreated = "account_transfer.created",
    AccountTransferUpdated = "account_transfer.updated",
    AchPrenotificationCreated = "ach_prenotification.created",
    AchPrenotificationUpdated = "ach_prenotification.updated",
    AchTransferCreated = "ach_transfer.created",
    AchTransferUpdated = "ach_transfer.updated",
    CardCreated = "card.created",
    CardUpdated = "card.updated",
    CardDisputeCreated = "card_dispute.created",
    CardDisputeUpdated = "card_dispute.updated",
    CheckDepositCreated = "check_deposit.created",
    CheckDepositUpdated = "check_deposit.updated",
    CheckTransferCreated = "check_transfer.created",
    CheckTransferUpdated = "check_transfer.updated",
    DeclinedTransactionCreated = "declined_transaction.created",
    DigitalWalletTokenCreated = "digital_wallet_token.created",
    DigitalWalletTokenUpdated = "digital_wallet_token.updated",
    DocumentCreated = "document.created",
    EntityCreated = "entity.created",
    EntityUpdated = "entity.updated",
    ExternalAccountCreated = "external_account.created",
    FileCreated = "file.created",
    GroupUpdated = "group.updated",
    GroupHeartbeat = "group.heartbeat",
    InboundAchTransferReturnCreated = "inbound_ach_transfer_return.created",
    InboundAchTransferReturnUpdated = "inbound_ach_transfer_return.updated",
    InboundWireDrawdownRequestCreated = "inbound_wire_drawdown_request.created",
    OauthConnectionCreated = "oauth_connection.created",
    OauthConnectionDeactivated = "oauth_connection.deactivated",
    PendingTransactionCreated = "pending_transaction.created",
    PendingTransactionUpdated = "pending_transaction.updated",
    RealTimeDecisionCardAuthorizationRequested = "real_time_decision.card_authorization_requested",
    RealTimeDecisionDigitalWalletTokenRequested = "real_time_decision.digital_wallet_token_requested",
    RealTimeDecisionDigitalWalletAuthenticationRequested = "real_time_decision.digital_wallet_authentication_requested",
    RealTimePaymentsTransferCreated = "real_time_payments_transfer.created",
    RealTimePaymentsTransferUpdated = "real_time_payments_transfer.updated",
    RealTimePaymentsRequestForPaymentCreated = "real_time_payments_request_for_payment.created",
    RealTimePaymentsRequestForPaymentUpdated = "real_time_payments_request_for_payment.updated",
    TransactionCreated = "transaction.created",
    WireDrawdownRequestCreated = "wire_drawdown_request.created",
    WireDrawdownRequestUpdated = "wire_drawdown_request.updated",
    WireTransferCreated = "wire_transfer.created",
    WireTransferUpdated = "wire_transfer.updated"
}
export declare class ListEventsRequest extends SpeakeasyBase {
    associatedObjectId?: string;
    categoryIn?: ListEventsCategoryInEnum[];
    createdAtAfter?: Date;
    createdAtBefore?: Date;
    createdAtOnOrAfter?: Date;
    createdAtOnOrBefore?: Date;
    cursor?: string;
    limit?: number;
}
export declare enum ListEventsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListEventsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListEventsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListEventsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListEventsDefaultApplicationJson13TypeEnum;
}
export declare enum ListEventsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListEventsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListEventsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListEventsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListEventsDefaultApplicationJson12TypeEnum;
}
export declare enum ListEventsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListEventsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListEventsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListEventsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListEventsDefaultApplicationJson11TypeEnum;
}
export declare enum ListEventsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListEventsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListEventsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListEventsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListEventsDefaultApplicationJson10TypeEnum;
}
export declare enum ListEventsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListEventsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListEventsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListEventsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListEventsDefaultApplicationJson9TypeEnum;
}
export declare enum ListEventsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListEventsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListEventsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListEventsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListEventsDefaultApplicationJson8TypeEnum;
}
export declare enum ListEventsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListEventsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListEventsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListEventsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListEventsDefaultApplicationJson7TypeEnum;
}
export declare enum ListEventsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListEventsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListEventsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListEventsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListEventsDefaultApplicationJson6TypeEnum;
}
export declare enum ListEventsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListEventsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListEventsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListEventsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListEventsDefaultApplicationJson5TypeEnum;
}
export declare enum ListEventsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListEventsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListEventsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListEventsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListEventsDefaultApplicationJson4TypeEnum;
}
export declare enum ListEventsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListEventsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListEventsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListEventsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListEventsDefaultApplicationJson3TypeEnum;
}
export declare enum ListEventsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListEventsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListEventsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListEventsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListEventsDefaultApplicationJson2TypeEnum;
}
export declare enum ListEventsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListEventsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListEventsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListEventsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListEventsDefaultApplicationJson1TypeEnum;
}
export declare class ListEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Event List
     */
    eventList?: shared.EventList;
}
