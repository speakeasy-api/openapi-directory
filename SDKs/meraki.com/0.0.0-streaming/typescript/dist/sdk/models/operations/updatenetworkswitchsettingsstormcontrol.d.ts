import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkSwitchSettingsStormControlRequestBody extends SpeakeasyBase {
    /**
     * Percentage (1 to 99) of total available port bandwidth for broadcast traffic type. Default value 100 percent rate is to clear the configuration.
     */
    broadcastThreshold?: number;
    /**
     * Percentage (1 to 99) of total available port bandwidth for multicast traffic type. Default value 100 percent rate is to clear the configuration.
     */
    multicastThreshold?: number;
    /**
     * Percentage (1 to 99) of total available port bandwidth for unknown unicast (dlf-destination lookup failure) traffic type. Default value 100 percent rate is to clear the configuration.
     */
    unknownUnicastThreshold?: number;
}
export declare class UpdateNetworkSwitchSettingsStormControlRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSwitchSettingsStormControlRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSwitchSettingsStormControlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchSettingsStormControl200ApplicationJSONObject?: Record<string, any>;
}
