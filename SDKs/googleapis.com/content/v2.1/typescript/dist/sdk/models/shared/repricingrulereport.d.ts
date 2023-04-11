import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { InapplicabilityDetails } from "./inapplicabilitydetails";
import { PriceAmount } from "./priceamount";
import { RepricingRuleReportBuyboxWinningRuleStats } from "./repricingrulereportbuyboxwinningrulestats";
/**
 * Type of the rule.
 */
export declare enum RepricingRuleReportTypeEnum {
    RepricingRuleTypeUnspecified = "REPRICING_RULE_TYPE_UNSPECIFIED",
    TypeStatsBased = "TYPE_STATS_BASED",
    TypeCogsBased = "TYPE_COGS_BASED",
    TypeSalesVolumeBased = "TYPE_SALES_VOLUME_BASED",
    TypeCompetitivePrice = "TYPE_COMPETITIVE_PRICE"
}
/**
 * Resource that represents a daily Repricing rule report. Next ID: 11
 */
export declare class RepricingRuleReport extends SpeakeasyBase {
    /**
     * Stats specific to buybox winning rules for rule report.
     */
    buyboxWinningRuleStats?: RepricingRuleReportBuyboxWinningRuleStats;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    date?: Date;
    /**
     * List of product ids that are impacted by this rule during this reporting period. Out of stock products and products not searched for by customers are examples of non-impacted products.
     */
    impactedProducts?: string[];
    /**
     * List of all reasons the rule did not apply to the inapplicable products during the specified reporting period.
     */
    inapplicabilityDetails?: InapplicabilityDetails[];
    /**
     * List of product ids that are inapplicable to this rule during this reporting period. To get the inapplicable reason for a specific product, see RepricingProductReport.
     */
    inapplicableProducts?: string[];
    /**
     * Total unit count of impacted products ordered while the rule was active on the date of the report. This count includes all orders that were started while the rule was active, even if the rule was no longer active when the order was completed.
     */
    orderItemCount?: number;
    /**
     * Id of the Repricing rule for this report.
     */
    ruleId?: string;
    /**
     * The price represented as a number and currency.
     */
    totalGmv?: PriceAmount;
    /**
     * Type of the rule.
     */
    type?: RepricingRuleReportTypeEnum;
}
