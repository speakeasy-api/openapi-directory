import { SpeakeasyBase } from "../../../internal/utils";
import { DriveItem } from "./driveitem";
/**
 * This item is deprecated; please see `Drive` instead.
 */
export declare class TeamDrive extends SpeakeasyBase {
    /**
     * This field is deprecated; please see `Drive.name` instead.
     */
    name?: string;
    /**
     * A Drive item, such as a file or folder.
     */
    root?: DriveItem;
    /**
     * This field is deprecated; please see `Drive.title` instead.
     */
    title?: string;
}
