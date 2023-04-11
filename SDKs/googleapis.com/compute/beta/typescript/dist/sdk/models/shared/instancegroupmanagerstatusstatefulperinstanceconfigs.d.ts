import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstanceGroupManagerStatusStatefulPerInstanceConfigs extends SpeakeasyBase {
    /**
     * A bit indicating if all of the group's per-instance configurations (listed in the output of a listPerInstanceConfigs API call) have status EFFECTIVE or there are no per-instance-configs.
     */
    allEffective?: boolean;
}
