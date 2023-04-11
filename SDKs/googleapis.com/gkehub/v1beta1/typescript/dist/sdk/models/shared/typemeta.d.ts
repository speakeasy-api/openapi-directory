import { SpeakeasyBase } from "../../../internal/utils";
/**
 * TypeMeta is the type information needed for content unmarshalling of Kubernetes resources in the manifest.
 */
export declare class TypeMeta extends SpeakeasyBase {
    /**
     * APIVersion of the resource (e.g. v1).
     */
    apiVersion?: string;
    /**
     * Kind of the resource (e.g. Deployment).
     */
    kind?: string;
}
