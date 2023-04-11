import { SpeakeasyBase } from "../../../internal/utils";
import { ModerationResponse } from "./moderationresponse";
import { Thresholds } from "./thresholds";
export declare class MessageModerationResult extends SpeakeasyBase {
    action: string;
    aiModerationResponse?: ModerationResponse;
    blockedWord?: string;
    blocklistName?: string;
    createdAt: Date;
    messageId: string;
    moderatedBy?: string;
    /**
     * Sets thresholds for AI moderation
     */
    moderationThresholds?: Thresholds;
    updatedAt: Date;
    userBadKarma: boolean;
    userKarma: number;
}
