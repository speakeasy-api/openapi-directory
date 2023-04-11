import { SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";
import { ContactInformation } from "./contactinformation";
import { DealTerms } from "./dealterms";
import { DeliveryControl } from "./deliverycontrol";
import { MarketplaceLabel } from "./marketplacelabel";
import { PublisherProvidedForecast } from "./publisherprovidedforecast";
import { Seller } from "./seller";
import { SharedTargeting } from "./sharedtargeting";
/**
 * A product is segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps buyer know more about the inventory. Each field in a product can have one of the following setting:
 *
 * @remarks
 *
 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
 */
export declare class Product extends SpeakeasyBase {
    billedBuyer?: Buyer;
    buyer?: Buyer;
    /**
     * Creation time in ms. since epoch (readonly)
     */
    creationTimeMs?: string;
    /**
     * Optional contact information for the creator of this product. (buyer-readonly)
     */
    creatorContacts?: ContactInformation[];
    /**
     * The role that created the offer. Set to BUYER for buyer initiated offers.
     */
    creatorRole?: string;
    deliveryControl?: DeliveryControl;
    /**
     * The proposed end time for the deal (ms since epoch) (buyer-readonly)
     */
    flightEndTimeMs?: string;
    /**
     * Inventory availability dates. (times are in ms since epoch) The granularity is generally in the order of seconds. (buyer-readonly)
     */
    flightStartTimeMs?: string;
    /**
     * If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false.
     */
    hasCreatorSignedOff?: boolean;
    /**
     * What exchange will provide this inventory (readonly, except on create).
     */
    inventorySource?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#product".
     */
    kind?: string;
    /**
     * Optional List of labels for the product (optional, buyer-readonly).
     */
    labels?: MarketplaceLabel[];
    /**
     * Time of last update in ms. since epoch (readonly)
     */
    lastUpdateTimeMs?: string;
    /**
     * Optional legacy offer id if this offer is a preferred deal offer.
     */
    legacyOfferId?: string;
    /**
     * Marketplace publisher profile Id. This Id differs from the regular publisher_profile_id in that 1. This is a new id, the old Id will be deprecated in 2017. 2. This id uniquely identifies a publisher profile by itself.
     */
    marketplacePublisherProfileId?: string;
    /**
     * The name for this product as set by the seller. (buyer-readonly)
     */
    name?: string;
    /**
     * Optional private auction id if this offer is a private auction offer.
     */
    privateAuctionId?: string;
    /**
     * The unique id for the product (readonly)
     */
    productId?: string;
    /**
     * Id of the publisher profile for a given seller. A (seller.account_id, publisher_profile_id) pair uniquely identifies a publisher profile. Buyers can call the PublisherProfiles::List endpoint to get a list of publisher profiles for a given seller.
     */
    publisherProfileId?: string;
    /**
     * This message carries publisher provided forecasting information.
     */
    publisherProvidedForecast?: PublisherProvidedForecast;
    /**
     * The revision number of the product. (readonly)
     */
    revisionNumber?: string;
    seller?: Seller;
    /**
     * Targeting that is shared between the buyer and the seller. Each targeting criteria has a specified key and for each key there is a list of inclusion value or exclusion values. (buyer-readonly)
     */
    sharedTargetings?: SharedTargeting[];
    /**
     * The state of the product. (buyer-readonly)
     */
    state?: string;
    /**
     * The syndication product associated with the deal. (readonly, except on create)
     */
    syndicationProduct?: string;
    terms?: DealTerms;
    /**
     * The web property code for the seller. This field is meant to be copied over as is when creating deals.
     */
    webPropertyCode?: string;
}
