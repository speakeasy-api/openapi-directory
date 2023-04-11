import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The billingPeriod along with the billingPeriodUnit make up the time between billing cycles
 */
export declare enum ModelBillingPeriodEnum {
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
    Annually = "annually"
}
/**
 * The payee that will be paying for any payment processing fees
 */
export declare enum ModelFeePayerEnum {
    Developer = "developer",
    Marketplace = "marketplace"
}
/**
 * The license model type. Single allows a purchase to a single user or organization
 */
export declare enum ModelLicenseEnum {
    Single = "single"
}
/**
 * The pricing model subtype
 */
export declare enum ModelSubtypeEnum {
    Usage = "usage",
    Seat = "seat"
}
/**
 * The pricing model type. Free has no cost, single has a one time purchase cost and recurring requires a monthly subscription
 */
export declare enum ModelTypeEnum {
    Free = "free",
    Single = "single",
    Recurring = "recurring"
}
/**
 * The model that describes the cost and pricing for apps
 */
export declare class Model extends SpeakeasyBase {
    /**
     * The billingPeriod along with the billingPeriodUnit make up the time between billing cycles
     */
    billingPeriod?: ModelBillingPeriodEnum;
    /**
     * The billingPeriod along with the billingPeriodUnit make up the time between billing cycles
     */
    billingPeriodUnit?: number;
    /**
     * The marketplace commission applied to this app's model multiplied by 100 to include two digits for fractions of a percent
     */
    commission: number;
    /**
     * The ISO 4217 currency code for this price
     */
    currency: string;
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData?: Record<string, any>;
    /**
     * The payee that will be paying for any payment processing fees
     */
    feePayer: ModelFeePayerEnum;
    /**
     * The license model type. Single allows a purchase to a single user or organization
     */
    license: ModelLicenseEnum;
    /**
     * The id that uniquely identifies this model
     */
    modelId?: string;
    /**
     * The price of this app in cents
     */
    price: number;
    /**
     * The pricing model subtype
     */
    subtype?: ModelSubtypeEnum;
    /**
     * The maximum number of free trial days available
     */
    trial: number;
    /**
     * The pricing model type. Free has no cost, single has a one time purchase cost and recurring requires a monthly subscription
     */
    type: ModelTypeEnum;
}
