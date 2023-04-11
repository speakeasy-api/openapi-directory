import { SpeakeasyBase } from "../../../internal/utils";
import { PerInstanceConfig } from "./perinstanceconfig";
/**
 * RegionInstanceGroupManagers.createInstances
 */
export declare class RegionInstanceGroupManagersCreateInstancesRequest extends SpeakeasyBase {
    /**
     * [Required] List of specifications of per-instance configs.
     */
    instances?: PerInstanceConfig[];
}
