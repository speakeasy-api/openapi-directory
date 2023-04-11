import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceManagementInterfaceRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceManagementInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceManagementInterface200ApplicationJSONObject?: Record<string, any>;
}
