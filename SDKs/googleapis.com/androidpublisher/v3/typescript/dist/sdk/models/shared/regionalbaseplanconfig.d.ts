import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Configuration for a base plan specific to a region.
 */
export declare class RegionalBasePlanConfig extends SpeakeasyBase {
    /**
     * Whether the base plan in the specified region is available for new subscribers. Existing subscribers will not have their subscription canceled if this value is set to false. If not specified, this will default to false.
     */
    newSubscriberAvailability?: boolean;
    /**
     * Represents an amount of money with its currency type.
     */
    price?: Money;
    /**
     * Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".
     */
    regionCode?: string;
}
