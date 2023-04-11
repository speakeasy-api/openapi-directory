import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Conveys information about a Kubernetes access review (e.g. kubectl auth can-i ...) that was involved in a finding.
 */
export declare class AccessReview extends SpeakeasyBase {
    /**
     * Group is the API Group of the Resource. "*" means all.
     */
    group?: string;
    /**
     * Name is the name of the resource being requested. Empty means all.
     */
    name?: string;
    /**
     * Namespace of the action being requested. Currently, there is no distinction between no namespace and all namespaces. Both are represented by "" (empty).
     */
    ns?: string;
    /**
     * Resource is the optional resource type requested. "*" means all.
     */
    resource?: string;
    /**
     * Subresource is the optional subresource type.
     */
    subresource?: string;
    /**
     * Verb is a Kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy. "*" means all.
     */
    verb?: string;
    /**
     * Version is the API Version of the Resource. "*" means all.
     */
    version?: string;
}
