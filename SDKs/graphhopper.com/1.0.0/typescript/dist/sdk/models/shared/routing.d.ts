import { SpeakeasyBase } from "../../../internal/utils";
/**
 * In some cases curbside constraints cannot be fulfilled. For example in one-way streets you cannot arrive at a building that is on the left side of the street such that the building is to the right of you (unless you drove the one-way street the wrong/illegal way). You can set the `curbside_strictness` to `soft` to ignore the curbside constraint in such cases or set it to `strict` to get an error response instead. You can also set it to `ignore` to ignore all curbside constraints (this is useful to compare the results with and without constraints without modifying every single address).
 */
export declare enum RoutingCurbsideStrictnessEnum {
    Ignore = "ignore",
    Soft = "soft",
    Strict = "strict"
}
/**
 * specifies the data provider, read more about it [here](#section/Map-Data-and-Routing-Profiles).
 */
export declare enum RoutingNetworkDataProviderEnum {
    Openstreetmap = "openstreetmap",
    Tomtom = "tomtom"
}
export declare enum RoutingSnapPreventionsEnum {
    Motorway = "motorway",
    Trunk = "trunk",
    Bridge = "bridge",
    Ford = "ford",
    Tunnel = "tunnel",
    Ferry = "ferry"
}
/**
 * This contains all routing specific configurations.
 */
export declare class Routing extends SpeakeasyBase {
    /**
     * It lets you specify whether the API should provide you with route geometries for vehicle routes or not. Thus, you do not need to do extra routing to get the polyline for each route.
     */
    calcPoints?: boolean;
    /**
     * indicates whether historical traffic information should be considered
     */
    considerTraffic?: boolean;
    /**
     * In some cases curbside constraints cannot be fulfilled. For example in one-way streets you cannot arrive at a building that is on the left side of the street such that the building is to the right of you (unless you drove the one-way street the wrong/illegal way). You can set the `curbside_strictness` to `soft` to ignore the curbside constraint in such cases or set it to `strict` to get an error response instead. You can also set it to `ignore` to ignore all curbside constraints (this is useful to compare the results with and without constraints without modifying every single address).
     */
    curbsideStrictness?: RoutingCurbsideStrictnessEnum;
    /**
     * indicates whether matrix calculation should fail fast when points cannot be connected
     */
    failFast?: boolean;
    /**
     * specifies the data provider, read more about it [here](#section/Map-Data-and-Routing-Profiles).
     */
    networkDataProvider?: RoutingNetworkDataProviderEnum;
    /**
     * Indicates whether a solution includes snapped waypoints. In contrary to the address coordinate a snapped waypoint is the access point to the (road) network.
     */
    returnSnappedWaypoints?: boolean;
    /**
     * Prevents snapping locations to road links of specified road types, e.g. to motorway.
     */
    snapPreventions?: RoutingSnapPreventionsEnum[];
}
