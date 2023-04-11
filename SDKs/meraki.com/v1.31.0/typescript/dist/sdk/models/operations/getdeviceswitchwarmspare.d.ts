import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceSwitchWarmSpareRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceSwitchWarmSpareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceSwitchWarmSpare200ApplicationJSONObject?: Record<string, any>;
}
