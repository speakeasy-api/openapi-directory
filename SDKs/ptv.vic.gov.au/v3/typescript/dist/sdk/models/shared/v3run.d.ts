import { SpeakeasyBase } from "../../../internal/utils";
import { V3VehicleDescriptor } from "./v3vehicledescriptor";
import { V3VehiclePosition } from "./v3vehicleposition";
export declare class V3Run extends SpeakeasyBase {
    /**
     * Name of destination of run
     */
    destinationName?: string;
    /**
     * Direction of travel identifier
     */
    directionId?: number;
    /**
     * The number of remaining skipped/express stations for the run/service from a stop
     */
    expressStopCount?: number;
    /**
     * stop_id of final stop of run
     */
    finalStopId?: number;
    /**
     * Geopath of the route
     */
    geopath?: Record<string, any>[];
    /**
     * Route identifier
     */
    routeId?: number;
    /**
     * Transport mode identifier
     */
    routeType?: number;
    /**
     * Numeric trip/service run identifier. Defaults to -1 when run identifier is Alphanumeric
     */
    runId?: number;
    /**
     * Alphanumeric trip/service run identifier
     */
    runRef?: string;
    /**
     * Chronological sequence of the trip/service run on the route in direction. Order ascendingly by this field to get chronological order (earliest first) of runs with the same route_id and direction_id.
     */
    runSequence?: number;
    /**
     * Status of metropolitan train run; returns "scheduled" for other modes
     */
    status?: string;
    vehicleDescriptor?: V3VehicleDescriptor;
    vehiclePosition?: V3VehiclePosition;
}
