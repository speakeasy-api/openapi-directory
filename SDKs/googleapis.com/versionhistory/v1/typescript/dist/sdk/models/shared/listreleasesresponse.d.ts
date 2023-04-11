import { SpeakeasyBase } from "../../../internal/utils";
import { Release } from "./release";
/**
 * Response message for ListReleases.
 */
export declare class ListReleasesResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of releases.
     */
    releases?: Release[];
}
