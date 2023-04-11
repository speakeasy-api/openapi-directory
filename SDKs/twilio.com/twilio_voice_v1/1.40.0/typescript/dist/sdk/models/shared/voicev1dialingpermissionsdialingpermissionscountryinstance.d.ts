import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class VoiceV1DialingPermissionsDialingPermissionsCountryInstance extends SpeakeasyBase {
    /**
     * The name of the continent in which the country is located.
     */
    continent?: string;
    /**
     * The E.164 assigned [country codes(s)](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html)
     */
    countryCodes?: string[];
    /**
     * Whether dialing to high-risk special services numbers is enabled. These prefixes include number ranges allocated by the country and include premium numbers, special services, shared cost, and others
     */
    highRiskSpecialNumbersEnabled?: boolean;
    /**
     * Whether dialing to high-risk [toll fraud](https://www.twilio.com/learn/voice-and-video/toll-fraud) numbers is enabled. These prefixes include narrow number ranges that have a high-risk of international revenue sharing fraud (IRSF) attacks, also known as [toll fraud](https://www.twilio.com/learn/voice-and-video/toll-fraud). These prefixes are collected from anti-fraud databases and verified by analyzing calls on our network. These prefixes are not available for download and are updated frequently
     */
    highRiskTollfraudNumbersEnabled?: boolean;
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     */
    isoCode?: string;
    /**
     * A list of URLs related to this resource.
     */
    links?: Record<string, any>;
    /**
     * Whether dialing to low-risk numbers is enabled.
     */
    lowRiskNumbersEnabled?: boolean;
    /**
     * The name of the country.
     */
    name?: string;
    /**
     * The absolute URL of this resource.
     */
    url?: string;
}
