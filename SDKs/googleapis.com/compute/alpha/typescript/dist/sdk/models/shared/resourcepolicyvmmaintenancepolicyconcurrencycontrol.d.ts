import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A concurrency control configuration. Defines a group config that, when attached to an instance, recognizes that instance as part of a group of instances where only up the concurrency_limit of instances in that group can undergo simultaneous maintenance. For more information: go/concurrency-control-design-doc
 */
export declare class ResourcePolicyVmMaintenancePolicyConcurrencyControl extends SpeakeasyBase {
    concurrencyLimit?: number;
}
