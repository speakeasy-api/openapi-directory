import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data related to individual game categories.
 */
export declare class Category extends SpeakeasyBase {
    /**
     * The category name.
     */
    category?: string;
    /**
     * Experience points earned in this category.
     */
    experiencePoints?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#category`.
     */
    kind?: string;
}
