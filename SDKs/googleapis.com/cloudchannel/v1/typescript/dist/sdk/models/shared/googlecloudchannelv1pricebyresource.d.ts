import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Price } from "./googlecloudchannelv1price";
import { GoogleCloudChannelV1PricePhase } from "./googlecloudchannelv1pricephase";
/**
 * Resource Type. Example: SEAT
 */
export declare enum GoogleCloudChannelV1PriceByResourceResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    Seat = "SEAT",
    Mau = "MAU",
    Gb = "GB",
    LicensedUser = "LICENSED_USER",
    Minutes = "MINUTES",
    IaasUsage = "IAAS_USAGE",
    Subscription = "SUBSCRIPTION"
}
/**
 * Represents price by resource type.
 */
export declare class GoogleCloudChannelV1PriceByResource extends SpeakeasyBase {
    /**
     * Represents the price of the Offer.
     */
    price?: GoogleCloudChannelV1Price;
    /**
     * Specifies the price by time range.
     */
    pricePhases?: GoogleCloudChannelV1PricePhase[];
    /**
     * Resource Type. Example: SEAT
     */
    resourceType?: GoogleCloudChannelV1PriceByResourceResourceTypeEnum;
}
