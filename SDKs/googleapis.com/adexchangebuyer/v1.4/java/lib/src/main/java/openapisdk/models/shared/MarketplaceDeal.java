package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MarketplaceDeal
 * A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
**/
public class MarketplaceDeal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerPrivateData")
    public PrivateData buyerPrivateData;
    public MarketplaceDeal withBuyerPrivateData(PrivateData buyerPrivateData) {
        this.buyerPrivateData = buyerPrivateData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTimeMs")
    public String creationTimeMs;
    public MarketplaceDeal withCreationTimeMs(String creationTimeMs) {
        this.creationTimeMs = creationTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativePreApprovalPolicy")
    public String creativePreApprovalPolicy;
    public MarketplaceDeal withCreativePreApprovalPolicy(String creativePreApprovalPolicy) {
        this.creativePreApprovalPolicy = creativePreApprovalPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeSafeFrameCompatibility")
    public String creativeSafeFrameCompatibility;
    public MarketplaceDeal withCreativeSafeFrameCompatibility(String creativeSafeFrameCompatibility) {
        this.creativeSafeFrameCompatibility = creativeSafeFrameCompatibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealId")
    public String dealId;
    public MarketplaceDeal withDealId(String dealId) {
        this.dealId = dealId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealServingMetadata")
    public DealServingMetadata dealServingMetadata;
    public MarketplaceDeal withDealServingMetadata(DealServingMetadata dealServingMetadata) {
        this.dealServingMetadata = dealServingMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryControl")
    public DeliveryControl deliveryControl;
    public MarketplaceDeal withDeliveryControl(DeliveryControl deliveryControl) {
        this.deliveryControl = deliveryControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalDealId")
    public String externalDealId;
    public MarketplaceDeal withExternalDealId(String externalDealId) {
        this.externalDealId = externalDealId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flightEndTimeMs")
    public String flightEndTimeMs;
    public MarketplaceDeal withFlightEndTimeMs(String flightEndTimeMs) {
        this.flightEndTimeMs = flightEndTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flightStartTimeMs")
    public String flightStartTimeMs;
    public MarketplaceDeal withFlightStartTimeMs(String flightStartTimeMs) {
        this.flightStartTimeMs = flightStartTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryDescription")
    public String inventoryDescription;
    public MarketplaceDeal withInventoryDescription(String inventoryDescription) {
        this.inventoryDescription = inventoryDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isRfpTemplate")
    public Boolean isRfpTemplate;
    public MarketplaceDeal withIsRfpTemplate(Boolean isRfpTemplate) {
        this.isRfpTemplate = isRfpTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSetupComplete")
    public Boolean isSetupComplete;
    public MarketplaceDeal withIsSetupComplete(Boolean isSetupComplete) {
        this.isSetupComplete = isSetupComplete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public MarketplaceDeal withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdateTimeMs")
    public String lastUpdateTimeMs;
    public MarketplaceDeal withLastUpdateTimeMs(String lastUpdateTimeMs) {
        this.lastUpdateTimeMs = lastUpdateTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("makegoodRequestedReason")
    public String makegoodRequestedReason;
    public MarketplaceDeal withMakegoodRequestedReason(String makegoodRequestedReason) {
        this.makegoodRequestedReason = makegoodRequestedReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MarketplaceDeal withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public MarketplaceDeal withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRevisionNumber")
    public String productRevisionNumber;
    public MarketplaceDeal withProductRevisionNumber(String productRevisionNumber) {
        this.productRevisionNumber = productRevisionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("programmaticCreativeSource")
    public String programmaticCreativeSource;
    public MarketplaceDeal withProgrammaticCreativeSource(String programmaticCreativeSource) {
        this.programmaticCreativeSource = programmaticCreativeSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalId")
    public String proposalId;
    public MarketplaceDeal withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerContacts")
    public ContactInformation[] sellerContacts;
    public MarketplaceDeal withSellerContacts(ContactInformation[] sellerContacts) {
        this.sellerContacts = sellerContacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedTargetings")
    public SharedTargeting[] sharedTargetings;
    public MarketplaceDeal withSharedTargetings(SharedTargeting[] sharedTargetings) {
        this.sharedTargetings = sharedTargetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syndicationProduct")
    public String syndicationProduct;
    public MarketplaceDeal withSyndicationProduct(String syndicationProduct) {
        this.syndicationProduct = syndicationProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public DealTerms terms;
    public MarketplaceDeal withTerms(DealTerms terms) {
        this.terms = terms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyCode")
    public String webPropertyCode;
    public MarketplaceDeal withWebPropertyCode(String webPropertyCode) {
        this.webPropertyCode = webPropertyCode;
        return this;
    }
}