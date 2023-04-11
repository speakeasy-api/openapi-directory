import { SpeakeasyBase } from "../../../internal/utils";
export declare class CategoryItems extends SpeakeasyBase {
    badgeUrl?: string;
    categoryId?: string;
    name?: string;
}
/**
 * Successful response
 */
export declare class Category extends SpeakeasyBase {
    /**
     * A list of onboarding categories.
     */
    items?: CategoryItems[];
    /**
     * Resource type.
     */
    kind?: string;
}
