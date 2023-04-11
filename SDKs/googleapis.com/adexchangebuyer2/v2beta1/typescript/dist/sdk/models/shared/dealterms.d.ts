import { SpeakeasyBase } from "../../../internal/utils";
import { GuaranteedFixedPriceTerms } from "./guaranteedfixedpriceterms";
import { NonGuaranteedAuctionTerms } from "./nonguaranteedauctionterms";
import { NonGuaranteedFixedPriceTerms } from "./nonguaranteedfixedpriceterms";
import { Price } from "./price";
/**
 * Visibility of the URL in bid requests. (default: BRANDED)
 */
export declare enum DealTermsBrandingTypeEnum {
    BrandingTypeUnspecified = "BRANDING_TYPE_UNSPECIFIED",
    Branded = "BRANDED",
    SemiTransparent = "SEMI_TRANSPARENT"
}
/**
 * The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher.
 */
export declare class DealTerms extends SpeakeasyBase {
    /**
     * Visibility of the URL in bid requests. (default: BRANDED)
     */
    brandingType?: DealTermsBrandingTypeEnum;
    /**
     * Publisher provided description for the terms.
     */
    description?: string;
    /**
     * Represents a price and a pricing type for a product / deal.
     */
    estimatedGrossSpend?: Price;
    /**
     * Non-binding estimate of the impressions served per day. Can be set by buyer or seller.
     */
    estimatedImpressionsPerDay?: string;
    /**
     * Terms for Programmatic Guaranteed Deals.
     */
    guaranteedFixedPriceTerms?: GuaranteedFixedPriceTerms;
    /**
     * Terms for Private Auctions. Note that Private Auctions can be created only by the seller, but they can be returned in a get or list request.
     */
    nonGuaranteedAuctionTerms?: NonGuaranteedAuctionTerms;
    /**
     * Terms for Preferred Deals.
     */
    nonGuaranteedFixedPriceTerms?: NonGuaranteedFixedPriceTerms;
    /**
     * The time zone name. For deals with Cost Per Day billing, defines the time zone used to mark the boundaries of a day. It should be an IANA TZ name, such as "America/Los_Angeles". For more information, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.
     */
    sellerTimeZone?: string;
}
