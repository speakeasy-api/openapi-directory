import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CDDriveItemTypeEnum {
    File = "file",
    Folder = "folder"
}
/**
 * A generic reference to an item in the CD Drive such as a file or folder.
 */
export declare class CDDriveItem extends SpeakeasyBase {
    id: number;
    name: string;
    type: CDDriveItemTypeEnum;
}
