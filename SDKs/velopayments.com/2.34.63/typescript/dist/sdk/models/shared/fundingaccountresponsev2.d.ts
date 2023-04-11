import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Funding Account Response
 */
export declare class FundingAccountResponseV2 extends SpeakeasyBase {
    /**
     * name on the bank account
     */
    accountName?: string;
    /**
     * bank account number
     */
    accountNumber?: string;
    /**
     * A flag for whether the funding account has been archived.  Only present in the response if true.
     */
    archived?: boolean;
    /**
     * ISO 3166-1 2 letter country code (upper case)
     */
    country?: string;
    /**
     * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    currency?: string;
    /**
     * Funding Account Id
     */
    id?: string;
    /**
     * name of funding account
     */
    name?: string;
    payorId?: string;
    /**
     * bank account routing number
     */
    routingNumber?: string;
    /**
     * Funding account type. One of the following values: FBO, WUBS_DECOUPLED, PRIVATE
     */
    type?: string;
}
