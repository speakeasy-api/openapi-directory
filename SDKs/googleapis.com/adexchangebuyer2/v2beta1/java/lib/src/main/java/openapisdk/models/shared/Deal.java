package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Deal
 * A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
**/
public class Deal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableEndTime")
    public String availableEndTime;
    public Deal withAvailableEndTime(String availableEndTime) {
        this.availableEndTime = availableEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableStartTime")
    public String availableStartTime;
    public Deal withAvailableStartTime(String availableStartTime) {
        this.availableStartTime = availableStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerPrivateData")
    public PrivateData buyerPrivateData;
    public Deal withBuyerPrivateData(PrivateData buyerPrivateData) {
        this.buyerPrivateData = buyerPrivateData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createProductId")
    public String createProductId;
    public Deal withCreateProductId(String createProductId) {
        this.createProductId = createProductId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createProductRevision")
    public String createProductRevision;
    public Deal withCreateProductRevision(String createProductRevision) {
        this.createProductRevision = createProductRevision;
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
    @JsonProperty("creativePreApprovalPolicy")
    public DealCreativePreApprovalPolicyEnum creativePreApprovalPolicy;
    public Deal withCreativePreApprovalPolicy(DealCreativePreApprovalPolicyEnum creativePreApprovalPolicy) {
        this.creativePreApprovalPolicy = creativePreApprovalPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeRestrictions")
    public CreativeRestrictions creativeRestrictions;
    public Deal withCreativeRestrictions(CreativeRestrictions creativeRestrictions) {
        this.creativeRestrictions = creativeRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeSafeFrameCompatibility")
    public DealCreativeSafeFrameCompatibilityEnum creativeSafeFrameCompatibility;
    public Deal withCreativeSafeFrameCompatibility(DealCreativeSafeFrameCompatibilityEnum creativeSafeFrameCompatibility) {
        this.creativeSafeFrameCompatibility = creativeSafeFrameCompatibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealId")
    public String dealId;
    public Deal withDealId(String dealId) {
        this.dealId = dealId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealServingMetadata")
    public DealServingMetadata dealServingMetadata;
    public Deal withDealServingMetadata(DealServingMetadata dealServingMetadata) {
        this.dealServingMetadata = dealServingMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealTerms")
    public DealTerms dealTerms;
    public Deal withDealTerms(DealTerms dealTerms) {
        this.dealTerms = dealTerms;
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
    @JsonProperty("externalDealId")
    public String externalDealId;
    public Deal withExternalDealId(String externalDealId) {
        this.externalDealId = externalDealId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSetupComplete")
    public Boolean isSetupComplete;
    public Deal withIsSetupComplete(Boolean isSetupComplete) {
        this.isSetupComplete = isSetupComplete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("programmaticCreativeSource")
    public DealProgrammaticCreativeSourceEnum programmaticCreativeSource;
    public Deal withProgrammaticCreativeSource(DealProgrammaticCreativeSourceEnum programmaticCreativeSource) {
        this.programmaticCreativeSource = programmaticCreativeSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalId")
    public String proposalId;
    public Deal withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerContacts")
    public ContactInformation[] sellerContacts;
    public Deal withSellerContacts(ContactInformation[] sellerContacts) {
        this.sellerContacts = sellerContacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syndicationProduct")
    public DealSyndicationProductEnum syndicationProduct;
    public Deal withSyndicationProduct(DealSyndicationProductEnum syndicationProduct) {
        this.syndicationProduct = syndicationProduct;
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
    @JsonProperty("targetingCriterion")
    public TargetingCriteria[] targetingCriterion;
    public Deal withTargetingCriterion(TargetingCriteria[] targetingCriterion) {
        this.targetingCriterion = targetingCriterion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Deal withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyCode")
    public String webPropertyCode;
    public Deal withWebPropertyCode(String webPropertyCode) {
        this.webPropertyCode = webPropertyCode;
        return this;
    }
}