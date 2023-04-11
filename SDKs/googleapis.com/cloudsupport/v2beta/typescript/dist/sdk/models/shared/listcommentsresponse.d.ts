import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * The response message for the ListComments endpoint.
 */
export declare class ListCommentsResponse extends SpeakeasyBase {
    /**
     * The list of Comments associated with the given Case.
     */
    comments?: Comment[];
    /**
     * A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `ListCommentsRequest` message that is issued. If unspecified, there are no more results to retrieve.
     */
    nextPageToken?: string;
}
