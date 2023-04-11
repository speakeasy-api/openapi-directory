import { SpeakeasyBase } from "../../../internal/utils";
import { ResourcePolicyDailyCycle } from "./resourcepolicydailycycle";
/**
 * A maintenance window for VMs. When set, we restrict our maintenance operations to this window.
 */
export declare class ResourcePolicyVmMaintenancePolicyMaintenanceWindow extends SpeakeasyBase {
    /**
     * Time window specified for daily operations.
     */
    dailyMaintenanceWindow?: ResourcePolicyDailyCycle;
}
