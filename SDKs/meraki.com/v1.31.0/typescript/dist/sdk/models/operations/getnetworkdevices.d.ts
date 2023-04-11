import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkDevicesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkDevices200ApplicationJSONObjects?: Record<string, any>[];
}
