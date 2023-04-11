import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BestFaresSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class BestFaresRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
     */
    cabinClass?: string;
    /**
     * Search fares from these carriers' catalogues (e.g. '4U;OS;LH')
     */
    catalogues: string;
    /**
     * Country code of requestor. 2-letter ISO 3166-1 country code (e.g. 'de')
     */
    country?: string;
    /**
     * Journey destination. 3-letter IATA airport code (e.g. 'MAD')
     */
    destination: string;
    /**
     * Fare family: basic, smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")
     */
    fareFamily?: string;
    /**
     * Journey origin. 3-letter IATA airport code (e.g. 'FRA')
     */
    origin: string;
    /**
     * Fare range: 'byday' or 'bymonth' (Acceptable values are: "byday", "bymonth")
     */
    range: string;
    /**
     * Austrian Airlines only - specify the web tracking id to be used in OS Deep link.
     */
    trackingid?: string;
    /**
     * Journey travel-date (YYYY-MM-DD)
     */
    travelDate: string;
    /**
     * Trip duration in days (e.g. '7')
     */
    tripDuration: string;
}
export declare class BestFaresResponse extends SpeakeasyBase {
    bestFares200ApplicationJSONString?: string;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
