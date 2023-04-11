import { SpeakeasyBase } from "../../../internal/utils";
import { Algorithm } from "./algorithm";
import { Configuration } from "./configuration";
import { CostMatrix } from "./costmatrix";
import { Objective } from "./objective";
import { Service } from "./service";
import { Shipment } from "./shipment";
import { Vehicle } from "./vehicle";
import { VehicleType } from "./vehicletype";
/**
 * The request that contains the vehicle routing problem to be solved.
 */
export declare class Request extends SpeakeasyBase {
    /**
     * Use `objectives` instead.
     */
    algorithm?: Algorithm;
    /**
     * Specifies general configurations that are taken into account when solving the vehicle routing problem.
     */
    configuration?: Configuration;
    /**
     * Specifies your own tranport time and distance matrices.
     */
    costMatrices?: CostMatrix[];
    /**
     * Specifies an objective function. The vehicle routing problem is solved in such a way that this objective function is minimized.
     */
    objectives?: Objective[];
    /**
     * Defines additional relationships between orders.
     */
    relations?: any[];
    /**
     * Specifies the orders of the type "service". These are, for example, pick-ups, deliveries or other stops that are to be approached by the specified vehicles. Each of these orders contains only one location.
     */
    services?: Service[];
    /**
     * Specifies the available shipments. Each shipment contains a pickup and a delivery stop, which must be processed one after the other.
     */
    shipments?: Shipment[];
    /**
     * Specifies the available vehicle types. These types can be assigned to vehicles.
     */
    vehicleTypes?: VehicleType[];
    /**
     * Specifies the available vehicles.
     */
    vehicles?: Vehicle[];
}
