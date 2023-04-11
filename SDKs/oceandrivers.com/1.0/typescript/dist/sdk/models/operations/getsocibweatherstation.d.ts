import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSocibWeatherStationRequest extends SpeakeasyBase {
    /**
     * Period of time to get the data. Options: lastdata lasthour lastday
     */
    period: string;
    /**
     * station name currently: boyaenderrocat | playadepalma
     */
    stationName: string;
}
export declare class GetSocibWeatherStationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
