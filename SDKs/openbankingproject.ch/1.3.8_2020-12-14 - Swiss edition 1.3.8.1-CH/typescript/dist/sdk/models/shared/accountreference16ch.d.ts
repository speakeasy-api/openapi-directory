import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reference to an account by either
 *
 * @remarks
 *   * IBAN, of a payment accounts, or
 *   * otherAccountIdentification, for payment accounts if there is no IBAN
 * adapted from ISO pain.001.001.03.ch.02 CashAccount16-CH_IdTpCcy
 *
 */
export declare class AccountReference16CH extends SpeakeasyBase {
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
    currency?: string;
    /**
     * IBAN of an account.
     */
    iban?: string;
    /**
     * Other payment account Identifier.
     *
     * @remarks
     * adapted from ISO pain.001.001.03.ch.02 GenericAccountIdentification1-CH
     *
     */
    otherAccountIdentification?: string;
}
