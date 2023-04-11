import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
/**
 * Type of the cohort. The only supported type as of now is `FIRST_VISIT_DATE`. If this field is unspecified the cohort is treated as `FIRST_VISIT_DATE` type cohort.
 */
export declare enum CohortTypeEnum {
    UnspecifiedCohortType = "UNSPECIFIED_COHORT_TYPE",
    FirstVisitDate = "FIRST_VISIT_DATE"
}
/**
 * Defines a cohort. A cohort is a group of users who share a common characteristic. For example, all users with the same acquisition date belong to the same cohort.
 */
export declare class Cohort extends SpeakeasyBase {
    /**
     * A contiguous set of days: startDate, startDate + 1 day, ..., endDate. The start and end dates are specified in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`.
     */
    dateRange?: DateRange;
    /**
     * A unique name for the cohort. If not defined name will be auto-generated with values cohort_[1234...].
     */
    name?: string;
    /**
     * Type of the cohort. The only supported type as of now is `FIRST_VISIT_DATE`. If this field is unspecified the cohort is treated as `FIRST_VISIT_DATE` type cohort.
     */
    type?: CohortTypeEnum;
}
