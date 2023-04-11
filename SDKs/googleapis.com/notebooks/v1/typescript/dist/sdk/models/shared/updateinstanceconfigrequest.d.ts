import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceConfig } from "./instanceconfig";
/**
 * Request for updating instance configurations.
 */
export declare class UpdateInstanceConfigRequest extends SpeakeasyBase {
    /**
     * Notebook instance configurations that can be updated.
     */
    config?: InstanceConfig;
}
