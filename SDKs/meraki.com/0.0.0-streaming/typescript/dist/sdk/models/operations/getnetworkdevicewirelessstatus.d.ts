import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkDeviceWirelessStatusRequest extends SpeakeasyBase {
    networkId: string;
    serial: string;
}
export declare class GetNetworkDeviceWirelessStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkDeviceWirelessStatus200ApplicationJSONObject?: Record<string, any>;
}
