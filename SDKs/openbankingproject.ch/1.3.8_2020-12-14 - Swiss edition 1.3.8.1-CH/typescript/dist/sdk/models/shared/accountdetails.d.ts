import { SpeakeasyBase } from "../../../internal/utils";
import { AccountStatusEnum } from "./accountstatusenum";
import { Balance } from "./balance";
import { HrefType } from "./hreftype";
/**
 * Specifies the usage of the account:
 *
 * @remarks
 *   * PRIV: private personal account
 *   * ORGA: professional account
 *
 */
export declare enum AccountDetailsUsageEnum {
    Priv = "PRIV",
    Orga = "ORGA"
}
/**
 * The ASPSP shall give at least one of the account reference identifiers:
 *
 * @remarks
 *   - iban
 *   - bban
 *   - pan
 *   - maskedPan
 *   - msisdn
 * If the account is a multicurrency account currency code in "currency" is set to "XXX".
 *
 */
export declare class AccountDetails extends SpeakeasyBase {
    /**
     * Links to the account, which can be directly used for retrieving account information from this dedicated account.
     *
     * @remarks
     *
     * Links to "balances" and/or "transactions"
     *
     * These links are only supported, when the corresponding consent has been already granted.
     *
     */
    links?: Record<string, HrefType>;
    /**
     * A list of balances regarding this account, e.g. the current balance, the last booked balance.
     *
     * @remarks
     * The list might be restricted to the current balance.
     *
     */
    balances?: Balance[];
    /**
     * Basic Bank Account Number (BBAN) Identifier.
     *
     * @remarks
     *
     * This data element can be used in the body of the consent request.
     *   Message for retrieving account access consent from this account. This
     *   data elements is used for payment accounts which have no IBAN.
     *   ISO20022: Basic Bank Account Number (BBAN).
     *
     *   Identifier used nationally by financial institutions, i.e., in individual countries,
     *   generally as part of a National Account Numbering Scheme(s),
     *   which uniquely identifies the account of a customer.
     *
     */
    bban?: string;
    /**
     * BICFI
     *
     * @remarks
     *
     */
    bic?: string;
    /**
     * ExternalCashAccountType1Code from ISO 20022.
     *
     * @remarks
     *
     */
    cashAccountType?: string;
    /**
     * ISO 4217 Alpha 3 currency code.
     *
     * @remarks
     *
     */
    currency: string;
    /**
     * Specifications that might be provided by the ASPSP:
     *
     * @remarks
     *   - characteristics of the account
     *   - characteristics of the relevant card
     *
     */
    details?: string;
    /**
     * Name of the account as defined by the PSU within online channels.
     *
     * @remarks
     *
     */
    displayName?: string;
    /**
     * IBAN of an account.
     */
    iban?: string;
    /**
     * Case of a set of pending card transactions, the APSP will provide the relevant cash account the card is set up on.
     */
    linkedAccounts?: string;
    /**
     * Mobile phone number.
     */
    msisdn?: string;
    /**
     * Name of the account, as assigned by the ASPSP, in agreement with the account owner in order to provide an additional means of identification of the account.
     */
    name?: string;
    /**
     * Name of the legal account owner.
     *
     * @remarks
     * If there is more than one owner, then e.g. two names might be noted here.
     *
     * For a corporate account, the corporate name is used for this attribute.
     * Even if supported by the ASPSP, the provision of this field might depend on the fact whether an explicit consent to this specific additional account information has been given by the PSU.
     *
     */
    ownerName?: string;
    /**
     * Product name of the bank for this account, proprietary definition.
     */
    product?: string;
    /**
     * This shall be filled, if addressable resource are created by the ASPSP on the /accounts or /card-accounts endpoint.
     */
    resourceId?: string;
    /**
     * Account status. The value is one of the following:
     *
     * @remarks
     *   - "enabled": account is available
     *   - "deleted": account is terminated
     *   - "blocked": account is blocked e.g. for legal reasons
     * If this field is not used, than the account is available in the sense of this specification.
     *
     */
    status?: AccountStatusEnum;
    /**
     * Specifies the usage of the account:
     *
     * @remarks
     *   * PRIV: private personal account
     *   * ORGA: professional account
     *
     */
    usage?: AccountDetailsUsageEnum;
}
