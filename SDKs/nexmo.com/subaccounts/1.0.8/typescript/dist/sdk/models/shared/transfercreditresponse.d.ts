import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Credit transfer response
 */
export declare class TransferCreditResponse extends SpeakeasyBase {
    /**
     * Credit transfer amount
     */
    amount?: number;
    /**
     * The date and time when the credit transfer was executed
     */
    createdAt?: string;
    /**
     * Unique credit transfer ID
     */
    creditTransferId?: string;
    /**
     * Account the credit is transferred from
     */
    from?: string;
    /**
     * Reference for the credit transfer
     */
    reference?: string;
    /**
     * Account the credit is transferred to
     */
    to?: string;
}
