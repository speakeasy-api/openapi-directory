import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Verify
 */
export declare class CsvVerify extends SpeakeasyBase {
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Country where the request was sent.
     */
    country?: string;
    /**
     * Country name where the request was sent.
     */
    countryName?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * Date when the request was finalized.
     */
    dateFinalized?: Date;
    /**
     * Date of the request.
     */
    dateReceived?: Date;
    /**
     * Estimated price of the verify request.
     */
    estimatedPrice?: string;
    /**
     * Date of the first verify event.
     */
    firstEventDate?: Date;
    /**
     * Request from this number.
     */
    from?: string;
    /**
     * Date of the last verify event.
     */
    lastEventDate?: Date;
    /**
     * Locale used for the TTS.
     */
    locale?: string;
    /**
     * Network used to send the request.
     */
    network?: string;
    /**
     * Name of the network used to send the request.
     */
    networkName?: string;
    /**
     * Type of phone number to which requests are sent.
     */
    numberType?: string;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * Pricing model used for this request.
     */
    pricingModel?: string;
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Number of sms sent for this verify request.
     */
    smsEventCount?: number;
    /**
     * Request to this number.
     */
    to?: string;
    /**
     * Number of tts sent for this verify request.
     */
    ttsEventCount?: number;
    /**
     * Status of the verify request.
     */
    verifyStatus?: string;
}
