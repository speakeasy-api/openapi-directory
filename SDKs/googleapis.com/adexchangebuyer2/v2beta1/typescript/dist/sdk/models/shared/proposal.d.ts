import { SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";
import { ContactInformation } from "./contactinformation";
import { Deal, DealInput } from "./deal";
import { Note } from "./note";
import { PrivateData } from "./privatedata";
import { Seller, SellerInput } from "./seller";
/**
 * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.
 */
export declare class ProposalInput extends SpeakeasyBase {
    /**
     * Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID.
     */
    billedBuyer?: Buyer;
    /**
     * Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID.
     */
    buyer?: Buyer;
    /**
     * Contact information for the buyer.
     */
    buyerContacts?: ContactInformation[];
    /**
     * Buyers are allowed to store certain types of private data in a proposal/deal.
     */
    buyerPrivateData?: PrivateData;
    /**
     * The deals associated with this proposal. For Private Auction proposals (whose deals have NonGuaranteedAuctionTerms), there will only be one deal.
     */
    deals?: DealInput[];
    /**
     * The name for the proposal.
     */
    displayName?: string;
    /**
     * Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
     */
    seller?: SellerInput;
}
/**
 * Output only. The role of the last user that either updated the proposal or left a comment.
 */
export declare enum ProposalLastUpdaterOrCommentorRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}
/**
 * Output only. Indicates whether the buyer/seller created the proposal.
 */
export declare enum ProposalOriginatorRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}
/**
 * Output only. The current state of the proposal.
 */
export declare enum ProposalProposalStateEnum {
    ProposalStateUnspecified = "PROPOSAL_STATE_UNSPECIFIED",
    Proposed = "PROPOSED",
    BuyerAccepted = "BUYER_ACCEPTED",
    SellerAccepted = "SELLER_ACCEPTED",
    Canceled = "CANCELED",
    Finalized = "FINALIZED"
}
/**
 * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.
 */
export declare class Proposal extends SpeakeasyBase {
    /**
     * Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID.
     */
    billedBuyer?: Buyer;
    /**
     * Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID.
     */
    buyer?: Buyer;
    /**
     * Contact information for the buyer.
     */
    buyerContacts?: ContactInformation[];
    /**
     * Buyers are allowed to store certain types of private data in a proposal/deal.
     */
    buyerPrivateData?: PrivateData;
    /**
     * The deals associated with this proposal. For Private Auction proposals (whose deals have NonGuaranteedAuctionTerms), there will only be one deal.
     */
    deals?: Deal[];
    /**
     * The name for the proposal.
     */
    displayName?: string;
    /**
     * Output only. True if the proposal is being renegotiated.
     */
    isRenegotiating?: boolean;
    /**
     * Output only. True, if the buyside inventory setup is complete for this proposal.
     */
    isSetupComplete?: boolean;
    /**
     * Output only. The role of the last user that either updated the proposal or left a comment.
     */
    lastUpdaterOrCommentorRole?: ProposalLastUpdaterOrCommentorRoleEnum;
    /**
     * Output only. The notes associated with this proposal.
     */
    notes?: Note[];
    /**
     * Output only. Indicates whether the buyer/seller created the proposal.
     */
    originatorRole?: ProposalOriginatorRoleEnum;
    /**
     * Output only. Private auction ID if this proposal is a private auction proposal.
     */
    privateAuctionId?: string;
    /**
     * Output only. The unique ID of the proposal.
     */
    proposalId?: string;
    /**
     * Output only. The revision number for the proposal. Each update to the proposal or the deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made.
     */
    proposalRevision?: string;
    /**
     * Output only. The current state of the proposal.
     */
    proposalState?: ProposalProposalStateEnum;
    /**
     * Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
     */
    seller?: Seller;
    /**
     * Output only. Contact information for the seller.
     */
    sellerContacts?: ContactInformation[];
    /**
     * Output only. The terms and conditions set by the publisher for this proposal.
     */
    termsAndConditions?: string;
    /**
     * Output only. The time when the proposal was last revised.
     */
    updateTime?: string;
}
