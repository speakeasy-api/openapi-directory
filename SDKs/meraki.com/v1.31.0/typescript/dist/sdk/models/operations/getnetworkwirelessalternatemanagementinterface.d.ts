import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkWirelessAlternateManagementInterfaceRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkWirelessAlternateManagementInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessAlternateManagementInterface200ApplicationJSONObject?: Record<string, any>;
}
