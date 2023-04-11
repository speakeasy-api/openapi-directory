import { SpeakeasyBase } from "../../../internal/utils";
import { DriveFolder } from "./drivefolder";
import { Folder } from "./folder";
import { Owner } from "./owner";
/**
 * A Drive item, such as a file or folder.
 */
export declare class DriveItem extends SpeakeasyBase {
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
     * The MIME type of the Drive item. See https://developers.google.com/drive/v3/web/mime-types.
     */
    mimeType?: string;
    /**
     * The target Drive item. The format is `items/ITEM_ID`.
     */
    name?: string;
    /**
     * Information about the owner of a Drive item.
     */
    owner?: Owner;
    /**
     * The title of the Drive item.
     */
    title?: string;
}
