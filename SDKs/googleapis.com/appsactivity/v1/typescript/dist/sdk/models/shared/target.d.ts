import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the object modified by the event.
 */
export declare class Target extends SpeakeasyBase {
    /**
     * The ID of the target. For example, in Google Drive, this is the file or folder ID.
     */
    id?: string;
    /**
     * The MIME type of the target.
     */
    mimeType?: string;
    /**
     * The name of the target. For example, in Google Drive, this is the title of the file.
     */
    name?: string;
}
