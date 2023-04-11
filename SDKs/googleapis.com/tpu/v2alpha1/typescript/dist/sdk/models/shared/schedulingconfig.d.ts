import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sets the scheduling options for this node.
 */
export declare class SchedulingConfig extends SpeakeasyBase {
    /**
     * Defines whether the node is preemptible.
     */
    preemptible?: boolean;
    /**
     * Whether the node is created under a reservation.
     */
    reserved?: boolean;
}
