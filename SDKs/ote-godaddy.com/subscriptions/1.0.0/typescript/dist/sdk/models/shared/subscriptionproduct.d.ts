import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The unit of time that `renewalPeriod` is measured in
 */
export declare enum SubscriptionProductRenewalPeriodUnitEnum {
    Month = "MONTH",
    Quarter = "QUARTER",
    SemiAnnual = "SEMI_ANNUAL",
    Year = "YEAR"
}
export declare class SubscriptionProduct extends SpeakeasyBase {
    /**
     * A human readable description of the Product that is subscribed
     */
    label: string;
    /**
     * Grouping of related Subscriptions
     */
    namespace: string;
    /**
     * Unique identifier of the Product that is subscribed
     */
    pfid: number;
    /**
     * Primary key of a grouping of related Subscriptions
     */
    productGroupKey: string;
    /**
     * The number of `renewalPeriodUnits` that will be added by the `renewalPfid`
     */
    renewalPeriod: number;
    /**
     * The unit of time that `renewalPeriod` is measured in
     */
    renewalPeriodUnit: SubscriptionProductRenewalPeriodUnitEnum;
    /**
     * Unique identifier of the renewal Product
     */
    renewalPfid: number;
    /**
     * Whether the product supports the `billOn` option on the renewal endpoint
     */
    supportBillOn: boolean;
}
