import { SpeakeasyBase } from "../../../internal/utils";
import { Flight } from "./flight";
/**
 * Cap cost type of this inventory item.
 */
export declare enum PricingCapCostTypeEnum {
    PlanningPlacementCapCostTypeNone = "PLANNING_PLACEMENT_CAP_COST_TYPE_NONE",
    PlanningPlacementCapCostTypeMonthly = "PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY",
    PlanningPlacementCapCostTypeCumulative = "PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE"
}
/**
 * Group type of this inventory item if it represents a placement group. Is null otherwise. There are two type of placement groups: PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE is a simple group of inventory items that acts as a single pricing point for a group of tags. PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK is a group of inventory items that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned inventory items to be marked as primary.
 */
export declare enum PricingGroupTypeEnum {
    PlanningPlacementGroupTypePackage = "PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE",
    PlanningPlacementGroupTypeRoadblock = "PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK"
}
/**
 * Pricing type of this inventory item.
 */
export declare enum PricingPricingTypeEnum {
    PlanningPlacementPricingTypeImpressions = "PLANNING_PLACEMENT_PRICING_TYPE_IMPRESSIONS",
    PlanningPlacementPricingTypeCpm = "PLANNING_PLACEMENT_PRICING_TYPE_CPM",
    PlanningPlacementPricingTypeClicks = "PLANNING_PLACEMENT_PRICING_TYPE_CLICKS",
    PlanningPlacementPricingTypeCpc = "PLANNING_PLACEMENT_PRICING_TYPE_CPC",
    PlanningPlacementPricingTypeCpa = "PLANNING_PLACEMENT_PRICING_TYPE_CPA",
    PlanningPlacementPricingTypeFlatRateImpressions = "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_IMPRESSIONS",
    PlanningPlacementPricingTypeFlatRateClicks = "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_CLICKS",
    PlanningPlacementPricingTypeCpmActiveview = "PLANNING_PLACEMENT_PRICING_TYPE_CPM_ACTIVEVIEW"
}
/**
 * Pricing Information
 */
export declare class Pricing extends SpeakeasyBase {
    /**
     * Cap cost type of this inventory item.
     */
    capCostType?: PricingCapCostTypeEnum;
    endDate?: Date;
    /**
     * Flights of this inventory item. A flight (a.k.a. pricing period) represents the inventory item pricing information for a specific period of time.
     */
    flights?: Flight[];
    /**
     * Group type of this inventory item if it represents a placement group. Is null otherwise. There are two type of placement groups: PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE is a simple group of inventory items that acts as a single pricing point for a group of tags. PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK is a group of inventory items that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned inventory items to be marked as primary.
     */
    groupType?: PricingGroupTypeEnum;
    /**
     * Pricing type of this inventory item.
     */
    pricingType?: PricingPricingTypeEnum;
    startDate?: Date;
}
