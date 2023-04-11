import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";
/**
 * Represents the price of the Offer.
 */
export declare class GoogleCloudChannelV1Price extends SpeakeasyBase {
    /**
     * Represents an amount of money with its currency type.
     */
    basePrice?: GoogleTypeMoney;
    /**
     * Discount percentage, represented as decimal. For example, a 20% discount will be represent as 0.2.
     */
    discount?: number;
    /**
     * Represents an amount of money with its currency type.
     */
    effectivePrice?: GoogleTypeMoney;
    /**
     * Link to external price list, such as link to Google Voice rate card.
     */
    externalPriceUri?: string;
}
