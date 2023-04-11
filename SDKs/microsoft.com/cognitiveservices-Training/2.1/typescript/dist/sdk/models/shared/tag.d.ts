import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Tag
 */
export declare class TagInput extends SpeakeasyBase {
    /**
     * Gets or sets the description of the tag
     */
    description?: string;
    /**
     * Gets or sets the name of the tag
     */
    name?: string;
}
/**
 * Represents a Tag
 */
export declare class Tag extends SpeakeasyBase {
    /**
     * Gets or sets the description of the tag
     */
    description?: string;
    /**
     * Gets the Tag ID
     */
    id?: string;
    /**
     * Gets the number of images with this tag
     */
    imageCount?: number;
    /**
     * Gets or sets the name of the tag
     */
    name?: string;
}
