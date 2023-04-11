import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAccess } from "./accountaccess";
/**
 * Content of the body of a consent request.
 *
 * @remarks
 *
 */
export declare class Consents extends SpeakeasyBase {
    /**
     * Requested access services for a consent.
     *
     * @remarks
     *
     */
    access: AccountAccess;
    /**
     * If "true" indicates that a payment initiation service will be addressed in the same "session".
     *
     * @remarks
     *
     */
    combinedServiceIndicator: boolean;
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
