import { SpeakeasyBase } from "../../../internal/utils";
export declare class MuteChannelRequest extends SpeakeasyBase {
    /**
     * Channel CIDs to mute (if multiple channels)
     */
    channelCids: string[];
    /**
     * Duration of mute in milliseconds
     */
    expiration?: number;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    userId?: string;
}
