import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The interval for the metric. Required if `metric` is `count` or `volume`.
 */
export declare enum CreateALimitParametersIntervalEnum {
    Transaction = "transaction",
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    AllTime = "all_time"
}
/**
 * The metric for the limit.
 */
export declare enum CreateALimitParametersMetricEnum {
    Count = "count",
    Volume = "volume"
}
export declare class CreateALimitParameters extends SpeakeasyBase {
    /**
     * The interval for the metric. Required if `metric` is `count` or `volume`.
     */
    interval?: CreateALimitParametersIntervalEnum;
    /**
     * The metric for the limit.
     */
    metric: CreateALimitParametersMetricEnum;
    /**
     * The identifier of the Account or Account Number you wish to associate the limit with.
     */
    modelId: string;
    /**
     * The value to test the limit against.
     */
    value: number;
}
