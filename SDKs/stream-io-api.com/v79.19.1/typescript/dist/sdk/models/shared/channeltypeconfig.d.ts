import { SpeakeasyBase } from "../../../internal/utils";
import { Command } from "./command";
import { PolicyRequest1 } from "./policyrequest1";
import { Thresholds } from "./thresholds";
export declare enum ChannelTypeConfigAutomodEnum {
    Disabled = "disabled",
    Simple = "simple",
    Ai = "AI"
}
export declare enum ChannelTypeConfigAutomodBehaviorEnum {
    Flag = "flag",
    Block = "block"
}
export declare enum ChannelTypeConfigBlocklistBehaviorEnum {
    Flag = "flag",
    Block = "block"
}
export declare class ChannelTypeConfig extends SpeakeasyBase {
    automod: ChannelTypeConfigAutomodEnum;
    automodBehavior: ChannelTypeConfigAutomodBehaviorEnum;
    /**
     * Sets thresholds for AI moderation
     */
    automodThresholds?: Thresholds;
    blocklist?: string;
    blocklistBehavior?: ChannelTypeConfigBlocklistBehaviorEnum;
    /**
     * List of commands that channel supports
     */
    commands: Command[];
    connectEvents: boolean;
    createdAt: Date;
    customEvents: boolean;
    grants: Record<string, string[]>;
    maxMessageLength: number;
    messageRetention: string;
    mutes: boolean;
    name: string;
    permissions: PolicyRequest1[];
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
