import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations extends SpeakeasyBase {
    /**
     * Boolean indicating whether this is the default testing destination (true) or not (false). Defaults to false. Only one default is allowed
     */
    default?: boolean;
    /**
     * Description of the testing destination. Optional, defaults to null
     */
    description?: string;
    /**
     * The IP address to test connectivity with
     */
    ip: string;
}
export declare class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody extends SpeakeasyBase {
    /**
     * The list of connectivity monitoring destinations
     */
    destinations?: UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations[];
}
export declare class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody;
    networkId: string;
}
export declare class UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject?: Record<string, any>;
}
