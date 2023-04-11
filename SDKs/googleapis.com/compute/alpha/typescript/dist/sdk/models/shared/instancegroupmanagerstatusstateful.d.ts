import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupManagerStatusStatefulPerInstanceConfigs } from "./instancegroupmanagerstatusstatefulperinstanceconfigs";
export declare class InstanceGroupManagerStatusStateful extends SpeakeasyBase {
    /**
     * [Output Only] A bit indicating whether the managed instance group has stateful configuration, that is, if you have configured any items in a stateful policy or in per-instance configs. The group might report that it has no stateful configuration even when there is still some preserved state on a managed instance, for example, if you have deleted all PICs but not yet applied those deletions.
     */
    hasStatefulConfig?: boolean;
    /**
     * [Output Only] A bit indicating whether the managed instance group has stateful configuration, that is, if you have configured any items in a stateful policy or in per-instance configs. The group might report that it has no stateful configuration even when there is still some preserved state on a managed instance, for example, if you have deleted all PICs but not yet applied those deletions. This field is deprecated in favor of has_stateful_config.
     */
    isStateful?: boolean;
    perInstanceConfigs?: InstanceGroupManagerStatusStatefulPerInstanceConfigs;
}
