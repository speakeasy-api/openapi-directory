import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The time period in which the pacing budget will be spent. When automatic budget allocation is enabled at the insertion order via auto_budget_allocation, this field is output only and defaults to `PACING_PERIOD_FLIGHT`.
 */
export declare enum PacingPacingPeriodEnum {
    PacingPeriodUnspecified = "PACING_PERIOD_UNSPECIFIED",
    PacingPeriodDaily = "PACING_PERIOD_DAILY",
    PacingPeriodFlight = "PACING_PERIOD_FLIGHT"
}
/**
 * Required. The type of pacing that defines how the budget amount will be spent across the pacing_period.
 */
export declare enum PacingPacingTypeEnum {
    PacingTypeUnspecified = "PACING_TYPE_UNSPECIFIED",
    PacingTypeAhead = "PACING_TYPE_AHEAD",
    PacingTypeAsap = "PACING_TYPE_ASAP",
    PacingTypeEven = "PACING_TYPE_EVEN"
}
/**
 * Settings that control the rate at which a budget is spent.
 */
export declare class Pacing extends SpeakeasyBase {
    /**
     * Maximum number of impressions to serve every day. Applicable when the budget is impression based. Must be greater than 0.
     */
    dailyMaxImpressions?: string;
    /**
     * Maximum currency amount to spend every day in micros of advertiser's currency. Applicable when the budget is currency based. Must be greater than 0. For example, for 1.5 standard unit of the currency, set this field to 1500000. The value assigned will be rounded to whole billable units for the relevant currency by the following rules: any positive value less than a single billable unit will be rounded up to one billable unit and any value larger than a single billable unit will be rounded down to the nearest billable value. For example, if the currency's billable unit is 0.01, and this field is set to 10257770, it will round down to 10250000, a value of 10.25. If set to 505, it will round up to 10000, a value of 0.01.
     */
    dailyMaxMicros?: string;
    /**
     * Required. The time period in which the pacing budget will be spent. When automatic budget allocation is enabled at the insertion order via auto_budget_allocation, this field is output only and defaults to `PACING_PERIOD_FLIGHT`.
     */
    pacingPeriod?: PacingPacingPeriodEnum;
    /**
     * Required. The type of pacing that defines how the budget amount will be spent across the pacing_period.
     */
    pacingType?: PacingPacingTypeEnum;
}
