import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { InapplicabilityDetails } from "./inapplicabilitydetails";
import { PriceAmount } from "./priceamount";
import { RepricingProductReportBuyboxWinningProductStats } from "./repricingproductreportbuyboxwinningproductstats";
/**
 * Type of the rule.
 */
export declare enum RepricingProductReportTypeEnum {
    RepricingRuleTypeUnspecified = "REPRICING_RULE_TYPE_UNSPECIFIED",
    TypeStatsBased = "TYPE_STATS_BASED",
    TypeCogsBased = "TYPE_COGS_BASED",
    TypeSalesVolumeBased = "TYPE_SALES_VOLUME_BASED",
    TypeCompetitivePrice = "TYPE_COMPETITIVE_PRICE"
}
/**
 * Resource that represents a daily Repricing product report. Each report contains stats for a single type of Repricing rule for a single product on a given day. If there are multiple rules of the same type for the product on that day, the report lists all the rules by rule ids, combines the stats, and paginates the results by date. To retrieve the stats of a particular rule, provide the rule_id in the request.
 */
export declare class RepricingProductReport extends SpeakeasyBase {
    /**
     * Total count of Repricer applications. This value captures how many times the rule of this type was applied to this product during this reporting period.
     */
    applicationCount?: string;
    /**
     * Stats specific to buybox winning rules for product report.
     */
    buyboxWinningProductStats?: RepricingProductReportBuyboxWinningProductStats;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    date?: Date;
    /**
     * The price represented as a number and currency.
     */
    highWatermark?: PriceAmount;
    /**
     * List of all reasons the rule did not apply to the product during the specified reporting period.
     */
    inapplicabilityDetails?: InapplicabilityDetails[];
    /**
     * The price represented as a number and currency.
     */
    lowWatermark?: PriceAmount;
    /**
     * Total unit count of impacted products ordered while the rule was active on the date of the report. This count includes all orders that were started while the rule was active, even if the rule was no longer active when the order was completed.
     */
    orderItemCount?: number;
    /**
     * Ids of the Repricing rule for this report.
     */
    ruleIds?: string[];
    /**
     * The price represented as a number and currency.
     */
    totalGmv?: PriceAmount;
    /**
     * Type of the rule.
     */
    type?: RepricingProductReportTypeEnum;
}
