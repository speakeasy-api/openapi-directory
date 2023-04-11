import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SeatDetailsSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class SeatDetailsRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Aircraft type. 3-character IATA equipment code
     */
    aircraftCode: string;
    /**
     * Cabin class: M, E, C, F (Acceptable values are: "", "M", "E", "C", "F")
     */
    cabinCode: string;
    /**
     * 2-letter ISO 3166-1 language code
     */
    lang?: string;
}
export declare class SeatDetailsResponse extends SpeakeasyBase {
    contentType: string;
    seatDetails200ApplicationJSONString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
