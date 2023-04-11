import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ResourceList contains container resource requirements.
 */
export declare class PolicyControllerResourceList extends SpeakeasyBase {
    /**
     * CPU requirement expressed in Kubernetes resource units.
     */
    cpu?: string;
    /**
     * Memory requirement expressed in Kubernetes resource units.
     */
    memory?: string;
}
