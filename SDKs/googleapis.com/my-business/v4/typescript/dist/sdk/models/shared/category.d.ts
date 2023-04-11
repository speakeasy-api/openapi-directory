import { SpeakeasyBase } from "../../../internal/utils";
import { MoreHoursType } from "./morehourstype";
import { ServiceType } from "./servicetype";
/**
 * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list).
 */
export declare class CategoryInput extends SpeakeasyBase {
    /**
     * @OutputOnly. A stable ID (provided by Google) for this category. The `category_id` must be specified when modifying the category (when creating or updating a location).
     */
    categoryId?: string;
    /**
     * @OutputOnly. The human-readable name of the category. This is set when reading the location. When modifying the location, `category_id` must be set.
     */
    displayName?: string;
}
/**
 * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list).
 */
export declare class Category extends SpeakeasyBase {
    /**
     * @OutputOnly. A stable ID (provided by Google) for this category. The `category_id` must be specified when modifying the category (when creating or updating a location).
     */
    categoryId?: string;
    /**
     * @OutputOnly. The human-readable name of the category. This is set when reading the location. When modifying the location, `category_id` must be set.
     */
    displayName?: string;
    /**
     * Output only. More hours types that are available for this business category.
     */
    moreHoursTypes?: MoreHoursType[];
    /**
     * @OutputOnly. A list of all the service types that are available for this business category.
     */
    serviceTypes?: ServiceType[];
}
