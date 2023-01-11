import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PaySchedulePaySchedulePayFrequencyEnum {
    Weekly = "Weekly",
    Monthly = "Monthly",
    TwoWeekly = "TwoWeekly",
    FourWeekly = "FourWeekly",
    Yearly = "Yearly"
}
export declare class PaySchedulePaySchedule extends SpeakeasyBase {
    metaData?: Record<string, any>;
    name?: string;
    payFrequency?: PaySchedulePaySchedulePayFrequencyEnum;
}
export declare class PaySchedule extends SpeakeasyBase {
    paySchedule?: PaySchedulePaySchedule;
}
