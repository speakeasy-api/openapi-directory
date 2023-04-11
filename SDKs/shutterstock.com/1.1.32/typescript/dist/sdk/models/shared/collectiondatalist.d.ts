import { SpeakeasyBase } from "../../../internal/utils";
import { Collection } from "./collection";
import { ErrorT } from "./error";
/**
 * List of collections
 */
export declare class CollectionDataList extends SpeakeasyBase {
    /**
     * Collections
     */
    data?: Collection[];
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
