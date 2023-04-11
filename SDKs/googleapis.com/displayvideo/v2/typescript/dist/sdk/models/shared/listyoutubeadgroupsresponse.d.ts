import { SpeakeasyBase } from "../../../internal/utils";
import { YoutubeAdGroup } from "./youtubeadgroup";
/**
 * Successful response
 */
export declare class ListYoutubeAdGroupsResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListYoutubeAdGroups` method to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of ad groups. This list will be absent if empty.
     */
    youtubeAdGroups?: YoutubeAdGroup[];
}
