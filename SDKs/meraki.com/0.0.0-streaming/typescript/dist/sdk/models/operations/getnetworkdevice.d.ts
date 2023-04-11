import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkDeviceRequest extends SpeakeasyBase {
    networkId: string;
    serial: string;
}
export declare class GetNetworkDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkDevice200ApplicationJSONObject?: Record<string, any>;
}
