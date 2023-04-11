import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Gets or sets the type of the tag.
 */
export declare enum TagTypeEnum {
    Regular = "Regular",
    Negative = "Negative"
}
/**
 * Represents a Tag.
 */
export declare class TagInput extends SpeakeasyBase {
    /**
     * Gets or sets the description of the tag.
     */
    description?: string;
    /**
     * Gets or sets the name of the tag.
     */
    name?: string;
    /**
     * Gets or sets the type of the tag.
     */
    type?: TagTypeEnum;
}
/**
 * Represents a Tag.
 */
export declare class Tag extends SpeakeasyBase {
    /**
     * Gets or sets the description of the tag.
     */
    description?: string;
    /**
     * Gets the Tag ID.
     */
    id?: string;
    /**
     * Gets the number of images with this tag.
     */
    imageCount?: number;
    /**
     * Gets or sets the name of the tag.
     */
    name?: string;
    /**
     * Gets or sets the type of the tag.
     */
    type?: TagTypeEnum;
}
