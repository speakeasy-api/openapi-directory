import { SpeakeasyBase } from "../../../internal/utils";
export declare class PersonCounts extends SpeakeasyBase {
    /**
     * The number of calls logged to this person
     */
    calls?: number;
    /**
     * The number of unique emails sent to this person that bounced
     */
    emailsBounced?: number;
    /**
     * The number of unique emails clicked by this person
     */
    emailsClicked?: number;
    /**
     * The number of unique emails replied to by this person
     */
    emailsRepliedTo?: number;
    /**
     * The number of emails sent to this person
     */
    emailsSent?: number;
    /**
     * The number of unique emails viewed by this person
     */
    emailsViewed?: number;
}
