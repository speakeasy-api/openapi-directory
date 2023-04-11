import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject?: Record<string, any>;
}
