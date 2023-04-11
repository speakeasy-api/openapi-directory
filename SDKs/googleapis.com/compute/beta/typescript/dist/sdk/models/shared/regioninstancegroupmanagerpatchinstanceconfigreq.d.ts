import { SpeakeasyBase } from "../../../internal/utils";
import { PerInstanceConfig } from "./perinstanceconfig";
/**
 * RegionInstanceGroupManagers.patchPerInstanceConfigs
 */
export declare class RegionInstanceGroupManagerPatchInstanceConfigReq extends SpeakeasyBase {
    /**
     * The list of per-instance configurations to insert or patch on this managed instance group.
     */
    perInstanceConfigs?: PerInstanceConfig[];
}
