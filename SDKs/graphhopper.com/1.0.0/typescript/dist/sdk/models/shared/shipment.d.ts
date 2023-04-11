import { SpeakeasyBase } from "../../../internal/utils";
import { Stop } from "./stop";
export declare class Shipment extends SpeakeasyBase {
    /**
     * Specifies an array of allowed vehicles, i.e. array of vehicle ids. For example, if this shipment can only be conducted EITHER by "technician_peter" OR "technician_stefan" specify this as follows: ["technician_peter","technician_stefan"].
     */
    allowedVehicles?: string[];
    delivery: Stop;
    /**
     * Specifies an array of disallowed vehicles, i.e. array of vehicle ids.
     */
    disallowedVehicles?: string[];
    /**
     * Specifies the id of the shipment. Ids need to be unique so there must not be two services/shipments with the same id.
     */
    id: string;
    /**
     * Specifies the maximum time in seconds a shipment can stay in the vehicle.
     */
    maxTimeInVehicle?: number;
    /**
     * Meaningful name for shipment, e.g. "pickup and deliver pizza to Peter".
     */
    name?: string;
    pickup: Stop;
    /**
     * Specifies the priority. Can be 1 = high priority to 10 = low priority. Often there are more services/shipments than the available vehicle fleet can handle. Then you can set priorities to differentiate high priority tasks from those that could be left unassigned. I.e. the lower the priority the earlier these tasks are omitted in the solution.
     */
    priority?: number;
    /**
     * Specifies an array of required skills, i.e. array of string (not case sensitive). For example, if this shipment needs to be conducted by a technician having a `drilling_machine` and a `screw_driver` then specify the array as follows: `["drilling_machine","screw_driver"]`. This means that the service can only be done by a vehicle (technician) that has the skills `drilling_machine` AND `screw_driver` in its skill array. Otherwise it remains unassigned.
     */
    requiredSkills?: string[];
    /**
     * Size can have multiple dimensions and should be in line with the capacity dimension array of the vehicle type. For example, if the item that needs to be delivered has two size dimension, volume and weight, then specify it as follow [ 20, 5 ] assuming a volume of 20 and a weight of 5.
     */
    size?: number[];
}
