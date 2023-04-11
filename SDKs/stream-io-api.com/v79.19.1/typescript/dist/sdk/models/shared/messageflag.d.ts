import { SpeakeasyBase } from "../../../internal/utils";
import { MessageModerationResult } from "./messagemoderationresult";
export declare class MessageFlag extends SpeakeasyBase {
    approvedAt?: Date;
    createdAt: Date;
    createdByAutomod: boolean;
    /**
     * Represents any chat message
     */
    message?: Record<string, any>;
    moderationResult?: MessageModerationResult;
    rejectedAt?: Date;
    reviewedAt?: Date;
    /**
     * Represents chat user
     */
    reviewedBy?: Record<string, any>;
    updatedAt: Date;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
}
