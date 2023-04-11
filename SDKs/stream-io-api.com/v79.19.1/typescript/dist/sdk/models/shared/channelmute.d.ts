import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChannelMute extends SpeakeasyBase {
    /**
     * Represents channel in chat
     */
    channel?: Record<string, any>;
    /**
     * Date/time of creation
     */
    createdAt: Date;
    /**
     * Date/time of mute expiration
     */
    expires?: Date;
    /**
     * Date/time of the last update
     */
    updatedAt: Date;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
}
