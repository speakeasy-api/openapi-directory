import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message that contains the resource name and display name of a folder resource.
 */
export declare class Folder extends SpeakeasyBase {
    /**
     * Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceFolder?: string;
    /**
     * The user defined display name for this folder.
     */
    resourceFolderDisplayName?: string;
}
