import { SpeakeasyBase } from "../../../internal/utils";
import { Collection } from "./collection";
/**
 * Response message for the ListCollections method.
 */
export declare class ListCollectionsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The collections listed.
     */
    resources?: Collection[];
}
