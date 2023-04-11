/**
 * The direction of the flow of transfer funds.
 *
 * @remarks
 *
 * `PAYMENT`: Transfers funds from an end user's account to your business account.
 *
 * `DISBURSEMENT`: Transfers funds from your business account to an end user's account.
 */
export declare enum TransferIntentCreateModeEnum {
    Payment = "PAYMENT",
    Disbursement = "DISBURSEMENT"
}
