import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceReference } from "./instancereference";
export declare class InstanceGroupsAddInstancesRequest extends SpeakeasyBase {
    /**
     * The list of instances to add to the instance group.
     */
    instances?: InstanceReference[];
}
