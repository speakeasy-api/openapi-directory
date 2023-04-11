/**
 * Indicates the direction of the transfer: `outbound`: for API-initiated transfers
 *
 * @remarks
 * `inbound`: for payments received by the FBO account.
 */
export declare enum BankTransferEventListDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound",
    Null = "null"
}
