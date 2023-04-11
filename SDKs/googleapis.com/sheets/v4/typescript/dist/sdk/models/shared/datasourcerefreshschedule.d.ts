import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceRefreshDailySchedule } from "./datasourcerefreshdailyschedule";
import { DataSourceRefreshMonthlySchedule } from "./datasourcerefreshmonthlyschedule";
import { DataSourceRefreshWeeklySchedule } from "./datasourcerefreshweeklyschedule";
import { Interval } from "./interval";
/**
 * The scope of the refresh. Must be ALL_DATA_SOURCES.
 */
export declare enum DataSourceRefreshScheduleRefreshScopeEnum {
    DataSourceRefreshScopeUnspecified = "DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED",
    AllDataSources = "ALL_DATA_SOURCES"
}
/**
 * Schedule for refreshing the data source. Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8am , the refresh will take place between 8am and 12pm every day.
 */
export declare class DataSourceRefreshSchedule extends SpeakeasyBase {
    /**
     * A schedule for data to refresh every day in a given time interval.
     */
    dailySchedule?: DataSourceRefreshDailySchedule;
    /**
     * True if the refresh schedule is enabled, or false otherwise.
     */
    enabled?: boolean;
    /**
     * A monthly schedule for data to refresh on specific days in the month in a given time interval.
     */
    monthlySchedule?: DataSourceRefreshMonthlySchedule;
    /**
     * Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
     */
    nextRun?: Interval;
    /**
     * The scope of the refresh. Must be ALL_DATA_SOURCES.
     */
    refreshScope?: DataSourceRefreshScheduleRefreshScopeEnum;
    /**
     * A weekly schedule for data to refresh on specific days in a given time interval.
     */
    weeklySchedule?: DataSourceRefreshWeeklySchedule;
}
