import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A folder in the CD Drive that can contain other items such as files or folders.
 */
export declare class CDDriveFolder extends SpeakeasyBase {
    /**
     * The date and time the folder was created.
     */
    createdDate: string;
    /**
     * The ID of the folder.
     */
    id: number;
    /**
     * The date and time the folder was last modified. This may only represent a modification to to the folder metadata itself, not to the contents of the folder.
     */
    lastModifiedDate: string;
    /**
     * The name of the folder.
     */
    name: string;
    /**
     * The ID of the parent folder or 0 for the root folder.
     */
    parentId: number;
}
