import { SpeakeasyBase } from "../../../internal/utils";
import { V3ResultOutlet } from "./v3resultoutlet";
import { V3ResultRoute } from "./v3resultroute";
import { V3ResultStop } from "./v3resultstop";
import { V3Status } from "./v3status";
/**
 * Stops, routes and myki ticket outlets that contain the search term (note: stops and routes are ordered by route_type by default).
 */
export declare class V3SearchResult extends SpeakeasyBase {
    /**
     * myki ticket outlets
     */
    outlets?: V3ResultOutlet[];
    /**
     * Train lines, tram routes, bus routes, regional coach routes, Night Bus routes
     */
    routes?: V3ResultRoute[];
    status?: V3Status;
    /**
     * Train stations, tram stops, bus stops, regional coach stops or Night Bus stops
     */
    stops?: V3ResultStop[];
}
