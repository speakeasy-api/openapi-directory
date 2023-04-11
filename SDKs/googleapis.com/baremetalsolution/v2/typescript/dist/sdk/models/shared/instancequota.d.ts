import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource budget.
 */
export declare class InstanceQuota extends SpeakeasyBase {
    /**
     * Number of machines than can be created for the given location and instance_type.
     */
    availableMachineCount?: number;
    /**
     * The gcp service of the provisioning quota.
     */
    gcpService?: string;
    /**
     * Instance type. Deprecated: use gcp_service.
     */
    instanceType?: string;
    /**
     * Location where the quota applies.
     */
    location?: string;
    /**
     * Output only. The name of the instance quota.
     */
    name?: string;
}
