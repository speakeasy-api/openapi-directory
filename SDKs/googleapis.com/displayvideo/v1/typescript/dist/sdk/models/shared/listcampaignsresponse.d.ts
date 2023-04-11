import { SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";
/**
 * Successful response
 */
export declare class ListCampaignsResponse extends SpeakeasyBase {
    /**
     * The list of campaigns. This list will be absent if empty.
     */
    campaigns?: Campaign[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCampaigns` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
