import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceCellularSimsRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCellularSimsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCellularSims200ApplicationJSONObject?: Record<string, any>;
}
