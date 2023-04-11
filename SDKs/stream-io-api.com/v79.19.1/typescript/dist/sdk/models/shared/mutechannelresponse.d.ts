import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelMute } from "./channelmute";
/**
 * Successful response
 */
export declare class MuteChannelResponse extends SpeakeasyBase {
    channelMute?: ChannelMute;
    /**
     * Object with mutes (if multiple channels were muted)
     */
    channelMutes?: ChannelMute[];
    duration: string;
    ownUser?: Record<string, any>;
}
