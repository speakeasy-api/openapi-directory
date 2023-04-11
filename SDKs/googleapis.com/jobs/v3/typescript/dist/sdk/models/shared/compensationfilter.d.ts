import { SpeakeasyBase } from "../../../internal/utils";
import { CompensationRange } from "./compensationrange";
/**
 * Required. Type of filter.
 */
export declare enum CompensationFilterTypeEnum {
    FilterTypeUnspecified = "FILTER_TYPE_UNSPECIFIED",
    UnitOnly = "UNIT_ONLY",
    UnitAndAmount = "UNIT_AND_AMOUNT",
    AnnualizedBaseAmount = "ANNUALIZED_BASE_AMOUNT",
    AnnualizedTotalAmount = "ANNUALIZED_TOTAL_AMOUNT"
}
export declare enum CompensationFilterUnitsEnum {
    CompensationUnitUnspecified = "COMPENSATION_UNIT_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Yearly = "YEARLY",
    OneTime = "ONE_TIME",
    OtherCompensationUnit = "OTHER_COMPENSATION_UNIT"
}
/**
 * Input only. Filter on job compensation type and amount.
 */
export declare class CompensationFilter extends SpeakeasyBase {
    /**
     * Optional. If set to true, jobs with unspecified compensation range fields are included.
     */
    includeJobsWithUnspecifiedCompensationRange?: boolean;
    /**
     * Compensation range.
     */
    range?: CompensationRange;
    /**
     * Required. Type of filter.
     */
    type?: CompensationFilterTypeEnum;
    /**
     * Required. Specify desired `base compensation entry's` CompensationInfo.CompensationUnit.
     */
    units?: CompensationFilterUnitsEnum[];
}
