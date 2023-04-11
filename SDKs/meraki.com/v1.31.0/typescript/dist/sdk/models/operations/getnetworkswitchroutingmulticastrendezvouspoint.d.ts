import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchRoutingMulticastRendezvousPointRequest extends SpeakeasyBase {
    networkId: string;
    rendezvousPointId: string;
}
export declare class GetNetworkSwitchRoutingMulticastRendezvousPointResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject?: Record<string, any>;
}
