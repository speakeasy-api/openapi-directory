import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAemetStationRequest extends SpeakeasyBase {
    /**
     * Period of time to get the data. Options: lastdata lastday
     */
    period: string;
    /**
     * station name currently: aeropuertopalma | caboblanco
     */
    stationName: string;
}
export declare class GetAemetStationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
