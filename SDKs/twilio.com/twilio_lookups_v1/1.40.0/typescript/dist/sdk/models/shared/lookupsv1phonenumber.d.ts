import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class LookupsV1PhoneNumber extends SpeakeasyBase {
    /**
     * A JSON string with the results of the Add-ons you specified in the `add_ons` parameters. For the format of the object, see [Using Add-ons](https://www.twilio.com/docs/add-ons).
     */
    addOns?: any;
    /**
     * The name of the phone number's owner. If `null`, that information was not available.
     */
    callerName?: any;
    /**
     * The telecom company that provides the phone number.
     */
    carrier?: any;
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for the phone number.
     */
    countryCode?: string;
    /**
     * The phone number, in national format.
     */
    nationalFormat?: string;
    /**
     * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
     */
    phoneNumber?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
