import { SpeakeasyBase } from "../../../internal/utils";
import { PricingSchedulePricingPeriod } from "./pricingschedulepricingperiod";
/**
 * Placement cap cost option.
 */
export declare enum PricingScheduleCapCostOptionEnum {
    CapCostNone = "CAP_COST_NONE",
    CapCostMonthly = "CAP_COST_MONTHLY",
    CapCostCumulative = "CAP_COST_CUMULATIVE"
}
/**
 * Placement pricing type. This field is required on insertion.
 */
export declare enum PricingSchedulePricingTypeEnum {
    PricingTypeCpm = "PRICING_TYPE_CPM",
    PricingTypeCpc = "PRICING_TYPE_CPC",
    PricingTypeCpa = "PRICING_TYPE_CPA",
    PricingTypeFlatRateImpressions = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS",
    PricingTypeFlatRateClicks = "PRICING_TYPE_FLAT_RATE_CLICKS",
    PricingTypeCpmActiveview = "PRICING_TYPE_CPM_ACTIVEVIEW"
}
/**
 * Pricing Schedule
 */
export declare class PricingSchedule extends SpeakeasyBase {
    /**
     * Placement cap cost option.
     */
    capCostOption?: PricingScheduleCapCostOptionEnum;
    endDate?: Date;
    /**
     * Whether this placement is flighted. If true, pricing periods will be computed automatically.
     */
    flighted?: boolean;
    /**
     * Floodlight activity ID associated with this placement. This field should be set when placement pricing type is set to PRICING_TYPE_CPA.
     */
    floodlightActivityId?: string;
    /**
     * Pricing periods for this placement.
     */
    pricingPeriods?: PricingSchedulePricingPeriod[];
    /**
     * Placement pricing type. This field is required on insertion.
     */
    pricingType?: PricingSchedulePricingTypeEnum;
    startDate?: Date;
    testingStartDate?: Date;
}
