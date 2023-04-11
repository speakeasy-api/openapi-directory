import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
/**
 * Response message for ListChannels.
 */
export declare class ListChannelsResponse extends SpeakeasyBase {
    /**
     * The list of channels.
     */
    channels?: Channel[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
