import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody extends SpeakeasyBase {
    /**
     * The IP address of the interface where the RP needs to be created.
     */
    interfaceIp: string;
    /**
     * 'Any', or the IP address of a multicast group
     */
    multicastGroup: string;
}
export declare class CreateNetworkSwitchRoutingMulticastRendezvousPointRequest extends SpeakeasyBase {
    requestBody: CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
    networkId: string;
}
export declare class CreateNetworkSwitchRoutingMulticastRendezvousPointResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject?: Record<string, any>;
}
