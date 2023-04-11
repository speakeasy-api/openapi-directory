import { SpeakeasyBase } from "../../../internal/utils";
import { NamespaceLifecycleState } from "./namespacelifecyclestate";
/**
 * Namespace represents a namespace across the Fleet
 */
export declare class Namespace extends SpeakeasyBase {
    /**
     * Output only. When the namespace was created.
     */
    createTime?: string;
    /**
     * Output only. When the namespace was deleted.
     */
    deleteTime?: string;
    /**
     * The resource name for the namespace `projects/{project}/locations/{location}/namespaces/{namespace}`
     */
    name?: string;
    /**
     * Required. Scope associated with the namespace
     */
    scope?: string;
    /**
     * NamespaceLifecycleState describes the state of a Namespace resource.
     */
    state?: NamespaceLifecycleState;
    /**
     * Output only. Google-generated UUID for this resource. This is unique across all namespace resources. If a namespace resource is deleted and another resource with the same name is created, it gets a different uid.
     */
    uid?: string;
    /**
     * Output only. When the namespace was last updated.
     */
    updateTime?: string;
}
/**
 * Namespace represents a namespace across the Fleet
 */
export declare class NamespaceInput extends SpeakeasyBase {
    /**
     * The resource name for the namespace `projects/{project}/locations/{location}/namespaces/{namespace}`
     */
    name?: string;
    /**
     * Required. Scope associated with the namespace
     */
    scope?: string;
}
