import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the peering route.
 */
export declare enum ExchangedPeeringRouteTypeEnum {
    DynamicPeeringRoute = "DYNAMIC_PEERING_ROUTE",
    StaticPeeringRoute = "STATIC_PEERING_ROUTE",
    SubnetPeeringRoute = "SUBNET_PEERING_ROUTE"
}
export declare class ExchangedPeeringRoute extends SpeakeasyBase {
    /**
     * The destination range of the route.
     */
    destRange?: string;
    /**
     * True if the peering route has been imported from a peer. The actual import happens if the field networkPeering.importCustomRoutes is true for this network, and networkPeering.exportCustomRoutes is true for the peer network, and the import does not result in a route conflict.
     */
    imported?: boolean;
    /**
     * The region of peering route next hop, only applies to dynamic routes.
     */
    nextHopRegion?: string;
    /**
     * The priority of the peering route.
     */
    priority?: number;
    /**
     * The type of the peering route.
     */
    type?: ExchangedPeeringRouteTypeEnum;
}
