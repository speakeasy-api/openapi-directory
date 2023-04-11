import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceReference } from "./instancereference";
export declare class TargetPoolsAddInstanceRequest extends SpeakeasyBase {
    /**
     * A full or partial URL to an instance to add to this target pool. This can be a full or partial URL. For example, the following are valid URLs: - https://www.googleapis.com/compute/v1/projects/project-id/zones/zone /instances/instance-name - projects/project-id/zones/zone/instances/instance-name - zones/zone/instances/instance-name
     */
    instances?: InstanceReference[];
}
