import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Kubernetes object's GVK
 */
export declare class ConfigManagementGroupVersionKind extends SpeakeasyBase {
    /**
     * Kubernetes Group
     */
    group?: string;
    /**
     * Kubernetes Kind
     */
    kind?: string;
    /**
     * Kubernetes Version
     */
    version?: string;
}
