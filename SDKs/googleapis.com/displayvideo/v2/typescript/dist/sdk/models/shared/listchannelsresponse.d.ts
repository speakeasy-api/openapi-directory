import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
/**
 * Successful response
 */
export declare class ListChannelsResponse extends SpeakeasyBase {
    /**
     * The list of channels. This list will be absent if empty.
     */
    channels?: Channel[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListChannels` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
