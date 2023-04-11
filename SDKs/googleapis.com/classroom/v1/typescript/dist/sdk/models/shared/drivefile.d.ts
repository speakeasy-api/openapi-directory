import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Representation of a Google Drive file.
 */
export declare class DriveFile extends SpeakeasyBase {
    /**
     * URL that can be used to access the Drive item. Read-only.
     */
    alternateLink?: string;
    /**
     * Drive API resource ID.
     */
    id?: string;
    /**
     * URL of a thumbnail image of the Drive item. Read-only.
     */
    thumbnailUrl?: string;
    /**
     * Title of the Drive item. Read-only.
     */
    title?: string;
}
