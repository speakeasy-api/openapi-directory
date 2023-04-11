import { SpeakeasyBase } from "../../../internal/utils";
import { FixedOrPercent } from "./fixedorpercent";
export declare class InstanceGroupManagerVersion extends SpeakeasyBase {
    /**
     * The URL of the instance template that is specified for this managed instance group. The group uses this template to create new instances in the managed instance group until the `targetSize` for this version is reached. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE; in those cases, existing instances are updated until the `targetSize` for this version is reached.
     */
    instanceTemplate?: string;
    /**
     * Name of the version. Unique among all versions in the scope of this managed instance group.
     */
    name?: string;
    /**
     * Encapsulates numeric value that can be either absolute or relative.
     */
    targetSize?: FixedOrPercent;
}
