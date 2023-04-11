import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
/**
 * Defines a cohort selection criteria. A cohort is a group of users who share a common characteristic. For example, users with the same `firstSessionDate` belong to the same cohort.
 */
export declare class Cohort extends SpeakeasyBase {
    /**
     * A contiguous set of days: startDate, startDate + 1, ..., endDate. Requests are allowed up to 4 date ranges.
     */
    dateRange?: DateRange;
    /**
     * Dimension used by the cohort. Required and only supports `firstSessionDate`.
     */
    dimension?: string;
    /**
     * Assigns a name to this cohort. The dimension `cohort` is valued to this name in a report response. If set, cannot begin with `cohort_` or `RESERVED_`. If not set, cohorts are named by their zero based index `cohort_0`, `cohort_1`, etc.
     */
    name?: string;
}
