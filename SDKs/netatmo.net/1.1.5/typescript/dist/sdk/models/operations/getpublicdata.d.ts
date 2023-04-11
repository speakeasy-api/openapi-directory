import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetpublicdataSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare enum GetpublicdataRequiredDataEnum {
    Temperature = "temperature",
    Humidity = "humidity",
    Pressure = "pressure",
    Wind = "wind",
    Rain = "rain"
}
export declare class GetpublicdataRequest extends SpeakeasyBase {
    /**
     * True to exclude stations with abnormal temperature measures. Default is false.
     */
    filter?: boolean;
    /**
     * Latitude of the north east corner of the requested area. -85 <= lat_ne <= 85 and lat_ne>lat_sw
     */
    latNe: number;
    /**
     * Latitude of the south west corner of the requested area. -85 <= lat_sw <= 85
     */
    latSw: number;
    /**
     * Longitude of the north east corner of the requested area. -180 <= lon_ne <= 180 and lon_ne>lon_sw
     */
    lonNe: number;
    /**
     * Longitude of the south west corner of the requested area. -180 <= lon_sw <= 180
     */
    lonSw: number;
    /**
     * To filter stations based on relevant measurements you want (e.g. rain will only return stations with rain gauges). Default is no filter. You can find all measurements available on the Thermostat page.
     */
    requiredData?: GetpublicdataRequiredDataEnum[];
}
export declare class GetpublicdataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naPublicDataResponse?: shared.NAPublicDataResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
