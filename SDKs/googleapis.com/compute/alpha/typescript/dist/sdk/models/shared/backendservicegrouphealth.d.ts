import { SpeakeasyBase } from "../../../internal/utils";
import { HealthStatus } from "./healthstatus";
/**
 * Successful response
 */
export declare class BackendServiceGroupHealth extends SpeakeasyBase {
    /**
     * Metadata defined as annotations on the network endpoint group.
     */
    annotations?: Record<string, string>;
    /**
     * Health state of the backend instances or endpoints in requested instance or network endpoint group, determined based on configured health checks.
     */
    healthStatus?: HealthStatus[];
    /**
     * [Output Only] Type of resource. Always compute#backendServiceGroupHealth for the health of backend services.
     */
    kind?: string;
}
