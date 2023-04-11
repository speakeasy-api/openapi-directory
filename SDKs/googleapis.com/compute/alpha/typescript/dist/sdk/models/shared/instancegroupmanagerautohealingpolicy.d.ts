import { SpeakeasyBase } from "../../../internal/utils";
import { FixedOrPercent } from "./fixedorpercent";
import { InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers } from "./instancegroupmanagerautohealingpolicyautohealingtriggers";
export declare class InstanceGroupManagerAutoHealingPolicy extends SpeakeasyBase {
    autoHealingTriggers?: InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers;
    /**
     * The URL for the health check that signals autohealing.
     */
    healthCheck?: string;
    /**
     * The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. This initial delay allows instances to initialize and run their startup scripts before the instance group determines that they are UNHEALTHY. This prevents the managed instance group from recreating its instances prematurely. This value must be from range [0, 3600].
     */
    initialDelaySec?: number;
    /**
     * Encapsulates numeric value that can be either absolute or relative.
     */
    maxUnavailable?: FixedOrPercent;
}
