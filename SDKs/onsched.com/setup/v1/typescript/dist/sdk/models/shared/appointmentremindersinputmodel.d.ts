import { SpeakeasyBase } from "../../../internal/utils";
/**
 * input model for reminders
 */
export declare class AppointmentRemindersInputModel extends SpeakeasyBase {
    emailFirstReminder?: number;
    emailFirstReminderInterval?: number;
    emailSecondReminder?: number;
    emailSecondReminderInterval?: number;
    smsFirstReminder?: number;
    smsFirstReminderInterval?: number;
    smsSecondReminder?: number;
    smsSecondReminderInterval?: number;
}
