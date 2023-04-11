import { SpeakeasyBase } from "../../../internal/utils";
import { V3Disruption } from "./v3disruption";
import { V3Status } from "./v3status";
import { V3StopOnRoute } from "./v3stoponroute";
/**
 * All stops on the specified route.
 */
export declare class V3StopsOnRouteResponse extends SpeakeasyBase {
    /**
     * Disruption information applicable to relevant routes or stops
     */
    disruptions?: Record<string, V3Disruption>;
    /**
     * GeoPath for the route
     */
    geopath?: Record<string, any>[];
    status?: V3Status;
    /**
     * Train stations, tram stops, bus stops, regional coach stops or Night Bus stops
     */
    stops?: V3StopOnRoute[];
}
