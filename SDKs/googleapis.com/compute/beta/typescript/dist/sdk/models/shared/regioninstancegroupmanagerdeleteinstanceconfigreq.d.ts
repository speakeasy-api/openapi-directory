import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RegionInstanceGroupManagers.deletePerInstanceConfigs
 */
export declare class RegionInstanceGroupManagerDeleteInstanceConfigReq extends SpeakeasyBase {
    /**
     * The list of instance names for which we want to delete per-instance configs on this managed instance group.
     */
    names?: string[];
}
