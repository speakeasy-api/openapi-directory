import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to reply to review or update existing reply.
 */
export declare class ReviewsReplyRequest extends SpeakeasyBase {
    /**
     * The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped.
     */
    replyText?: string;
}
