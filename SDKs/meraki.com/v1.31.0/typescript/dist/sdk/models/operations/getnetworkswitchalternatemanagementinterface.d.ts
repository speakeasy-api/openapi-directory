import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchAlternateManagementInterfaceRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchAlternateManagementInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchAlternateManagementInterface200ApplicationJSONObject?: Record<string, any>;
}
