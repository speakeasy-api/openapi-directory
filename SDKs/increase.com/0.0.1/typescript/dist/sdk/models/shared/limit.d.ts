import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The interval for the metric. This is required if `metric` is `count` or `volume`.
 */
export declare enum LimitIntervalEnum {
    Transaction = "transaction",
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    AllTime = "all_time"
}
/**
 * The metric for the Limit.
 */
export declare enum LimitMetricEnum {
    Count = "count",
    Volume = "volume"
}
/**
 * The type of the model you wish to associate the Limit with.
 */
export declare enum LimitModelTypeEnum {
    Account = "account",
    AccountNumber = "account_number",
    Card = "card"
}
/**
 * The current status of the Limit.
 */
export declare enum LimitStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * A constant representing the object's type. For this resource it will always be `limit`.
 */
export declare enum LimitTypeEnum {
    Limit = "limit"
}
/**
 * You can set limits at the Account, Account Number, or Card level. Limits applied to Accounts will apply to all Account Numbers and Cards in the Account. You can specify any number of Limits and they will all be applied to inbound debits and card authorizations. Volume and count Limits are designed to prevent unauthorized debits.
 */
export declare class Limit extends SpeakeasyBase {
    /**
     * The Limit identifier.
     */
    id: string;
    /**
     * The interval for the metric. This is required if `metric` is `count` or `volume`.
     */
    interval: LimitIntervalEnum;
    /**
     * The metric for the Limit.
     */
    metric: LimitMetricEnum;
    /**
     * The identifier of the Account Number, Account, or Card the Limit applies to.
     */
    modelId: string;
    /**
     * The type of the model you wish to associate the Limit with.
     */
    modelType: LimitModelTypeEnum;
    /**
     * The current status of the Limit.
     */
    status: LimitStatusEnum;
    /**
     * A constant representing the object's type. For this resource it will always be `limit`.
     */
    type: LimitTypeEnum;
    /**
     * The value to evaluate the Limit against.
     */
    value: number;
}
