import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config for large response injection fault
 */
export declare class LargeResponseFaultConfig extends SpeakeasyBase {
    /**
     * The size added to the response body in bytes. Added payload will be spaces only.
     */
    additionalRequestSize?: number;
    /**
     * The percentage of requests affected by this fault. Value should be between 0.0 and 1.0
     */
    ratio: number;
}
