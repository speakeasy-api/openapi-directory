import { SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";
/**
 * Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.
 */
export declare class SecurityCenterProperties extends SpeakeasyBase {
    /**
     * Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.
     */
    folders?: Folder[];
    /**
     * The user defined display name for this resource.
     */
    resourceDisplayName?: string;
    /**
     * The full resource name of the Google Cloud resource this asset represents. This field is immutable after create time. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceName?: string;
    /**
     * Owners of the Google Cloud resource.
     */
    resourceOwners?: string[];
    /**
     * The full resource name of the immediate parent of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceParent?: string;
    /**
     * The user defined display name for the parent of this resource.
     */
    resourceParentDisplayName?: string;
    /**
     * The full resource name of the project the resource belongs to. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceProject?: string;
    /**
     * The user defined display name for the project of this resource.
     */
    resourceProjectDisplayName?: string;
    /**
     * The type of the Google Cloud resource. Examples include: APPLICATION, PROJECT, and ORGANIZATION. This is a case insensitive field defined by Security Command Center and/or the producer of the resource and is immutable after create time.
     */
    resourceType?: string;
}
