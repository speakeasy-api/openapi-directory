package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProposalInput
 * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.
**/
public class ProposalInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billedBuyer")
    public Buyer billedBuyer;
    public ProposalInput withBilledBuyer(Buyer billedBuyer) {
        this.billedBuyer = billedBuyer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyer")
    public Buyer buyer;
    public ProposalInput withBuyer(Buyer buyer) {
        this.buyer = buyer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerContacts")
    public ContactInformation[] buyerContacts;
    public ProposalInput withBuyerContacts(ContactInformation[] buyerContacts) {
        this.buyerContacts = buyerContacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerPrivateData")
    public PrivateData buyerPrivateData;
    public ProposalInput withBuyerPrivateData(PrivateData buyerPrivateData) {
        this.buyerPrivateData = buyerPrivateData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deals")
    public DealInput[] deals;
    public ProposalInput withDeals(DealInput[] deals) {
        this.deals = deals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ProposalInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller")
    public SellerInput seller;
    public ProposalInput withSeller(SellerInput seller) {
        this.seller = seller;
        return this;
    }
}