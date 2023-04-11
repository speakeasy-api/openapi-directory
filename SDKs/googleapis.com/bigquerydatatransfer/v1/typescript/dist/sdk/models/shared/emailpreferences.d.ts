import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents preferences for sending email notifications for transfer run events.
 */
export declare class EmailPreferences extends SpeakeasyBase {
    /**
     * If true, email notifications will be sent on transfer run failures.
     */
    enableFailureEmail?: boolean;
}
