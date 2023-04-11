import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
/**
 * Successful response
 */
export declare class ListBusinessCategoriesResponse extends SpeakeasyBase {
    /**
     * The categories. Categories are BASIC view. They don't contain any ServiceType information.
     */
    categories?: Category[];
    /**
     * If the number of categories exceeded the requested page size, this field will be populated with a token to fetch the next page of categories on a subsequent call to `ListBusinessCategories`.
     */
    nextPageToken?: string;
    /**
     * The total number of categories for the request parameters.
     */
    totalCategoryCount?: number;
}
