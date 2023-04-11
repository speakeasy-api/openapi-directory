import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { ErrorT } from "./error";
/**
 * List of categories that images can belong to
 */
export declare class CategoryDataList extends SpeakeasyBase {
    /**
     * Categories
     */
    data?: Category[];
    /**
     * Error list; appears only if there was an error
     */
    errors?: ErrorT[];
    /**
     * Server-generated message, if any
     */
    message?: string;
    /**
     * The current page of results
     */
    page?: number;
    /**
     * The number of results per page
     */
    perPage?: number;
    /**
     * The total number of results across all pages
     */
    totalCount?: number;
}
