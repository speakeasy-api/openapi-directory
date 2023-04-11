import { SpeakeasyBase } from "../../../internal/utils";
import { UploadItemRef } from "./uploaditemref";
export declare enum ItemContentContentFormatEnum {
    Unspecified = "UNSPECIFIED",
    Html = "HTML",
    Text = "TEXT",
    Raw = "RAW"
}
/**
 * Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as inlineContent. If the content is uploaded and not binary, it must be UTF-8 encoded.
 */
export declare class ItemContent extends SpeakeasyBase {
    /**
     * Represents an upload session reference. This reference is created via upload method. This reference is valid for 30 days after its creation. Updating of item content may refer to this uploaded content via contentDataRef.
     */
    contentDataRef?: UploadItemRef;
    contentFormat?: ItemContentContentFormatEnum;
    /**
     * Hashing info calculated and provided by the API client for content. Can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.
     */
    hash?: string;
    /**
     * Content that is supplied inlined within the update method. The maximum length is 102400 bytes (100 KiB).
     */
    inlineContent?: string;
}
