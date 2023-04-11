import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAvailablePhoneNumberCountryServerList: readonly ["https://api.twilio.com"];
export declare class FetchAvailablePhoneNumberCountrySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAvailablePhoneNumberCountryRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the available phone number Country resource.
     */
    accountSid: string;
    /**
     * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country to fetch available phone number information about.
     */
    countryCode: string;
}
export declare class FetchAvailablePhoneNumberCountryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountAvailablePhoneNumberCountry?: shared.ApiV2010AccountAvailablePhoneNumberCountry;
}
