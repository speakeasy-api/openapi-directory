import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config for large request injection fault
 */
export declare class LargeRequestFaultConfig extends SpeakeasyBase {
    /**
     * The size added to the request body in bytes. Added payload will be spaces only.
     */
    additionalRequestSize: number;
    /**
     * The percentage of requests affected by this fault. Value should be between 0.0 and 1.0
     */
    ratio: number;
}
