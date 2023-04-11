import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchMessagingCountryServerList: readonly ["https://pricing.twilio.com"];
export declare class FetchMessagingCountrySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchMessagingCountryRequest extends SpeakeasyBase {
    /**
     * The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the pricing information to fetch.
     */
    isoCountry: string;
}
export declare class FetchMessagingCountryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    pricingV1MessagingMessagingCountryInstance?: shared.PricingV1MessagingMessagingCountryInstance;
}
