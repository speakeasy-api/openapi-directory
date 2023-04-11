import { SpeakeasyBase } from "../../../internal/utils";
import { CustomChannel } from "./customchannel";
/**
 * Response definition for the custom channel list rpc.
 */
export declare class ListCustomChannelsResponse extends SpeakeasyBase {
    /**
     * The custom channels returned in this list response.
     */
    customChannels?: CustomChannel[];
    /**
     * Continuation token used to page through alerts. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string;
}
