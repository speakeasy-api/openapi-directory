import { SpeakeasyBase } from "../../../internal/utils";
import { DealTermsGuaranteedFixedPriceTerms } from "./dealtermsguaranteedfixedpriceterms";
import { DealTermsNonGuaranteedAuctionTerms } from "./dealtermsnonguaranteedauctionterms";
import { DealTermsNonGuaranteedFixedPriceTerms } from "./dealtermsnonguaranteedfixedpriceterms";
import { DealTermsRubiconNonGuaranteedTerms } from "./dealtermsrubiconnonguaranteedterms";
import { Price } from "./price";
export declare class DealTerms extends SpeakeasyBase {
    /**
     * Visibility of the URL in bid requests.
     */
    brandingType?: string;
    /**
     * Indicates that this ExternalDealId exists under at least two different AdxInventoryDeals. Currently, the only case that the same ExternalDealId will exist is programmatic cross sell case.
     */
    crossListedExternalDealIdType?: string;
    /**
     * Description for the proposed terms of the deal.
     */
    description?: string;
    estimatedGrossSpend?: Price;
    /**
     * Non-binding estimate of the impressions served per day Can be set by buyer or seller.
     */
    estimatedImpressionsPerDay?: string;
    guaranteedFixedPriceTerms?: DealTermsGuaranteedFixedPriceTerms;
    nonGuaranteedAuctionTerms?: DealTermsNonGuaranteedAuctionTerms;
    nonGuaranteedFixedPriceTerms?: DealTermsNonGuaranteedFixedPriceTerms;
    rubiconNonGuaranteedTerms?: DealTermsRubiconNonGuaranteedTerms;
    /**
     * For deals with Cost Per Day billing, defines the timezone used to mark the boundaries of a day (buyer-readonly)
     */
    sellerTimeZone?: string;
}
