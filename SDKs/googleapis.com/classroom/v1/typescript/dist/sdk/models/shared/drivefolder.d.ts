import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Representation of a Google Drive folder.
 */
export declare class DriveFolder extends SpeakeasyBase {
    /**
     * URL that can be used to access the Drive folder. Read-only.
     */
    alternateLink?: string;
    /**
     * Drive API resource ID.
     */
    id?: string;
    /**
     * Title of the Drive folder. Read-only.
     */
    title?: string;
}
