import { SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";
/**
 * Information related to the Google Cloud resource that is associated with this finding.
 */
export declare class Resource extends SpeakeasyBase {
    /**
     * The human readable name of the resource.
     */
    displayName?: string;
    /**
     * Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.
     */
    folders?: Folder[];
    /**
     * The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    name?: string;
    /**
     * The human readable name of resource's parent.
     */
    parentDisplayName?: string;
    /**
     * The full resource name of resource's parent.
     */
    parentName?: string;
    /**
     * The project ID that the resource belongs to.
     */
    projectDisplayName?: string;
    /**
     * The full resource name of project that the resource belongs to.
     */
    projectName?: string;
    /**
     * The full resource type of the resource.
     */
    type?: string;
}
