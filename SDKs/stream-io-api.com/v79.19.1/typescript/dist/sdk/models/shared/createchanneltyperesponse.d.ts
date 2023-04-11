import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyRequest1 } from "./policyrequest1";
import { Thresholds } from "./thresholds";
export declare enum CreateChannelTypeResponseAutomodEnum {
    Disabled = "disabled",
    Simple = "simple",
    Ai = "AI"
}
export declare enum CreateChannelTypeResponseAutomodBehaviorEnum {
    Flag = "flag",
    Block = "block"
}
export declare enum CreateChannelTypeResponseBlocklistBehaviorEnum {
    Flag = "flag",
    Block = "block"
}
/**
 * Successful response
 */
export declare class CreateChannelTypeResponse extends SpeakeasyBase {
    automod: CreateChannelTypeResponseAutomodEnum;
    automodBehavior: CreateChannelTypeResponseAutomodBehaviorEnum;
    /**
     * Sets thresholds for AI moderation
     */
    automodThresholds?: Thresholds;
    blocklist?: string;
    blocklistBehavior?: CreateChannelTypeResponseBlocklistBehaviorEnum;
    commands: string[];
    connectEvents: boolean;
    createdAt: Date;
    customEvents: boolean;
    duration: string;
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
