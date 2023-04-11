import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceCameraSenseRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraSenseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCameraSense200ApplicationJSONObject?: Record<string, any>;
}
