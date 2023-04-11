import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PriceOffersSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class PriceOffersRequest extends SpeakeasyBase {
    /**
     * Departure date in local time (YYYY-MM-DD)
     */
    departureDate: string;
    /**
     * Destination city. 3-letter IATA city code
     */
    destination: string;
    /**
     * Departure city. 3-letter IATA city code
     */
    origin: string;
    /**
     * Return date in local time (YYYY-MM-DD)
     */
    returnDate: string;
    /**
     * Optional parameter.
     */
    service?: string;
}
export declare class PriceOffersResponse extends SpeakeasyBase {
    contentType: string;
    priceOffers200ApplicationJSONString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
