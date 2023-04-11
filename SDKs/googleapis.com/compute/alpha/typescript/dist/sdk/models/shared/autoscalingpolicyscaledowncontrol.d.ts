import { SpeakeasyBase } from "../../../internal/utils";
import { FixedOrPercent } from "./fixedorpercent";
/**
 * Configuration that allows for slower scale in so that even if Autoscaler recommends an abrupt scale in of a MIG, it will be throttled as specified by the parameters below.
 */
export declare class AutoscalingPolicyScaleDownControl extends SpeakeasyBase {
    /**
     * Encapsulates numeric value that can be either absolute or relative.
     */
    maxScaledDownReplicas?: FixedOrPercent;
    /**
     * How far back autoscaling looks when computing recommendations to include directives regarding slower scale in, as described above.
     */
    timeWindowSec?: number;
}
