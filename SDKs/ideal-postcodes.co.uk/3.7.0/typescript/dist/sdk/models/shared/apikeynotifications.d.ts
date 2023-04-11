import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApiKeyNotifications extends SpeakeasyBase {
    /**
     * A list of email addresses designated by you to receive notifications about this key.
     */
    emails: string[];
    /**
     * Indicates whether email notifications are enabled.
     */
    enabled: boolean;
}
