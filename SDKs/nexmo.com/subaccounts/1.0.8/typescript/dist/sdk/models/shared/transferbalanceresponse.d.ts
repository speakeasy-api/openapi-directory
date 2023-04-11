import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Balance transfer response
 */
export declare class TransferBalanceResponse extends SpeakeasyBase {
    /**
     * Balance transfer amount
     */
    amount?: number;
    /**
     * Unique balance transfer ID
     */
    balanceTransferId?: string;
    /**
     * The date and time when the balance transfer was executed
     */
    createdAt?: string;
    /**
     * Account the balance is transferred from
     */
    from?: string;
    /**
     * Reference for the balance transfer
     */
    reference?: string;
    /**
     * Account the balance is transferred to
     */
    to?: string;
}
