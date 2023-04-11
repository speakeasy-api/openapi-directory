import { SpeakeasyBase } from "../../../internal/utils";
import { DealTermsGuaranteedFixedPriceTermsBillingInfo } from "./dealtermsguaranteedfixedpricetermsbillinginfo";
import { PricePerBuyer } from "./priceperbuyer";
export declare class DealTermsGuaranteedFixedPriceTerms extends SpeakeasyBase {
    billingInfo?: DealTermsGuaranteedFixedPriceTermsBillingInfo;
    /**
     * Fixed price for the specified buyer.
     */
    fixedPrices?: PricePerBuyer[];
    /**
     * Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy.
     */
    guaranteedImpressions?: string;
    /**
     * Count of guaranteed looks. Required for deal, optional for product. For CPD deals, buyer changes to guaranteed_looks will be ignored.
     */
    guaranteedLooks?: string;
    /**
     * Count of minimum daily looks for a CPD deal. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks.
     */
    minimumDailyLooks?: string;
}
