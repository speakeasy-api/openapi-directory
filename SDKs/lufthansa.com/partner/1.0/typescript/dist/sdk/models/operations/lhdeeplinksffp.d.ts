import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LHDeepLinksFFPSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class LHDeepLinksFFPRequest extends SpeakeasyBase {
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
    destination: string;
    /**
     * Deep link encryption-key
     */
    encryptionKey?: string;
    /**
     * 2-letter ISO 3166-1 language code
     */
    lang: string;
    /**
     * Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')
     */
    origin: string;
    /**
     * Deep link partner id (e.g. '1247')
     */
    partnerid?: string;
    /**
     * Journey return-date (YYYY-MM-DD)
     */
    returnDate?: string;
    /**
     * Deep link tracking ID
     */
    trackingid: string;
    /**
     * Journey travel-date (YYYY-MM-DD)
     */
    travelDate: string;
    /**
     * Type and number of travelers (e.g. '(adult=2;child=2;infant=1)')
     */
    travelers?: string;
}
export declare class LHDeepLinksFFPResponse extends SpeakeasyBase {
    contentType: string;
    lhDeepLinksFFP200ApplicationJSONString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
