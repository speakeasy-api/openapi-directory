import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Creditor account type
 */
export declare enum CreditorAccountTypeEnum {
    Iban = "IBAN",
    Scan = "SCAN"
}
/**
 * Creditor account read serializer.
 */
export declare class CreditorAccount extends SpeakeasyBase {
    /**
     * Creditor account type identifier
     */
    account: string;
    /**
     * Creditor account address country
     */
    addressCountry?: string;
    /**
     * Creditor account currency
     */
    currency: string;
    /**
     * Unique entry ID
     */
    id?: string;
    /**
     * Creditor account name
     */
    name: string;
    /**
     * Creditor account type
     */
    type?: CreditorAccountTypeEnum;
}
