import { SpeakeasyBase } from "../../../internal/utils";
import { YoutubeAdGroupAd } from "./youtubeadgroupad";
/**
 * Successful response
 */
export declare class ListYoutubeAdGroupAdsResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListYoutubeAdGroupAds` method to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of ad group ads. This list will be absent if empty.
     */
    youtubeAdGroupAds?: YoutubeAdGroupAd[];
}
