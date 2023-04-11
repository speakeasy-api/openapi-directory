import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OffersLoungesByLocationGetSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class OffersLoungesByLocationGetRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Cabin class: 'M', 'E', 'C', 'F' (Acceptable values are: "", "M", "E", "C", "F")
     */
    cabinClass?: string;
    /**
     * Language code.
     */
    lang?: string;
    /**
     * 3-leter IATA airport or city code (e.g. 'ZRH')
     */
    location: string;
    /**
     * Frequent flyer level ('FTL', 'SGC', 'SEN', 'HON') (Acceptable values are: "", "FTL", "SGC", "SEN", "HON")
     */
    tierCode?: string;
}
export declare class OffersLoungesByLocationGetResponse extends SpeakeasyBase {
    contentType: string;
    offersLoungesByLocationGet200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
