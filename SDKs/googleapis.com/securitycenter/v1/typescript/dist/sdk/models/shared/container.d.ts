import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
/**
 * Container associated with the finding.
 */
export declare class Container extends SpeakeasyBase {
    /**
     * Optional container image id, when provided by the container runtime. Uniquely identifies the container image launched using a container image digest.
     */
    imageId?: string;
    /**
     * Container labels, as provided by the container runtime.
     */
    labels?: Label[];
    /**
     * Container name.
     */
    name?: string;
    /**
     * Container image URI provided when configuring a pod/container. May identify a container image version using mutable tags.
     */
    uri?: string;
}
