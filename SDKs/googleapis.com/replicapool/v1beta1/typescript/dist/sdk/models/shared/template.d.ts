import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { HealthCheck } from "./healthcheck";
import { VmParams } from "./vmparams";
/**
 * The template used for creating replicas in the pool.
 */
export declare class Template extends SpeakeasyBase {
    /**
     * An action that gets executed during initialization of the replicas.
     */
    action?: Action;
    /**
     * A list of HTTP Health Checks to configure for this replica pool and all virtual machines in this replica pool.
     */
    healthChecks?: HealthCheck[];
    /**
     * A free-form string describing the version of this template. You can provide any versioning string you would like. For example, version1 or template-v1.
     */
    version?: string;
    /**
     * Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource.
     */
    vmParams?: VmParams;
}
