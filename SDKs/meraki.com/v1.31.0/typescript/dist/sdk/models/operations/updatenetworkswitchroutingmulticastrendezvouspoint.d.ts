import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody extends SpeakeasyBase {
    /**
     * The IP address of the interface to use
     */
    interfaceIp: string;
    /**
     * 'Any', or the IP address of a multicast group
     */
    multicastGroup: string;
}
export declare class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
    networkId: string;
    rendezvousPointId: string;
}
export declare class UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject?: Record<string, any>;
}
