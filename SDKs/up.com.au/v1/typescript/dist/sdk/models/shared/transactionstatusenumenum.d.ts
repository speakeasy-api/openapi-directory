/**
 * Specifies which stage of processing a transaction is currently at.
 *
 * @remarks
 * Currently returned values are `HELD` and `SETTLED`. When a transaction is
 * held, its account’s `availableBalance` is affected. When a transaction is
 * settled, its account’s `currentBalance` is affected.
 *
 */
export declare enum TransactionStatusEnumEnum {
    Held = "HELD",
    Settled = "SETTLED"
}
