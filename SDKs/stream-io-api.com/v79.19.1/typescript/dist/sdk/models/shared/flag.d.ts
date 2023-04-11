import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about flagged user or message
 */
export declare class Flag extends SpeakeasyBase {
    /**
     * Date of the approval
     */
    approvedAt?: Date;
    /**
     * Date/time of creation
     */
    createdAt: Date;
    createdByAutomod: boolean;
    details?: Record<string, any>;
    /**
     * Date of the rejection
     */
    rejectedAt?: Date;
    /**
     * Date of the review
     */
    reviewedAt?: Date;
    /**
     * Represents any chat message
     */
    targetMessage?: Record<string, any>;
    /**
     * ID of flagged message
     */
    targetMessageId?: string;
    /**
     * Represents chat user
     */
    targetUser?: Record<string, any>;
    /**
     * Date/time of the last update
     */
    updatedAt: Date;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
}
