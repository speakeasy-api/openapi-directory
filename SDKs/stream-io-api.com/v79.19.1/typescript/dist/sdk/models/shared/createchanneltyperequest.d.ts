import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyRequest } from "./policyrequest";
/**
 * Enables automatic message moderation
 */
export declare enum CreateChannelTypeRequestAutoModerationEnum {
    Disabled = "disabled",
    Simple = "simple",
    Ai = "AI"
}
/**
 * Sets behavior of automatic moderation
 */
export declare enum CreateChannelTypeRequestAutoModerationBehaviorEnum {
    Flag = "flag",
    Block = "block"
}
/**
 * Sets behavior of blocklist
 */
export declare enum CreateChannelTypeRequestBlocklistBehaviorEnum {
    Flag = "flag",
    Block = "block"
}
export declare class CreateChannelTypeRequest extends SpeakeasyBase {
    /**
     * Enables automatic message moderation
     */
    automod: CreateChannelTypeRequestAutoModerationEnum;
    /**
     * Sets behavior of automatic moderation
     */
    automodBehavior?: CreateChannelTypeRequestAutoModerationBehaviorEnum;
    /**
     * Name of the blocklist to use
     */
    blocklist?: string;
    /**
     * Sets behavior of blocklist
     */
    blocklistBehavior?: CreateChannelTypeRequestBlocklistBehaviorEnum;
    /**
     * List of commands that channel supports
     */
    commands?: string[];
    /**
     * Connect events support
     */
    connectEvents?: boolean;
    /**
     * Enables custom events
     */
    customEvents?: boolean;
    grants?: Record<string, string[]>;
    /**
     * Number of maximum message characters
     */
    maxMessageLength?: number;
    /**
     * Number of days to keep messages. 'infinite' disables retention
     */
    messageRetention?: string;
    /**
     * Enables mutes
     */
    mutes?: boolean;
    /**
     * Channel type name
     */
    name: string;
    /**
     * List of permissions for the channel type
     */
    permissions?: PolicyRequest[];
    /**
     * Enables push notifications
     */
    pushNotifications?: boolean;
    /**
     * Enables message reactions
     */
    reactions?: boolean;
    /**
     * Read events support
     */
    readEvents?: boolean;
    /**
     * Enables message replies (threads)
     */
    replies?: boolean;
    /**
     * Enables message search
     */
    search?: boolean;
    /**
     * Typing events support
     */
    typingEvents?: boolean;
    /**
     * Enables file uploads
     */
    uploads?: boolean;
    /**
     * Enables URL enrichment
     */
    urlEnrichment?: boolean;
}
