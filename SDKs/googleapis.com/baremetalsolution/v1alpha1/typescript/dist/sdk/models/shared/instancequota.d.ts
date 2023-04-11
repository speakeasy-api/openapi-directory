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
     * Instance type.
     */
    instanceType?: string;
    /**
     * Location where the quota applies.
     */
    location?: string;
}
