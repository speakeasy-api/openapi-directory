package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DealTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brandingType")
    public String brandingType;
    public DealTerms withBrandingType(String brandingType) {
        this.brandingType = brandingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crossListedExternalDealIdType")
    public String crossListedExternalDealIdType;
    public DealTerms withCrossListedExternalDealIdType(String crossListedExternalDealIdType) {
        this.crossListedExternalDealIdType = crossListedExternalDealIdType;
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
    public DealTermsGuaranteedFixedPriceTerms guaranteedFixedPriceTerms;
    public DealTerms withGuaranteedFixedPriceTerms(DealTermsGuaranteedFixedPriceTerms guaranteedFixedPriceTerms) {
        this.guaranteedFixedPriceTerms = guaranteedFixedPriceTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonGuaranteedAuctionTerms")
    public DealTermsNonGuaranteedAuctionTerms nonGuaranteedAuctionTerms;
    public DealTerms withNonGuaranteedAuctionTerms(DealTermsNonGuaranteedAuctionTerms nonGuaranteedAuctionTerms) {
        this.nonGuaranteedAuctionTerms = nonGuaranteedAuctionTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonGuaranteedFixedPriceTerms")
    public DealTermsNonGuaranteedFixedPriceTerms nonGuaranteedFixedPriceTerms;
    public DealTerms withNonGuaranteedFixedPriceTerms(DealTermsNonGuaranteedFixedPriceTerms nonGuaranteedFixedPriceTerms) {
        this.nonGuaranteedFixedPriceTerms = nonGuaranteedFixedPriceTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rubiconNonGuaranteedTerms")
    public DealTermsRubiconNonGuaranteedTerms rubiconNonGuaranteedTerms;
    public DealTerms withRubiconNonGuaranteedTerms(DealTermsRubiconNonGuaranteedTerms rubiconNonGuaranteedTerms) {
        this.rubiconNonGuaranteedTerms = rubiconNonGuaranteedTerms;
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