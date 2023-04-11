import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The category of the Event. We may add additional possible values for this enum over time; your application should be able to handle such additions gracefully.
 */
export declare enum EventCategoryEnum {
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
/**
 * A constant representing the object's type. For this resource it will always be `event`.
 */
export declare enum EventTypeEnum {
    Event = "event"
}
/**
 * Events are records of things that happened to objects in the API. They also result in webhooks being generated.
 */
export declare class Event extends SpeakeasyBase {
    /**
     * The identifier of the object that generated this Event.
     */
    associatedObjectId: string;
    /**
     * The type of the object that generated this Event.
     */
    associatedObjectType: string;
    /**
     * The category of the Event. We may add additional possible values for this enum over time; your application should be able to handle such additions gracefully.
     */
    category: EventCategoryEnum;
    /**
     * The time the Event was created.
     */
    createdAt: Date;
    /**
     * The Event identifier.
     */
    id: string;
    /**
     * A constant representing the object's type. For this resource it will always be `event`.
     */
    type: EventTypeEnum;
}
