import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The pay schedules' pay frequency
 */
export declare enum PaySchedulePaySchedulePayFrequencyEnum {
    Weekly = "Weekly",
    Monthly = "Monthly",
    TwoWeekly = "TwoWeekly",
    FourWeekly = "FourWeekly",
    Yearly = "Yearly"
}
export declare class PaySchedulePaySchedule extends SpeakeasyBase {
    /**
     * The pay schedules' meta data
     */
    metaData?: Record<string, any>;
    /**
     * The pay schedules' name
     */
    name?: string;
    /**
     * The pay schedules' pay frequency
     */
    payFrequency?: PaySchedulePaySchedulePayFrequencyEnum;
}
/**
 * The pay schedule object.
 */
export declare class PaySchedule extends SpeakeasyBase {
    paySchedule?: PaySchedulePaySchedule;
}
