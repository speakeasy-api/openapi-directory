import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
import { RoutePoint } from "./routepoint";
export declare class Route extends SpeakeasyBase {
    /**
     * Array of activities
     */
    activities?: Activity[];
    /**
     * Completion time of route in seconds
     */
    completionTime?: number;
    /**
     * Distance of route in meter
     */
    distance?: number;
    /**
     * Array of route planning points
     */
    points?: RoutePoint[];
    /**
     * Preparation time of route in seconds
     */
    preparationTime?: number;
    /**
     * Service duration of route in seconds
     */
    serviceDuration?: number;
    /**
     * Transport time of route in seconds
     */
    transportTime?: number;
    /**
     * Id of vehicle that operates route
     */
    vehicleId?: string;
    /**
     * Waiting time of route in seconds
     */
    waitingTime?: number;
}
