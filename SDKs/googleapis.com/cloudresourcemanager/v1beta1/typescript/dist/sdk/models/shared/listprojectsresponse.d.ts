import { SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";
/**
 * A page of the response received from the ListProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
 */
export declare class ListProjectsResponse extends SpeakeasyBase {
    /**
     * Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime.
     */
    nextPageToken?: string;
    /**
     * The list of Projects that matched the list filter. This list can be paginated.
     */
    projects?: Project[];
}
