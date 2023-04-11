import { SpeakeasyBase } from "../../../internal/utils";
import { PerInstanceConfig } from "./perinstanceconfig";
/**
 * RegionInstanceGroupManagers.updatePerInstanceConfigs
 */
export declare class RegionInstanceGroupManagerUpdateInstanceConfigReq extends SpeakeasyBase {
    /**
     * The list of per-instance configurations to insert or patch on this managed instance group.
     */
    perInstanceConfigs?: PerInstanceConfig[];
}
