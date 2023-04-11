import { SpeakeasyBase } from "../../../internal/utils";
import { PerInstanceConfig } from "./perinstanceconfig";
/**
 * InstanceGroupManagers.updatePerInstanceConfigs
 */
export declare class InstanceGroupManagersUpdatePerInstanceConfigsReq extends SpeakeasyBase {
    /**
     * The list of per-instance configurations to insert or patch on this managed instance group.
     */
    perInstanceConfigs?: PerInstanceConfig[];
}
