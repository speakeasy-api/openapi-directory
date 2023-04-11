import { SpeakeasyBase } from "../../../internal/utils";
import { Detail } from "./detail";
import { Route } from "./route";
export declare class SolutionUnassigned extends SpeakeasyBase {
    /**
     * An array of ids of unassigned breaks
     */
    breaks?: string[];
    /**
     * An array of details, i.e. reason for unassigned services or shipments
     */
    details?: Detail[];
    /**
     * An array of ids of unassigned services
     */
    services?: string[];
    /**
     * An array of ids of unassigned shipments
     */
    shipments?: string[];
}
/**
 * Only available if status field indicates `finished`.
 */
export declare class Solution extends SpeakeasyBase {
    /**
     * Overall completion time in seconds, i.e. the sum of each routes/drivers operation time.
     */
    completionTime?: number;
    costs?: number;
    /**
     * Overall distance travelled in meter, i.e. the sum of each route's transport distance
     */
    distance?: number;
    /**
     * Operation time of longest route in seconds.
     */
    maxOperationTime?: number;
    /**
     * Number of jobs that could not be assigned to final solution.
     */
    noUnassigned?: number;
    /**
     * Number of employed vehicles.
     */
    noVehicles?: number;
    /**
     * Overall preparation time in seconds.
     */
    preparationTime?: number;
    /**
     * An array of routes
     */
    routes?: Route[];
    /**
     * Overall service time in seconds.
     */
    serviceDuration?: number;
    /**
     * Use `transport_time` instead.
     */
    time?: number;
    /**
     * Overall time travelled in seconds, i.e. the sum of each route's transport time.
     */
    transportTime?: number;
    unassigned?: SolutionUnassigned;
    /**
     * Overall waiting time in seconds.
     */
    waitingTime?: number;
}
