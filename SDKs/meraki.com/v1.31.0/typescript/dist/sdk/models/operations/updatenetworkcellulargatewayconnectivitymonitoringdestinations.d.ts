import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations extends SpeakeasyBase {
    /**
     * Boolean indicating whether this is the default testing destination (true) or not (false). Defaults to false. Only one default is allowed
     */
    default?: boolean;
    /**
     * Description of the testing destination. Optional, defaults to an empty string
     */
    description?: string;
    /**
     * The IP address to test connectivity with
     */
    ip: string;
}
export declare class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody extends SpeakeasyBase {
    /**
     * The list of connectivity monitoring destinations
     */
    destinations?: UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations[];
}
export declare class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody;
    networkId: string;
}
export declare class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject?: Record<string, any>;
}
