import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Number Insight
 */
export declare class CsvNi extends SpeakeasyBase {
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Country of the looked up number.
     */
    country?: string;
    /**
     * Country name of the looked up number.
     */
    countryName?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * Date of the request.
     */
    dateReceived?: Date;
    /**
     * First name of the owner of the looked up number.
     */
    firstName?: string;
    /**
     * Last name of the owner of the looked up number.
     */
    lastName?: string;
    /**
     * Network of the looked up number.
     */
    network?: string;
    /**
     * Network name of the looked up number.
     */
    networkName?: string;
    /**
     * Network type of the looked up number.
     */
    networkType?: string;
    /**
     * Number looked up for this request.
     */
    number?: string;
    /**
     * Is the looked up number ported.
     */
    ported?: string;
    /**
     * Type of Number Insight request.
     */
    productType?: string;
    /**
     * Is the looked up number reachable.
     */
    reachable?: string;
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Response code of the Number Insight request.
     */
    responseCode?: string;
    /**
     * Status of the Number Insight request.
     */
    status?: string;
    /**
     * Total price of the request.
     */
    totalPrice?: number;
    /**
     * Is the looked up number valid.
     */
    valid?: string;
}
