package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderLegacyPromotionBenefit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount")
    public Price discount;
    public OrderLegacyPromotionBenefit withDiscount(Price discount) {
        this.discount = discount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerIds")
    public String[] offerIds;
    public OrderLegacyPromotionBenefit withOfferIds(String[] offerIds) {
        this.offerIds = offerIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subType")
    public String subType;
    public OrderLegacyPromotionBenefit withSubType(String subType) {
        this.subType = subType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxImpact")
    public Price taxImpact;
    public OrderLegacyPromotionBenefit withTaxImpact(Price taxImpact) {
        this.taxImpact = taxImpact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public OrderLegacyPromotionBenefit withType(String type) {
        this.type = type;
        return this;
    }
}