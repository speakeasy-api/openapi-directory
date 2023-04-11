import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkSwitchStormControlRequestBody extends SpeakeasyBase {
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
export declare class UpdateNetworkSwitchStormControlRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSwitchStormControlRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSwitchStormControlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchStormControl200ApplicationJSONObject?: Record<string, any>;
}
