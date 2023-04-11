import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Feedback loop](https://support.google.com/mail/answer/6254652) identifier information.
 */
export declare class FeedbackLoop extends SpeakeasyBase {
    /**
     * Feedback loop identifier that uniquely identifies individual campaigns.
     */
    id?: string;
    /**
     * The ratio of user marked spam messages with the identifier vs the total number of inboxed messages with that identifier.
     */
    spamRatio?: number;
}
