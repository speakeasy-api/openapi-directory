package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Proposal
 * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.
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
    @JsonProperty("deals")
    public Deal[] deals;
    public Proposal withDeals(Deal[] deals) {
        this.deals = deals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Proposal withDisplayName(String displayName) {
        this.displayName = displayName;
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
    @JsonProperty("lastUpdaterOrCommentorRole")
    public ProposalLastUpdaterOrCommentorRoleEnum lastUpdaterOrCommentorRole;
    public Proposal withLastUpdaterOrCommentorRole(ProposalLastUpdaterOrCommentorRoleEnum lastUpdaterOrCommentorRole) {
        this.lastUpdaterOrCommentorRole = lastUpdaterOrCommentorRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public Note[] notes;
    public Proposal withNotes(Note[] notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originatorRole")
    public ProposalOriginatorRoleEnum originatorRole;
    public Proposal withOriginatorRole(ProposalOriginatorRoleEnum originatorRole) {
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
    @JsonProperty("proposalRevision")
    public String proposalRevision;
    public Proposal withProposalRevision(String proposalRevision) {
        this.proposalRevision = proposalRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalState")
    public ProposalProposalStateEnum proposalState;
    public Proposal withProposalState(ProposalProposalStateEnum proposalState) {
        this.proposalState = proposalState;
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
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsAndConditions")
    public String termsAndConditions;
    public Proposal withTermsAndConditions(String termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Proposal withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}