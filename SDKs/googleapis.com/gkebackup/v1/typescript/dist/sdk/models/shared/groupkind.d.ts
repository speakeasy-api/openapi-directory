import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This is a direct map to the Kubernetes GroupKind type [GroupKind](https://godoc.org/k8s.io/apimachinery/pkg/runtime/schema#GroupKind) and is used for identifying specific "types" of resources to restore.
 */
export declare class GroupKind extends SpeakeasyBase {
    /**
     * API group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Note: use empty string for core API group
     */
    resourceGroup?: string;
    /**
     * Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.
     */
    resourceKind?: string;
}
