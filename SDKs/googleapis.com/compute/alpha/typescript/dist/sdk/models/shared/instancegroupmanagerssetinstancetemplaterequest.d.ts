import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstanceGroupManagersSetInstanceTemplateRequest extends SpeakeasyBase {
    /**
     * The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the managed instance group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.
     */
    instanceTemplate?: string;
}
