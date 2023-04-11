import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstanceGroupManagersSetTargetPoolsRequest extends SpeakeasyBase {
    /**
     * The fingerprint of the target pools information. Use this optional property to prevent conflicts when multiple users change the target pools settings concurrently. Obtain the fingerprint with the instanceGroupManagers.get method. Then, include the fingerprint in your request to ensure that you do not overwrite changes that were applied from another concurrent request.
     */
    fingerprint?: string;
    /**
     * The list of target pool URLs that instances in this managed instance group belong to. The managed instance group applies these target pools to all of the instances in the group. Existing instances and new instances in the group all receive these target pool settings.
     */
    targetPools?: string[];
}
