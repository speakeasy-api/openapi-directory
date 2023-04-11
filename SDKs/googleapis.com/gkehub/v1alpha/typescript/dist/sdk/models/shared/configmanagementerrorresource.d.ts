import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementGroupVersionKind } from "./configmanagementgroupversionkind";
/**
 * Model for a config file in the git repo with an associated Sync error
 */
export declare class ConfigManagementErrorResource extends SpeakeasyBase {
    /**
     * A Kubernetes object's GVK
     */
    resourceGvk?: ConfigManagementGroupVersionKind;
    /**
     * Metadata name of the resource that is causing an error
     */
    resourceName?: string;
    /**
     * Namespace of the resource that is causing an error
     */
    resourceNamespace?: string;
    /**
     * Path in the git repo of the erroneous config
     */
    sourcePath?: string;
}
