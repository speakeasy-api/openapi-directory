import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The setting used to configure ClientGateways. It is adding routes to the client's routing table after the connection is established.
 */
export declare class DestinationRoute extends SpeakeasyBase {
    /**
     * Required. The network address of the subnet for which the packet is routed to the ClientGateway.
     */
    address?: string;
    /**
     * Required. The network mask of the subnet for which the packet is routed to the ClientGateway.
     */
    netmask?: string;
}
