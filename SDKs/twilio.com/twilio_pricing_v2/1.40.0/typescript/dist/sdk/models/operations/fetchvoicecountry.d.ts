import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchVoiceCountryServerList: readonly ["https://pricing.twilio.com"];
export declare class FetchVoiceCountrySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchVoiceCountryRequest extends SpeakeasyBase {
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the origin-based voice pricing information to fetch.
     */
    isoCountry: string;
}
export declare class FetchVoiceCountryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    pricingV2VoiceVoiceCountryInstance?: shared.PricingV2VoiceVoiceCountryInstance;
}
