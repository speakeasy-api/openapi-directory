import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FaresSubscriptionsSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class FaresSubscriptionsRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
     */
    cabinClass: string;
    /**
     * 2-letter ISO 3166-1 country code
     */
    country?: string;
    /**
     * Journey destination. 3-letter IATA airport code (e.g. 'MAD')
     */
    destination: string;
    /**
     * Email Address')
     */
    email: string;
    /**
     * 2-letter ISO 3166-1 language code
     */
    lang: string;
    /**
     * Journey origin. 3-leter IATA airport code (e.g. 'FRA')
     */
    origin: string;
    /**
     * Tracking parameter
     */
    trackingid?: string;
    /**
     * Trip duration in days (e.g. '7')
     */
    tripDuration: string;
}
export declare class FaresSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    faresSubscriptions200ApplicationJSONString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
