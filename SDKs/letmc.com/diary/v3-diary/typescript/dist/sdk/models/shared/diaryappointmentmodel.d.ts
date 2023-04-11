import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedPropertiesModel } from "./linkedpropertiesmodel";
/**
 * The number of minutes before the appointment start date/time to remind the staff member. -1 means don't remind.
 */
export declare enum DiaryAppointmentModelRemindBeforeEnum {
    Min = "Min",
    Min2 = "Min2",
    Min5 = "Min5",
    Min10 = "Min10",
    Min15 = "Min15",
    Min30 = "Min30",
    Min45 = "Min45",
    Hour = "Hour",
    Hour2 = "Hour2",
    Hour3 = "Hour3",
    Hour6 = "Hour6",
    Hour12 = "Hour12",
    Day = "Day",
    Day2 = "Day2",
    Day3 = "Day3",
    Week = "Week",
    NoReminder = "NoReminder"
}
/**
 * Represents a single diary appointment for a staff member.
 */
export declare class DiaryAppointmentModel extends SpeakeasyBase {
    /**
     * The diary appointment type.
     */
    appointmentType?: string;
    /**
     * Whether the appointment has been cancelled.
     */
    cancelled?: boolean;
    /**
     * The appointment comments text.
     */
    comment?: string;
    /**
     * The date/time this appointment was created.
     */
    createdAt?: Date;
    /**
     * The staff member that created this appointment.
     */
    createdBy?: string;
    /**
     * A unique identifier defining the object and change revision.
     */
    eTag?: string;
    /**
     * The end date/time of this appointment.
     */
    end?: Date;
    /**
     * A collection of properties linked to the appointment:-
     */
    linkedProperties?: LinkedPropertiesModel[];
    /**
     * Date appointment next repeats:-
     */
    nextRecurringDate?: Date;
    /**
     * The unique Object ID (OID).
     */
    oid?: string;
    /**
     * The reccurrence interval for the appointment:-
     */
    recurrence?: number;
    /**
     * The type of recurrence:-
     */
    recurrenceType?: string;
    /**
     * The date/time to remind the staff member of this appointment.
     */
    remindAt?: Date;
    /**
     * The number of minutes before the appointment start date/time to remind the staff member. -1 means don't remind.
     */
    remindBefore?: DiaryAppointmentModelRemindBeforeEnum;
    /**
     * The staff member holding this appointment.
     */
    staff?: string;
    /**
     * The start date/time of this appointment.
     */
    start?: Date;
    /**
     * The appointment subject text.
     */
    subject?: string;
}
