import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchRoutingMulticastRendezvousPointsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchRoutingMulticastRendezvousPointsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONArrays?: Record<string, any>[][];
}
