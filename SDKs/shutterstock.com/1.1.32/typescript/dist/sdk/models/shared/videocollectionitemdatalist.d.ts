import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionItem } from "./collectionitem";
import { ErrorT } from "./error";
/**
 * List of items in a collection
 */
export declare class VideoCollectionItemDataList extends SpeakeasyBase {
    /**
     * Assets in the collection
     */
    data?: CollectionItem[];
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
