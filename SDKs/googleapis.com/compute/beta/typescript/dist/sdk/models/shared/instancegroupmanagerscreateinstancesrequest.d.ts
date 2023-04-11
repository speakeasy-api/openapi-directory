import { SpeakeasyBase } from "../../../internal/utils";
import { PerInstanceConfig } from "./perinstanceconfig";
/**
 * InstanceGroupManagers.createInstances
 */
export declare class InstanceGroupManagersCreateInstancesRequest extends SpeakeasyBase {
    /**
     * [Required] List of specifications of per-instance configs.
     */
    instances?: PerInstanceConfig[];
}
