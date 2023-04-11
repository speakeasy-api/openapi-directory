import { SpeakeasyBase } from "../../../internal/utils";
import { Thresholds } from "./thresholds";
export declare enum ChannelConfigAutomodEnum {
    Disabled = "disabled",
    Simple = "simple",
    Ai = "AI"
}
export declare enum ChannelConfigAutomodBehaviorEnum {
    Flag = "flag",
    Block = "block"
}
export declare enum ChannelConfigBlocklistBehaviorEnum {
    Flag = "flag",
    Block = "block"
}
export declare class ChannelConfig extends SpeakeasyBase {
    automod: ChannelConfigAutomodEnum;
    automodBehavior: ChannelConfigAutomodBehaviorEnum;
    /**
     * Sets thresholds for AI moderation
     */
    automodThresholds?: Thresholds;
    blocklist?: string;
    blocklistBehavior?: ChannelConfigBlocklistBehaviorEnum;
    /**
     * List of commands that channel supports
     */
    commands: string[];
    connectEvents: boolean;
    createdAt: Date;
    customEvents: boolean;
    maxMessageLength: number;
    messageRetention: string;
    mutes: boolean;
    name: string;
    pushNotifications: boolean;
    quotes: boolean;
    reactions: boolean;
    readEvents: boolean;
    reminders: boolean;
    replies: boolean;
    search: boolean;
    typingEvents: boolean;
    updatedAt: Date;
    uploads: boolean;
    urlEnrichment: boolean;
}
