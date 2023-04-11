import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDevice200ApplicationJSONObject?: Record<string, any>;
}
