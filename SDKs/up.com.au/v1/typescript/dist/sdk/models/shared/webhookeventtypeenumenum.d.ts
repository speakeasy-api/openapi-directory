/**
 * Specifies the type of a webhook event. This can be used to determine what
 *
 * @remarks
 * action to take in response to the event, such as which relationships to
 * expect.
 *
 */
export declare enum WebhookEventTypeEnumEnum {
    TransactionCreated = "TRANSACTION_CREATED",
    TransactionSettled = "TRANSACTION_SETTLED",
    TransactionDeleted = "TRANSACTION_DELETED",
    Ping = "PING"
}
