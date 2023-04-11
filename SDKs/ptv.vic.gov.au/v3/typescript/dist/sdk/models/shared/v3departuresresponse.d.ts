import { SpeakeasyBase } from "../../../internal/utils";
import { V3Departure } from "./v3departure";
import { V3Direction } from "./v3direction";
import { V3Disruption } from "./v3disruption";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";
import { V3StopModel } from "./v3stopmodel";
/**
 * Service departures from the specified stop for all routes of the specified route type; departures are timetabled and real-time (if applicable).
 */
export declare class V3DeparturesResponse extends SpeakeasyBase {
    /**
     * Timetabled and real-time service departures
     */
    departures?: V3Departure[];
    /**
     * Directions of travel of route
     */
    directions?: Record<string, V3Direction>;
    /**
     * Disruption information applicable to relevant routes or stops
     */
    disruptions?: Record<string, V3Disruption>;
    /**
     * Train lines, tram routes, bus routes, regional coach routes, Night Bus routes
     */
    routes?: Record<string, Record<string, any>>;
    /**
     * Individual trips/services of a route
     */
    runs?: Record<string, V3Run>;
    status?: V3Status;
    /**
     * A train station, tram stop, bus stop, regional coach stop or Night Bus stop
     */
    stops?: Record<string, V3StopModel>;
}
