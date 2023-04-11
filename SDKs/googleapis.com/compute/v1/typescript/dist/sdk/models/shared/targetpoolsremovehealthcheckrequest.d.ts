import { SpeakeasyBase } from "../../../internal/utils";
import { HealthCheckReference } from "./healthcheckreference";
export declare class TargetPoolsRemoveHealthCheckRequest extends SpeakeasyBase {
    /**
     * Health check URL to be removed. This can be a full or valid partial URL. For example, the following are valid URLs: - https://www.googleapis.com/compute/beta/projects/project /global/httpHealthChecks/health-check - projects/project/global/httpHealthChecks/health-check - global/httpHealthChecks/health-check
     */
    healthChecks?: HealthCheckReference[];
}
