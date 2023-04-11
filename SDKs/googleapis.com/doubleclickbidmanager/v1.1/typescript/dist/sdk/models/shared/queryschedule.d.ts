import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How often the query is run.
 */
export declare enum QueryScheduleFrequencyEnum {
    OneTime = "ONE_TIME",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    SemiMonthly = "SEMI_MONTHLY",
    Monthly = "MONTHLY",
    Quarterly = "QUARTERLY",
    Yearly = "YEARLY"
}
/**
 * Information on how frequently and when to run a query.
 */
export declare class QuerySchedule extends SpeakeasyBase {
    /**
     * Datetime to periodically run the query until.
     */
    endTimeMs?: string;
    /**
     * How often the query is run.
     */
    frequency?: QueryScheduleFrequencyEnum;
    /**
     * Time of day at which a new report will be generated, represented as minutes past midnight. Range is 0 to 1439. Only applies to scheduled reports.
     */
    nextRunMinuteOfDay?: number;
    /**
     * Canonical timezone code for report generation time. Defaults to America/New_York.
     */
    nextRunTimezoneCode?: string;
    /**
     * When to start running the query. Not applicable to `ONE_TIME` frequency.
     */
    startTimeMs?: string;
}
