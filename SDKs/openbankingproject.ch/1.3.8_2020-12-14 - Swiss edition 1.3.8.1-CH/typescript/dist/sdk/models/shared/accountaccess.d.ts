import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16CH } from "./accountreference16ch";
import { AdditionalInformationAccess } from "./additionalinformationaccess";
/**
 * Optional if supported by API provider.
 *
 * @remarks
 *
 * The values "allAccounts" and "allAccountsWithOwnerName" are admitted.
 * The support of the "allAccountsWithOwnerName" value by the ASPSP is optional.
 *
 */
export declare enum AccountAccessAllPsd2Enum {
    AllAccounts = "allAccounts",
    AllAccountsWithOwnerName = "allAccountsWithOwnerName"
}
/**
 * Optional if supported by API provider.
 *
 * @remarks
 *
 * The values "allAccounts" and "allAccountsWithOwnerName" are admitted.
 * The support of the "allAccountsWithOwnerName" value by the ASPSP is optional.
 *
 */
export declare enum AccountAccessAvailableAccountsEnum {
    AllAccounts = "allAccounts",
    AllAccountsWithOwnerName = "allAccountsWithOwnerName"
}
/**
 * Optional if supported by API provider.
 *
 * @remarks
 *
 * The values "allAccounts" and "allAccountsWithOwnerName" are admitted.
 * The support of the "allAccountsWithOwnerName" value by the ASPSP is optional.
 *
 */
export declare enum AccountAccessAvailableAccountsWithBalanceEnum {
    AllAccounts = "allAccounts",
    AllAccountsWithOwnerName = "allAccountsWithOwnerName"
}
/**
 * Requested access services for a consent.
 *
 * @remarks
 *
 */
export declare class AccountAccess extends SpeakeasyBase {
    /**
     * Is asking for detailed account information.
     *
     * @remarks
     *
     * If the array is empty in a request, the TPP is asking for an accessible account list.
     * This may be restricted in a PSU/ASPSP authorization dialogue.
     * If the array is empty, also the arrays for balances, additionalInformation sub attributes or transactions shall be empty, if used.
     *
     */
    accounts?: AccountReference16CH[];
    /**
     * Optional if supported by API provider.
     *
     * @remarks
     *
     * Is asking for additional information as added within this structured object.
     * The usage of this data element requires at least one of the entries "accounts",
     * "transactions" or "balances" also to be contained in the object.
     * If detailed accounts are referenced, it is required in addition that any account addressed within
     * the additionalInformation attribute is also addressed by at least one of the attributes "accounts",
     * "transactions" or "balances".
     *
     */
    additionalInformation?: AdditionalInformationAccess;
    /**
     * Optional if supported by API provider.
     *
     * @remarks
     *
     * The values "allAccounts" and "allAccountsWithOwnerName" are admitted.
     * The support of the "allAccountsWithOwnerName" value by the ASPSP is optional.
     *
     */
    allPsd2?: AccountAccessAllPsd2Enum;
    /**
     * Optional if supported by API provider.
     *
     * @remarks
     *
     * The values "allAccounts" and "allAccountsWithOwnerName" are admitted.
     * The support of the "allAccountsWithOwnerName" value by the ASPSP is optional.
     *
     */
    availableAccounts?: AccountAccessAvailableAccountsEnum;
    /**
     * Optional if supported by API provider.
     *
     * @remarks
     *
     * The values "allAccounts" and "allAccountsWithOwnerName" are admitted.
     * The support of the "allAccountsWithOwnerName" value by the ASPSP is optional.
     *
     */
    availableAccountsWithBalance?: AccountAccessAvailableAccountsWithBalanceEnum;
    /**
     * Is asking for balances of the addressed accounts.
     *
     * @remarks
     *
     * If the array is empty in the request, the TPP is asking for the balances of all accessible account lists.
     * This may be restricted in a PSU/ASPSP authorization dialogue.
     * If the array is empty, also the arrays for accounts, additionalInformation sub attributes or transactions shall be empty, if used.
     *
     */
    balances?: AccountReference16CH[];
    /**
     * If the TPP requests access to accounts via availableAccounts (List of available accounts), global
     *
     * @remarks
     * or bank driven consents, the TPP may include this element to restrict access to the referred
     * account types. Absence of the element is interpreted as "no restriction" (therefore access to
     * accounts of all types is requested). The element may only occur, if each of the elements
     *   - accounts
     *   - balances
     *   - transactions
     * is either not present or contains an empty array.
     *
     */
    restrictedTo?: string[];
    /**
     * Is asking for transactions of the addressed accounts.
     *
     * @remarks
     *
     * If the array is empty in the request, the TPP is asking for the transactions of all accessible account lists.
     * This may be restricted in a PSU/ASPSP authorization dialogue.
     * If the array is empty, also the arrays for accounts, additionalInformation sub attributes or balances shall be empty, if used.
     *
     */
    transactions?: AccountReference16CH[];
}
