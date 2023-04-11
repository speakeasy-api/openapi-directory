import { SpeakeasyBase } from "../../../internal/utils";
export declare class EventReminder extends SpeakeasyBase {
    /**
     * The method used by this reminder. Possible values are:
     *
     * @remarks
     * - "email" - Reminders are sent via email.
     * - "popup" - Reminders are sent via a UI popup.
     * Required when adding a reminder.
     */
    method?: string;
    /**
     * Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).
     *
     * @remarks
     * Required when adding a reminder.
     */
    minutes?: number;
}
