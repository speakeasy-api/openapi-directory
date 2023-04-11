import { SpeakeasyBase } from "../../../internal/utils";
import { CompensationRange } from "./compensationrange";
import { Money } from "./money";
/**
 * Optional. Compensation type. Default is CompensationUnit.COMPENSATION_TYPE_UNSPECIFIED.
 */
export declare enum CompensationEntryTypeEnum {
    CompensationTypeUnspecified = "COMPENSATION_TYPE_UNSPECIFIED",
    Base = "BASE",
    Bonus = "BONUS",
    SigningBonus = "SIGNING_BONUS",
    Equity = "EQUITY",
    ProfitSharing = "PROFIT_SHARING",
    Commissions = "COMMISSIONS",
    Tips = "TIPS",
    OtherCompensationType = "OTHER_COMPENSATION_TYPE"
}
/**
 * Optional. Frequency of the specified amount. Default is CompensationUnit.COMPENSATION_UNIT_UNSPECIFIED.
 */
export declare enum CompensationEntryUnitEnum {
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
 * A compensation entry that represents one component of compensation, such as base pay, bonus, or other compensation type. Annualization: One compensation entry can be annualized if - it contains valid amount or range. - and its expected_units_per_year is set or can be derived. Its annualized range is determined as (amount or range) times expected_units_per_year.
 */
export declare class CompensationEntry extends SpeakeasyBase {
    /**
     * Represents an amount of money with its currency type.
     */
    amount?: Money;
    /**
     * Optional. Compensation description. For example, could indicate equity terms or provide additional context to an estimated bonus.
     */
    description?: string;
    /**
     * Optional. Expected number of units paid each year. If not specified, when Job.employment_types is FULLTIME, a default value is inferred based on unit. Default values: - HOURLY: 2080 - DAILY: 260 - WEEKLY: 52 - MONTHLY: 12 - ANNUAL: 1
     */
    expectedUnitsPerYear?: number;
    /**
     * Compensation range.
     */
    range?: CompensationRange;
    /**
     * Optional. Compensation type. Default is CompensationUnit.COMPENSATION_TYPE_UNSPECIFIED.
     */
    type?: CompensationEntryTypeEnum;
    /**
     * Optional. Frequency of the specified amount. Default is CompensationUnit.COMPENSATION_UNIT_UNSPECIFIED.
     */
    unit?: CompensationEntryUnitEnum;
}
