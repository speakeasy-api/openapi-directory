import { SpeakeasyBase } from "../../../internal/utils";
import { HealthCheckReference } from "./healthcheckreference";
export declare class TargetPoolsAddHealthCheckRequest extends SpeakeasyBase {
    /**
     * The HttpHealthCheck to add to the target pool.
     */
    healthChecks?: HealthCheckReference[];
}
