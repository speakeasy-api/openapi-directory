import { SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";
import { ContactInformation } from "./contactinformation";
import { MarketplaceLabel } from "./marketplacelabel";
import { PrivateData } from "./privatedata";
import { Seller } from "./seller";
/**
 * Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:
 *
 * @remarks
 *
 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
 */
export declare class Proposal extends SpeakeasyBase {
    billedBuyer?: Buyer;
    buyer?: Buyer;
    /**
     * Optional contact information of the buyer. (seller-readonly)
     */
    buyerContacts?: ContactInformation[];
    buyerPrivateData?: PrivateData;
    /**
     * IDs of DBM advertisers permission to this proposal.
     */
    dbmAdvertiserIds?: string[];
    /**
     * When an proposal is in an accepted state, indicates whether the buyer has signed off. Once both sides have signed off on a deal, the proposal can be finalized by the seller. (seller-readonly)
     */
    hasBuyerSignedOff?: boolean;
    /**
     * When an proposal is in an accepted state, indicates whether the buyer has signed off Once both sides have signed off on a deal, the proposal can be finalized by the seller. (buyer-readonly)
     */
    hasSellerSignedOff?: boolean;
    /**
     * What exchange will provide this inventory (readonly, except on create).
     */
    inventorySource?: string;
    /**
     * True if the proposal is being renegotiated (readonly).
     */
    isRenegotiating?: boolean;
    /**
     * True, if the buyside inventory setup is complete for this proposal. (readonly, except via OrderSetupCompleted action) Deprecated in favor of deal level setup complete flag.
     */
    isSetupComplete?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#proposal".
     */
    kind?: string;
    /**
     * List of labels associated with the proposal. (readonly)
     */
    labels?: MarketplaceLabel[];
    /**
     * The role of the last user that either updated the proposal or left a comment. (readonly)
     */
    lastUpdaterOrCommentorRole?: string;
    /**
     * The name for the proposal (updatable)
     */
    name?: string;
    /**
     * Optional negotiation id if this proposal is a preferred deal proposal.
     */
    negotiationId?: string;
    /**
     * Indicates whether the buyer/seller created the proposal.(readonly)
     */
    originatorRole?: string;
    /**
     * Optional private auction id if this proposal is a private auction proposal.
     */
    privateAuctionId?: string;
    /**
     * The unique id of the proposal. (readonly).
     */
    proposalId?: string;
    /**
     * The current state of the proposal. (readonly)
     */
    proposalState?: string;
    /**
     * The revision number for the proposal (readonly).
     */
    revisionNumber?: string;
    /**
     * The time (ms since epoch) when the proposal was last revised (readonly).
     */
    revisionTimeMs?: string;
    seller?: Seller;
    /**
     * Optional contact information of the seller (buyer-readonly).
     */
    sellerContacts?: ContactInformation[];
}
