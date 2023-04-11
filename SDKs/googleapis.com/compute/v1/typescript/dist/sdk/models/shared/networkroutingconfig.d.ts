import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The network-wide routing mode to use. If set to REGIONAL, this network's Cloud Routers will only advertise routes with subnets of this network in the same region as the router. If set to GLOBAL, this network's Cloud Routers will advertise routes with all subnets of this network, across regions.
 */
export declare enum NetworkRoutingConfigRoutingModeEnum {
    Global = "GLOBAL",
    Regional = "REGIONAL"
}
/**
 * A routing configuration attached to a network resource. The message includes the list of routers associated with the network, and a flag indicating the type of routing behavior to enforce network-wide.
 */
export declare class NetworkRoutingConfig extends SpeakeasyBase {
    /**
     * The network-wide routing mode to use. If set to REGIONAL, this network's Cloud Routers will only advertise routes with subnets of this network in the same region as the router. If set to GLOBAL, this network's Cloud Routers will advertise routes with all subnets of this network, across regions.
     */
    routingMode?: NetworkRoutingConfigRoutingModeEnum;
}
