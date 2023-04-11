import { SpeakeasyBase } from "../../../internal/utils";
import { DriveItem } from "./driveitem";
/**
 * Information about a shared drive.
 */
export declare class Drive extends SpeakeasyBase {
    /**
     * The resource name of the shared drive. The format is `COLLECTION_ID/DRIVE_ID`. Clients should not assume a specific collection ID for this resource name.
     */
    name?: string;
    /**
     * A Drive item, such as a file or folder.
     */
    root?: DriveItem;
    /**
     * The title of the shared drive.
     */
    title?: string;
}
