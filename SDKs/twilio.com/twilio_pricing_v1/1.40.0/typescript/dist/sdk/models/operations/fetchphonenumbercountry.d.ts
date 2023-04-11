import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchPhoneNumberCountryServerList: readonly ["https://pricing.twilio.com"];
export declare class FetchPhoneNumberCountrySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchPhoneNumberCountryRequest extends SpeakeasyBase {
    /**
     * The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the pricing information to fetch.
     */
    isoCountry: string;
}
export declare class FetchPhoneNumberCountryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    pricingV1PhoneNumberPhoneNumberCountryInstance?: shared.PricingV1PhoneNumberPhoneNumberCountryInstance;
}
