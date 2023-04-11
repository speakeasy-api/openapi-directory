import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAccess } from "./accountaccess";
import { ConsentStatusEnum } from "./consentstatusenum";
import { HrefType } from "./hreftype";
/**
 * Body of the JSON response for a successfull get consent request.
 */
export declare class ConsentInformationResponse200Json extends SpeakeasyBase {
    /**
     * A list of hyperlinks to be recognised by the TPP.
     *
     * @remarks
     *
     * Links of type "account" and/or "cardAccount", depending on the nature of the consent.
     *
     */
    links?: Record<string, HrefType>;
    /**
     * Requested access services for a consent.
     *
     * @remarks
     *
     */
    access: AccountAccess;
    /**
     * This is the overall lifecycle status of the consent.
     *
     * @remarks
     *
     * Valid values are:
     *   - 'received': The consent data have been received and are technically correct.
     *     The data is not authorised yet.
     *   - 'rejected': The consent data have been rejected e.g. since no successful authorisation has taken place.
     *   - 'valid': The consent is accepted and valid for GET account data calls and others as specified in the consent object.
     *   - 'revokedByPsu': The consent has been revoked by the PSU towards the ASPSP.
     *   - 'expired': The consent expired.
     *   - 'terminatedByTpp': The corresponding TPP has terminated the consent by applying the DELETE method to the consent resource.
     *   - 'partiallyAuthorised': The consent is due to a multi-level authorisation, some but not all mandated authorisations have been performed yet.
     *
     * The ASPSP might add further codes. These codes then shall be contained in the ASPSP's documentation of the XS2A interface
     * and has to be added to this API definition as well.
     *
     */
    consentStatus: ConsentStatusEnum;
    /**
     * This field indicates the requested maximum frequency for an access without PSU involvement per day.
     *
     * @remarks
     * For a one-off access, this attribute is set to "1".
     *
     * The frequency needs to be greater equal to one.
     *
     * If not otherwise agreed bilaterally between TPP and ASPSP, the frequency is less equal to 4.
     *
     */
    frequencyPerDay: number;
    /**
     * This date is containing the date of the last action on the consent object either through
     *
     * @remarks
     * the XS2A interface or the PSU/ASPSP interface having an impact on the status.
     *
     */
    lastActionDate: Date;
    /**
     * "true", if the consent is for recurring access to the account data.
     *
     * @remarks
     *
     * "false", if the consent is for one access to the account data.
     *
     */
    recurringIndicator: boolean;
    /**
     * This parameter is defining a valid until date (including the mentioned date) for the requested consent.
     *
     * @remarks
     * The content is the local ASPSP date in ISO-Date format, e.g. 2017-10-30.
     *
     * Future dates might get adjusted by ASPSP.
     *
     * If a maximal available date is requested, a date in far future is to be used: "9999-12-31".
     *
     * In both cases the consent object to be retrieved by the get consent request will contain the adjusted date.
     *
     */
    validUntil: Date;
}
