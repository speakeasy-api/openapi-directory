import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
/**
 * Successful response
 */
export declare class ListChannelsResponse extends SpeakeasyBase {
    /**
     * The list of channels.
     */
    channels?: Channel[];
    /**
     * The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListChannels`. Page tokens are short-lived and should not be stored.
     */
    nextPageToken?: string;
}
