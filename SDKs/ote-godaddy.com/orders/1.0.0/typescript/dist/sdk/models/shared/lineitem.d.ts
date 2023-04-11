import { SpeakeasyBase } from "../../../internal/utils";
import { LineItemPricing } from "./lineitempricing";
import { LineItemTaxCollector } from "./lineitemtaxcollector";
/**
 * The unit of time that periodCount is measured in
 */
export declare enum LineItemPeriodUnitEnum {
    Month = "MONTH",
    Quarter = "QUARTER",
    SemiAnnual = "SEMI_ANNUAL",
    Year = "YEAR",
    OneTime = "ONE_TIME"
}
export declare class LineItem extends SpeakeasyBase {
    /**
     * A collection of domain names purchased if the current product is domain
     */
    domains?: string[];
    /**
     * Human readable description of the current product
     */
    label: string;
    period?: number;
    /**
     * The unit of time that periodCount is measured in
     */
    periodUnit?: LineItemPeriodUnitEnum;
    /**
     * Unique identifier of the current product
     */
    pfid?: number;
    pricing: LineItemPricing;
    /**
     * Number of the current product included in the specified order
     */
    quantity: number;
    taxCollector?: LineItemTaxCollector;
}
