import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceReference } from "./instancereference";
export declare class TargetPoolsRemoveInstanceRequest extends SpeakeasyBase {
    /**
     * URLs of the instances to be removed from target pool.
     */
    instances?: InstanceReference[];
}
