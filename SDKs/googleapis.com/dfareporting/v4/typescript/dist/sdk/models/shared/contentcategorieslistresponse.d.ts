import { SpeakeasyBase } from "../../../internal/utils";
import { ContentCategory } from "./contentcategory";
/**
 * Content Category List Response
 */
export declare class ContentCategoriesListResponse extends SpeakeasyBase {
    /**
     * Content category collection.
     */
    contentCategories?: ContentCategory[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategoriesListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
