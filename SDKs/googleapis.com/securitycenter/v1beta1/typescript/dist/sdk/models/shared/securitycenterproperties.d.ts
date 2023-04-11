import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.
 */
export declare class SecurityCenterProperties extends SpeakeasyBase {
    /**
     * Immutable. The full resource name of the Google Cloud resource this asset represents. This field is immutable after create time. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
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
     * The full resource name of the project the resource belongs to. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceProject?: string;
    /**
     * The type of the Google Cloud resource. Examples include: APPLICATION, PROJECT, and ORGANIZATION. This is a case insensitive field defined by Security Command Center and/or the producer of the resource and is immutable after create time.
     */
    resourceType?: string;
}
