import { SpeakeasyBase } from "../../../internal/utils";
import { Profanity } from "./profanity";
/**
 * Text describing the reason for the current status
 */
export declare enum StatusReasonEnum {
    Profanity = "profanity",
    Spam = "spam"
}
/**
 * The current status value
 */
export declare enum StatusValueEnum {
    Pending = "pending",
    Spam = "spam",
    Flagged = "flagged",
    Approved = "approved"
}
/**
 * The current status of this review
 */
export declare class Status extends SpeakeasyBase {
    /**
     * A list of profanity found in this review
     */
    profanity: Profanity[];
    /**
     * Text describing the reason for the current status
     */
    reason: StatusReasonEnum;
    /**
     * The current status value
     */
    value: StatusValueEnum;
}
