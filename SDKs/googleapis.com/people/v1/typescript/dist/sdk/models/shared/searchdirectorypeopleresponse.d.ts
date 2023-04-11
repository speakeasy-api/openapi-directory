import { SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";
/**
 * The response to a request for people in the authenticated user's domain directory that match the specified query.
 */
export declare class SearchDirectoryPeopleResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of people in the domain directory that match the query.
     */
    people?: Person[];
    /**
     * The total number of items in the list without pagination.
     */
    totalSize?: number;
}
