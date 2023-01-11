package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DealInput
 * A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
**/
public class DealInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedGrossSpend")
    public Money estimatedGrossSpend;
    public DealInput withEstimatedGrossSpend(Money estimatedGrossSpend) {
        this.estimatedGrossSpend = estimatedGrossSpend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flightEndTime")
    public String flightEndTime;
    public DealInput withFlightEndTime(String flightEndTime) {
        this.flightEndTime = flightEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flightStartTime")
    public String flightStartTime;
    public DealInput withFlightStartTime(String flightStartTime) {
        this.flightStartTime = flightStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DealInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredDealTerms")
    public PreferredDealTerms preferredDealTerms;
    public DealInput withPreferredDealTerms(PreferredDealTerms preferredDealTerms) {
        this.preferredDealTerms = preferredDealTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateAuctionTerms")
    public PrivateAuctionTermsInput privateAuctionTerms;
    public DealInput withPrivateAuctionTerms(PrivateAuctionTermsInput privateAuctionTerms) {
        this.privateAuctionTerms = privateAuctionTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("programmaticGuaranteedTerms")
    public ProgrammaticGuaranteedTerms programmaticGuaranteedTerms;
    public DealInput withProgrammaticGuaranteedTerms(ProgrammaticGuaranteedTerms programmaticGuaranteedTerms) {
        this.programmaticGuaranteedTerms = programmaticGuaranteedTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherProfile")
    public String publisherProfile;
    public DealInput withPublisherProfile(String publisherProfile) {
        this.publisherProfile = publisherProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerTimeZone")
    public TimeZone sellerTimeZone;
    public DealInput withSellerTimeZone(TimeZone sellerTimeZone) {
        this.sellerTimeZone = sellerTimeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targeting")
    public MarketplaceTargeting targeting;
    public DealInput withTargeting(MarketplaceTargeting targeting) {
        this.targeting = targeting;
        return this;
    }
}