import { SpeakeasyBase } from "../../../internal/utils";
import { UrlChannel } from "./urlchannel";
/**
 * Response definition for the url channels list rpc.
 */
export declare class ListUrlChannelsResponse extends SpeakeasyBase {
    /**
     * Continuation token used to page through url channels. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string;
    /**
     * The url channels returned in this list response.
     */
    urlChannels?: UrlChannel[];
}
