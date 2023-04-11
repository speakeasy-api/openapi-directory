import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Time window specified for hourly operations.
 */
export declare class ResourcePolicyHourlyCycle extends SpeakeasyBase {
    /**
     * [Output only] Duration of the time window, automatically chosen to be smallest possible in the given scenario.
     */
    duration?: string;
    /**
     * Defines a schedule with units measured in hours. The value determines how many hours pass between the start of each cycle.
     */
    hoursInCycle?: number;
    /**
     * Time within the window to start the operations. It must be in format "HH:MM", where HH : [00-23] and MM : [00-00] GMT.
     */
    startTime?: string;
}
