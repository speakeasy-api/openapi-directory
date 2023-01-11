import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TagTypeEnum {
    Regular = "Regular",
    Negative = "Negative"
}
/**
 * Represents a Tag.
**/
export declare class Tag extends SpeakeasyBase {
    description?: string;
    id?: string;
    imageCount?: number;
    name?: string;
    type?: TagTypeEnum;
}
/**
 * Represents a Tag.
**/
export declare class TagInput extends SpeakeasyBase {
    description?: string;
    name?: string;
    type?: TagTypeEnum;
}
