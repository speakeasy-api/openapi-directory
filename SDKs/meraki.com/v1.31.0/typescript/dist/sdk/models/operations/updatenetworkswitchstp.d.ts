import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkSwitchStpRequestBodyStpBridgePriority extends SpeakeasyBase {
    /**
     * List of stack IDs
     */
    stacks?: string[];
    /**
     * STP priority for switch, stacks, or switch profiles
     */
    stpPriority: number;
    /**
     * List of switch profile IDs
     */
    switchProfiles?: string[];
    /**
     * List of switch serial numbers
     */
    switches?: string[];
}
export declare class UpdateNetworkSwitchStpRequestBody extends SpeakeasyBase {
    /**
     * The spanning tree protocol status in network
     */
    rstpEnabled?: boolean;
    /**
     * STP bridge priority for switches/stacks or switch profiles. An empty array will clear the STP bridge priority settings.
     */
    stpBridgePriority?: UpdateNetworkSwitchStpRequestBodyStpBridgePriority[];
}
export declare class UpdateNetworkSwitchStpRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSwitchStpRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSwitchStpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchStp200ApplicationJSONObject?: Record<string, any>;
}
