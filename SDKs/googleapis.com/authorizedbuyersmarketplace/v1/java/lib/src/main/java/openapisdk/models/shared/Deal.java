package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Deal
 * A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
**/
public class Deal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billedBuyer")
    public String billedBuyer;
    public Deal withBilledBuyer(String billedBuyer) {
        this.billedBuyer = billedBuyer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyer")
    public String buyer;
    public Deal withBuyer(String buyer) {
        this.buyer = buyer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client")
    public String client;
    public Deal withClient(String client) {
        this.client = client;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Deal withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeRequirements")
    public CreativeRequirements creativeRequirements;
    public Deal withCreativeRequirements(CreativeRequirements creativeRequirements) {
        this.creativeRequirements = creativeRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealType")
    public DealDealTypeEnum dealType;
    public Deal withDealType(DealDealTypeEnum dealType) {
        this.dealType = dealType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryControl")
    public DeliveryControl deliveryControl;
    public Deal withDeliveryControl(DeliveryControl deliveryControl) {
        this.deliveryControl = deliveryControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Deal withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Deal withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedGrossSpend")
    public Money estimatedGrossSpend;
    public Deal withEstimatedGrossSpend(Money estimatedGrossSpend) {
        this.estimatedGrossSpend = estimatedGrossSpend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flightEndTime")
    public String flightEndTime;
    public Deal withFlightEndTime(String flightEndTime) {
        this.flightEndTime = flightEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flightStartTime")
    public String flightStartTime;
    public Deal withFlightStartTime(String flightStartTime) {
        this.flightStartTime = flightStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Deal withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredDealTerms")
    public PreferredDealTerms preferredDealTerms;
    public Deal withPreferredDealTerms(PreferredDealTerms preferredDealTerms) {
        this.preferredDealTerms = preferredDealTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateAuctionTerms")
    public PrivateAuctionTerms privateAuctionTerms;
    public Deal withPrivateAuctionTerms(PrivateAuctionTerms privateAuctionTerms) {
        this.privateAuctionTerms = privateAuctionTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("programmaticGuaranteedTerms")
    public ProgrammaticGuaranteedTerms programmaticGuaranteedTerms;
    public Deal withProgrammaticGuaranteedTerms(ProgrammaticGuaranteedTerms programmaticGuaranteedTerms) {
        this.programmaticGuaranteedTerms = programmaticGuaranteedTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalRevision")
    public String proposalRevision;
    public Deal withProposalRevision(String proposalRevision) {
        this.proposalRevision = proposalRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherProfile")
    public String publisherProfile;
    public Deal withPublisherProfile(String publisherProfile) {
        this.publisherProfile = publisherProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerTimeZone")
    public TimeZone sellerTimeZone;
    public Deal withSellerTimeZone(TimeZone sellerTimeZone) {
        this.sellerTimeZone = sellerTimeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targeting")
    public MarketplaceTargeting targeting;
    public Deal withTargeting(MarketplaceTargeting targeting) {
        this.targeting = targeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Deal withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}