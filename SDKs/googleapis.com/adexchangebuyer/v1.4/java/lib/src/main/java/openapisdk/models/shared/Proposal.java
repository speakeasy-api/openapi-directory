package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Proposal
 * Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:
 * 
 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
**/
public class Proposal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billedBuyer")
    public Buyer billedBuyer;
    public Proposal withBilledBuyer(Buyer billedBuyer) {
        this.billedBuyer = billedBuyer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyer")
    public Buyer buyer;
    public Proposal withBuyer(Buyer buyer) {
        this.buyer = buyer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerContacts")
    public ContactInformation[] buyerContacts;
    public Proposal withBuyerContacts(ContactInformation[] buyerContacts) {
        this.buyerContacts = buyerContacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerPrivateData")
    public PrivateData buyerPrivateData;
    public Proposal withBuyerPrivateData(PrivateData buyerPrivateData) {
        this.buyerPrivateData = buyerPrivateData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dbmAdvertiserIds")
    public String[] dbmAdvertiserIds;
    public Proposal withDbmAdvertiserIds(String[] dbmAdvertiserIds) {
        this.dbmAdvertiserIds = dbmAdvertiserIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasBuyerSignedOff")
    public Boolean hasBuyerSignedOff;
    public Proposal withHasBuyerSignedOff(Boolean hasBuyerSignedOff) {
        this.hasBuyerSignedOff = hasBuyerSignedOff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasSellerSignedOff")
    public Boolean hasSellerSignedOff;
    public Proposal withHasSellerSignedOff(Boolean hasSellerSignedOff) {
        this.hasSellerSignedOff = hasSellerSignedOff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySource")
    public String inventorySource;
    public Proposal withInventorySource(String inventorySource) {
        this.inventorySource = inventorySource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isRenegotiating")
    public Boolean isRenegotiating;
    public Proposal withIsRenegotiating(Boolean isRenegotiating) {
        this.isRenegotiating = isRenegotiating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSetupComplete")
    public Boolean isSetupComplete;
    public Proposal withIsSetupComplete(Boolean isSetupComplete) {
        this.isSetupComplete = isSetupComplete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Proposal withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public MarketplaceLabel[] labels;
    public Proposal withLabels(MarketplaceLabel[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdaterOrCommentorRole")
    public String lastUpdaterOrCommentorRole;
    public Proposal withLastUpdaterOrCommentorRole(String lastUpdaterOrCommentorRole) {
        this.lastUpdaterOrCommentorRole = lastUpdaterOrCommentorRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Proposal withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negotiationId")
    public String negotiationId;
    public Proposal withNegotiationId(String negotiationId) {
        this.negotiationId = negotiationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originatorRole")
    public String originatorRole;
    public Proposal withOriginatorRole(String originatorRole) {
        this.originatorRole = originatorRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateAuctionId")
    public String privateAuctionId;
    public Proposal withPrivateAuctionId(String privateAuctionId) {
        this.privateAuctionId = privateAuctionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalId")
    public String proposalId;
    public Proposal withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalState")
    public String proposalState;
    public Proposal withProposalState(String proposalState) {
        this.proposalState = proposalState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionNumber")
    public String revisionNumber;
    public Proposal withRevisionNumber(String revisionNumber) {
        this.revisionNumber = revisionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionTimeMs")
    public String revisionTimeMs;
    public Proposal withRevisionTimeMs(String revisionTimeMs) {
        this.revisionTimeMs = revisionTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller")
    public Seller seller;
    public Proposal withSeller(Seller seller) {
        this.seller = seller;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerContacts")
    public ContactInformation[] sellerContacts;
    public Proposal withSellerContacts(ContactInformation[] sellerContacts) {
        this.sellerContacts = sellerContacts;
        return this;
    }
}