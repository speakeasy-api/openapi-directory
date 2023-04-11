import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LowestFaresSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class LowestFaresRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
     */
    cabinClass?: string;
    /**
     * Search fares from these carriers' catalogues e.g. '4U;OS;LH'
     */
    catalogues: string;
    /**
     * Country code of requestor. 2-letter ISO 3166-1 country code (e.g. 'de')
     */
    country?: string;
    /**
     * Journey destination. 3-letter IATA airport code e.g. 'MAD'
     */
    destination: string;
    /**
     * Fare family: basic, smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")
     */
    fareFamily?: string;
    /**
     * Journey origin. 3-letter IATA aiport code e.g. 'FRA'
     */
    origin: string;
    /**
     * Journey return-date - mandatory for OS and LH searches YYYY-MM-DD
     */
    returnDate?: string;
    /**
     * Journey travel-date YYYY-MM-DD
     */
    travelDate: string;
    /**
     * Type and number of travelers e.g. '(adult=2;child=2;infant=1)'. For LH only (adult=1) possible
     */
    travelers?: string;
}
export declare class LowestFaresResponse extends SpeakeasyBase {
    contentType: string;
    lowestFares200ApplicationJSONString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
