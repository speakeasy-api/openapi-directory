import { SpeakeasyBase } from "../../../internal/utils";
import { DriveFolder } from "./drivefolder";
import { Folder } from "./folder";
/**
 * A lightweight reference to a Drive item, such as a file or folder.
**/
export declare class DriveItemReference extends SpeakeasyBase {
    driveFile?: Record<string, any>;
    driveFolder?: DriveFolder;
    file?: Record<string, any>;
    folder?: Folder;
    name?: string;
    title?: string;
}
