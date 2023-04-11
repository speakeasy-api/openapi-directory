import { SpeakeasyBase } from "../../../internal/utils";
import { Release } from "./release";
/**
 * The response for FirebaseRulesService.ListReleases.
 */
export declare class ListReleasesResponse extends SpeakeasyBase {
    /**
     * The pagination token to retrieve the next page of results. If the value is empty, no further results remain.
     */
    nextPageToken?: string;
    /**
     * List of `Release` instances.
     */
    releases?: Release[];
}
