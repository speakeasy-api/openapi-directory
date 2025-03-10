import { SpeakeasyBase } from "../../../internal/utils";
import { NamedPort } from "./namedport";
export declare class InstanceGroupsSetNamedPortsRequest extends SpeakeasyBase {
    /**
     * The fingerprint of the named ports information for this instance group. Use this optional property to prevent conflicts when multiple users change the named ports settings concurrently. Obtain the fingerprint with the instanceGroups.get method. Then, include the fingerprint in your request to ensure that you do not overwrite changes that were applied from another concurrent request. A request with an incorrect fingerprint will fail with error 412 conditionNotMet.
     */
    fingerprint?: string;
    /**
     * The list of named ports to set for this instance group.
     */
    namedPorts?: NamedPort[];
}
