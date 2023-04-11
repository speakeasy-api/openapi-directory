import { SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
/**
 * The response for ReservationService.SearchAllAssignments.
 */
export declare class SearchAllAssignmentsResponse extends SpeakeasyBase {
    /**
     * List of assignments visible to the user.
     */
    assignments?: Assignment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
