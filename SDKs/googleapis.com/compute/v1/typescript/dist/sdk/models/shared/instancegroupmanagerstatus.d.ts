import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupManagerStatusStateful } from "./instancegroupmanagerstatusstateful";
import { InstanceGroupManagerStatusVersionTarget } from "./instancegroupmanagerstatusversiontarget";
export declare class InstanceGroupManagerStatus extends SpeakeasyBase {
    /**
     * [Output Only] The URL of the Autoscaler that targets this instance group manager.
     */
    autoscaler?: string;
    /**
     * [Output Only] A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified.
     */
    isStable?: boolean;
    stateful?: InstanceGroupManagerStatusStateful;
    versionTarget?: InstanceGroupManagerStatusVersionTarget;
}
