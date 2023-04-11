import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Policy type.
 */
export declare enum ReturnPolicyOnlinePolicyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    NumberOfDaysAfterDelivery = "NUMBER_OF_DAYS_AFTER_DELIVERY",
    NoReturns = "NO_RETURNS",
    LifetimeReturns = "LIFETIME_RETURNS"
}
/**
 * The available policies.
 */
export declare class ReturnPolicyOnlinePolicy extends SpeakeasyBase {
    /**
     * The number of days items can be returned after delivery, where one day is defined to be 24 hours after the delivery timestamp. Required for `numberOfDaysAfterDelivery` returns.
     */
    days?: string;
    /**
     * Policy type.
     */
    type?: ReturnPolicyOnlinePolicyTypeEnum;
}
