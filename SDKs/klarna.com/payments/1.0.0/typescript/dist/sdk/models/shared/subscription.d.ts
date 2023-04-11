import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The cadence unit for this.
 */
export declare enum SubscriptionIntervalEnum {
    Day = "DAY",
    Week = "WEEK",
    Month = "MONTH",
    Year = "YEAR"
}
export declare class Subscription extends SpeakeasyBase {
    /**
     * The cadence unit for this.
     */
    interval: SubscriptionIntervalEnum;
    /**
     * The number of intervals
     */
    intervalCount: number;
    /**
     * The name of the subscription product
     */
    name: string;
}
