package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DealTerms
 * The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher.
**/
public class DealTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brandingType")
    public DealTermsBrandingTypeEnum brandingType;
    public DealTerms withBrandingType(DealTermsBrandingTypeEnum brandingType) {
        this.brandingType = brandingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DealTerms withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedGrossSpend")
    public Price estimatedGrossSpend;
    public DealTerms withEstimatedGrossSpend(Price estimatedGrossSpend) {
        this.estimatedGrossSpend = estimatedGrossSpend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedImpressionsPerDay")
    public String estimatedImpressionsPerDay;
    public DealTerms withEstimatedImpressionsPerDay(String estimatedImpressionsPerDay) {
        this.estimatedImpressionsPerDay = estimatedImpressionsPerDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guaranteedFixedPriceTerms")
    public GuaranteedFixedPriceTerms guaranteedFixedPriceTerms;
    public DealTerms withGuaranteedFixedPriceTerms(GuaranteedFixedPriceTerms guaranteedFixedPriceTerms) {
        this.guaranteedFixedPriceTerms = guaranteedFixedPriceTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonGuaranteedAuctionTerms")
    public NonGuaranteedAuctionTerms nonGuaranteedAuctionTerms;
    public DealTerms withNonGuaranteedAuctionTerms(NonGuaranteedAuctionTerms nonGuaranteedAuctionTerms) {
        this.nonGuaranteedAuctionTerms = nonGuaranteedAuctionTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonGuaranteedFixedPriceTerms")
    public NonGuaranteedFixedPriceTerms nonGuaranteedFixedPriceTerms;
    public DealTerms withNonGuaranteedFixedPriceTerms(NonGuaranteedFixedPriceTerms nonGuaranteedFixedPriceTerms) {
        this.nonGuaranteedFixedPriceTerms = nonGuaranteedFixedPriceTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerTimeZone")
    public String sellerTimeZone;
    public DealTerms withSellerTimeZone(String sellerTimeZone) {
        this.sellerTimeZone = sellerTimeZone;
        return this;
    }
}