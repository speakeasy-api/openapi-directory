import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchPhoneNumberServerList: readonly ["https://lookups.twilio.com"];
export declare class FetchPhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchPhoneNumberRequest extends SpeakeasyBase {
    /**
     * The `unique_name` of an Add-on you would like to invoke. Can be the `unique_name` of an Add-on that is installed on your account. You can specify multiple instances of this parameter to invoke multiple Add-ons. For more information about  Add-ons, see the [Add-ons documentation](https://www.twilio.com/docs/add-ons).
     */
    addOns?: string[];
    /**
     * Data specific to the add-on you would like to invoke. The content and format of this value depends on the add-on.
     */
    addOnsData?: Record<string, any>;
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the phone number to fetch. This is used to specify the country when the phone number is provided in a national format.
     */
    countryCode?: string;
    /**
     * The phone number to lookup in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
     */
    phoneNumber: string;
    /**
     * The type of information to return. Can be: `carrier` or `caller-name`. The default is null.  Carrier information costs $0.005 per phone number looked up.  Caller Name information is currently available only in the US and costs $0.01 per phone number looked up.  To retrieve both types on information, specify this parameter twice; once with `carrier` and once with `caller-name` as the value.
     */
    type?: string[];
}
export declare class FetchPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    lookupsV1PhoneNumber?: shared.LookupsV1PhoneNumber;
}
