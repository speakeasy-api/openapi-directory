import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelStateResponseFields } from "./channelstateresponsefields";
/**
 * Channels list
 */
export declare class ChannelsResponse extends SpeakeasyBase {
    /**
     * List of channels
     */
    channels: ChannelStateResponseFields[];
    duration: string;
}
