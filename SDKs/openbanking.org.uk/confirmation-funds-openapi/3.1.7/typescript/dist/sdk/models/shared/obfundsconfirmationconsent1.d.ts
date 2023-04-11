import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
 */
export declare class OBFundsConfirmationConsent1DataDebtorAccount extends SpeakeasyBase {
    /**
     * Identification assigned by an institution to identify an account. This identification is known by the account owner.
     */
    identification: string;
    /**
     * Name of the account, as assigned by the account servicing institution.
     *
     * @remarks
     * Usage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.
     */
    name?: string;
    /**
     * Name of the identification scheme, in a coded form as published in an external list.
     */
    schemeName: string;
    /**
     * This is secondary identification of the account, as assigned by the account servicing institution.
     *
     * @remarks
     * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
     */
    secondaryIdentification?: string;
}
export declare class OBFundsConfirmationConsent1Data extends SpeakeasyBase {
    /**
     * Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
     */
    debtorAccount: OBFundsConfirmationConsent1DataDebtorAccount;
    /**
     * Specified date and time the funds confirmation authorisation will expire.
     *
     * @remarks
     *  If this is not populated, the authorisation will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    expirationDateTime?: Date;
}
/**
 * Default
 */
export declare class OBFundsConfirmationConsent1 extends SpeakeasyBase {
    data: OBFundsConfirmationConsent1Data;
}
