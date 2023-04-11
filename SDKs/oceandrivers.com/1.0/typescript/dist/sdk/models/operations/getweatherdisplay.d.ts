import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWeatherDisplayRequest extends SpeakeasyBase {
    /**
     * Period of time to get the data latestdata|latesthour|latestday|dailylog
     */
    period: string;
    /**
     * currently: 'cnarenal'|'campastilla' | 'cncg'
     */
    stationName: string;
}
export declare class GetWeatherDisplayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
