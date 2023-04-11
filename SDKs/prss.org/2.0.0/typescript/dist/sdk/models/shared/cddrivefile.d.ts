import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A file in the CD Drive that contains content.
 */
export declare class CDDriveFile extends SpeakeasyBase {
    /**
     * The date and time the file was created.
     */
    createdDate: string;
    /**
     * The ID of the file.
     */
    id: number;
    /**
     * The date and time the file was last modified.
     */
    lastModifiedDate: string;
    /**
     * The name of the file including the extension.
     */
    name: string;
    /**
     * The ID of the parent folder or 0 for the root folder.
     */
    parentId: number;
    /**
     * The size of the file in bytes.
     */
    size?: number;
}
