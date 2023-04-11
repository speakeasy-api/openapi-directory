import { SpeakeasyBase } from "../../../internal/utils";
import { DriveFolder } from "./drivefolder";
import { Folder } from "./folder";
/**
 * A lightweight reference to a Drive item, such as a file or folder.
 */
export declare class DriveItemReference extends SpeakeasyBase {
    /**
     * A Drive item which is a file.
     */
    driveFile?: Record<string, any>;
    /**
     * A Drive item which is a folder.
     */
    driveFolder?: DriveFolder;
    /**
     * This item is deprecated; please see `DriveFile` instead.
     */
    file?: Record<string, any>;
    /**
     * This item is deprecated; please see `DriveFolder` instead.
     */
    folder?: Folder;
    /**
     * The target Drive item. The format is `items/ITEM_ID`.
     */
    name?: string;
    /**
     * The title of the Drive item.
     */
    title?: string;
}
