import { SpeakeasyBase } from "../../../internal/utils";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
/**
 * Request for updating the Shielded Instance config for a notebook instance. You can only use this method on a stopped instance
 */
export declare class UpdateShieldedInstanceConfigRequest extends SpeakeasyBase {
    /**
     * A set of Shielded Instance options. Check [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid.
     */
    shieldedInstanceConfig?: ShieldedInstanceConfig;
}
