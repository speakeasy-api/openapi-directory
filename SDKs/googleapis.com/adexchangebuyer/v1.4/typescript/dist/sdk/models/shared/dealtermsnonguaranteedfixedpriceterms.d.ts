import { SpeakeasyBase } from "../../../internal/utils";
import { PricePerBuyer } from "./priceperbuyer";
export declare class DealTermsNonGuaranteedFixedPriceTerms extends SpeakeasyBase {
    /**
     * Fixed price for the specified buyer.
     */
    fixedPrices?: PricePerBuyer[];
}
