import { SpeakeasyBase } from "../../../internal/utils";
import { StandardRolloutPolicy } from "./standardrolloutpolicy";
/**
 * Settings for blue-green upgrade.
 */
export declare class BlueGreenSettings extends SpeakeasyBase {
    /**
     * Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
     */
    nodePoolSoakDuration?: string;
    /**
     * Standard rollout policy is the default policy for blue-green.
     */
    standardRolloutPolicy?: StandardRolloutPolicy;
}
