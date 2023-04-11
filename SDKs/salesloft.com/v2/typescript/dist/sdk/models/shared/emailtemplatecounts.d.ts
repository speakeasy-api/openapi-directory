import { SpeakeasyBase } from "../../../internal/utils";
export declare class EmailTemplateCounts extends SpeakeasyBase {
    /**
     * The number of bounces the email template received
     */
    bounces?: number;
    /**
     * The number of times links in the email template were clicked
     */
    clicks?: number;
    /**
     * The number of replies the email template received
     */
    replies?: number;
    /**
     * The number of times the email template was sent out
     */
    sentEmails?: number;
    /**
     * The number of times the email template was opened
     */
    views?: number;
}
