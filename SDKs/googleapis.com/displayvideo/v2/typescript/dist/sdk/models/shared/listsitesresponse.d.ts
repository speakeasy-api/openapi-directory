import { SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";
/**
 * Response message for SiteService.ListSites.
 */
export declare class ListSitesResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListSites` method to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of sites. This list will be absent if empty.
     */
    sites?: Site[];
}
