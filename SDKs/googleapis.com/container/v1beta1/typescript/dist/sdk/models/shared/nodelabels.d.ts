import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Collection of node-level [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels).
 */
export declare class NodeLabels extends SpeakeasyBase {
    /**
     * Map of node label keys and node label values.
     */
    labels?: Record<string, string>;
}
