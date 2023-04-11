import { SpeakeasyBase } from "../../../internal/utils";
export declare class EmailCounts extends SpeakeasyBase {
    /**
     * The number of attachments on the email
     */
    attachments?: number;
    /**
     * The number of times links in the email were clicked
     */
    clicks?: number;
    /**
     * The number of replies the email received
     */
    replies?: number;
    /**
     * The number of unique devices that opened the email
     */
    uniqueDevices?: number;
    /**
     * The number of unique locations that opened the email
     */
    uniqueLocations?: number;
    /**
     * The number of times the email was opened
     */
    views?: number;
}
