import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Price } from "./googlecloudchannelv1price";
import { GoogleCloudChannelV1PriceTier } from "./googlecloudchannelv1pricetier";
/**
 * Defines the phase period type.
 */
export declare enum GoogleCloudChannelV1PricePhasePeriodTypeEnum {
    PeriodTypeUnspecified = "PERIOD_TYPE_UNSPECIFIED",
    Day = "DAY",
    Month = "MONTH",
    Year = "YEAR"
}
/**
 * Specifies the price by the duration of months. For example, a 20% discount for the first six months, then a 10% discount starting on the seventh month.
 */
export declare class GoogleCloudChannelV1PricePhase extends SpeakeasyBase {
    /**
     * Defines first period for the phase.
     */
    firstPeriod?: number;
    /**
     * Defines first period for the phase.
     */
    lastPeriod?: number;
    /**
     * Defines the phase period type.
     */
    periodType?: GoogleCloudChannelV1PricePhasePeriodTypeEnum;
    /**
     * Represents the price of the Offer.
     */
    price?: GoogleCloudChannelV1Price;
    /**
     * Price by the resource tiers.
     */
    priceTiers?: GoogleCloudChannelV1PriceTier[];
}
