import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts extends SpeakeasyBase {
    /**
     * Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").
     */
    portId: string;
    /**
     * Serial number of the switch.
     */
    serial: string;
}
export declare class CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts extends SpeakeasyBase {
    /**
     * Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").
     */
    portId: string;
    /**
     * Profile identifier.
     */
    profile: string;
}
export declare class CreateNetworkSwitchLinkAggregationRequestBody extends SpeakeasyBase {
    /**
     * Array of switch or stack ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.
     */
    switchPorts?: CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts[];
    /**
     * Array of switch profile ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.
     */
    switchProfilePorts?: CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[];
}
export declare class CreateNetworkSwitchLinkAggregationRequest extends SpeakeasyBase {
    requestBody?: CreateNetworkSwitchLinkAggregationRequestBody;
    networkId: string;
}
export declare class CreateNetworkSwitchLinkAggregationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkSwitchLinkAggregation201ApplicationJSONObject?: Record<string, any>;
}
