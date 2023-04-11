import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to a namespaced resource in Kubernetes.
 */
export declare class NamespacedName extends SpeakeasyBase {
    /**
     * The name of the Kubernetes resource.
     */
    name?: string;
    /**
     * The Namespace of the Kubernetes resource.
     */
    namespace?: string;
}
