import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sandbox card information
 */
export declare class SandboxCardInfo extends SpeakeasyBase {
    /**
     * Available balance
     */
    availableBalance?: number;
    /**
     * Credit limit ( applicable to credit cards )
     */
    creditLimit?: number;
    /**
     * Description
     */
    description?: string;
    /**
     * Expiration date (05/2022)
     */
    expiration: string;
    /**
     * Holder name
     */
    holderName: string;
    /**
     * Ledger balance
     */
    ledgerBalance?: number;
    /**
     * Card number
     */
    number: string;
    /**
     * Sub type
     */
    subType?: string;
    /**
     * Type
     */
    type?: string;
}
