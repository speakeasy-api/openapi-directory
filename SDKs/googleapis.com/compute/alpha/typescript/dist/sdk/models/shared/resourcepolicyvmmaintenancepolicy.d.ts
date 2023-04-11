import { SpeakeasyBase } from "../../../internal/utils";
import { ResourcePolicyVmMaintenancePolicyConcurrencyControl } from "./resourcepolicyvmmaintenancepolicyconcurrencycontrol";
import { ResourcePolicyVmMaintenancePolicyMaintenanceWindow } from "./resourcepolicyvmmaintenancepolicymaintenancewindow";
export declare class ResourcePolicyVmMaintenancePolicy extends SpeakeasyBase {
    /**
     * A concurrency control configuration. Defines a group config that, when attached to an instance, recognizes that instance as part of a group of instances where only up the concurrency_limit of instances in that group can undergo simultaneous maintenance. For more information: go/concurrency-control-design-doc
     */
    concurrencyControlGroup?: ResourcePolicyVmMaintenancePolicyConcurrencyControl;
    /**
     * A maintenance window for VMs. When set, we restrict our maintenance operations to this window.
     */
    maintenanceWindow?: ResourcePolicyVmMaintenancePolicyMaintenanceWindow;
}
