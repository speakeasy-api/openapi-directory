import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetForecastTimeSeriesRequest extends SpeakeasyBase {
    /**
     * optional number of days in string. Will be added to init forecast date
     */
    days?: number;
    /**
     * end date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ
     */
    endtime?: string;
    /**
     * Direct file I want to extract
     */
    entryid?: string;
    /**
     * optional number of hours in string. Will be added to init forecast date
     */
    hours?: number;
    /**
     * initial date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ
     */
    inittime?: string;
    /**
     * latitude for the forecast
     */
    latitude: number;
    /**
     * longitude for the forecast
     */
    longitude: number;
    /**
     *  Comma separated values for the wave parameteres height,direction,period
     */
    wave?: string;
    /**
     *  Comma separated values for the weather parameteres temperature,rain,wind_u,wind_v,gust,pressure,cloud,humidity&wave=height,direction,period
     */
    weather: string;
}
export declare class GetForecastTimeSeriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
