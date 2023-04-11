import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * Estimated demand in relation to the item with the highest popularity rank in the same category and country in the previous week or month.
 */
export declare enum BestSellersPreviousRelativeDemandEnum {
    RelativeDemandUnspecified = "RELATIVE_DEMAND_UNSPECIFIED",
    VeryLow = "VERY_LOW",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    VeryHigh = "VERY_HIGH"
}
/**
 * Estimated demand in relation to the item with the highest popularity rank in the same category and country.
 */
export declare enum BestSellersRelativeDemandEnum {
    RelativeDemandUnspecified = "RELATIVE_DEMAND_UNSPECIFIED",
    VeryLow = "VERY_LOW",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    VeryHigh = "VERY_HIGH"
}
/**
 * Change in the estimated demand. Whether it rose, sank or remained flat.
 */
export declare enum BestSellersRelativeDemandChangeEnum {
    RelativeDemandChangeTypeUnspecified = "RELATIVE_DEMAND_CHANGE_TYPE_UNSPECIFIED",
    Sinker = "SINKER",
    Flat = "FLAT",
    Riser = "RISER"
}
/**
 * Granularity of the report. The ranking can be done over a week or a month timeframe. A `WHERE` condition on `best_sellers.report_granularity` is required in the query.
 */
export declare enum BestSellersReportGranularityEnum {
    ReportGranularityUnspecified = "REPORT_GRANULARITY_UNSPECIFIED",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY"
}
/**
 * Fields related to the [Best sellers reports](https://support.google.com/merchants/answer/9488679).
 */
export declare class BestSellers extends SpeakeasyBase {
    /**
     * Google product category ID to calculate the ranking for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). If a `WHERE` condition on `best_sellers.category_id` is not specified in the query, rankings for all top-level categories are returned.
     */
    categoryId?: string;
    /**
     * Country where the ranking is calculated. A `WHERE` condition on `best_sellers.country_code` is required in the query.
     */
    countryCode?: string;
    /**
     * Popularity rank in the previous week or month.
     */
    previousRank?: string;
    /**
     * Estimated demand in relation to the item with the highest popularity rank in the same category and country in the previous week or month.
     */
    previousRelativeDemand?: BestSellersPreviousRelativeDemandEnum;
    /**
     * Popularity on Shopping ads and free listings, in the selected category and country, based on the estimated number of units sold.
     */
    rank?: string;
    /**
     * Estimated demand in relation to the item with the highest popularity rank in the same category and country.
     */
    relativeDemand?: BestSellersRelativeDemandEnum;
    /**
     * Change in the estimated demand. Whether it rose, sank or remained flat.
     */
    relativeDemandChange?: BestSellersRelativeDemandChangeEnum;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    reportDate?: Date;
    /**
     * Granularity of the report. The ranking can be done over a week or a month timeframe. A `WHERE` condition on `best_sellers.report_granularity` is required in the query.
     */
    reportGranularity?: BestSellersReportGranularityEnum;
}
