import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Preferred source names are listed as enum. If you have a custom file type, simply enter that name.
 */
export declare enum LinkedSourceDocumentSourceEnum {
    Dropbox = "dropbox",
    Googledrive = "googledrive",
    Icloud = "icloud"
}
export declare class LinkedSourceDocument extends SpeakeasyBase {
    name?: string;
    /**
     * file size in bytes. optional.
     */
    size?: number;
    /**
     * Preferred source names are listed as enum. If you have a custom file type, simply enter that name.
     */
    source?: LinkedSourceDocumentSourceEnum;
    url?: string;
}
