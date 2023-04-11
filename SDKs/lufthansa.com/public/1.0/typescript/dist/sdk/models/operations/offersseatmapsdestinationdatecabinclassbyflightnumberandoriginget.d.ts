import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Cabin class: 'M', 'E', 'C', 'F'. Some flights have fewer classes (Acceptable values are: "M", "E", "C", "F")
     */
    cabinClass: string;
    /**
     * Departure date (YYYY-MM-DD)
     */
    date: string;
    /**
     * Destination airport. 3-letter IATA airport code (e.g. 'MUC')
     */
    destination: string;
    /**
     * Flight number including carrier code and any suffix (e.g. 'LH2037')
     */
    flightNumber: string;
    /**
     * Departure airport. 3-letter IATA airport code (e.g. 'TXL')
     */
    origin: string;
}
export declare class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse extends SpeakeasyBase {
    contentType: string;
    offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
