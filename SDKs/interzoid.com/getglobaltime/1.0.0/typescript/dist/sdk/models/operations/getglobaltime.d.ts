import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetglobaltimeRequest extends SpeakeasyBase {
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
    /**
     * Geographic locale to get the current time for
     */
    locale: string;
}
/**
 * Current global time in many forms and related information
 */
export declare class Getglobaltime200ApplicationJSON extends SpeakeasyBase {
    clockTime?: string;
    code?: string;
    credits?: string;
    currentDate?: string;
    currentTime?: string;
    day?: string;
    hour?: string;
    locale?: string;
    minute?: string;
    month?: string;
    monthNumber?: string;
    second?: string;
    timeStamp?: string;
    weekday?: string;
    year?: string;
    zone?: string;
}
export declare class GetglobaltimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Current global time in many forms and related information
     */
    getglobaltime200ApplicationJSONObject?: Getglobaltime200ApplicationJSON;
}
