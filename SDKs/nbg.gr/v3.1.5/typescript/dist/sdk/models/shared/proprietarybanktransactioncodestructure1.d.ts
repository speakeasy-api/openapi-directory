import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Set of elements to fully identify a proprietary bank transaction code.
 */
export declare class ProprietaryBankTransactionCodeStructure1 extends SpeakeasyBase {
    /**
     * Proprietary bank transaction code to identify the underlying transaction.
     */
    code: string;
    /**
     * Identification of the issuer of the proprietary bank transaction code.
     */
    issuer?: string;
}
