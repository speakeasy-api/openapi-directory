import { SpeakeasyBase } from "../../../internal/utils";
import { ContactInformation } from "./contactinformation";
import { CreativeRestrictions } from "./creativerestrictions";
import { DealServingMetadata } from "./dealservingmetadata";
import { DealTerms } from "./dealterms";
import { DeliveryControl } from "./deliverycontrol";
import { MarketplaceTargeting } from "./marketplacetargeting";
import { PrivateData } from "./privatedata";
import { TargetingCriteria } from "./targetingcriteria";
/**
 * The syndication product associated with the deal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.
 */
export declare enum DealSyndicationProductEnum {
    SyndicationProductUnspecified = "SYNDICATION_PRODUCT_UNSPECIFIED",
    Content = "CONTENT",
    Mobile = "MOBILE",
    Video = "VIDEO",
    Games = "GAMES"
}
/**
 * A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
 */
export declare class DealInput extends SpeakeasyBase {
    /**
     * Proposed flight end time of the deal. This will generally be stored in a granularity of a second. A value is not required for Private Auction deals or Preferred Deals.
     */
    availableEndTime?: string;
    /**
     * Optional. Proposed flight start time of the deal. This will generally be stored in the granularity of one second since deal serving starts at seconds boundary. Any time specified with more granularity (for example, in milliseconds) will be truncated towards the start of time in seconds.
     */
    availableStartTime?: string;
    /**
     * Buyers are allowed to store certain types of private data in a proposal/deal.
     */
    buyerPrivateData?: PrivateData;
    /**
     * The product ID from which this deal was created. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.
     */
    createProductId?: string;
    /**
     * Optional. Revision number of the product that the deal was created from. If present on create, and the server `product_revision` has advanced since the passed-in `create_product_revision`, an `ABORTED` error will be returned. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.
     */
    createProductRevision?: string;
    /**
     * Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals.
     */
    creativeRestrictions?: CreativeRestrictions;
    /**
     * Message captures metadata about the serving status of a deal.
     */
    dealServingMetadata?: DealServingMetadata;
    /**
     * The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher.
     */
    dealTerms?: DealTerms;
    /**
     * Description for the deal terms.
     */
    description?: string;
    /**
     * The name of the deal.
     */
    displayName?: string;
    /**
     * The syndication product associated with the deal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.
     */
    syndicationProduct?: DealSyndicationProductEnum;
    /**
     * Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
     */
    targeting?: MarketplaceTargeting;
    /**
     * The shared targeting visible to buyers and sellers. Each shared targeting entity is AND'd together.
     */
    targetingCriterion?: TargetingCriteria[];
    /**
     * The web property code for the seller copied over from the product.
     */
    webPropertyCode?: string;
}
/**
 * Output only. Specifies the creative pre-approval policy.
 */
export declare enum DealCreativePreApprovalPolicyEnum {
    CreativePreApprovalPolicyUnspecified = "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
    SellerPreApprovalRequired = "SELLER_PRE_APPROVAL_REQUIRED",
    SellerPreApprovalNotRequired = "SELLER_PRE_APPROVAL_NOT_REQUIRED"
}
/**
 * Output only. Specifies whether the creative is safeFrame compatible.
 */
export declare enum DealCreativeSafeFrameCompatibilityEnum {
    CreativeSafeFrameCompatibilityUnspecified = "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
    Compatible = "COMPATIBLE",
    Incompatible = "INCOMPATIBLE"
}
/**
 * Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by buyer.
 */
export declare enum DealProgrammaticCreativeSourceEnum {
    ProgrammaticCreativeSourceUnspecified = "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
    Advertiser = "ADVERTISER",
    Publisher = "PUBLISHER"
}
/**
 * A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
 */
export declare class Deal extends SpeakeasyBase {
    /**
     * Proposed flight end time of the deal. This will generally be stored in a granularity of a second. A value is not required for Private Auction deals or Preferred Deals.
     */
    availableEndTime?: string;
    /**
     * Optional. Proposed flight start time of the deal. This will generally be stored in the granularity of one second since deal serving starts at seconds boundary. Any time specified with more granularity (for example, in milliseconds) will be truncated towards the start of time in seconds.
     */
    availableStartTime?: string;
    /**
     * Buyers are allowed to store certain types of private data in a proposal/deal.
     */
    buyerPrivateData?: PrivateData;
    /**
     * The product ID from which this deal was created. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.
     */
    createProductId?: string;
    /**
     * Optional. Revision number of the product that the deal was created from. If present on create, and the server `product_revision` has advanced since the passed-in `create_product_revision`, an `ABORTED` error will be returned. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.
     */
    createProductRevision?: string;
    /**
     * Output only. The time of the deal creation.
     */
    createTime?: string;
    /**
     * Output only. Specifies the creative pre-approval policy.
     */
    creativePreApprovalPolicy?: DealCreativePreApprovalPolicyEnum;
    /**
     * Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals.
     */
    creativeRestrictions?: CreativeRestrictions;
    /**
     * Output only. Specifies whether the creative is safeFrame compatible.
     */
    creativeSafeFrameCompatibility?: DealCreativeSafeFrameCompatibilityEnum;
    /**
     * Output only. A unique deal ID for the deal (server-assigned).
     */
    dealId?: string;
    /**
     * Message captures metadata about the serving status of a deal.
     */
    dealServingMetadata?: DealServingMetadata;
    /**
     * The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher.
     */
    dealTerms?: DealTerms;
    /**
     * Message contains details about how the deals will be paced.
     */
    deliveryControl?: DeliveryControl;
    /**
     * Description for the deal terms.
     */
    description?: string;
    /**
     * The name of the deal.
     */
    displayName?: string;
    /**
     * Output only. The external deal ID assigned to this deal once the deal is finalized. This is the deal ID that shows up in serving/reporting etc.
     */
    externalDealId?: string;
    /**
     * Output only. True, if the buyside inventory setup is complete for this deal.
     */
    isSetupComplete?: boolean;
    /**
     * Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by buyer.
     */
    programmaticCreativeSource?: DealProgrammaticCreativeSourceEnum;
    /**
     * Output only. ID of the proposal that this deal is part of.
     */
    proposalId?: string;
    /**
     * Output only. Seller contact information for the deal.
     */
    sellerContacts?: ContactInformation[];
    /**
     * The syndication product associated with the deal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.
     */
    syndicationProduct?: DealSyndicationProductEnum;
    /**
     * Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
     */
    targeting?: MarketplaceTargeting;
    /**
     * The shared targeting visible to buyers and sellers. Each shared targeting entity is AND'd together.
     */
    targetingCriterion?: TargetingCriteria[];
    /**
     * Output only. The time when the deal was last updated.
     */
    updateTime?: string;
    /**
     * The web property code for the seller copied over from the product.
     */
    webPropertyCode?: string;
}
