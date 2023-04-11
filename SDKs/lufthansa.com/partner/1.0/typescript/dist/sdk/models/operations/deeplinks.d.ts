import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeepLinksSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class DeepLinksRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")
     */
    cabinClass?: string;
    /**
     * Carrier for which the deep link will be created (e.g. 'LH')
     */
    catalogues: string;
    /**
     * 2-letter ISO 3166-1 country code
     */
    country: string;
    /**
     * Journey destination. 3-letter IATA airport or city code (e.g. 'MAD')
     */
    destination?: string;
    /**
     * Journey destination airport or city name (e.g. 'madrid')
     */
    destinationName?: string;
    /**
     * Deep link encryption-key
     */
    encryptionKey?: string;
    /**
     * Travel fare (e.g. '1341.45')
     */
    fare?: string;
    /**
     * Fare currency (e.g. 'EUR')
     */
    fareCurrency?: string;
    /**
     * 2-letter ISO 3166-1 language code
     */
    lang: string;
    /**
     * Travel net fare. Total fare less taxes and charges (e.g. '1140')
     */
    netFare?: string;
    /**
     * Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')
     */
    origin?: string;
    /**
     * Journey origin airport or city name (e.g. 'frankfurt')
     */
    originName?: string;
    /**
     * Outbound flight segments in the sequence of travel (e.g. 'LH096;LH480')
     */
    outboundSegments?: string;
    /**
     * Deep link partner id (e.g. '1247')
     */
    partnerid?: string;
    /**
     * Journey return-date (YYYY-MM-DD)
     */
    returnDate?: string;
    /**
     * Flight segments in the sequence of travel (e.g. 'LH7465;LH431')
     */
    returnSegments?: string;
    /**
     * Deep link tracking ID
     */
    trackingid: string;
    /**
     * Journey travel-date (YYYY-MM-DD)
     */
    travelDate?: string;
    /**
     * Type and number of travelers (e.g. '(adult=2;child=2;infant=1)')
     */
    travelers?: string;
}
export declare class DeepLinksResponse extends SpeakeasyBase {
    contentType: string;
    deepLinks200ApplicationJSONString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
