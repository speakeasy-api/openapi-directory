import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyControllerResourceList } from "./policycontrollerresourcelist";
/**
 * ResourceRequirements describes the compute resource requirements.
 */
export declare class PolicyControllerResourceRequirements extends SpeakeasyBase {
    /**
     * ResourceList contains container resource requirements.
     */
    limits?: PolicyControllerResourceList;
    /**
     * ResourceList contains container resource requirements.
     */
    requests?: PolicyControllerResourceList;
}
