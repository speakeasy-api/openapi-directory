import { SpeakeasyBase } from "../../../internal/utils";
export declare class BINLookupResponse extends SpeakeasyBase {
    /**
     * The BIN or IIN number
     */
    binNumber: string;
    /**
     * The card brand (e.g. Visa or Mastercard)
     */
    cardBrand: string;
    /**
     * The card category. There are many different card categories the most common card categories are: CLASSIC, BUSINESS, CORPORATE, PLATINUM, PREPAID
     */
    cardCategory: string;
    /**
     * The card type, will always be one of: DEBIT, CREDIT, CHARGE CARD
     */
    cardType: string;
    /**
     * The full country name of the issuer
     */
    country: string;
    /**
     * The ISO 2-letter country code of the issuer
     */
    countryCode: string;
    /**
     * The ISO 3-letter country code of the issuer
     */
    countryCode3: string;
    /**
     * ISO 4217 currency code associated with the country of the issuer
     */
    currencyCode: string;
    /**
     * True if the customers IP is listed on one of our blocklists, see the <a href="http://www.neutrinoapi.com/api/ip-blocklist/">IP Blocklist API</a>
     */
    ipBlocklisted: boolean;
    /**
     * An array of strings indicating which blocklists this IP is listed on
     */
    ipBlocklists: string[];
    /**
     * The city of the customers IP (if detectable)
     */
    ipCity: string;
    /**
     * The country of the customers IP
     */
    ipCountry: string;
    /**
     * The ISO 2-letter country code of the customers IP
     */
    ipCountryCode: string;
    /**
     * The ISO 3-letter country code of the customers IP
     */
    ipCountryCode3: string;
    /**
     * True if the customers IP country matches the BIN country
     */
    ipMatchesBin: boolean;
    /**
     * The region of the customers IP (if detectable)
     */
    ipRegion: string;
    /**
     * Is this a commercial/business use card
     */
    isCommercial: boolean;
    /**
     * Is this a prepaid or prepaid reloadable card
     */
    isPrepaid: boolean;
    /**
     * The card issuer
     */
    issuer: string;
    /**
     * The card issuers phone number
     */
    issuerPhone: string;
    /**
     * The card issuers website
     */
    issuerWebsite: string;
    /**
     * Is this a valid BIN or IIN number
     */
    valid: boolean;
}
