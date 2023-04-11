import { SpeakeasyBase } from "../../../internal/utils";
import { PricePerBuyer } from "./priceperbuyer";
/**
 * Terms for Preferred Deals.
 */
export declare class NonGuaranteedFixedPriceTerms extends SpeakeasyBase {
    /**
     * Fixed price for the specified buyer.
     */
    fixedPrices?: PricePerBuyer[];
}
