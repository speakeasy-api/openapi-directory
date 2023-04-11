import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceReference } from "./instancereference";
export declare class InstanceGroupsRemoveInstancesRequest extends SpeakeasyBase {
    /**
     * The list of instances to remove from the instance group.
     */
    instances?: InstanceReference[];
}
