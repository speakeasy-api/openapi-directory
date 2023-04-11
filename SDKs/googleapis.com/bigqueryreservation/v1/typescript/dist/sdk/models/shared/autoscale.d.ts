import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Auto scaling settings.
 */
export declare class Autoscale extends SpeakeasyBase {
    /**
     * Output only. The slot capacity added to this reservation when autoscale happens. Will be between [0, max_slots].
     */
    currentSlots?: string;
    /**
     * Number of slots to be scaled when needed.
     */
    maxSlots?: string;
}
/**
 * Auto scaling settings.
 */
export declare class AutoscaleInput extends SpeakeasyBase {
    /**
     * Number of slots to be scaled when needed.
     */
    maxSlots?: string;
}
