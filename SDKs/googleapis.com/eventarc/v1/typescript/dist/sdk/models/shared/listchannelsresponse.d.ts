import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
/**
 * The response message for the `ListChannels` method.
 */
export declare class ListChannelsResponse extends SpeakeasyBase {
    /**
     * The requested channels, up to the number specified in `page_size`.
     */
    channels?: Channel[];
    /**
     * A page token that can be sent to `ListChannels` to request the next page. If this is empty, then there are no more pages.
     */
    nextPageToken?: string;
    /**
     * Unreachable resources, if any.
     */
    unreachable?: string[];
}
