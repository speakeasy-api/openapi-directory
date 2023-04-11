import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for SimulateMaintenanceEvent.
 */
export declare class SimulateMaintenanceEventRequest extends SpeakeasyBase {
    /**
     * The 0-based worker ID. If it is empty, worker ID 0 will be selected for maintenance event simulation. A maintenance event will only be fired on the first specified worker ID. Future implementations may support firing on multiple workers.
     */
    workerIds?: string[];
}
