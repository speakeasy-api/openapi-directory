import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationRoute } from "./destinationroute";
/**
 * Required. Immutable. The transport protocol used between the client and the server.
 */
export declare enum ConfigTransportProtocolEnum {
    TransportProtocolUnspecified = "TRANSPORT_PROTOCOL_UNSPECIFIED",
    Tcp = "TCP"
}
/**
 * The basic ingress config for ClientGateways.
 */
export declare class Config extends SpeakeasyBase {
    /**
     * Required. The settings used to configure basic ClientGateways.
     */
    destinationRoutes?: DestinationRoute[];
    /**
     * Required. Immutable. The transport protocol used between the client and the server.
     */
    transportProtocol?: ConfigTransportProtocolEnum;
}
