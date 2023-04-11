import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services.
 */
export declare class Namespace extends SpeakeasyBase {
    /**
     * Output only. The timestamp when the namespace was created.
     */
    createTime?: string;
    /**
     * Optional. Resource labels associated with this namespace. No more than 64 user labels can be associated with a given resource. Label keys and values can be no longer than 63 characters.
     */
    labels?: Record<string, string>;
    /**
     * Immutable. The resource name for the namespace in the format `projects/* /locations/* /namespaces/*`.
     */
    name?: string;
    /**
     * Output only. A globally unique identifier (in UUID4 format) for this namespace.
     */
    uid?: string;
    /**
     * Output only. The timestamp when the namespace was last updated.
     */
    updateTime?: string;
}
/**
 * A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services.
 */
export declare class NamespaceInput extends SpeakeasyBase {
    /**
     * Optional. Resource labels associated with this namespace. No more than 64 user labels can be associated with a given resource. Label keys and values can be no longer than 63 characters.
     */
    labels?: Record<string, string>;
    /**
     * Immutable. The resource name for the namespace in the format `projects/* /locations/* /namespaces/*`.
     */
    name?: string;
}
