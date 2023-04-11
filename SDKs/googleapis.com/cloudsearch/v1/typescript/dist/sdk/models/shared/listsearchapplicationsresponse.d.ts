import { SpeakeasyBase } from "../../../internal/utils";
import { SearchApplication } from "./searchapplication";
/**
 * Successful response
 */
export declare class ListSearchApplicationsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    searchApplications?: SearchApplication[];
}
