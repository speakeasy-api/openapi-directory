import { SpeakeasyBase } from "../../../internal/utils";
import { V3Direction } from "./v3direction";
import { V3Disruption } from "./v3disruption";
import { V3PatternDeparture } from "./v3patterndeparture";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";
import { V3StoppingPatternStop } from "./v3stoppingpatternstop";
/**
 * The stopping pattern of the specified run_ref and route type. (NOTE: the departure sequence field should be used to sort departures in chronological order, however it is not always N+1 or N-1 of the previous or following departure. e.g 100, 200, 250, 300 instead of 1, 2, 3, 4)
 */
export declare class V3StoppingPattern extends SpeakeasyBase {
    /**
     * Timetabled and real-time service departures
     */
    departures?: V3PatternDeparture[];
    /**
     * Directions of travel of route
     */
    directions?: Record<string, V3Direction>;
    /**
     * Disruption information applicable to relevant routes or stops
     */
    disruptions?: V3Disruption[];
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
    stops?: Record<string, V3StoppingPatternStop>;
}
