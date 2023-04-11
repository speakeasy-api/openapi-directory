import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Debtor account type
 */
export declare enum DebtorAccountWriteTypeEnum {
    Iban = "IBAN",
    Scan = "SCAN"
}
/**
 * Debtor account write serializer.
 */
export declare class DebtorAccountWrite extends SpeakeasyBase {
    /**
     * Debtor account type identifier
     */
    account?: string;
    /**
     * Debtor account address country
     */
    addressCountry?: string;
    /**
     * Debtor account address street
     */
    addressStreet?: string;
    /**
     * Debtor account currency
     */
    currency?: string;
    /**
     * Debtor account name
     */
    name: string;
    /**
     * Debtor account post code
     */
    postCode?: string;
    /**
     * Debtor account type
     */
    type?: DebtorAccountWriteTypeEnum;
    /**
     * Debtor account type identifier
     */
    typeNumber?: string;
}
