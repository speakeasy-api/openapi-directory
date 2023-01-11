package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Proposal
 * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer.
**/
public class Proposal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billedBuyer")
    public String billedBuyer;
    public Proposal withBilledBuyer(String billedBuyer) {
        this.billedBuyer = billedBuyer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyer")
    public String buyer;
    public Proposal withBuyer(String buyer) {
        this.buyer = buyer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerContacts")
    public Contact[] buyerContacts;
    public Proposal withBuyerContacts(Contact[] buyerContacts) {
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
    @JsonProperty("client")
    public String client;
    public Proposal withClient(String client) {
        this.client = client;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealType")
    public ProposalDealTypeEnum dealType;
    public Proposal withDealType(ProposalDealTypeEnum dealType) {
        this.dealType = dealType;
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
    @JsonProperty("lastUpdaterOrCommentorRole")
    public ProposalLastUpdaterOrCommentorRoleEnum lastUpdaterOrCommentorRole;
    public Proposal withLastUpdaterOrCommentorRole(ProposalLastUpdaterOrCommentorRoleEnum lastUpdaterOrCommentorRole) {
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
    @JsonProperty("pausingConsented")
    public Boolean pausingConsented;
    public Proposal withPausingConsented(Boolean pausingConsented) {
        this.pausingConsented = pausingConsented;
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
    @JsonProperty("publisherProfile")
    public String publisherProfile;
    public Proposal withPublisherProfile(String publisherProfile) {
        this.publisherProfile = publisherProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerContacts")
    public Contact[] sellerContacts;
    public Proposal withSellerContacts(Contact[] sellerContacts) {
        this.sellerContacts = sellerContacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ProposalStateEnum state;
    public Proposal withState(ProposalStateEnum state) {
        this.state = state;
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