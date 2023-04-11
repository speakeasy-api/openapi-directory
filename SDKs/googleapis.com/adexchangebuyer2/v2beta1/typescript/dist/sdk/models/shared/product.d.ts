import { SpeakeasyBase } from "../../../internal/utils";
import { ContactInformation } from "./contactinformation";
import { DealTerms } from "./dealterms";
import { Seller } from "./seller";
import { TargetingCriteria } from "./targetingcriteria";
/**
 * The syndication product associated with the deal.
 */
export declare enum ProductSyndicationProductEnum {
    SyndicationProductUnspecified = "SYNDICATION_PRODUCT_UNSPECIFIED",
    Content = "CONTENT",
    Mobile = "MOBILE",
    Video = "VIDEO",
    Games = "GAMES"
}
/**
 * A product is a segment of inventory that a seller wants to sell. It is associated with certain terms and targeting information which helps the buyer know more about the inventory.
 */
export declare class Product extends SpeakeasyBase {
    /**
     * The proposed end time for the deal. The field will be truncated to the order of seconds during serving.
     */
    availableEndTime?: string;
    /**
     * Inventory availability dates. The start time will be truncated to seconds during serving. Thus, a field specified as 3:23:34.456 (HH:mm:ss.SSS) will be truncated to 3:23:34 when serving.
     */
    availableStartTime?: string;
    /**
     * Creation time.
     */
    createTime?: string;
    /**
     * Optional contact information for the creator of this product.
     */
    creatorContacts?: ContactInformation[];
    /**
     * The display name for this product as set by the seller.
     */
    displayName?: string;
    /**
     * If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false.
     */
    hasCreatorSignedOff?: boolean;
    /**
     * The unique ID for the product.
     */
    productId?: string;
    /**
     * The revision number of the product (auto-assigned by Marketplace).
     */
    productRevision?: string;
    /**
     * An ID which can be used by the Publisher Profile API to get more information about the seller that created this product.
     */
    publisherProfileId?: string;
    /**
     * Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
     */
    seller?: Seller;
    /**
     * The syndication product associated with the deal.
     */
    syndicationProduct?: ProductSyndicationProductEnum;
    /**
     * Targeting that is shared between the buyer and the seller. Each targeting criterion has a specified key and for each key there is a list of inclusion value or exclusion values.
     */
    targetingCriterion?: TargetingCriteria[];
    /**
     * The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher.
     */
    terms?: DealTerms;
    /**
     * Time of last update.
     */
    updateTime?: string;
    /**
     * The web-property code for the seller. This needs to be copied as is when adding a new deal to a proposal.
     */
    webPropertyCode?: string;
}
