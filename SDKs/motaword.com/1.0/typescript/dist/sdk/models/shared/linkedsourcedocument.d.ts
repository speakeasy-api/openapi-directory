import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LinkedSourceDocumentSourceEnum {
    Dropbox = "dropbox",
    Googledrive = "googledrive",
    Icloud = "icloud"
}
export declare class LinkedSourceDocument extends SpeakeasyBase {
    name?: string;
    size?: number;
    source?: LinkedSourceDocumentSourceEnum;
    url?: string;
}
