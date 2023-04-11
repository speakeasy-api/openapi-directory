import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A full or valid partial URL to a health check. For example, the following are valid URLs: - https://www.googleapis.com/compute/beta/projects/project-id/global/httpHealthChecks/health-check - projects/project-id/global/httpHealthChecks/health-check - global/httpHealthChecks/health-check
 */
export declare class HealthCheckReference extends SpeakeasyBase {
    healthCheck?: string;
}
