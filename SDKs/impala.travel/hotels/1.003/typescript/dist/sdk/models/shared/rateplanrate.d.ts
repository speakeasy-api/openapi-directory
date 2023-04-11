import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare class RatePlanRate extends SpeakeasyBase {
    /**
     * The number of adults in the room for which this price applies.
     */
    adults: number;
    /**
     * An amount of money in the specified currency (used in the context of prices, fees, refunds etc.)
     */
    retailRate: Money;
    /**
     * Amount of room which can be sold for this occupancy level and room type at this rate price.
     */
    roomsSellable: number;
}
