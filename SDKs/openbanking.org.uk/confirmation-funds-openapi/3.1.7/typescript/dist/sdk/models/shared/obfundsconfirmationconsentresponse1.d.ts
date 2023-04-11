import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
 */
export declare class OBFundsConfirmationConsentResponse1DataDebtorAccount extends SpeakeasyBase {
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
/**
 * Specifies the status of consent resource in code form.
 */
export declare enum OBFundsConfirmationConsentResponse1DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    Rejected = "Rejected",
    Revoked = "Revoked"
}
export declare class OBFundsConfirmationConsentResponse1Data extends SpeakeasyBase {
    /**
     * Unique identification as assigned to identify the funds confirmation consent resource.
     */
    consentId: string;
    /**
     * Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    creationDateTime: Date;
    /**
     * Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
     */
    debtorAccount: OBFundsConfirmationConsentResponse1DataDebtorAccount;
    /**
     * Specified date and time the funds confirmation authorisation will expire.
     *
     * @remarks
     * If this is not populated, the authorisation will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    expirationDateTime?: Date;
    /**
     * Specifies the status of consent resource in code form.
     */
    status: OBFundsConfirmationConsentResponse1DataStatusEnum;
    /**
     * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
     *
     * @remarks
     * All date-time fields in responses must include the timezone. An example is below:
     * 2017-04-05T10:43:07+00:00
     */
    statusUpdateDateTime: Date;
}
/**
 * Funds Confirmation Consent Created
 */
export declare class OBFundsConfirmationConsentResponse1 extends SpeakeasyBase {
    data: OBFundsConfirmationConsentResponse1Data;
    /**
     * Links relevant to the payload
     */
    links?: Links;
    /**
     * Meta Data relevant to the payload
     */
    meta?: Meta;
}
