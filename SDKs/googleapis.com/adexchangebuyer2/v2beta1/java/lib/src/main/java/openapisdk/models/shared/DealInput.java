package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DealInput
 * A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
**/
public class DealInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableEndTime")
    public String availableEndTime;
    public DealInput withAvailableEndTime(String availableEndTime) {
        this.availableEndTime = availableEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableStartTime")
    public String availableStartTime;
    public DealInput withAvailableStartTime(String availableStartTime) {
        this.availableStartTime = availableStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerPrivateData")
    public PrivateData buyerPrivateData;
    public DealInput withBuyerPrivateData(PrivateData buyerPrivateData) {
        this.buyerPrivateData = buyerPrivateData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createProductId")
    public String createProductId;
    public DealInput withCreateProductId(String createProductId) {
        this.createProductId = createProductId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createProductRevision")
    public String createProductRevision;
    public DealInput withCreateProductRevision(String createProductRevision) {
        this.createProductRevision = createProductRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeRestrictions")
    public CreativeRestrictions creativeRestrictions;
    public DealInput withCreativeRestrictions(CreativeRestrictions creativeRestrictions) {
        this.creativeRestrictions = creativeRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealServingMetadata")
    public DealServingMetadata dealServingMetadata;
    public DealInput withDealServingMetadata(DealServingMetadata dealServingMetadata) {
        this.dealServingMetadata = dealServingMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealTerms")
    public DealTerms dealTerms;
    public DealInput withDealTerms(DealTerms dealTerms) {
        this.dealTerms = dealTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DealInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public DealInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syndicationProduct")
    public DealSyndicationProductEnum syndicationProduct;
    public DealInput withSyndicationProduct(DealSyndicationProductEnum syndicationProduct) {
        this.syndicationProduct = syndicationProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targeting")
    public MarketplaceTargeting targeting;
    public DealInput withTargeting(MarketplaceTargeting targeting) {
        this.targeting = targeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingCriterion")
    public TargetingCriteria[] targetingCriterion;
    public DealInput withTargetingCriterion(TargetingCriteria[] targetingCriterion) {
        this.targetingCriterion = targetingCriterion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyCode")
    public String webPropertyCode;
    public DealInput withWebPropertyCode(String webPropertyCode) {
        this.webPropertyCode = webPropertyCode;
        return this;
    }
}