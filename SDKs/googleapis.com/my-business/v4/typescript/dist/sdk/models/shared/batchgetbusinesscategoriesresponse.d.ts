import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
/**
 * Response message for BusinessCategories.BatchGetBusinessCategories.
 */
export declare class BatchGetBusinessCategoriesResponse extends SpeakeasyBase {
    /**
     * Categories that match the GConcept ids provided in the request. They will not come in the same order as category ids in the request.
     */
    categories?: Category[];
}
