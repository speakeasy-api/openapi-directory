import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A full or valid partial URL to a health check service. For example, the following are valid URLs: - https://www.googleapis.com/compute/beta/projects/project-id/regions/us-west1/healthCheckServices/health-check-service - projects/project-id/regions/us-west1/healthCheckServices/health-check-service - regions/us-west1/healthCheckServices/health-check-service
 */
export declare class HealthCheckServiceReference extends SpeakeasyBase {
    healthCheckService?: string;
}
