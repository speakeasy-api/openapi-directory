import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionStatus } from "./collectionstatus";
/**
 * Response message for the ListCollectionStatuses method.
 */
export declare class ListCollectionStatusesResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The collectionstatuses listed.
     */
    resources?: CollectionStatus[];
}
