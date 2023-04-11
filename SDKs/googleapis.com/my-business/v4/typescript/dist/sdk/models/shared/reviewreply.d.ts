import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the location owner/manager's reply to a review.
 */
export declare class ReviewReply extends SpeakeasyBase {
    /**
     * The body of the reply as plain text with markups. The maximum length is 4096 bytes.
     */
    comment?: string;
    /**
     * Output only. The timestamp for when the reply was last modified.
     */
    updateTime?: string;
}
