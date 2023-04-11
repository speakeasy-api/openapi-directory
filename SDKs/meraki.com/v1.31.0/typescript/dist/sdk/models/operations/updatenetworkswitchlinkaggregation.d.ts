import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts extends SpeakeasyBase {
    /**
     * Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").
     */
    portId: string;
    /**
     * Serial number of the switch.
     */
    serial: string;
}
export declare class UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts extends SpeakeasyBase {
    /**
     * Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").
     */
    portId: string;
    /**
     * Profile identifier.
     */
    profile: string;
}
export declare class UpdateNetworkSwitchLinkAggregationRequestBody extends SpeakeasyBase {
    /**
     * Array of switch or stack ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported.
     */
    switchPorts?: UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts[];
    /**
     * Array of switch profile ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported.
     */
    switchProfilePorts?: UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[];
}
export declare class UpdateNetworkSwitchLinkAggregationRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSwitchLinkAggregationRequestBody;
    linkAggregationId: string;
    networkId: string;
}
export declare class UpdateNetworkSwitchLinkAggregationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchLinkAggregation200ApplicationJSONObject?: Record<string, any>;
}
