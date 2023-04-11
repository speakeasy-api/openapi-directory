import { SpeakeasyBase } from "../../../internal/utils";
import { Query } from "./query";
/**
 * Successful response
 */
export declare class ListQueriesResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as page_token to retrieve the next page of queries. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of queries.
     */
    queries?: Query[];
}
