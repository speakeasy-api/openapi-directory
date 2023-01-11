package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Product
 * A product is a segment of inventory that a seller wants to sell. It is associated with certain terms and targeting information which helps the buyer know more about the inventory.
**/
public class Product {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableEndTime")
    public String availableEndTime;
    public Product withAvailableEndTime(String availableEndTime) {
        this.availableEndTime = availableEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableStartTime")
    public String availableStartTime;
    public Product withAvailableStartTime(String availableStartTime) {
        this.availableStartTime = availableStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Product withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatorContacts")
    public ContactInformation[] creatorContacts;
    public Product withCreatorContacts(ContactInformation[] creatorContacts) {
        this.creatorContacts = creatorContacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Product withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasCreatorSignedOff")
    public Boolean hasCreatorSignedOff;
    public Product withHasCreatorSignedOff(Boolean hasCreatorSignedOff) {
        this.hasCreatorSignedOff = hasCreatorSignedOff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public Product withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRevision")
    public String productRevision;
    public Product withProductRevision(String productRevision) {
        this.productRevision = productRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherProfileId")
    public String publisherProfileId;
    public Product withPublisherProfileId(String publisherProfileId) {
        this.publisherProfileId = publisherProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller")
    public Seller seller;
    public Product withSeller(Seller seller) {
        this.seller = seller;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syndicationProduct")
    public ProductSyndicationProductEnum syndicationProduct;
    public Product withSyndicationProduct(ProductSyndicationProductEnum syndicationProduct) {
        this.syndicationProduct = syndicationProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingCriterion")
    public TargetingCriteria[] targetingCriterion;
    public Product withTargetingCriterion(TargetingCriteria[] targetingCriterion) {
        this.targetingCriterion = targetingCriterion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public DealTerms terms;
    public Product withTerms(DealTerms terms) {
        this.terms = terms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Product withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyCode")
    public String webPropertyCode;
    public Product withWebPropertyCode(String webPropertyCode) {
        this.webPropertyCode = webPropertyCode;
        return this;
    }
}