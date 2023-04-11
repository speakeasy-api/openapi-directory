import { SpeakeasyBase } from "../../../internal/utils";
export declare class StatusParams extends SpeakeasyBase {
    /**
     * application_id
     */
    applicationId?: string;
    /**
     * in_reply_to_id
     */
    inReplyToId?: string;
    /**
     * media_ids
     */
    mediaIds?: string[];
    /**
     * scheduled_at
     */
    scheduledAt?: Date;
    /**
     * sensitive
     */
    sensitive?: boolean;
    /**
     * spoiler_text
     */
    spoilerText?: string;
    /**
     * text
     */
    text?: string;
    /**
     * visibility
     */
    visibility?: string;
}
