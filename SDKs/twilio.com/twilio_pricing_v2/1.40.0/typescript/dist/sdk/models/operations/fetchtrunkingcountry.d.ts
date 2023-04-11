import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTrunkingCountryServerList: readonly ["https://pricing.twilio.com"];
export declare class FetchTrunkingCountrySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTrunkingCountryRequest extends SpeakeasyBase {
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the origin-based voice pricing information to fetch.
     */
    isoCountry: string;
}
export declare class FetchTrunkingCountryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    pricingV2TrunkingCountryInstance?: shared.PricingV2TrunkingCountryInstance;
}
