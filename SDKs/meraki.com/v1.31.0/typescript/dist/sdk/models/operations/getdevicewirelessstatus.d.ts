import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceWirelessStatusRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceWirelessStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceWirelessStatus200ApplicationJSONObject?: Record<string, any>;
}
