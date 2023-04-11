import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkDeviceUplinkRequest extends SpeakeasyBase {
    networkId: string;
    serial: string;
}
export declare class GetNetworkDeviceUplinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkDeviceUplink200ApplicationJSONObjects?: Record<string, any>[];
}
