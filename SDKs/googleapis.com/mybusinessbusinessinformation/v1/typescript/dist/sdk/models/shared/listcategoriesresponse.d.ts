import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
/**
 * Response message for BusinessCategories.ListCategories.
 */
export declare class ListCategoriesResponse extends SpeakeasyBase {
    /**
     * The matching categories based on the requested parameters.
     */
    categories?: Category[];
    /**
     * If the number of categories exceeded the requested page size, this field will be populated with a token to fetch the next page of categories on a subsequent call to `ListCategories`.
     */
    nextPageToken?: string;
}
