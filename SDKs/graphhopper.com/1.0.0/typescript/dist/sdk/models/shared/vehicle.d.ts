import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
export declare class Vehicle extends SpeakeasyBase {
    break?: any;
    /**
     * Earliest start of vehicle in seconds. It is recommended to use the unix timestamp.
     */
    earliestStart?: number;
    endAddress?: Address;
    /**
     * Latest end of vehicle in seconds, i.e. the time the vehicle needs to be at its end location at latest.
     */
    latestEnd?: number;
    /**
     * Specifies the maximum number of activities a vehicle can conduct.
     */
    maxActivities?: number;
    /**
     * Specifies the maximum distance (in meters) a vehicle can go.
     */
    maxDistance?: number;
    /**
     * Specifies the maximum drive time (in seconds) a vehicle/driver can go, i.e. the maximum time on the road (service and waiting times are not included here)
     */
    maxDrivingTime?: number;
    /**
     * Specifies the maximum number of jobs a vehicle can load.
     */
    maxJobs?: number;
    /**
     * Specifies the minimum number of jobs a vehicle should load. This is a soft constraint, i.e. if it is not possible to fulfill “min_jobs”, we will still try to get as close as possible to this constraint.
     */
    minJobs?: number;
    /**
     * Indicates whether a vehicle should be moved even though it has not been assigned any jobs.
     */
    moveToEndAddress?: boolean;
    /**
     * If it is false, the algorithm decides where to end the vehicle route. It ends in one of your customers' locations. The end is chosen such that it contributes to the overall objective function, e.g. min transport_time. If it is true, you can either specify a specific end location (which is then regarded as end depot) or you can leave it and the driver returns to its start location.
     */
    returnToDepot?: boolean;
    /**
     * Array of skills, i.e. array of string (not case sensitive).
     */
    skills?: string[];
    startAddress: Address;
    /**
     * The type ID assigns a vehicle type to this vehicle. You can specify types in the array of vehicle types. If you omit the type ID, the default type is used. The default type is a `car` with a capacity of 0.
     */
    typeId?: string;
    /**
     * Specifies the ID of the vehicle. Ids must be unique, i.e. if there are two vehicles with the same ID, an error is returned.
     */
    vehicleId: string;
}
